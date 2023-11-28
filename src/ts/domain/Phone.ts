import Buyable from './Buyable';

export default class Phone implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly color: string,
    readonly price: number,
    readonly memory: number,
    readonly hasQuantity: boolean = true,
  ) {}
}
