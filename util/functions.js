export function calcTotalSum(cartArray) {
  return cartArray
    .reduce((accumulator, tour) => {
      return accumulator + (tour.price / 100) * tour.itemCount;
    }, 0)
    .toFixed(2);
}

export function calcTotalCount(cartArray) {
  return cartArray
    .map((tour) => tour.itemCount)
    .reduce((total, currentCount) => total + currentCount, 0);
}

function getTotalPrice(cookie, obj) {
  let singleTourPrice;
  const priceList = cookie.map((singleTour) => {
    // Get price of each item
    for (const element of obj) {
      if (singleTour.id === element.id) {
        singleTourPrice = element.price;
      }
    }
    // Total price per item
    return singleTourPrice * singleTour.quantity;
  });

  return priceList.reduce((previous, current) => previous + current, 0);
}
console.log(getTotalPrice);
