import PropTypes from 'prop-types';

import styles from './TitleCounter.module.css'

export function TitleCounter({ title, counter, colorVariant, checked }) {
    return (
        <div className={styles.titleCounter}>
            <p className={styles[colorVariant]}>{title}</p>
            <p className={styles.counter}>{checked ? `${checked} de ${counter}` : counter}</p>
        </div>
    )
}

TitleCounter.propTypes = {
    title: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    colorVariant: PropTypes.string.isRequired,
    checked: PropTypes.number,
}
