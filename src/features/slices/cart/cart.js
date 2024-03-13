export function calcCartTotalPrice(items) {
  return items.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

export function setCartToSessionStore(key, items) {
  sessionStorage.setItem(key, JSON.stringify(items));
}

export function getCartFromSessionStorage(key) {
  return JSON.parse(sessionStorage.getItem(key)) || [];
}