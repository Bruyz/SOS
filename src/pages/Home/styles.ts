import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
  display: flex;
  max-width: 1090px;
  margin: 0 auto;
 

    ul {
      display: grid;
      grid-template-columns: auto auto auto;
      list-style-type: none;
      display: flex;
      align-items: center;
      height: 100%;
      text-decoration: none;
      li {
        padding: 1rem;
        height: 100%;
        display: flex;
        align-items: center;
          a{
            width: 100%;
            padding: 2rem;
            line-height: 2rem;
            gap: 1rem;
            background-color: ${colors.Texto};
            border-radius: 5%;
            text-decoration: none;
            color: ${colors.black};
          }
    }
  }
`


