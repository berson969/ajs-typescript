import Buyable from '../domain/Buyable';

export default class CartWithStar {
  private _cartItems: Map <Buyable, number> = new Map();

  add(item: Buyable, quantity: number = 1): void {
    if (!this._cartItems.has(item)) {
      this._cartItems.set(item, quantity);
    } else if (item.hasQuantity) {
      const currentQuantity: number = this._cartItems.get(item) || 0;
      this._cartItems.set(item, currentQuantity + quantity);
    } else {
      throw new Error('The item is already in the cart');
    }
  }

  get cartItems(): Map <Buyable, number> {
    return this._cartItems;
  }

  getTotalCost(): number {
    return Array.from(this._cartItems.entries())
      .reduce((acc, [item, quantity]) => acc + item.price * quantity, 0);
  }

  getTotalCostWithDiscount(discount: number): number {
    const totalCost = this.getTotalCost();
    return totalCost - (totalCost * (discount / 100));
  }

  removeItemById(id: number, quantity: number = 1): void {
    const removeItem = Array.from(this._cartItems.keys()).find((item) => item.id === id);
    if (removeItem) {
      const currentQuantity: number = this._cartItems.get(removeItem) || 1;
      if (currentQuantity > quantity) {
        this._cartItems.set(removeItem, currentQuantity - quantity);
      } else {
        this._cartItems.delete(removeItem);
      }
    } else {
      throw new Error('This item isn`t in the cart');
    }
  }
}
