import * as React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';

export const Sidebar = props => {

	let style;
	if (props.show === "entered" || props.show === "entering") {
		style = styles.SideBar;
	} else if (props.show === "exited" || props.show === "exiting") {
		style = styles.SideBarHidden;
	} else {
		style = styles.SideBarInterim
	}
	return (
		<div className={style}>
			<NavLink className={styles.MenuLink} to="/one" activeClassName={styles.ActiveLink}>О сайте</NavLink>
			<NavLink className={styles.MenuLink} to="/two" activeClassName={styles.ActiveLink}>Направления и классы</NavLink>
			<NavLink className={styles.MenuLink} to="/three" activeClassName={styles.ActiveLink}>Персональные уроки</NavLink>
			<NavLink className={styles.MenuLink} to="/four" activeClassName={styles.ActiveLink}>Расположение залов</NavLink>
			<NavLink className={styles.MenuLink} to="/five" activeClassName={styles.ActiveLink}>Здоровье и красота</NavLink>
			<NavLink className={styles.MenuLink} to="/six" activeClassName={styles.ActiveLink}>Питание</NavLink>
			<NavLink className={styles.MenuLink} to="/seven" activeClassName={styles.ActiveLink}>Преподаватели</NavLink>
		</div>
	);
};