import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
// import Header from '../components/Header';
import Layout from '../components/Layout';
import {
  deleteCookie,
  getParsedCookie,
  getTours,
  setParsedCookie,
} from '../util/cookies';

const bodyStyle = css`
  background-color: rgb(175, 198, 204);
  height: 100vh;
`;

export default function Cart(props) {
  const [cartItems, setCartItems] = useState(props.cart);
  const [newTotalPrice, setNewTotalPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const getTotal = () => {
      const totalTours = props.cart.map((tour) =>{
        return tour.price;
      });

      const sum = amountOfTours.reduce((partialSum, a) => partialSum + a, 0);

      setAmount(sum);

      const priceOfTours = props.cart.map((tours) => {
        return props.tours[tours.id -1].price;
      });

      const sumPrice = priceOfTours.reduce(

        (partialSum, a) => partialSum + a, 0
      );
      console.log(sumPrice);
      setNewTotalPrice(sumPrice);
    };
    getTotal();
  }, [props]);

  function handleDeleteCookie(id) {
    const newCookie = TotalToursInCart.filter((cookieObject) => {
      return cookieObject.id !== id;
    });

    setToursInCart(newCookie);
    Cookies.set('cart', JSON.stringify(newCookie));

    const amountTours = newCookie.map((tours) => {
      return tours.amount
    })

    const sum = amountTours.reduce((partialSum, a) => partialSum = a, 0);
    setAmount(sum);

    const priceOfTour = newCookie.map((tours) => {
      return props.tours[tours.id -1].price;
    })

    const sumPrice = priceOfTours.reduce((partialSum, a) => partialSum + a, 0);
    setNewTotalPrice(sumPrice);
  }

  // const cookiesInCart = 'cart';

  // // get the value of the cookie
  // const cookieValue = getParsedCookie(cookiesInCart) || [];
  // const newCookie = cookieValue.map(
  //   (cookieObject) =>
  //     function getTourItem() {
  //       for (const singleTour of props.tours) {
  //         if (singleTour.id === cookieObject.id) {
  //           return {
  //             ...cookieObject,
  //             name: singleTour.name,
  //           };
  //         } else {
  //           return getTourItem();
  //         }
  //       }
  //     },
  // );
  // setParsedCookie(cookiesInCart, newCookie);

  // function getTotalTourPrice(cookie, obj) {
  //   let singleTourPrice;
  //   const listOfTourPrices = cookie.map((singleTour) => {
  //     for (const element of obj) {
  //       if (singleTour.id === element.id) {
  //         singleTourPrice = element.price;
  //       }
  //     }
  //     return (singleTourPrice = singleTour.quantity);
  //   });
  //   return listOfTourPrices.reduce(
  //     (previous, current) => previous + current,
  //     0,
  //   );
  // }

  // function gettingPrice(id) {
  //   for (const tour of props.tours) {
  //     if (id === tour.id) {
  //       return tour.price;
  //     }
  //   }

  //   function removeTourFromCart(id) {
  //     const cartValue = getParsedCookie(cookiesInCart) || [];

  //     const updatedCookie = cartValue.filter(
  //       (cookieObject) => cookieObject.id !== id,
  //     );

  //     setParsedCookie(cookiesInCart, updatedCookie);
  //     setCartItems(updatedCookie);
  //   }

  //   function addingATour(id) {
  //     // get the value of the cookie
  //     const cookieValue = getParsedCookie('addedTour') || [];
  //     console.log(cookieValue);
  //     const existIdOnArray = cookieValue.some((cookieObject) => {
  //       console.log(cookieObject.id);
  //       return cookieObject.id === id;
  //     });
  //     console.log(existIdOnArray);
  //     // update the cookie
  //     // const newCookie = cookieValue.push({ id: props.tour.id, added: 1 });
  //     let newCookie;
  //     if (existIdOnArray) {
  //       const existingTour = cookieValue.find((foodTour) => {
  //         // console.log(foodTour.id === id);
  //         return foodTour.id === id;
  //       });
  //       existingTour.added += 1;
  //       // console.log(existingTour);
  //       newCookie = cookieValue;
  //     } else {
  //       newCookie = [...cookieValue, { id: id, added: 1 }];
  //     }

  //     // setAddedTourArray(newCookie);
  //     setParsedCookie('addedTour', newCookie);
  //   }

    // function quantityHandler(id, increment) {
    //   const updatedCookie = updateItemsInCart(id, increment);
    //   setCartItems(updatedCookie);
    // }

    // update the cookie
    // const existIdOnArray = cookieValue.some((cookieObject) => {
    //   return cookieObject.id === id;
    //   //   if (cookieObject.id === props.tour.id) {
    //   //     return { ...cookieObject, added: cookieObject.added + 1 };
    //   //   } else {
    //   //     return cookieObject;
    //   //   }
    // });

    // let newCookie;

    // if (existIdOnArray) {
    //   const existingTour = cookieValue.find((foodTour) => {
    //     console.log(foodTour.id === id);
    //     return foodTour.id === id;
    //   });
    //   existingTour.added += 1;
    //   console.log(existingTour);
    //   newCookie = cookieValue;
    // } else {
    //   newCookie = [...cookieValue, { id: id, added: 1 }];
    // }

    // setAddedTourArray(newCookie);
    // setParsedCookie('addedTour', newCookie);
    //   newCookie = cookieValue.filter((cookieObject) => {
    //     return cookieObject.id !== id;
    //   });
    // } else {
    //   newCookie = [...cookieValue, { id: id, added: 0 }];
    // }

    // // 3. set the new value of the cookie
    // setAddedTourArray(newCookie);
    // setParsedCookie('addedTour', newCookie);
  }

  return (
    <div css={bodyStyle}>
      {/* <Layout>
        <Head>
          <title>Cart</title>
          <meta name="Shopping Cart" content="" />
        </Head> */}
        {/* <div>
          <div>
            <h1>Cart</h1>
          </div> */}
          {/* <table>
            <tbody>
              <tr>
                <th> </th>
                <th>Food Tour</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {newCookie.map((singleTour) => {
                let totalTourPrice;
                tourPrice
                  ? (totalTourPrice = tourPrice * singleTour.quantity)
                  : (totalTourPrice = 0);
                return ( */}
                  // <tr
                  //   data-test-id="cart-product-<product id>"
                  //   key={singleTour.id}
                  // >
                  //   <th>{singleTour.name}</th>
                  //   <th>{itemPrice}</th>
                  //   <th>
                  //     {''}
                  //     <button
                  //       onClick={() =>
                  //        )
                  //       }
                  //     >
                  //       -{' '}
                  //     </button>
                  //     <span>{singleTour.quantity}</span>
                  //     <button
                  //       onClick={() =>

                  //       }
                  //     >
                  //       +{' '}
                  //     </button>
                  //   </th>
                  //   <th>{totalTourPrice}</th>
                  //   <th> </th>
                  //   <th>
                  //     <button onClick={() => removeTourFromCart(singleTour.id)}>
                  //       {' '}
                  //       {''} x
                  //     </button>
                  //   </th>
                  // </tr>
                // );
              // })}
          //   </tbody>
          // // </table>
          // <div>
            // <div data-test-id="cart-total">
            //   Toal: {getTotalTourPrice(newCookie, props.tours)}
            // </div>
        //   </div>
        // </div>
      // </Layout>
    </div>
  );
}
export async function getServerSideProps(context) {
  // const matchingTour = tours.find((tour) => {
  //   return tour.id === tourId;
  // });

  const cartFromCookies = context.req.cookies.cart || '[]';

  const cart = JSON.parse(cartFromCookies);

  console.log(cart);

  // const tourId = context.query.tourId;
  const tour = await getTours();

  // const tour = tours.find((tourInDatabase) => tourId === tourInDatabase.id);

  return {
    props: {
      addedTours: cart,
      tour: tour,
    },
  };
}
