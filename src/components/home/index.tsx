import { CirclePlay } from "lucide-react";
import styles from "./styles.module.css"

export function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.timerDisplay}>
          <span>00:00</span>
        </div>

        <div>
          <div className={styles.timerInputBox}>
            <label htmlFor="task">task:</label>
            <input type="text" id="task" />
          </div>

          <div className={styles.textContent}>
            <p>Nesse ciclo <b>foque</b> por <b>25 min.</b></p>
          </div>

          <div className={styles.cycles}>
            <p>Ciclos:</p>
            <div className={styles.cyclesDisplay}>
              <div>bolinhas</div>
            </div>
          </div>

          <div className={styles.timerButton}>
            <button>
              <CirclePlay className={styles.timerButtonIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}