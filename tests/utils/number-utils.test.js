// formatNumber 함수 테스트

describe('formatNumber', () => {
    let formatNumber;

    beforeAll(() => {
        // 모듈을 동적으로 import
        const numberUtils = require('../../src/utils/number-utils');
        formatNumber = numberUtils.formatNumber;
    });

    describe('정수 포맷팅', () => {
        test('정수에 천 단위 구분자 추가', () => {
            expect(formatNumber(1234)).toBe('1,234');
            expect(formatNumber(1000000)).toBe('1,000,000');
            expect(formatNumber(123)).toBe('123');
        });

        test('0 처리', () => {
            expect(formatNumber(0)).toBe('0');
        });

        test('음수 포맷팅', () => {
            expect(formatNumber(-1234)).toBe('-1,234');
            expect(formatNumber(-1000000)).toBe('-1,000,000');
        });
    });

    describe('소수점 포맷팅', () => {
        test('소수점 있는 숫자 포맷팅', () => {
            expect(formatNumber(1234.56)).toBe('1,234.56');
            expect(formatNumber(0.123)).toBe('0.123');
        });

        test('매우 작은 수 포맷팅', () => {
            expect(formatNumber(0.0001)).toBe('0.0001');
        });

        test('소수점 자리수 제한 (10자리)', () => {
            const longDecimal = 1.123456789012345;
            const result = formatNumber(longDecimal);
            const decimalPart = result.split('.')[1];
            expect(decimalPart.length).toBeLessThanOrEqual(10);
        });
    });

    describe('매우 큰 수 처리', () => {
        test('매우 큰 수 포맷팅', () => {
            expect(formatNumber(1000000)).toBe('1,000,000');
            expect(formatNumber(123456789)).toBe('123,456,789');
        });
    });

    describe('특수 케이스', () => {
        test('Infinity는 Error 반환', () => {
            expect(formatNumber(Infinity)).toBe('Error');
            expect(formatNumber(-Infinity)).toBe('Error');
        });

        test('NaN은 Error 반환', () => {
            expect(formatNumber(NaN)).toBe('Error');
        });
    });
});
