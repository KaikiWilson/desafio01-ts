export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (): void => {
    console.log('Não é possivel alterar o nome de usuário!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number = 0): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Voce depositou!')
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance > value) {
      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
