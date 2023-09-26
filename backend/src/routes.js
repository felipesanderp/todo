import { randomUUID } from 'node:crypto'

import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
  {
    method: "GET",
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const { search } = req.query

      const tasks = database.select('tasks', search ? {
        description: search,
      } : null)

      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method: "POST",
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const { description } = req.body

      const task = {
        id: randomUUID(),
        description
      }

      database.insert('tasks', task)

      return res.writeHead(201).end(JSON.stringify(task))
    }
  },
  {
    method: "DELETE",
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      const { id } = req.params

      const [task] = database.select('tasks', { id })

      if (!task) {
        return res.writeHead(404).end()
      }

      database.delete('tasks', id)

      return res.writeHead(204).end()
    }
  },
]