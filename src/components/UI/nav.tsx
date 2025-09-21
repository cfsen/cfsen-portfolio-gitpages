import styles from './nav.module.css';
import clsx from 'clsx';

import { type navigationProps } from '../../types/navigationProps';
import { CONTENT, SUBCONTENT } from '../../content.tsx';

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
		<div
			key={sub.key}
			className={
				clsx(
					styles.navElement,
					{ [styles.navElementActive]: sub.key === displaySubContent },
					styles.navElementSmall,
				)
			}
			onClick={() => { handleSubContentChange(sub.key) }}
		>
			{sub.label}
		</div>
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
