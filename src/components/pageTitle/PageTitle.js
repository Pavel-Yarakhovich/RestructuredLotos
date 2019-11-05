import * as React from 'react';

import styles from './PageTitle.module.css';

export const PageTitle = props => {
	return (
		<div>
			<p className={styles.PageTitle}>{props.pageTitle}Добро пожаловать!</p>
		</div>
	);
};