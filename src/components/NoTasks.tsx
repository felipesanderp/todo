import { ClipboardText } from 'phosphor-react'

import styles from './NoTasks.module.css'

export function NoTasks() {
  return (
    <div className={styles.noTasks}>
      <ClipboardText size={56} />

      <div className={styles.textInfo}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}