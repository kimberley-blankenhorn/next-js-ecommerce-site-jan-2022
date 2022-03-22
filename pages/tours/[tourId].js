import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';
import { readTour } from '../../util/database';

const bodyStyle = css`
  background-color: rgb(163, 120, 87, 0.8);

  height: 100vh;
`;

const tourSectionStyle = css`
  display: flex;
  margin-top: 10px;
  color: white;

  div {
    width: 50vw;
    padding: 20px;
  }
`;

const textSectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* margin: auto; */
  margin: 85px 50px;
  height: 55vh;
  color: black;
  border: solid white 1px;
  border-radius: 25px;
  background-color: rgb(250, 236, 223, 0.8);
  div {
    width: 40vw;
    text-align: center;
    margin: auto;
  }
  button {
    justify-content: center;
    /* align-items: center;
    align-content: center; */
    text-align: center;
    margin-top: 20px;
    height: 50px;
    width: 200px;
    border-radius: 25px;
    font-size: 18px;
  }
`;
const headerFontStyle = css`
  font-size: 36px;
`;

export default function SingleTour(props) {
  const [addedTourArray, setAddedTourArray] = useState(props.addedTour);

  function addingATour(id) {
    // get the value of the cookie
    const cookieValue = getParsedCookie('addedTour') || [];
    console.log(cookieValue);
    const existIdOnArray = cookieValue.some((cookieObject) => {
      console.log(cookieObject.id);
      return cookieObject.id === id;
    });
    console.log(existIdOnArray);
    // update the cookie
    let newCookie;
    if (existIdOnArray) {
      const existingTour = cookieValue.find((foodTour) => {
        return foodTour.id === id;
      });
      existingTour.added += 1;
      newCookie = cookieValue;
    } else {
      newCookie = [...cookieValue, { id: id, added: 1 }];
    }

    setAddedTourArray(newCookie);
    setParsedCookie('addedTour', newCookie);
  }

  return (
    <div css={bodyStyle}>
      <Layout>
        <Head>
          <title>{props.tour.name}</title>
          <meta
            name="description"
            content={`${props.tour.name} ${props.tour.description}`}
          />
        </Head>
        <div css={tourSectionStyle}>
          <div>
            <h1>{props.tour.name}</h1>

            <Image
              src={`/images/${props.tour.id}.jpg`}
              width="600"
              height="400"
            />
            {/* {props.tours((tour) => {
          const addedATour = addedTourArray.some((addedObject) => {
            return addedObject.id === tour.id;
          });
          })} */}
          </div>
          <div css={textSectionStyle}>
            <div css={headerFontStyle}>{props.tour.name}</div>
            <div>Description: {props.tour.description}</div>
            <div>Price: {props.tour.price} €</div>
            <div>
              <button onClick={() => addingATour(props.tour.id)}>
                Add Tour
                {''}
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const matchingTour = tours.find((tour) => {
  //   return tour.id === tourId;
  // });

  const addedTourFromCookies = context.req.cookies.addedTour || '[]';

  const addedTour = JSON.parse(addedTourFromCookies);

  console.log(addedTourFromCookies);

  const tourId = context.query.tourId;
  const tour = await readTour(tourId);

  // const tour = tours.find((tourInDatabase) => tourId === tourInDatabase.id);

  return {
    props: {
      addedTour,
      tour: tour,
    },
  };
}
