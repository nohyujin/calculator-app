// 숫자 유틸리티 함수

/**
 * 숫자를 포맷팅하여 문자열로 반환
 * - 천 단위 구분자 추가
 * - 소수점 10자리로 제한
 * @param {number} num - 포맷팅할 숫자
 * @returns {string} 포맷팅된 문자열
 */
function formatNumber(num) {
    // 특수 케이스 처리
    if (!isFinite(num)) return 'Error';
    if (isNaN(num)) return 'Error';
    if (num === 0) return '0';

    // 숫자를 문자열로 변환
    let numStr = num.toString();

    // 소수점으로 분리
    const parts = numStr.split('.');

    // 정수 부분에 천 단위 구분자 추가
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // 소수점 부분이 있으면 10자리로 제한
    if (parts[1] && parts[1].length > 10) {
        parts[1] = parts[1].substring(0, 10);
    }

    return parts.join('.');
}

/**
 * 숫자가 유효한지 검증
 * @param {...number} numbers - 검증할 숫자들
 * @throws {Error} 유효하지 않은 숫자인 경우
 */
function validateNumber(...numbers) {
    numbers.forEach(num => {
        if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
            throw new Error('유효한 숫자가 아닙니다');
        }
    });
}

/**
 * 부동소수점 정밀도 처리
 * @param {number} num - 반올림할 숫자
 * @param {number} precision - 정밀도 (기본값: 10)
 * @returns {number} 반올림된 숫자
 */
function roundToPrecision(num, precision = 10) {
    const multiplier = Math.pow(10, precision);
    return Math.round(num * multiplier) / multiplier;
}

module.exports = {
    formatNumber,
    validateNumber,
    roundToPrecision
};
