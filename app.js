// 계산기 앱 메인 로직

import { Addition, Subtraction, Multiplication, Division } from './src/core/operations.js';
import { SinFunction, CosFunction, TanFunction, LnFunction, SqrtFunction } from './src/core/scientific.js';
import { formatNumber } from './src/utils/number-utils.js';

// 계산기 상태
let currentValue = '0';
let previousValue = null;
let operator = null;
let shouldResetDisplay = false;

// DOM 요소
const expressionDisplay = document.getElementById('expression-display');
const resultDisplay = document.getElementById('result-display');
const historyContainer = document.getElementById('history-container');

// 연산 인스턴스
const operations = {
    '+': new Addition(),
    '−': new Subtraction(),
    '×': new Multiplication(),
    '÷': new Division()
};

// 과학 함수 인스턴스
const scientificFunctions = {
    'sin': new SinFunction(),
    'cos': new CosFunction(),
    'tan': new TanFunction(),
    'ln': new LnFunction(),
    'sqrt': new SqrtFunction()
};

// 디스플레이 업데이트
function updateDisplay() {
    resultDisplay.textContent = formatNumber(parseFloat(currentValue));

    if (previousValue !== null && operator) {
        expressionDisplay.textContent = `${formatNumber(previousValue)} ${operator}`;
    } else {
        expressionDisplay.textContent = '';
    }
}

// 숫자 입력
function handleNumber(num) {
    if (shouldResetDisplay) {
        currentValue = num;
        shouldResetDisplay = false;
    } else {
        if (currentValue === '0' && num !== '.') {
            currentValue = num;
        } else {
            currentValue += num;
        }
    }
    updateDisplay();
}

// 연산자 입력
function handleOperator(op) {
    if (previousValue !== null && operator && !shouldResetDisplay) {
        calculate();
    }

    previousValue = parseFloat(currentValue);
    operator = op;
    shouldResetDisplay = true;
    updateDisplay();
}

// 계산 실행
function calculate() {
    if (previousValue === null || operator === null) return;

    try {
        const current = parseFloat(currentValue);
        const result = operations[operator].execute(previousValue, current);

        // 히스토리에 추가
        addToHistory(`${formatNumber(previousValue)} ${operator} ${formatNumber(current)}`, result);

        currentValue = result.toString();
        previousValue = null;
        operator = null;
        shouldResetDisplay = true;
        updateDisplay();
    } catch (error) {
        resultDisplay.textContent = 'Error';
        expressionDisplay.textContent = error.message;
    }
}

// 과학 함수 실행
function handleScientificFunction(func) {
    try {
        const value = parseFloat(currentValue);
        let result;

        if (func === 'pi') {
            result = Math.PI;
        } else {
            result = scientificFunctions[func].execute(value);
        }

        // 히스토리에 추가
        addToHistory(`${func}(${formatNumber(value)})`, result);

        currentValue = result.toString();
        shouldResetDisplay = true;
        updateDisplay();
    } catch (error) {
        resultDisplay.textContent = 'Error';
        expressionDisplay.textContent = error.message;
    }
}

// 히스토리에 추가
function addToHistory(expression, result) {
    const historyItem = document.createElement('div');
    historyItem.className = 'group flex flex-col items-end gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer';
    historyItem.innerHTML = `
    <p class="text-slate-500 dark:text-slate-400 text-lg font-normal leading-normal">${expression}</p>
    <p class="text-slate-900 dark:text-white text-2xl font-bold leading-normal tracking-tight">= ${formatNumber(result)}</p>
  `;

    historyItem.addEventListener('click', () => {
        currentValue = result.toString();
        shouldResetDisplay = true;
        updateDisplay();
    });

    historyContainer.appendChild(historyItem);
    historyContainer.scrollTop = historyContainer.scrollHeight;
}

// 초기화
function clear() {
    currentValue = '0';
    previousValue = null;
    operator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

// 백스페이스
function backspace() {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
}

// 부호 전환
function negate() {
    currentValue = (parseFloat(currentValue) * -1).toString();
    updateDisplay();
}

// 퍼센트
function percent() {
    currentValue = (parseFloat(currentValue) / 100).toString();
    updateDisplay();
}

// 이벤트 리스너 설정
document.querySelectorAll('[data-number]').forEach(btn => {
    btn.addEventListener('click', () => handleNumber(btn.dataset.number));
});

document.querySelectorAll('[data-operator]').forEach(btn => {
    btn.addEventListener('click', () => handleOperator(btn.dataset.operator));
});

document.querySelectorAll('[data-function]').forEach(btn => {
    btn.addEventListener('click', () => handleScientificFunction(btn.dataset.function));
});

document.querySelector('[data-action="clear"]').addEventListener('click', clear);
document.querySelector('[data-action="backspace"]').addEventListener('click', backspace);
document.querySelector('[data-action="negate"]').addEventListener('click', negate);
document.querySelector('[data-action="percent"]').addEventListener('click', percent);
document.querySelector('[data-action="equals"]').addEventListener('click', calculate);

document.getElementById('clear-history-btn').addEventListener('click', () => {
    historyContainer.innerHTML = '';
});

document.getElementById('settings-btn').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

// 초기 디스플레이
updateDisplay();
