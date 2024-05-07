<<<<<<< HEAD
import { LinkAnuncio, TitleAnuncioDaVaga, VagasAnuncio } from './styles'
=======
import styles from './Vaga.module.css'
>>>>>>> a567c443a2dc616d51459467dbc19656c3d328f1

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
<<<<<<< HEAD
  <VagasAnuncio>
    <TitleAnuncioDaVaga>{props.titulo}</TitleAnuncioDaVaga>
=======
  <li className={styles.vaga}>
    <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
>>>>>>> a567c443a2dc616d51459467dbc19656c3d328f1
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
<<<<<<< HEAD
    <LinkAnuncio href="#">Ver detalhes e candidatar-se</LinkAnuncio>
  </VagasAnuncio>
=======
    <a className={styles.vagaLink} href="#">
      Ver detalhes e candidatar-se
    </a>
  </li>
>>>>>>> a567c443a2dc616d51459467dbc19656c3d328f1
)

export default Vaga
