import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Task, tasksReducer } from '../reducers/tasks/tasks'
import { ActionsTypes, addNewTaskAction } from '../reducers/tasks/actions'

interface CreateNewTask {
  description: string
}

interface TasksContextType {
  tasks: Task[]
  addNewTask: (data: CreateNewTask) => void
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

  return (
    <TasksContext.Provider value={{ tasks, addNewTask }}>
      {children}
    </TasksContext.Provider>
  )
}
