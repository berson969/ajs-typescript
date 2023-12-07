import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

describe('test-cart', () => {
  const item1 = new Movie(2003, 'Avengers: Age of Ultron', 2015,
    1100, 'USA', 141);
  const item2 = new Book(1001, 'War and Piece', 'Leo Tolstoy',
    2000, 1225);
  const item3 = new MusicAlbum(1008, 'Meteora', 'Linkin Park',
    900);

  const items = [item1, item2, item3];
  const cart = new Cart();

  test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
  });

  test('add-items-in-cart', () => {
    cart.add(item1);
    expect(cart.items.length).toBe(1);
    expect(cart.items).toEqual([
      {
        id: 2003,
        name: 'Avengers: Age of Ultron',
        releaseYear: 2015,
        price: 1100,
        releaseCountry: 'USA',
        duration: 141,
      },
    ]);
  });

  test('add-same-item', () => {
    expect(() => cart.add(item1)).toThrow('The item is already in the cart');
  });

  test('addAll', () => {
    cart.addAll(items);
    expect(cart.items.length).toBe(3);
    expect(cart.items).toEqual([
      {
        id: 2003,
        name: 'Avengers: Age of Ultron',
        releaseYear: 2015,
        price: 1100,
        releaseCountry: 'USA',
        duration: 141,
      },
      {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225,
      },
      {
        id: 1008,
        name: 'Meteora',
        author: 'Linkin Park',
        price: 900,
      },
    ]);
  });

  test('getTotalCost', () => {
    cart.addAll(items);
    expect(cart.getTotalCost()).toBe(4000);
  });

  test('getTotalCostWithDiscount', () => {
    cart.addAll(items);
    expect(cart.getTotalCostWithDiscount(10)).toBe(3600);
  });

  test('remove-item', () => {
    cart.addAll(items);
    expect(cart.items.length).toBe(3);
    cart.removeItemById(item1.id);
    expect(cart.items.length).toBe(2);
    expect(cart.items).toEqual([
      {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225,
      },
      {
        id: 1008,
        name: 'Meteora',
        author: 'Linkin Park',
        price: 900,
      },
    ]);
  });
});
