import { css } from '@emotion/react';

const footerStyle = css`
  display: flex;
  justify-content: space-evenly;
  /* margin: 40px 0; */
  padding-bottom: 40px;
  color: rgb(11, 3, 0);
`;
const footerRowStyle = css`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 23px;
  }
`;

export default function Footer() {
  return (
    <div css={footerStyle}>
      <div css={footerRowStyle}>
        <h3>Follow</h3>
        <div>Facebook</div>
        <div>Instagram</div>
        <div>Twitter</div>
      </div>
      <div css={footerRowStyle}>
        <h3>Contact</h3>
        <p>Contact</p>
      </div>
      <div css={footerRowStyle}>
        <h3>Info</h3>
      </div>
    </div>
  );
}
