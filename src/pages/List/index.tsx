import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function List() {
  return (
    <S.Section>
       <div className='1Linha'></div>
      {dados.map(item => (
        <ComponentCard
          mensagem={item.mensagem}
        
        />
      ))}
    </S.Section>
  )
}
