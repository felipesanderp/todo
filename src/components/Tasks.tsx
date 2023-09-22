import { ChangeEvent, useContext } from 'react'
import { Trash } from 'phosphor-react'

import { TasksContext } from '../contexts/TasksContext'

import styles from './Tasks.module.css'

interface TasksProps {
  content: string
  isCompleted: boolean
}

export function Tasks({ content, isCompleted }: TasksProps) {
  const { completeTask, removeTask } = useContext(TasksContext)

  function handleRadioInputChange(event: ChangeEvent<HTMLInputElement>) {
    completeTask(event.target.value)
  }

  function handleRemoveTask(content: string) {
    removeTask(content)
  }

  return (
    <div className={styles.tasks}>
      <input
        type="radio"
        value={content}
        name={content}
        id={content}
        onChange={handleRadioInputChange}
        checked={isCompleted}
      />
      <label htmlFor={content} id="label" />

      <p className={isCompleted ? styles.taskCompleted : styles.content}>
        {content}
      </p>

      <button onClick={() => handleRemoveTask(content)}>
        <Trash size={24} />
      </button>
    </div>
  )
}
