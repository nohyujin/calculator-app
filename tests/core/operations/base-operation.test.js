// Operation 기본 클래스 테스트

describe('Operation 기본 클래스', () => {
    let Operation;

    beforeAll(() => {
        Operation = require('../../src/core/operations/base-operation');
    });

    test('execute 메서드 구현 강제', () => {
        const op = new Operation();
        expect(() => op.execute(2, 3)).toThrow('execute 메서드를 구현해야 합니다');
    });

    test('validate 메서드 제공', () => {
        const op = new Operation();
        expect(() => op.validate(2, 3)).not.toThrow();
        expect(() => op.validate(NaN, 3)).toThrow('유효한 숫자가 아닙니다');
    });
});
