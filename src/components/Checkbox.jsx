import React from "react";
import PropTypes from "prop-types";

import styles from "./Checkbox.module.css";

export function Checkbox({ checked, onClickCheckbox }) {
    const [value, setValue] = React.useState(checked)

    const handleOnChange = () => {
        setValue(!value)
        onClickCheckbox()
    }

    return (
        <input
            id="checkbox"
            type="checkbox"
            name="checkbox"
            checked={value}
            className={styles.input}
            onChange={handleOnChange}
        />
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onClickCheckbox: PropTypes.func.isRequired,
}
