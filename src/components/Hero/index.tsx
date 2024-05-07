<<<<<<< HEAD
import { Container } from '../../styles'
import { Form, H2Title } from './styles'

const Hero = () => (
  <Form>
    <Container>
      <H2Title>
        As melhores vagas para tecnologia, design e artes visuais.
      </H2Title>
    </Container>
  </Form>
=======
import styles from './Hero.module.css'

const Hero = () => (
  <form className={styles.form}>
    <div className="container">
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </form>
>>>>>>> a567c443a2dc616d51459467dbc19656c3d328f1
)

export default Hero
