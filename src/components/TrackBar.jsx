import styles from './TrackBar.module.css';

export function TrackBar({ total, track }) {
    return (
        <div className={styles.trackBar}>
            <div
                className={styles.progress}
                style={{ width: `${(track / total) * 100}%` }}
            />
        </div>
    )
}