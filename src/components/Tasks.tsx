import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <input type="radio" name="" id="" />
      
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>

      <button>
        <Trash size={24} />
      </button>
    </div>
  )
}