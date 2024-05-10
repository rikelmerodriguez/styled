import { FormEvent, useState } from 'react'
import { FormularioVagas, InputCampo, BtnPesquisar } from './styles'
//import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioVagas as="form" onSubmit={aoEnviarForm}>
      <InputCampo
        as="input"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar as="button" type="submit">
        Pesquisar
      </BtnPesquisar>
    </FormularioVagas>
  )
}
export default FormVagas
