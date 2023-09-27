import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { api } from '../lib/axios'
import { Task, tasksReducer } from '../reducers/tasks/tasks'
import { ActionsTypes } from '../reducers/tasks/actions'

interface TasksContextType {
  tasks: Task[]
  // addTask: (description: string) => void
  // removeTask: (content: string) => void
  // completeTask: (content: string) => void
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
    const getTasks = async () => {
      const response = await api.get('/tasks')

      dispatch({
        type: ActionsTypes.GET_TASKS,
        payload: {
          data: response.data,
        },
      })
    }

    getTasks()
  }, [])

  return (
    <TasksContext.Provider value={{ tasks }}>{children}</TasksContext.Provider>
  )
}
