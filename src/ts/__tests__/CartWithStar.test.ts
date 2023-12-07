import CartWithStar from '../service/CartWithStar';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import Phone from '../domain/Phone';
import Buyable from '../domain/Buyable';

describe('test-cart', () => {
  const item1 = new Movie(2003, 'Avengers: Age of Ultron', 2015,
    1100, 'USA', 141);
  const item2 = new Book(1001, 'War and Piece', 'Leo Tolstoy',
    2000, 1225);
  const item4 = new Phone(3002, 'Samsung Galaxy S21 FE 5G', 'green',
    37000, 128);

  const cartWithStar = new CartWithStar();

  test('create-new-phone', () => {
    const item = new Phone(3001, 'Samsung Galaxy S23 FE', 'black', 50000, 256);
    expect(item).toEqual(
      {
        color: 'black',
        hasQuantity: true,
        id: 3001,
        memory: 256,
        name: 'Samsung Galaxy S23 FE',
        price: 50000,
      },
    );
  });

  test('new card should be empty', () => {
    expect(cartWithStar.cartItems).toEqual(new Map());
  });

  test('add-items-in-cart', () => {
    cartWithStar.add(item1);
    const expectedCartItems: Map<Buyable, number> = new Map([
      [item1, 1],
    ]);
    expect(cartWithStar.cartItems).toEqual(expectedCartItems);
    cartWithStar.add(item2);
    expectedCartItems.set(item2, 1);
    expect(cartWithStar.cartItems).toEqual(expectedCartItems);
  });

  test('add-same-item', () => {
    expect(() => cartWithStar.add(item1)).toThrow('The item is already in the cart');
  });

  test('add-with-quantity', () => {
    cartWithStar.add(item4, 2);
    expect(cartWithStar.cartItems.get(item4)).toBe(2);
  });

  test('add-same-phone-item', () => {
    cartWithStar.add(item4, 1);
    expect(cartWithStar.cartItems.get(item4)).toBe(3);
  });

  test('getTotalCost', () => {
    expect(cartWithStar.getTotalCost()).toBe(114100);
  });

  test('getTotalCostWithDiscount', () => {
    expect(cartWithStar.getTotalCostWithDiscount(10)).toBe(102690);
  });

  test('remove-item', () => {
    cartWithStar.removeItemById(2003);
    expect(cartWithStar.cartItems.has(item1)).toBeFalsy();
  });

  test('remove-phone-only-1', () => {
    cartWithStar.removeItemById(3002, 1);
    expect(cartWithStar.cartItems.has(item4)).toBeTruthy();
    expect(cartWithStar.cartItems.get(item4)).toBe(2);
  });

  test('remove-phone-5', () => {
    cartWithStar.removeItemById(3002, 5);
    expect(cartWithStar.cartItems.has(item4)).toBeFalsy();
  });

  test('remove-item-not-in cart', () => {
    expect(() => cartWithStar.removeItemById(1000)).toThrow('This item isn`t in the cart');
  });
});
