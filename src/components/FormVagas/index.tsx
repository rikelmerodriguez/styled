import { FormEvent, useState } from 'react'

<<<<<<< HEAD
import { ButtonPesquisar, FormPesquisa, InputPesquisar } from './styles'
=======
import styles from './FormVagas.module.css'
>>>>>>> a567c443a2dc616d51459467dbc19656c3d328f1

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
<<<<<<< HEAD
    <FormPesquisa onSubmit={aoEnviarForm}>
      <InputPesquisar
=======
    <form className={styles.form} onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
>>>>>>> a567c443a2dc616d51459467dbc19656c3d328f1
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
<<<<<<< HEAD
      <ButtonPesquisar type="submit">Pesquisar</ButtonPesquisar>
    </FormPesquisa>
=======
      <button className={styles.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
>>>>>>> a567c443a2dc616d51459467dbc19656c3d328f1
  )
}
export default FormVagas
