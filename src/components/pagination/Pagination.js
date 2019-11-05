import * as React from 'react';

import styles from './Pagination.module.css';

export const Pagination = () => {
	return (
		<div className={styles.Pagination}>
			<span className={styles.CurrentPage}>01</span>
			<span className={styles.TotalPages}>09</span>
		</div>
	);
};