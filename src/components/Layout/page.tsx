import type { navigationProps } from '../../types/navigationProps';
import ReactMarkdown from 'react-markdown';
import styles from './page.module.css';

import markdown from '../../../public/markdown.md';

function Page({ activePage, handleActive }: navigationProps) {
  const navigationElements = [
    { label: "Projects", id: 0 },
    { label: "Contact", id: 1 }
  ];

  return (
    <>
      <div className={styles.pageContainer}>
        <ReactMarkdown children={markdown} />
      </div>
    </>
  );
}


export default Page
