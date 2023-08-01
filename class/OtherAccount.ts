import { DioAccount } from "./DioAccount"

export class OtherAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number = 0): void => {
        if(this.validateStatus()){
          this.balance += value

          if(OtherAccount && (value == 0 || value == null)) {
                this.balance += 10
                console.log ('Você depositou nada na conta, porém por ser cadastrado em OtherAccount você recebeu um bonus!')
            } else if (OtherAccount && value >= 1) {
                this.balance += 10
                console.log ('Você depositou com sucesso e recebeu um bonus pelo depósito realizado!')
            } else {
                this.balance = this.balance
                throw new Error('Você inseriu um dado inválido.')
            }
        }
      }
}