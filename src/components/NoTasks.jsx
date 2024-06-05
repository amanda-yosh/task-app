import list from '../assets/list.svg';

import styles from './NoTasks.module.css';

export function NoTasks() {
    return (
        <div className={styles.noTasks}>
            <img className={styles.img} src={list} alt="Logotipo de lista" width={56} height={56} />
            <div>
                <p className={styles.p}>
                    Você ainda não tem tarefas cadastradas
                </p>
                <p className={styles.p}>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </div>
    )
}