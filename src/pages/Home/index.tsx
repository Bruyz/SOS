import * as S from './styles'


export function Home() {
  return (
    <S.Section>
        <ul>
          <div className='1Linha'>
          <li>
            <a href="">Receita com HIstória</a>
          </li>
          <li>
            <a href="">Guia de Vinhos para Iniciantes</a>
          </li>
          </div>
          <div>
          <li className='2Linha'>
            <a href="">Receita de Cozinha Iternacional</a>
          </li>
          <li>
            <a href="">Dicas para Churrasco Perfeito</a>
          </li>
          </div>
          <div id="linha-vertical"></div>
        </ul>
    </S.Section>
  )
}
