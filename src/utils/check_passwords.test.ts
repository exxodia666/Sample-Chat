import { check_passwords } from './check_passwords';

describe('Check passwords: ', () => {
    const params: string[] = [];
    beforeAll(() => {
        params.push('test', 'test')
    })
    test('Func must be defined', () => {
       expect(check_passwords(params)).toBeDefined()
    })
    test('Return false when is not equal', () => {
        expect(check_passwords(['kek', 'kok'])).toBe(false)
        expect(check_passwords(['kek', 'Kek'])).toBe(false)
        expect(check_passwords(['0ne', 'One'])).toBe(false)
        expect(check_passwords(['0ne', 'One'])).toBe(false)
        expect(check_passwords(['Оne', 'One'])).toBe(false)
     })
     test('Return true when equal', () => {
        expect(check_passwords(['kek', 'kek'])).toBe(true)
     })
})