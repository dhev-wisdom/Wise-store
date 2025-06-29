import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.js';
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon-component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { open, setOpen } = useContext(CartContext);

  const handleSignOut = async() => {
    try {
        await signOutAuthUser();
        console.log("Sign out")
    } catch(error) {
        console.log("Error signing out: ", error);
    }
  }

  const handleCartDropdown = () => {
    setOpen(!open);
  }

  return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <img className='logo' style={{width: '30px'}} src="../../../public/assets/react.png" alt="Logo" />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ? 
                    <NavLink as="span" style={{color: 'black'}} onClick={handleSignOut}>
                        SIGN OUT
                    </NavLink>
                :
                    <NavLink to='/auth'>
                        AUTH
                    </NavLink>
                }
                <CartIcon onClick={() => handleCartDropdown()} />
            </NavLinks>
            {open && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
    </Fragment>
  )
}

export default Navigation;