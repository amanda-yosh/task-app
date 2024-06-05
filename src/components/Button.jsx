import styles from './Button.module.css'

export function Button({ text, iconPath }) {
    return (
        <button className={text ? styles.button : styles.buttonIcon}>
            {text && <p>{text}</p>}
            {iconPath ? <img src={iconPath} alt="Ícone do botão" width={16} height={16} /> : '+'}
        </button>
    )
}