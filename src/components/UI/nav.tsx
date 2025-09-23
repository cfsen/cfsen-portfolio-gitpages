import styles from './nav.module.css';
import clsx from 'clsx';

import { type navigationProps } from '../../types/navigationProps';
import { CONTENT, SUBCONTENT } from '../../content.tsx';
import { motion } from 'motion/react';

function Navigation({
	displayContent,
	displaySubContent,
	handleContentChange,
	handleSubContentChange
}: navigationProps) {
	const navBarElements = CONTENT
	.map(nav =>
		<div
			key={nav.key}
			className={
				clsx(
					styles.navElement,
					styles.navElementLarge,
					{ [styles.navElementActive]: nav.key === displayContent }
				)
			}
			onClick={() => { handleContentChange(nav.key) }}
		>
			{nav.icon}
			<span>
				{nav.label}
			</span>
		</div>
	);

	const navBarSubElements = SUBCONTENT
	.filter(a => a.parentContent === displayContent)
	.map(sub =>
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			key={sub.key}
			className={
				clsx(
					styles.navElement,
					styles.navElementSmall,
					{ [styles.navElementActive]: sub.key === displaySubContent },
				)
			}
			onClick={() => { handleSubContentChange(sub.key) }}
		>
			{sub.label}
		</motion.div>
	);

	return (
		<>
			<div className={styles.navigationContainer}>
				{navBarElements}
			</div>
			<div className={styles.subNavigationContainer}>
				{navBarSubElements}
			</div>
		</>
	);
}

export default Navigation
