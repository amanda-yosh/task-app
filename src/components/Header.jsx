import styles from './Header.module.css';

import rocket from '../assets/rocket.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="Logotipo" />
            <p className={styles.to}>to</p>
            <p className={styles.do}>do</p>
        </header>
    )
}