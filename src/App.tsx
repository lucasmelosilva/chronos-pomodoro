import './styles/themes.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { Home } from './components/home'
import { Footer } from './components/footer'

function App() {
  return (
    <section>
      <Heading />

      <main>
        <Home />
      </main>

      <Footer />
    </section>
  )
}

export { App }