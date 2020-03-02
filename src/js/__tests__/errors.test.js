import ErrorRepository from '../Errors/ErrorRepository';

test('Testing errors', () => {
    const error = new ErrorRepository();
    error.errors.set('testErr', 'test err message');

    expect(error.translate('testErr')).toBe('test err message');
    expect(error.translate('test')).toBe('Unknown error');
});
