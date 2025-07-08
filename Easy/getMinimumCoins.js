function getMinimumCoins(coins, amount) {
  const total = [];

  if (amount < 0) return total;

  for (let i = coins.length - 1; i >= 0; --i) {
    while (amount >= coins[i]) {
      console.log(coins[i]);
      total.push(coins[i]);
      amount -= coins[i];
    }
  }
  return total;
}

console.log(getMinimumCoins([1, 5, 10, 25, 50], 163));
