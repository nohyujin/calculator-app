// Addition 클래스

const Operation = require('./base-operation');
const { roundToPrecision } = require('../../../src/utils/number-utils');

/**
 * 덧셈 연산 클래스
 */
class Addition extends Operation {
    /**
     * 두 숫자를 더함
     * @param {number} a - 첫 번째 숫자
     * @param {number} b - 두 번째 숫자
     * @returns {number} a + b
     */
    execute(a, b) {
        this.validate(a, b);
        return roundToPrecision(a + b);
    }
}

module.exports = Addition;
