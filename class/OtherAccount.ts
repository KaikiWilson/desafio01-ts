import { DioAccount } from "./DioAccount"

export class OtherAccount extends DioAccount {
    statusBonus: boolean = true

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    depositBonus = (value: number): void => {
        if(this.validateStatus()){
            this.balance += value
            if (this.validateStatusBonus()) {
                this.balance += 10
            }
            console.log('Voce depositou')
        }
    }

    public validateStatusBonus = (): boolean => {
        if (this.statusBonus) {
          return this.statusBonus
        }
    
        throw new Error('Conta não se aplica ao bonus.')
      }
}

//arquivo criado por mim kaiki
//salvando projeto