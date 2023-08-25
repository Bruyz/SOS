import * as S from "./styles"


export function Header() {
  return (
    <S.Header>
     
      <S.NavBar>
        <ul>
          <li>
            <a className="Barriga" href="/">Onde a barriga controla o coração</a>
          </li>
          <li>
            <a className="Restaurante" href="/list">Restaurante</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}