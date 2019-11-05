import * as React from 'react';
import { Sidebar } from '../sidebar/Sidebar';

import styles from './Menu.module.css';

export const Menu = props => {
	return (
		<div 
			className={styles.Menu}
			onClick={props.clicked} >
			<div className={styles.BurgerIcon}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<p className={styles.MenuText}>Menu</p>
		</div>
	);
};