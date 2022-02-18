import { css } from '@emotion/react';
import Link from 'next/link';

const navStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;
const headerStyles = css`
  background-color: transparent;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 8px 8px 20px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  a + a {
    margin-left: 40px;
  }
  a {
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-size: 20px;
  }
`;

const logo = css`
  display: flex;
  justify-content: flex-start;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 8px 8px 20px;
  font-size: 20px;
  color: white;
  font-weight: 800;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

export default function Header() {
  return (
    <header css={navStyle}>
      <div css={logo}>Foodies4Life</div>
      <div css={headerStyles}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/tours">
          <a>Tours</a>
        </Link>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </div>
    </header>
  );
}
