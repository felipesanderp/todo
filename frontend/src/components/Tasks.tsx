// import { ChangeEvent, useContext } from 'react'
import { Trash } from 'phosphor-react'

// import { TasksContext } from '../contexts/TasksContext'

import styles from './Tasks.module.css'

interface TasksProps {
  description: string
  // completed_at: Date | null
}

export function Tasks({ description }: TasksProps) {
  // // const { completeTask, removeTask } = useContext(TasksContext)

  // function handleRadioInputChange(event: ChangeEvent<HTMLInputElement>) {
  // //   completeTask(event.target.value)
  // // }

  // function handleRemoveTask(content: string) {
  //   // removeTask(content)
  // }

  return (
    <div className={styles.tasks}>
      <input
        type="radio"
        value={description}
        name={description}
        id={description}
        // onChange={handleRadioInputChange}
        // checked={isCompleted}
      />
      <label htmlFor={description} id="label" />

      <p className={styles.content}>{description}</p>

      <button>
        <Trash size={24} />
      </button>
    </div>
  )
}
