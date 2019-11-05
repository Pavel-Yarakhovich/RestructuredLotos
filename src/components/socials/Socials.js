import * as React from 'react';

import styles from './Socials.module.css';

export const Socials = () => {
	return (
		<div className={styles.Socials}>
			<a className={styles.SocialsLink} href="/" title="VKontakte" target="_blank">VK</a>
			<a className={styles.SocialsLink} href="/" title="Facebook" target="_blank">FB</a>
			<a className={styles.SocialsLink} href="/" title="Twitter" target="_blank">TW</a>
		</div>
	);
};