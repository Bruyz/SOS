import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  display: flex;
  width: 78.7%;
  height: 6rem;
  background-color: ${colors.Titulo};
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a.Barriga {
        align-items: left;
        font-size: 4rem;
        text-decoration: none;
        color: ${colors.white};
      }
      a.Restaurante{
        
        text-decoration: none;
        color: ${colors.white};
      }
    }
    
  }

`