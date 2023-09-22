// import { useContextSelector } from 'use-context-selector'
import { Trash } from 'phosphor-react'

// import { TasksContext } from '../contexts/TasksContext'

import styles from './Tasks.module.css'

interface TasksProps {
  content: string
}

export function Tasks({ content }: TasksProps) {
  // const { tasks } = useContextSelector(TasksContext, (context) => {
  //   return {
  //     tasks: context.tasks
  //   }
  // })

  return (
    <div className={styles.tasks}>
      <input type="radio" name="radioInput" id="radioInput" />
      <label htmlFor="radioInput" id='label' />

      <p>
        {content}
      </p>

      <button>
        <Trash size={24} />
      </button>
    </div>
  )
}