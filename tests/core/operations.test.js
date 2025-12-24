// 기본 연산 클래스 테스트

const { Addition, Subtraction, Multiplication, Division } = require('../../src/core/operations');

describe('Addition (덧셈)', () => {
    const add = new Addition();

    test('양수 + 양수', () => {
        expect(add.execute(2, 3)).toBe(5);
        expect(add.execute(10, 20)).toBe(30);
    });

    test('음수 + 양수', () => {
        expect(add.execute(-2, 5)).toBe(3);
    });

    test('소수점 연산', () => {
        expect(add.execute(0.1, 0.2)).toBeCloseTo(0.3, 10);
    });

    test('잘못된 입력', () => {
        expect(() => add.execute(NaN, 3)).toThrow();
    });
});

describe('Subtraction (뺄셈)', () => {
    const sub = new Subtraction();

    test('양수 - 양수', () => {
        expect(sub.execute(5, 3)).toBe(2);
    });

    test('음수 - 양수', () => {
        expect(sub.execute(-5, 3)).toBe(-8);
    });

    test('소수점 연산', () => {
        expect(sub.execute(0.3, 0.1)).toBeCloseTo(0.2, 10);
    });
});

describe('Multiplication (곱셈)', () => {
    const mul = new Multiplication();

    test('양수 × 양수', () => {
        expect(mul.execute(3, 4)).toBe(12);
    });

    test('음수 × 음수', () => {
        expect(mul.execute(-3, -4)).toBe(12);
    });

    test('0 곱하기', () => {
        expect(mul.execute(5, 0)).toBe(0);
    });
});

describe('Division (나눗셈)', () => {
    const div = new Division();

    test('양수 ÷ 양수', () => {
        expect(div.execute(12, 4)).toBe(3);
    });

    test('0으로 나누기 에러', () => {
        expect(() => div.execute(5, 0)).toThrow('0으로 나눌 수 없습니다');
    });

    test('소수점 연산', () => {
        expect(div.execute(1, 3)).toBeCloseTo(0.3333333333, 10);
    });
});
