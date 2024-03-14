export function calcCartTotalPrice(items) {
  return items.reduce((total, item) => {
    return total + item.price === 'FREE' ? 0 : item.price;
  }, 0);
}

export function setCartToSessionStore(key, items) {
  sessionStorage.setItem(key, JSON.stringify(items));
}

export function getCartFromSessionStore(key) {
  return JSON.parse(sessionStorage.getItem(key)) || [];
}