import { useEffect, useState } from 'react';
import type { navigationProps } from '../../types/navigationProps';
import ReactMarkdown from 'react-markdown';
import styles from './page.module.css';

import contentManifest from '../../assets/contentManifest.json';

function Page({ activePage, handleActive }: navigationProps) {
	const [data, setData] = useState('');

	useEffect(() => {
		const selected = contentManifest.find(item => item.id === activePage);
		if (selected) {
			fetch('content/' + selected.label + '.md')
				.then(res => res.text())
				.then(text => setData(text))
				.catch(err => console.error('Fetch error:', err));
		} 
	}, [activePage]);

	return (
		<div className={styles.pageContainer}>
			<ReactMarkdown children={data} />
		</div>
	);
}


export default Page
