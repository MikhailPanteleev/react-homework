import React from 'react';
import PropTypes  from 'prop-types';
import { Link } from "react-router-dom";
import { ROUTES } from '../../../../routes/routeNames';

import styles from './style.module.scss';

const Counter = ({ countValue,  handleIncrement, handleDecrement,  handleReset, parityType }) => {
    return (
        <div>
            <div>
				<h1>Counter Page</h1>
				<div className={styles.wrapper}>
					<div className={styles.display}>{countValue}</div>
					{countValue % 2 === 0 ? 
					<div className={`${styles.parityType} ${styles.evenNumber}`}>Number is {parityType}</div> : <div className={`${styles.parityType} ${styles.oddNumber}`}>Number  is odd</div>}
					<div className={styles.controlsArea}>
						<button className={styles.controlButton} onClick={handleDecrement} >－</button>
						<button className={styles.resetButton} onClick={ handleReset}>reset</button>
						<button className={styles.controlButton} onClick={ handleIncrement}>＋</button>
					</div>
				</div>
			</div>
			<Link to={ROUTES.HOME_PAGE} className={styles.link}>
               	<button className={styles.getBack}>Home Page</button>
           	</Link>			
        </div>
    );
};

Counter.propTypes = {
	countValue: PropTypes.number,
	handleIncrement: PropTypes.func,
	handleDecrement: PropTypes.func,
	handleReset: PropTypes.func,
};

export default Counter;