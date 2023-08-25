import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto ;
  gap: 2rem;
  font-size: 1.5rem;
  padding: 15%;
  
  @media (max-width: 1010px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
