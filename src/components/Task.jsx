import React from "react";
import PropTypes from "prop-types";

import { Checkbox } from "./Checkbox"
import { Button } from "./Button"

import styles from "./Task.module.css"

import trashCan from "../assets/trash-can.svg";

export function Task({ checked, text, onDeleteTask, onMarkTask }) {
    const [mark, setMark] = React.useState(checked)

    const handleOnDeleteTask = () => {
        onDeleteTask()
    }

    const handleOnChange = () => {
        setMark(!mark)
        onMarkTask()
    }

    return (
        <div className={styles.task}>
            <Checkbox checked={mark} onChange={handleOnChange} />
            <p className={mark ? styles.checked : ""}>{text}</p>
            <Button iconPath={trashCan} onClick={handleOnDeleteTask} />
        </div>
    )
}

Task.propTypes = {
    checked: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onMarkTask: PropTypes.func.isRequired,
}
