export function total(items: {price: number; qty: number}[]) {
  // 수량이 음수로 들어오면 합계가 줄어드는 오류를 막는다
  return items.reduce((sum, item) => sum + item.price * Math.max(item.qty, 0), 0);
}
