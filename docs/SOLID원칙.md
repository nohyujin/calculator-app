# SOLID 원칙

## 개요
이 프로젝트는 **SOLID 원칙**을 따라 구현합니다.
객체지향 설계의 5가지 핵심 원칙을 준수하여 유지보수 가능하고 확장 가능한 코드를 작성합니다.

## SOLID 원칙 5가지

### 1. SRP (Single Responsibility Principle) - 단일 책임 원칙

**정의**: 하나의 클래스는 하나의 책임만 가져야 한다.

#### ✅ 좋은 예
```javascript
// 계산만 담당
class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
}

// 표시만 담당
class Display {
  show(value) {
    this.element.textContent = value;
  }
}

// 히스토리 관리만 담당
class HistoryManager {
  add(item) {
    this.history.push(item);
  }
  
  getAll() {
    return this.history;
  }
}
```

#### ❌ 나쁜 예
```javascript
// 여러 책임을 가진 클래스
class Calculator {
  add(a, b) {
    const result = a + b;
    // 계산 + 표시 + 저장 (3가지 책임)
    document.getElementById('display').textContent = result;
    localStorage.setItem('lastResult', result);
    return result;
  }
}
```

---

### 2. OCP (Open-Closed Principle) - 개방-폐쇄 원칙

**정의**: 확장에는 열려있고, 수정에는 닫혀있어야 한다.

#### ✅ 좋은 예
```javascript
// 기본 연산 인터페이스
class Operation {
  execute(a, b) {
    throw new Error('execute 메서드를 구현해야 합니다');
  }
}

// 새로운 연산 추가 시 기존 코드 수정 없이 확장
class Addition extends Operation {
  execute(a, b) {
    return a + b;
  }
}

class Multiplication extends Operation {
  execute(a, b) {
    return a * b;
  }
}

// 새로운 연산 추가 (기존 코드 수정 없음)
class Power extends Operation {
  execute(a, b) {
    return Math.pow(a, b);
  }
}

class Calculator {
  constructor() {
    this.operations = new Map();
  }
  
  registerOperation(symbol, operation) {
    this.operations.set(symbol, operation);
  }
  
  calculate(a, symbol, b) {
    const operation = this.operations.get(symbol);
    return operation.execute(a, b);
  }
}
```

#### ❌ 나쁜 예
```javascript
// 새로운 연산 추가 시 기존 코드 수정 필요
class Calculator {
  calculate(a, operator, b) {
    if (operator === '+') {
      return a + b;
    } else if (operator === '-') {
      return a - b;
    } else if (operator === '*') {
      return a * b;
    }
    // 새 연산 추가 시 이 메서드를 계속 수정해야 함
  }
}
```

---

### 3. LSP (Liskov Substitution Principle) - 리스코프 치환 원칙

**정의**: 자식 클래스는 부모 클래스를 대체할 수 있어야 한다.

#### ✅ 좋은 예
```javascript
class ScientificFunction {
  calculate(value) {
    throw new Error('calculate 메서드를 구현해야 합니다');
  }
  
  validate(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('유효한 숫자가 아닙니다');
    }
  }
}

class SinFunction extends ScientificFunction {
  calculate(value) {
    this.validate(value);
    return Math.sin(value * Math.PI / 180);
  }
}

class LnFunction extends ScientificFunction {
  calculate(value) {
    this.validate(value);
    if (value <= 0) {
      throw new Error('ln은 양수만 입력 가능합니다');
    }
    return Math.log(value);
  }
}

// 어떤 함수든 동일하게 사용 가능
function executeFunction(func, value) {
  return func.calculate(value);  // LSP 준수
}
```

#### ❌ 나쁜 예
```javascript
class ScientificFunction {
  calculate(value) {
    return value;
  }
}

class SinFunction extends ScientificFunction {
  // 부모와 다른 시그니처 (LSP 위반)
  calculate(value, angleUnit) {
    const rad = angleUnit === 'deg' ? value * Math.PI / 180 : value;
    return Math.sin(rad);
  }
}
```

---

### 4. ISP (Interface Segregation Principle) - 인터페이스 분리 원칙

**정의**: 클라이언트는 사용하지 않는 인터페이스에 의존하면 안 된다.

#### ✅ 좋은 예
```javascript
// 작고 구체적인 인터페이스
class Calculable {
  calculate() {}
}

class Formattable {
  format() {}
}

class Storable {
  save() {}
  load() {}
}

// 필요한 인터페이스만 구현
class BasicCalculator extends Calculable {
  calculate(expression) {
    // 계산만 수행
  }
}

class FormattedCalculator extends Calculable {
  calculate(expression) {
    // 계산 수행
  }
}

// Mixin 패턴으로 필요한 기능만 조합
Object.assign(FormattedCalculator.prototype, Formattable.prototype);
```

#### ❌ 나쁜 예
```javascript
// 너무 큰 인터페이스
class Calculator {
  calculate() {}
  format() {}
  save() {}
  load() {}
  export() {}
  import() {}
  print() {}
  // 모든 계산기가 이 모든 기능을 필요로 하지 않음
}

// 사용하지 않는 메서드도 구현해야 함
class SimpleCalculator extends Calculator {
  calculate() { /* 구현 */ }
  format() { /* 사용 안함 */ }
  save() { /* 사용 안함 */ }
  load() { /* 사용 안함 */ }
  export() { /* 사용 안함 */ }
  import() { /* 사용 안함 */ }
  print() { /* 사용 안함 */ }
}
```

