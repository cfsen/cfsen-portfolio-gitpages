import { useEffect, useState } from 'react';
import { SubContentKey, type navigationProps } from '../../types/navigationProps';
import ReactMarkdown from 'react-markdown';
import styles from './page.module.css';

import { CONTENT, SUBCONTENT } from '../../content.tsx';

function Page({ 
	displayContent,
	displaySubContent,
	handleContentChange,
	handleSubContentChange
}: navigationProps) {
	const [data, setData] = useState('');

	useEffect(() => {
		const content = CONTENT.find(item => item.key === displayContent);
		const subcontent = SUBCONTENT.find(item => item.key === displaySubContent);
		const selected = displaySubContent !== SubContentKey.None ? subcontent : content;
		console.log("content: " + content?.label);
		console.log("subcontent: " + subcontent?.label);
		if (selected) {
			fetch(selected.file)
				.then(res => res.text())
				.then(text => setData(text))
				.catch(err => console.error('Fetch error:', err));
		} 
	}, [displayContent, displaySubContent]);

	return (
		<div className={styles.pageContainer}>
			<ReactMarkdown children={data} />
		</div>
	);
}


export default Page
