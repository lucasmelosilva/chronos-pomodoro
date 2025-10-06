
import styles from './styles.module.css'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.main}>
      {children}
    </button>
  )
}