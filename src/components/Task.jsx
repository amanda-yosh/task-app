import { Checkbox } from './Checkbox'
import { Button } from './Button'

import styles from './Task.module.css'

import trashCan from '../assets/trash-can.svg';

export function Task({ checked, text, onDeleteTask }) {
    const handleOnDeleteTask = () => {
        onDeleteTask()
    }

    return (
        <div className={styles.task}>
            <Checkbox checked={checked} />
            <p className={checked ? styles.checked : ''}>{text}</p>
            <Button iconPath={trashCan} onClick={handleOnDeleteTask} />
        </div>
    )
}