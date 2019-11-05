import React from 'react';
import styles from './Contacts.module.css';

export const Contacts = props => {
	return (
		<a className={styles.Contacts} href="/" title="Позвонить сейчас" target="tel: +375295559280">
			+375 29 555-92-80
		</a>
	);
}