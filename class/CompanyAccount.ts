import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number = 0): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log(`Voce pegou um empréstimo no valor de ${value}`)
    }
  }
}
