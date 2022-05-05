import {CartIcon, } from '../icons';
import {useSelector} from 'react-redux';

const Navbar = () => {
  // useSelector accesses the entire state of the redux store
  // we can use obj destructuring to get to the proper field
  const { amount }= useSelector((store) => store.cart)
  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
