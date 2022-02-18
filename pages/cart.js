import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
// import Header from '../components/Header';
import Layout from '../components/Layout';
import {
  deleteCookie,
  getParsedCookie,
  setParsedCookie,
} from '../util/cookies';

const bodyStyle = css`
  background-color: rgb(175, 198, 204);
  height: 100vh;
`;

export default function Cart(props) {
  const [addedTourArray, setAddedTourArray] = useState(props.addedTour);

  function addingATour(id) {
    // get the value of the cookie
    const cookieValue = getParsedCookie('addedTour') || [];

    // update the cookie
    const existIdOnArray = cookieValue.some((cookieObject) => {
      return cookieObject.id === id;
      //   if (cookieObject.id === props.tour.id) {
      //     return { ...cookieObject, added: cookieObject.added + 1 };
      //   } else {
      //     return cookieObject;
      //   }
    });

    let newCookie;

    if (existIdOnArray) {
      newCookie = cookieValue.filter((cookieObject) => {
        return cookieObject.id !== id;
      });
    } else {
      newCookie = [...cookieValue, { id: id, added: 0 }];
    }

    // 3. set the new value of the cookie
    setAddedTourArray(newCookie);
    setParsedCookie('addedTour', newCookie);
  }

  return (
    <div css={bodyStyle}>
      <Layout>
        <Head>
          <title>Cart</title>
          <meta name="Shopping Cart" content="" />
        </Head>
        <div>
          <div>
            <h1>Cart</h1>
          </div>
          <div key={`tour-${props.tour.id}`}>
            {/* Dynamic link, eg. /animals/1, /animals/2, etc */}
            <Link href={`/tours.js/${props.tour.id}`}>
              <a>{props.tour.name}</a>
            </Link>{' '}
            {props.tours.map((tour) => {
              const tourInCart = addedTourArray.some((inCart) => {
                return inCart.id === tour.id;
              });
            })}
            <button onClick={() => addingATour(props.tour.id)}>
              {addingATour ? '🧡' : '🖤'}
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}
