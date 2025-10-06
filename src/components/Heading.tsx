import { Home, Settings, Sun, TimerReset } from 'lucide-react'
import { Button } from './button'
import styles from './Heading.module.css'
import { Logo } from './logo'

export function Heading() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo />
        <div>
          <Button>
            <Home />
          </Button>
          <Button>
            <TimerReset />
          </Button>
          <Button>
            <Settings />
          </Button>
          <Button>
            <Sun />
          </Button>
        </div>
      </div>
    </div>
  )
}
