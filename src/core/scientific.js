// 과학 함수 클래스들

import { validateNumber } from '../utils/number-utils.js';

/**
 * Sin 함수 (도 단위)
 */
class SinFunction {
    execute(degrees) {
        validateNumber(degrees);
        const radians = degrees * Math.PI / 180;
        return Math.sin(radians);
    }
}

/**
 * Cos 함수 (도 단위)
 */
class CosFunction {
    execute(degrees) {
        validateNumber(degrees);
        const radians = degrees * Math.PI / 180;
        return Math.cos(radians);
    }
}

/**
 * Tan 함수 (도 단위)
 */
class TanFunction {
    execute(degrees) {
        validateNumber(degrees);
        const radians = degrees * Math.PI / 180;
        return Math.tan(radians);
    }
}

/**
 * 자연로그 함수
 */
class LnFunction {
    execute(x) {
        validateNumber(x);
        if (x <= 0) {
            throw new Error('ln은 양수만 입력 가능합니다');
        }
        return Math.log(x);
    }
}

/**
 * 제곱근 함수
 */
class SqrtFunction {
    execute(x) {
        validateNumber(x);
        if (x < 0) {
            throw new Error('음수의 제곱근을 계산할 수 없습니다');
        }
        return Math.sqrt(x);
    }
}


export {
    SinFunction,
    CosFunction,
    TanFunction,
    LnFunction,
    SqrtFunction
};

