// [Class of Accounts]

import { CompanyAccount } from './class/CompanyAccount'
import { OtherAccount } from './class/OtherAccount'
import { PeopleAccount } from './class/PeopleAccount'

// [PeopleAccount]

const nath: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
nath.deposit(30)
console.log(nath)

const leonard: PeopleAccount = new PeopleAccount(2,'Leonard', 11)
leonard.deposit(57)
console.log(leonard)

const ximas: PeopleAccount = new PeopleAccount(3,'Ximas', 12)
console.log(ximas)

// [CompanyAccount]

const dio: CompanyAccount = new CompanyAccount('DIO', 19)
dio.deposit(30)
dio.getLoan(350)
console.log(dio)

const imagineTech: CompanyAccount = new CompanyAccount('ImagineTech', 20)
imagineTech.deposit(30)
imagineTech.getLoan(1350)
console.log(imagineTech)


// [OtherAccount]

const kaiki: OtherAccount = new OtherAccount('Kaiki', 21)
kaiki.deposit(100)
console.log(kaiki)

const mary: OtherAccount = new OtherAccount('Mary', 22)
mary.deposit(235)
console.log(mary)

const niltin: OtherAccount = new OtherAccount('Niltin', 23)
niltin.deposit()
console.log(niltin)

const leticia: OtherAccount = new OtherAccount('Leticia', 23)
leticia.deposit(-6)
console.log(leticia)