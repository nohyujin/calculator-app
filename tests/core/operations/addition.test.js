// Addition 클래스 테스트

describe('Addition', () => {
    let Addition;

    beforeAll(() => {
        Addition = require('../../src/core/operations/addition');
    });

    test('양수 + 양수', () => {
        const add = new Addition();
        expect(add.execute(2, 3)).toBe(5);
        expect(add.execute(10, 20)).toBe(30);
    });

    test('음수 + 양수', () => {
        const add = new Addition();
        expect(add.execute(-2, 5)).toBe(3);
        expect(add.execute(-10, 3)).toBe(-7);
    });

    test('음수 + 음수', () => {
        const add = new Addition();
        expect(add.execute(-2, -3)).toBe(-5);
    });

    test('소수점 연산', () => {
        const add = new Addition();
        expect(add.execute(0.1, 0.2)).toBeCloseTo(0.3, 10);
    });

    test('매우 큰 수 연산', () => {
        const add = new Addition();
        expect(add.execute(1e10, 1e10)).toBe(2e10);
    });

    test('0 + 숫자', () => {
        const add = new Addition();
        expect(add.execute(0, 5)).toBe(5);
        expect(add.execute(5, 0)).toBe(5);
    });

    test('잘못된 입력 시 에러 발생', () => {
        const add = new Addition();
        expect(() => add.execute(NaN, 3)).toThrow('유효한 숫자가 아닙니다');
        expect(() => add.execute(2, Infinity)).toThrow('유효한 숫자가 아닙니다');
    });
});
