import React from 'react';
import styles from './Logo.module.css';

export const Logo = props => {
	return (
		<div className={styles.LogoContainer}>
			<div className={styles.Logo}></div>
		</div>
	);
}