import { Global, css } from '@emotion/core';
import { useRouter } from 'next/router';
import Menu from '../Menu/Menu';
import Logo from '../../public/fayjs-logo.svg';
import FullLogo from '../../public/fayettevillejs.svg';
import * as styles from './Layout.styles';
import { Fragment } from 'react';

const TitleSection = ({ title }) => {
  if (!title) {
    return (
      <div css={styles.titleSection}>
        <FullLogo />
      </div>
    );
  }

  return <h2 css={styles.h2}>{title}</h2>;
};

const Layout = ({ children, customStyles }) => {
  const router = useRouter();

  return (
    <Fragment>
      <Global styles={css(styles.global)} />

      <div css={styles.layout}>
        <div css={styles.menuSpacer}>
          <Menu />
          <div css={styles.titleContainer}>
            <TitleSection title={determineRouteName(router.pathname)} />
          </div>
        </div>

        <section css={[styles.section, { backgroundColor: '#4C4C4C' }, customStyles]}>
          {children}
        </section>
        <div css={[styles.section, styles.hideIfSmallScreen]}>
          <Logo />
        </div>
      </div>
    </Fragment>
  );
};

function determineRouteName(path) {
  return `${path.substring(1, 2).toUpperCase()}${path.substring(2)}`;
}

export default Layout;
