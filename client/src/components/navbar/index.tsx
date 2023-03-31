import styled from 'styled-components'
import tw from 'twin.macro'
import { Logo } from '../logo'
import { NavItems } from './NavItem'

const NavbarContainer = styled.div`
  ${tw`w-full  mt-2 flex flex-row items-center pl-2 lg:px-12 justify-between`}
`
const LogoConatainer = styled.div``

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoConatainer>
        <Logo />
      </LogoConatainer>
      <NavItems />
    </NavbarContainer>
  )
}
