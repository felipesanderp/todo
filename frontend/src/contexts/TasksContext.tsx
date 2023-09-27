import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Task, tasksReducer } from '../reducers/tasks/tasks'
import {
  ActionsTypes,
  addNewTaskAction,
  markTaskAsCompletedAction,
} from '../reducers/tasks/actions'

interface CreateNewTask {
  description: string
}

interface TasksContextType {
  tasks: Task[]
  addNewTask: (data: CreateNewTask) => void
  markTaskAsCompleted: (id: string) => void
  // removeTask: (content: string) => void
  // totalIsCompleted: number
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasksState, dispatch] = useReducer(tasksReducer, {
    tasks: [],
  })

  const { tasks } = tasksState

  useEffect(() => {
    async function getTasks() {
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'GET',
      })

      const data = await response.json()

      dispatch({
        type: ActionsTypes.GET_TASKS,
        payload: {
          data,
        },
      })
    }

    getTasks()
  }, [])

  async function addNewTask(data: CreateNewTask) {
    const newTask = {
      description: data.description,
    }

    const response = await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      body: JSON.stringify({
        description: newTask.description,
      }),
    })

    console.log(response)

    dispatch(addNewTaskAction(await response.json()))
  }

  async function markTaskAsCompleted(id: string) {
    await fetch(`http://localhost:3333/tasks/${id}/complete`, {
      method: 'PATCH',
    })

    dispatch(markTaskAsCompletedAction(id))
  }

  return (
    <TasksContext.Provider value={{ tasks, addNewTask, markTaskAsCompleted }}>
      {children}
    </TasksContext.Provider>
  )
}
