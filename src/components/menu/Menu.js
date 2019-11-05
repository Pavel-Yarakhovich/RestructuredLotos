import * as React from 'react';

import styles from './Menu.module.css';

export const Menu = () => {
	return (
		<div className={styles.Menu}>
			<div className={styles.BurgerIcon}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<p className={styles.MenuText}>Menu</p>
		</div>
	);
};