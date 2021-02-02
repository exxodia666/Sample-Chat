export default false


//import { somethins as func } from 'somewhere';

// const initialState: initialtype = {
//     chats: [
//         {
//             chat_name: '',
//             messages: [
//                 {
//                     direction: direction.receive,
//                     text: ''
//                 },
//                 {
//                     direction: direction.send,
//                     text: ''
//                 }
//             ]
//         },
//     ]
// }
//
/**
 * message {
 *      direction: -> \ <-
 *      text: string
 * }
 * receive function
 * (chat_name: string, message: message) => 
 *      
 */
receive function


    describe('Check empty input fields: ', () => {
        test('Return array of indices or false if all fields matched', () => {
            expect(func({ user_name: '', password: '', confirmation: '' })).toStrictEqual([1, 2, 3])
        })
        test('Return array of indices or false if all fields matched', () => {
            expect(func({ user_name: 'Spike', password: '', confirmation: '' })).toStrictEqual([2, 3])
        })
        test('Return array of indices or false if all fields matched', () => {
            expect(func({ user_name: '', password: '1234', confirmation: '1234' })).toStrictEqual([1])
        })
        test('Return array of indices or false if all fields matched', () => {
            expect(func({ user_name: 'Spike', password: '1234', confirmation: '1234' })).toStrictEqual(false)
        })
        test('Return array of indices or false if all fields matched', () => {
            expect(func({ user_name: ' ', password: '1234', confirmation: ' ' })).toStrictEqual([1, 3])
        })
        test('Return array of indices or false if all fields matched', () => {
            expect(func({ user_name: ' 0 ', password: '0', confirmation: ' 0 ' })).toStrictEqual(false)
        })

    })