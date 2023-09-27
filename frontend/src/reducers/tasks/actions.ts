import { Task } from './tasks'

export enum ActionsTypes {
  GET_TASKS = 'GET_TASKS',
  ADD_NEW_TASK = 'ADD_NEW_TASK',
}

export function getTasksAction(data: Task) {
  return {
    type: ActionsTypes.GET_TASKS,
    payload: {
      data,
    },
  }
}

export function addNewTaskAction(newTask: Task) {
  return {
    type: ActionsTypes.ADD_NEW_TASK,
    payload: {
      newTask,
    },
  }
}
