import './styles/themes.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react'

function App() {
  return (
    <section>
      <Heading>
        Ola mundo
        <button onClick={() => {
          alert('Não click em mim, Vou començar a contar')
        }}>
          <TimerIcon />
        </button>
      </Heading>
    </section>
  )
}

export { App }