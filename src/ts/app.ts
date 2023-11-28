import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Phone from './domain/Phone';

const cart = new Cart();
// eslint-disable-next-line no-console
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Book(1002, 'Eugene Onegin', 'Pushkin A. S.', 1470, 412));
cart.add(new Book(1003, 'Lolita', 'Nabokov V.', 810, 544));
cart.add(new Book(1004, 'Heart Of A Dog', 'Bulgakov M.', 750, 128));
cart.add(new Book(1005, 'Monday Starts on Saturday', 'Strugatsky A., Strugatsky B.', 860, 256));
cart.add(new Movie(2001, 'The Avengers', 2012, 900, 'USA', 137));
cart.add(new Movie(2002, 'Avengers: Endgame', 2019, 1100, 'USA', 181));
cart.add(new Movie(2003, 'Avengers: Age of Ultron', 2015, 1100, 'USA', 141));
cart.add(new Movie(2004, 'Avengers: Infinity War', 2018, 980, 'USA', 149));
cart.add(new Phone(3001, 'Samsung Galaxy S23 FE', 'black', 50000, 256));
cart.add(new Phone(3002, 'Samsung Galaxy S21 FE 5G', 'green', 37000, 128));

// eslint-disable-next-line no-console
console.log(cart.items);
