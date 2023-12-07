// eslint-disable-next-line semi
export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly hasQuantity?: boolean
}
