import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import Header from '../components/Header';
import Layout from '../components/Layout';
import {
  deleteCookie,
  getParsedCookie,
  setParsedCookie,
} from '../util/cookies';
import { readTours } from '../util/database';

const bodyStyle = css`
  background-color: rgb(175, 198, 204);
  height: 100vh;
`;

export default function Cart(props) {
  const [cartItems, setCartItems] = useState(props.cartArray);
  // const [newTotalPrice, setNewTotalPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  // const getTotal = () => {
  console.log(props.cookies);
  const cart = props.cookies.map((obj) => {
    const tourIsFound = props.tours.find((element) => element.id === obj.id);
    return {
      id: obj.id,
      name: tourIsFound.name,
      price: tourIsFound.price,
      added: obj.added,
    };
  });
  console.log(cart);

  // function calcTotalSum(cartTotalPrice) {
  //   const initialValue = 0;
  //   const sumWithInitialValue = cart.reduce(
  //     (previousValue, currentValue) => previousValue + currentValue,
  //     cartTotalPrice,
  //   );
  // }
  // console.log(calcTotalSum);

  function calcTotalSum(cartTotalPrice) {
    return cartTotalPrice
      .reduce((added, tour) => {
        return added + (tour.price / 100) * tour.added;
      }, 0)
      .toFixed(2);
  }
  console.log(calcTotalSum);

  const totalSum = calcTotalSum(cartItems);
  console.log(totalSum);

  // let total = 0;
  // function getTotal(tourItems) {
  //   const total = tourItems.reduce();
  //   e;
  //   return total;
  // }
  // console.log(cartTotal);
  // for (const cartItem of cart) {
  //   const subTotal = cartItem.price * cartItem.added;
  //   total = total + subTotal;
  // }
  // setAmount(total);

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <th />
              <th>Tour Name</th>
              <th>Price</th>
            </tr>
            {cart.map((obj) => (
              <tr key={obj.id}>
                <td>
                  <div>{obj.name}</div>
                  <div>{obj.price} €</div>
                  <div>{obj.added}</div>
                </td>
              </tr>
            ))}
            <tr>{calcTotalSum}</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// }
export async function getServerSideProps(context) {
  // const matchingTour = tours.find((tour) => {
  //   return tour.id === tourId;
  // });

  const cartFromCookies = context.req.cookies.addedTour || '[]';

  const parseCookies = JSON.parse(cartFromCookies);

  console.log(parseCookies);

  // const tourId = context.query.tourId;
  const tours = await readTours();

  // const tour = tours.find((tourInDatabase) => tourId === tourInDatabase.id);

  return {
    props: {
      cookies: parseCookies,

      tours: tours,
    },
  };
}
