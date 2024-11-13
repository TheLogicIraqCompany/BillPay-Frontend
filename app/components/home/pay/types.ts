export interface DepositRequest {
  amount: number
  fullName: string
  phoneNumber: string
  cardNumber: string
  paymentTypeId: string
  image: string
}
export const depositBodyInit: DepositRequest = {
  amount: 0,
  fullName: '',
  phoneNumber: '',
  cardNumber: '',
  paymentTypeId: '',
  image: '',
}
export interface PaymentType {
  name: string
  isActive: boolean
  numbers: string[]
  description: string
  image: string
  id: string
  deleted: boolean
  creationDate: string
}
