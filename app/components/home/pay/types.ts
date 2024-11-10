/* {
  "amount": 0,
  "fibName": "string",
  "fibPhoneNumber": "string",
  "image": "string",
  "zainCashName": "string",
  "zainCashPhoneNumber": "string",
  "cardNumber": "string"
}
*/
export interface DepositRequest {
  amount: number
  fibName: string
  fibPhoneNumber: string
  image: string
  zainCashName: string
  zainCashPhoneNumber: string
  cardNumber: string
}
export type DialogType = 'fib' | 'asiacell' | 'zain' | 'zaincash'
export const depositBodyInit: DepositRequest = {
  amount: 0,
  fibName: '',
  fibPhoneNumber: '',
  image: 'test',
  zainCashName: '',
  zainCashPhoneNumber: '',
  cardNumber: '',
}
