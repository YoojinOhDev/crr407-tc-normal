export function total(items: {price: number; qty: number}[]) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}
