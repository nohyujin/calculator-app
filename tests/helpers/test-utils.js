// 테스트 헬퍼 함수

/**
 * 두 숫자가 거의 같은지 확인 (부동소수점 오차 허용)
 */
export function expectCloseTo(actual, expected, precision = 10) {
    const diff = Math.abs(actual - expected);
    const tolerance = Math.pow(10, -precision);
    if (diff > tolerance) {
        throw new Error(`Expected ${actual} to be close to ${expected} (precision: ${precision})`);
    }
}

/**
 * 배열이 거의 같은지 확인
 */
export function expectArrayCloseTo(actual, expected, precision = 10) {
    if (actual.length !== expected.length) {
        throw new Error(`Array lengths differ: ${actual.length} vs ${expected.length}`);
    }
    actual.forEach((val, i) => expectCloseTo(val, expected[i], precision));
}
