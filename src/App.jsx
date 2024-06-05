import React from "react"

import { Header } from "./components/Header"

import { Button } from "./components/Button"

import styles from './App.module.css'

import './global.css'
import { Input } from "./components/Input"
import { Task } from "./components/Task"
import { TitleCounter } from "./components/TitleCounter"
import { NoTasks } from "./components/NoTasks"
import { TrackBar } from "./components/TrackBar"

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      checked: true,
      text: 'Estudar CSS'
    },
    {
      id: 2,
      checked: false,
      text: 'Estudar JavaScript'
    },
    {
      id: 3,
      checked: false,
      text: 'Estudar React'
    },
    {
      id: 4,
      checked: true,
      text: 'Estudar Node'
    },
    {
      id: 5,
      checked: false,
      text: 'Estudar TypeScript'
    }
  ])
  const [newTask, setNewTask] = React.useState('')

  const hasTasks = tasks.length > 0
  const counter = tasks.length
  const checkedCounter = tasks.filter(task => task.checked).length

  const handleCreateNewTask = () => {
    event.preventDefault()

    if (!newTask) return

    setTasks([...tasks, {
      checked: false,
      text: newTask
    }])

    setNewTask('')
  }

  const handleNewTaskChange = () => {
    setNewTask(event.target.value)
  }

  const handleDeleteTask = (task) => {
    setTasks(tasks.filter(taskItem => taskItem.id !== task.id))
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.addTasks}>
          <Input onChange={handleNewTaskChange} value={newTask} />
          <Button text="Criar" />
        </form>

        <div className={styles.tasksTitleCounter}>
          <TitleCounter title="Tarefas criadas" counter={counter} colorVariant='blue' />
          <TitleCounter title="Concluídas" counter={counter} checked={checkedCounter} colorVariant='purple' />
        </div>

        <div className={styles.trackBar}>
          <TrackBar total={counter} track={checkedCounter} />
        </div>

        {hasTasks
          ? (
            <div className={styles.mainTasks}>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.text + task.id}
                    checked={task.checked}
                    text={task.text}
                    onDeleteTask={() => handleDeleteTask(task)}
                  />
                )
              })}
            </div>
          )
          : (<NoTasks />)}
      </main>
    </div>
  )
}

export default App
