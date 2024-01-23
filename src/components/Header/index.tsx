import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import {
  HeaderBar,
  LinkItem,
  Links,
  CartButton,
  BurgerMenu,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()

  const [isMenuOpen, setMenuOpen] = useState(false)

  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <BurgerMenu onClick={() => setMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </BurgerMenu>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aqui para ir para as Categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink title="Clique aqui para Em breve" to="/#coming-soon">
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink title="Clique aqui para Promoções" to="/#on-sale">
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton role="button" onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              title="Clique aqui para ir para as Categorias"
              to="/categories"
              onClick={() => setMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para Em breve"
              to="/#coming-soon"
              onClick={() => setMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para Promoções"
              to="/#on-sale"
              onClick={() => setMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}
export default Header
