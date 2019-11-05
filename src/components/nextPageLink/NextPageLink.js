import * as React from 'react';

import styles from './NextPageLink.module.css';

export const NextPageLink = () => {
	return (
		<a className={styles.LinkContainer} href="/" target="_self" title="Перейти на следующую страницу">Направления и классы</a>
	);
};