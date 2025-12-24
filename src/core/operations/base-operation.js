// Operation 기본 클래스

const { validateNumber } = require('../../../src/utils/number-utils');

/**
 * 연산의 기본 클래스 (추상 클래스)
 */
class Operation {
    /**
     * 연산 실행 (하위 클래스에서 구현 필요)
     * @param {number} a - 첫 번째 피연산자
     * @param {number} b - 두 번째 피연산자
     * @returns {number} 연산 결과
     */
    execute(a, b) {
        throw new Error('execute 메서드를 구현해야 합니다');
    }

    /**
     * 피연산자 검증
     * @param {...number} numbers - 검증할 숫자들
     */
    validate(...numbers) {
        validateNumber(...numbers);
    }
}

module.exports = Operation;
