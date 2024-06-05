import PropTypes from 'prop-types';

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

TrackBar.propTypes = {
    total: PropTypes.number.isRequired,
    track: PropTypes.number.isRequired,
}
