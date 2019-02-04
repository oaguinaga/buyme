import Link from 'next/link';
import NavStyles from './styles/NavStyles'

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a href="items">Items</a>
    </Link>
    <Link href="/sell">
      <a href="sell">Sell</a>
    </Link>
    <Link href="/signup">
      <a href="signup">Signup</a>
    </Link>
    <Link href="/orders">
      <a href="orders">Orders</a>
    </Link>
    <Link href="/me">
      <a href="me">Me</a>
    </Link>
  </NavStyles>
);

export default Nav;
