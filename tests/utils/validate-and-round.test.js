// validateNumber 및 roundToPrecision 함수 테스트

describe('validateNumber', () => {
    let validateNumber;

    beforeAll(() => {
        const numberUtils = require('../../src/utils/number-utils');
        validateNumber = numberUtils.validateNumber;
    });

    test('유효한 숫자 검증 통과', () => {
        expect(() => validateNumber(123)).not.toThrow();
        expect(() => validateNumber(-45.67)).not.toThrow();
        expect(() => validateNumber(0)).not.toThrow();
    });

    test('NaN 입력 시 에러 발생', () => {
        expect(() => validateNumber(NaN)).toThrow('유효한 숫자가 아닙니다');
    });

    test('Infinity 입력 시 에러 발생', () => {
        expect(() => validateNumber(Infinity)).toThrow('유효한 숫자가 아닙니다');
        expect(() => validateNumber(-Infinity)).toThrow('유효한 숫자가 아닙니다');
    });

    test('문자열 입력 시 에러 발생', () => {
        expect(() => validateNumber('123')).toThrow('유효한 숫자가 아닙니다');
    });

    test('null/undefined 입력 시 에러 발생', () => {
        expect(() => validateNumber(null)).toThrow('유효한 숫자가 아닙니다');
        expect(() => validateNumber(undefined)).toThrow('유효한 숫자가 아닙니다');
    });

    test('배열/객체 입력 시 에러 발생', () => {
        expect(() => validateNumber([1, 2, 3])).toThrow('유효한 숫자가 아닙니다');
        expect(() => validateNumber({ value: 123 })).toThrow('유효한 숫자가 아닙니다');
    });

    test('여러 숫자 동시 검증', () => {
        expect(() => validateNumber(1, 2, 3)).not.toThrow();
        expect(() => validateNumber(1, NaN, 3)).toThrow('유효한 숫자가 아닙니다');
    });
});

describe('roundToPrecision', () => {
    let roundToPrecision;

    beforeAll(() => {
        const numberUtils = require('../../src/utils/number-utils');
        roundToPrecision = numberUtils.roundToPrecision;
    });

    test('부동소수점 오류 수정', () => {
        const result = roundToPrecision(0.1 + 0.2);
        expect(result).toBe(0.3);
    });

    test('지정된 정밀도로 반올림 (기본 10자리)', () => {
        const result = roundToPrecision(1.123456789012345);
        expect(result).toBe(1.1234567890);
    });

    test('매우 작은 오차 제거', () => {
        const result = roundToPrecision(0.0000000001 + 0.0000000002);
        expect(result).toBe(0.0000000003);
    });

    test('정수는 그대로 반환', () => {
        expect(roundToPrecision(5)).toBe(5);
        expect(roundToPrecision(100)).toBe(100);
    });

    test('커스텀 정밀도 지원', () => {
        expect(roundToPrecision(1.23456, 2)).toBe(1.23);
        expect(roundToPrecision(1.23456, 3)).toBe(1.235);
        expect(roundToPrecision(1.23456, 4)).toBe(1.2346);
    });

    test('음수 처리', () => {
        expect(roundToPrecision(-0.1 - 0.2)).toBe(-0.3);
        expect(roundToPrecision(-1.23456, 2)).toBe(-1.23);
    });
});
