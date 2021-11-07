import React from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

function Cards(props) {
    const { cases, recovered, deaths } = props.global;
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={cx(styles.row, styles.infected)}>
                    <i className="fas fa-virus"></i>
                </div>
                <div className={styles.row}>
                    <p className={styles.textSecondary}>Infected</p>
                    <h5 className={styles.title}>
                        <CountUp start={0} end={cases} duration={2.75} separator="," />
                    </h5>
                    <p className={styles.textSecondary}>
                        {new Date().toDateString()}
                    </p>
                    <p className={styles.body2}>
                        Number of active cases from COVID-19.
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={cx(styles.row, styles.beat)}>
                    <i className="fas fa-heartbeat"></i>
                </div>
                <div className={styles.row}>
                    <p className={styles.textSecondary}> Recovered</p>
                    <h5 className={styles.title}>
                        <CountUp start={0} end={recovered} duration={2.75} separator="," />
                    </h5>
                    <p className={styles.textSecondary}>
                        {new Date().toDateString()}
                    </p>
                    <p className={styles.body2}>
                        Number of recoveries from COVID-19.
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={cx(styles.row, styles.death)}>
                    <i className="fas fa-skull-crossbones"></i>
                </div>
                <div className={styles.row}>
                    <p className={styles.textSecondary}> Deaths</p>
                    <h5 className={styles.title}>
                        <CountUp start={0} end={deaths} duration={2.75} separator="," />
                    </h5>
                    <p className={styles.textSecondary}>
                        {new Date().toDateString()}
                    </p>
                    <p className={styles.body2}>
                        Number of deaths caused by COVID-19.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards
