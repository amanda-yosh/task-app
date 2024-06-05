import PropTypes from "prop-types";

import styles from "./Button.module.css"

export function Button({ text, iconPath, onClick }) {
    return (
        <button
            className={text ? styles.button : styles.buttonIcon}
            onClick={onClick}
        >
            {text && <p>{text}</p>}
            {iconPath
                ? <img src={iconPath} alt="Ícone do botão" width={16} height={16} />
                : "+"}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    iconPath: PropTypes.string,
    onClick: PropTypes.func,
}
