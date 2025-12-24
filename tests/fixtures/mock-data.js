// Mock 데이터

export const mockCalculations = [
    { expression: '2 + 3', result: 5 },
    { expression: '10 - 5', result: 5 },
    { expression: '3 × 4', result: 12 },
    { expression: '15 ÷ 3', result: 5 },
    { expression: '0.1 + 0.2', result: 0.3 }
];

export const mockHistory = [
    {
        id: '1',
        expression: 'sin(30)',
        result: 0.5,
        timestamp: Date.now() - 10000,
        formattedExpression: 'sin(30)',
        formattedResult: '0.5'
    },
    {
        id: '2',
        expression: '25 × 4',
        result: 100,
        timestamp: Date.now() - 5000,
        formattedExpression: '25 × 4',
        formattedResult: '100'
    }
];
