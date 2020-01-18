import { useRouter } from 'next/router';
import Menu from '../Menu/Menu';
import Logo from '../../public/fayjs-logo.svg';
import * as styles from './Layout.styles';
import { Fragment } from 'react';

const Layout = ({ children, customStyles }) => {
  const router = useRouter();

  return (
    <Fragment>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background: #fff;
          font-size: 16px;
          color: #fff;
          font-family: 'Lato', sans-serif;
          overflow: hidden;
        }
      `}</style>
      <div css={styles.layout}>
        <div css={styles.menuSpacer}>
          <Menu />
          <div
            css={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            <h2 css={styles.h2}>{determineRouteName(router.pathname)}</h2>
          </div>
        </div>

        <section css={[styles.section, { backgroundColor: '#4C4C4C' }, customStyles]}>
          {children}
        </section>
        <div css={styles.section}>
          <Logo />
        </div>
      </div>
    </Fragment>
  );
};

function determineRouteName(path) {
  if (path === '/') {
    return '';
  }

  return `${path.substring(1, 2).toUpperCase()}${path.substring(2)}`;
}

export default Layout;
