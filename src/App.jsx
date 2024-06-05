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
      checked: true,
      text: 'Estudar CSS'
    },
    {
      checked: false,
      text: 'Estudar JavaScript'
    },
    {
      checked: false,
      text: 'Estudar React'
    },
    {
      checked: true,
      text: 'Estudar Node'
    },
    {
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
              {tasks.map((task, index) => {
                return (
                  <Task key={task.text + index} checked={task.checked} text={task.text} />
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
