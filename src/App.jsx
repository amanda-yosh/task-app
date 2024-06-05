import React from "react"

import { Input, Header, Button, Task, TitleCounter, NoTasks, TrackBar } from "./components"

import styles from "./App.module.css"

import "./global.css"

function App() {
    const [tasks, setTasks] = React.useState([
        {
            id: 1,
            checked: true,
            text: "Estudar CSS"
        },
        {
            id: 2,
            checked: false,
            text: "Estudar JavaScript"
        },
        {
            id: 3,
            checked: false,
            text: "Estudar React"
        },
        {
            id: 4,
            checked: true,
            text: "Estudar Node"
        },
        {
            id: 5,
            checked: false,
            text: "Estudar TypeScript"
        }
    ])
    const [newTask, setNewTask] = React.useState("")

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

        setNewTask("")
    }

    const handleNewTaskChange = () => {
        setNewTask(event.target.value)
    }

    const handleDeleteTask = (task) => {
        setTasks(tasks.filter(taskItem => taskItem.id !== task.id))
    }

    const handleMarkTask = (task) => {
        setTasks(tasks.map(taskItem => {
            if (taskItem.id === task.id) {
                taskItem.checked = !taskItem.checked
            }

            return taskItem
        }))
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
                    <TitleCounter
                        title="Concluídas"
                        counter={counter}
                        checked={checkedCounter.toString()}
                        colorVariant='purple'
                    />
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
                                        onMarkTask={() => handleMarkTask(task)}
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
