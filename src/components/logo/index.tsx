import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'

export function Logo() {
  return (
    <div className={styles.title}>
      <TimerIcon className={styles.icon} />
      <a href="#">Chronos</a>
    </div>
  )
}