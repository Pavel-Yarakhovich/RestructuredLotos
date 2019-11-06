import * as React from 'react';

import styles from './PageTwo.module.css';

export const PageTwo = () => {
	return (
		<div className={styles.Page}>
			<span className={styles.Teachers}>Преподаватели</span>
			<div className={styles.Img}>
				<span>Teacher</span>
				<span>Teacher</span>
				<span>Teacher</span>
				<span>Teacher</span>
				<span>Teacher</span>
				<span>Teacher</span>
			</div>
			<div className={styles.PageContent}>
				<h3>Преподаватели</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam debitis obcaecati repellat natus quo consequatur sapiente in distinctio incidunt odio hic alias dolore temporibus nam modi voluptatem, nihil voluptatibus laboriosam.</p>
			</div>
		</div>
	);
};