import * as React from 'react';
import { OrderButton } from '../../components';

import styles from './PageOne.module.css';

export const PageOne = () => {
	return (
		<div className={styles.Page}>
			<div className={styles.Img}></div>
			<div className={styles.PageContent}>
				<h1>Lotos</h1>
				<p>Приглашаем вас и ваших друзей посетить пробное бесплатное занятие</p>
				<OrderButton 
					sign="+"
					title="Записаться на занятие"/>
			</div>
		</div>
	);
};