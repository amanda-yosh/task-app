import styles from './Checkbox.module.css';

export function Checkbox({ checked }) {
    return (
        <input className={styles.input} type="checkbox" name="" id="" checked={checked} />
    )
}