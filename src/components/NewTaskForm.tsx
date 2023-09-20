import { PlusCircle } from 'phosphor-react'

import styles from './NewTaskForm.module.css'

export function NewTaskForm() {
  return (
    <div className={styles.newTask}>
      <input 
        type="text" 
        placeholder='Adicionar uma nova tarefa' 
      />
      <button>
        Criar 
        <PlusCircle size={16} />
      </button>
    </div>
  )
}