---

### 5. DIP (Dependency Inversion Principle) - 의존성 역전 원칙

**정의**: 구체적인 것이 아닌 추상적인 것에 의존해야 한다.

#### ✅ 좋은 예
```javascript
// 추상화된 인터페이스
class Storage {
  save(key, value) {
    throw new Error('save 메서드를 구현해야 합니다');
  }
  
  load(key) {
    throw new Error('load 메서드를 구현해야 합니다');
  }
}

// 구체적인 구현
class LocalStorage extends Storage {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  load(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

class SessionStorage extends Storage {
  save(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  
  load(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }
}

// 추상화에 의존 (DIP 준수)
class HistoryManager {
  constructor(storage) {
    this.storage = storage;  // Storage 인터페이스에 의존
  }
  
  saveHistory(history) {
    this.storage.save('history', history);
  }
  
  loadHistory() {
    return this.storage.load('history');
  }
}

// 사용
const historyManager = new HistoryManager(new LocalStorage());
// 또는
const historyManager = new HistoryManager(new SessionStorage());
```

#### ❌ 나쁜 예
```javascript
// 구체적인 구현에 직접 의존
class HistoryManager {
  saveHistory(history) {
    // LocalStorage에 직접 의존 (DIP 위반)
    localStorage.setItem('history', JSON.stringify(history));
  }
  
  loadHistory() {
    return JSON.parse(localStorage.getItem('history'));
  }
  // SessionStorage로 변경하려면 코드 수정 필요
}
```

---

## 프로젝트 적용 가이드

### 모듈 구조 예시

```javascript
// src/core/calculator.js - SRP 준수
export class Calculator {
  constructor(operationRegistry) {
    this.operationRegistry = operationRegistry;  // DIP 준수
  }
  
  calculate(expression) {
    // 계산 로직만 담당
  }
}

// src/core/operations/ - OCP 준수
export class OperationRegistry {
  constructor() {
    this.operations = new Map();
  }
  
  register(symbol, operation) {
    this.operations.set(symbol, operation);
  }
  
  get(symbol) {
    return this.operations.get(symbol);
  }
}

// src/storage/storage-interface.js - DIP 준수
export class StorageInterface {
  save(key, value) {
    throw new Error('구현 필요');
  }
  
  load(key) {
    throw new Error('구현 필요');
  }
}

// src/storage/local-storage.js
export class LocalStorageAdapter extends StorageInterface {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  load(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

// src/history/history-manager.js - SRP, DIP 준수
export class HistoryManager {
  constructor(storage) {
    this.storage = storage;  // 추상화에 의존
    this.maxItems = 50;
  }
  
  add(item) {
    // 히스토리 추가 로직만 담당
  }
  
  getAll() {
    return this.storage.load('history') || [];
  }
}
```

---

## SOLID 체크리스트

새로운 클래스/모듈 작성 시:

### SRP 체크
- [ ] 이 클래스는 단 하나의 변경 이유만 가지는가?
- [ ] 클래스 이름이 하나의 책임을 명확히 표현하는가?
- [ ] 메서드들이 모두 같은 목적을 위해 존재하는가?

### OCP 체크
- [ ] 새로운 기능 추가 시 기존 코드 수정이 필요한가?
- [ ] 확장 포인트가 명확히 정의되어 있는가?
- [ ] 전략 패턴, 팩토리 패턴 등을 활용했는가?

### LSP 체크
- [ ] 자식 클래스가 부모 클래스의 계약을 위반하지 않는가?
- [ ] 부모 클래스 타입으로 자식 클래스를 사용해도 문제없는가?
- [ ] 메서드 시그니처가 일관성 있는가?

### ISP 체크
- [ ] 인터페이스가 너무 크지 않은가?
- [ ] 클라이언트가 사용하지 않는 메서드를 구현하도록 강제하지 않는가?
- [ ] 역할별로 인터페이스가 분리되어 있는가?

### DIP 체크
- [ ] 구체적인 구현이 아닌 추상화에 의존하는가?
- [ ] 의존성 주입을 사용하는가?
- [ ] 테스트 시 Mock 객체로 대체 가능한가?

---

## 리팩토링 가이드

### SOLID 위반 징후

1. **SRP 위반**
   - 클래스가 너무 크다 (100줄 이상)
   - 메서드 이름에 "and"가 들어간다
   - 여러 이유로 클래스를 수정하게 된다

2. **OCP 위반**
   - if-else, switch 문이 많다
   - 새 기능 추가 시 기존 코드를 자주 수정한다
   - 조건문이 계속 늘어난다

3. **LSP 위반**
   - 타입 체크 코드가 있다 (instanceof)
   - 자식 클래스에서 부모 메서드를 빈 구현으로 남긴다
   - 예외적인 처리가 필요하다

4. **ISP 위반**
   - 인터페이스 구현 시 빈 메서드가 많다
   - "사용 안함" 주석이 있다
   - 클라이언트마다 다른 메서드만 사용한다

5. **DIP 위반**
   - new 키워드가 많다
   - 구체적인 클래스 이름이 코드에 하드코딩되어 있다
   - 테스트하기 어렵다

---

## 참고 자료

- [Clean Code - Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [SOLID Principles - Uncle Bob](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html)
- [JavaScript Design Patterns](https://www.patterns.dev/)
