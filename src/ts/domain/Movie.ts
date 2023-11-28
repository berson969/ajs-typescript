import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
        readonly id: number,
        readonly name: string,
        readonly releaseYear: number,
        readonly price: number,
        readonly releaseCountry: string,
        readonly duration: number,
  ) { }
}
