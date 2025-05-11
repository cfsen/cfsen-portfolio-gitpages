import styles from './nav.module.css';
import clsx from 'clsx';

import CodeIcon from '@mui/icons-material/Code';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import type { navigationProps } from '../../types/navigationProps';

function Navigation({ activePage, handleActive }: navigationProps) {
  const navigationElements = [
    { id: 0, label: "Projects", icon: <CodeIcon /> },
    { id: 1, label: "About", icon: <FingerprintIcon /> },
    { id: 2, label: "Contact", icon: <MailOutlineIcon /> }
  ];
  const navBarElements = navigationElements.map(nav =>
    <div
      key={nav.id}
      className={clsx(styles.navElement, { [styles.navElementActive]: nav.id === activePage })}
      onClick={() => { handleActive(nav.id) }}
    >
      {nav.icon}
      <span>
        {nav.label}
      </span>
    </div>
  );

  return (
    <>
      <div id={styles.navigationContainer}>
        {navBarElements}
      </div>
    </>
  );
}


export default Navigation
