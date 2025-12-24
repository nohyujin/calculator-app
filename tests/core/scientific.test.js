// 과학 함수 테스트

const { SinFunction, CosFunction, TanFunction, LnFunction, SqrtFunction } = require('../../src/core/scientific');

describe('SinFunction', () => {
    const sin = new SinFunction();

    test('sin(30) = 0.5', () => {
        expect(sin.execute(30)).toBeCloseTo(0.5, 5);
    });

    test('sin(0) = 0', () => {
        expect(sin.execute(0)).toBeCloseTo(0, 5);
    });

    test('sin(90) = 1', () => {
        expect(sin.execute(90)).toBeCloseTo(1, 5);
    });
});

describe('CosFunction', () => {
    const cos = new CosFunction();

    test('cos(0) = 1', () => {
        expect(cos.execute(0)).toBeCloseTo(1, 5);
    });

    test('cos(60) = 0.5', () => {
        expect(cos.execute(60)).toBeCloseTo(0.5, 5);
    });
});

describe('TanFunction', () => {
    const tan = new TanFunction();

    test('tan(45) ≈ 1', () => {
        expect(tan.execute(45)).toBeCloseTo(1, 5);
    });
});

describe('LnFunction', () => {
    const ln = new LnFunction();

    test('ln(e) = 1', () => {
        expect(ln.execute(Math.E)).toBeCloseTo(1, 5);
    });

    test('ln(1) = 0', () => {
        expect(ln.execute(1)).toBe(0);
    });

    test('음수 입력 시 에러', () => {
        expect(() => ln.execute(-1)).toThrow('ln은 양수만 입력 가능합니다');
    });

    test('0 입력 시 에러', () => {
        expect(() => ln.execute(0)).toThrow('ln은 양수만 입력 가능합니다');
    });
});

describe('SqrtFunction', () => {
    const sqrt = new SqrtFunction();

    test('sqrt(16) = 4', () => {
        expect(sqrt.execute(16)).toBe(4);
    });

    test('sqrt(0) = 0', () => {
        expect(sqrt.execute(0)).toBe(0);
    });

    test('음수 입력 시 에러', () => {
        expect(() => sqrt.execute(-4)).toThrow('음수의 제곱근을 계산할 수 없습니다');
    });
});
