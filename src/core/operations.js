// 기본 연산 클래스들

const path = require('path');
import { validateNumber, roundToPrecision } from '../utils/number-utils.js';

/**
 * 연산의 기본 클래스
 */
class Operation {
    execute(a, b) {
        throw new Error('execute 메서드를 구현해야 합니다');
    }

    validate(...numbers) {
        validateNumber(...numbers);
    }
}

/**
 * 덧셈
 */
class Addition extends Operation {
    execute(a, b) {
        this.validate(a, b);
        return roundToPrecision(a + b);
    }
}

/**
 * 뺄셈
 */
class Subtraction extends Operation {
    execute(a, b) {
        this.validate(a, b);
        return roundToPrecision(a - b);
    }
}

/**
 * 곱셈
 */
class Multiplication extends Operation {
    execute(a, b) {
        this.validate(a, b);
        return roundToPrecision(a * b);
    }
}

/**
 * 나눗셈
 */
class Division extends Operation {
    execute(a, b) {
        this.validate(a, b);
        if (b === 0) {
            throw new Error('0으로 나눌 수 없습니다');
        }
        return roundToPrecision(a / b);
    }
}

module.exports = {
    Operation,
    Addition,
    Subtraction,
    Multiplication,
    Division
};
