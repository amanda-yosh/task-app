import PropTypes from 'prop-types'
import styles from './Input.module.css'

export function Input({ onChange, value }) {
    return (
        <input
            type="text"
            name="input"
            className={styles.input}
            placeholder="Adicione uma tarefa"
            onChange={onChange}
            value={value}
        />
    )
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
