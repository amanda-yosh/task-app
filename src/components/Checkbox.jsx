import PropTypes from "prop-types";

import styles from "./Checkbox.module.css";

export function Checkbox({ checked, onChange }) {
    const handleOnChange = () => {
        onChange()
    }

    return (
        <input
            id="checkbox"
            type="checkbox"
            name="checkbox"
            checked={checked}
            className={styles.input}
            onChange={handleOnChange}
        />
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}
