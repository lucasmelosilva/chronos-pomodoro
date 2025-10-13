import './styles/themes.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { Home } from './components/home'

function App() {
  return (
    <section>
      <Heading />

      <main>
        <Home />
      </main>
    </section>
  )
}

export { App }