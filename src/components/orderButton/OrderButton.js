import * as React from 'react';

import styles from './OrderButton.module.css';

export const OrderButton = props => {
	return (
		<div className={styles.Container}>
			<div className={styles.Circle}>{props.sign}</div>
			<div className={styles.Rectangle}>{props.title}</div>
		</div>
	);
};