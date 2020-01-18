import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import * as styles from './Menu.styles';

const MenuButton = ({ showMenu, onClick }) => {
  return (
    <button css={styles.menuButton} onClick={onClick}>
      <div css={styles.menuButtonLayout}>
        <span css={styles.hamburgerBar(showMenu, 1)}></span>
        <span css={styles.hamburgerBar(showMenu, 2)}></span>
        <span css={styles.hamburgerBar(showMenu, 3)}></span>
        <span css={styles.hamburgerBar(showMenu, 4)}></span>
      </div>
    </button>
  );
};

const NavOption = ({ url, text }) => {
  const [hover, setHover] = useState(false);
  const isExternalUrl = url.includes('http');

  if (isExternalUrl) {
    return (
      <a
        href={url}
        css={[styles.menuOption, !isCurrentUrl && hover && { color: '#fff' }]}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div>
          <span css={styles.linkText}>
            {text}
            {isCurrentUrl && <div css={styles.selectedOption} />}
          </span>
        </div>
      </a>
    );
  }

  const router = useRouter();
  const isCurrentUrl = router.pathname === url;

  return (
    <Link href={!isExternalUrl ? url : ''}>
      <a
        css={[styles.menuOption, !isCurrentUrl && hover && { color: '#fff' }]}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div>
          <span css={styles.linkText}>
            {text}
            {isCurrentUrl && <div css={styles.selectedOption} />}
          </span>
        </div>
      </a>
    </Link>
  );
};

const NavigationOptions = ({ showMenuText }) => {
  if (!showMenuText) {
    return null;
  }

  return (
    <nav css={styles.menuOptions}>
      <NavOption url="/" text="Home" />
      <NavOption url="/sponsors" text="Sponsors" />
      <NavOption url="/conduct" text="Conduct" />
      <NavOption url="/sponsorship" text="Support" />
      <NavOption url="/about" text="About" />
      <NavOption
        url="https://docs.google.com/spreadsheets/d/1eycEHJ7Dag0KGC4EnWIZkMYpY4f_W7elZ-N0BeGmsgs/edit?usp=sharing"
        text="Talk Ideas"
      />
    </nav>
  );
};

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuText, setShowMenuText] = useState(false);
  const [shrink, setShrink] = useState(false);

  const onButtonClick = () => {
    if (!shrink && !showMenu) {
      setShowMenu(true);
      return setTimeout(() => {
        setShowMenuText(true);
      }, 120);
    }

    setShrink(true);
    setTimeout(() => {
      setShowMenuText(false);
    }, 60);

    return setTimeout(() => {
      setShowMenu(false);
      setShrink(false);
    }, 200);
  };

  return (
    <Fragment>
      <div css={styles.menuContainer(showMenu)}>
        <div css={styles.menuFill(showMenu, shrink)} />
      </div>
      <MenuButton showMenu={showMenu} onClick={onButtonClick} />
      <NavigationOptions showMenuText={showMenuText} />
    </Fragment>
  );
};

export default Menu;
