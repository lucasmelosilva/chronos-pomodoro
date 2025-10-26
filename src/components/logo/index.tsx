import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'

export function Logo() {
  return (
    <div className={styles.container}>
      <a className={styles.content} href="/">
        <TimerIcon className={styles.icon} />
        <span>Chronos</span>
      </a>
    </div>
  )
}