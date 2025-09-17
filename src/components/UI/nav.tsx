import styles from './nav.module.css';
import clsx from 'clsx';

import CodeIcon from '@mui/icons-material/Code';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { ContentKey, type Content, type navigationProps } from '../../types/navigationProps';

function Navigation({ activePage, handleActive }: navigationProps) {
	const content = populateContent();

	const navBarElements = content.map(nav =>
		<div
			key={nav.key}
			className={
				clsx(
					styles.navElement,
					{ [styles.navElementActive]: nav.key === activePage }
				)
			}
			onClick={() => { handleActive(nav.key) }}
		>
			{nav.icon}
			<span>
				{nav.label}
			</span>
		</div>
	);

	return (
		<div className={styles.navigationContainer}>
			{navBarElements}
		</div>
	);
}

function populateContent(): Content[] {
	let content: Content[] = [];
	content.push({ key: ContentKey.Projects, label: "Projects", icon: <CodeIcon /> });
	content.push({ key: ContentKey.About, label: "About", icon: <FingerprintIcon /> });
	content.push({ key: ContentKey.Contact, label: "Contact", icon: <MailOutlineIcon /> });
	return content;
}

export default Navigation
