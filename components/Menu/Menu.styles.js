import { keyframes } from '@emotion/core';

const backgroundGrow = keyframes({
  '0%': {
    transform: 'scale(1.0)'
  },
  '100%': {
    transform: 'scale(60.0)'
  }
});

const backgroundShrink = keyframes({
  '0%': {
    transform: 'scale(60.0)'
  },
  '100%': {
    transform: 'scale(1.0)'
  }
});

export const menuButton = {
  display: 'fixed',
  position: 'absolute',
  left: 0,
  top: 0,
  margin: '2rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  zIndex: 101,
  '&:focus': {
    outline: 'none'
  }
};

export const menuButtonLayout = {
  width: 26,
  height: 21,
  position: 'relative',
  transform: 'rotate(0deg)',
  transition: '.5s ease-in-out',
  cursor: 'pointer'
};

export const defaultBar = {
  display: 'block',
  position: 'absolute',
  height: 3,
  width: '100%',
  background: 'white',
  opacity: 1,
  left: 0,
  transform: 'rotate(0deg)',
  transition: '.25s ease-in-out'
};

export const hamburgerBar = (showMenu, position) => {
  switch (position) {
    case 1:
      return [{ ...defaultBar, top: 0 }, showMenu && { width: '0%', top: 9 }];
    case 4:
      return [{ ...defaultBar, top: 18 }, showMenu && { width: '0%', top: 9 }];
    default: {
      const rotation = position === 2 ? 45 : -45;
      return [{ ...defaultBar, top: 9 }, showMenu && { transform: `rotate(${rotation}deg)` }];
    }
  }
};

export const menuContainer = showMenu => ({
  position: 'absolute',
  display: showMenu ? 'block' : 'none',
  width: '50vw',
  height: '100vh',
  zIndex: 99,
  backgroundColor: 'none',
  overflow: 'hidden',
  '@media (max-width: 967px)': {
    width: '100vw'
  }
});

export const defaultFill = showMenu => ({
  position: 'absolute',
  top: calculateFillStart(21),
  left: calculateFillStart(26),
  width: 40,
  height: 40,
  backgroundColor: '#F85025',
  borderRadius: '50%',
  display: showMenu ? 'block' : 'none',
  zIndex: 98
});

export const menuFill = (showMenu, shrinkAnimation) => {
  const animationTiming = 'cubic-bezier(.5,0,.5,1)';

  if (shrinkAnimation && showMenu) {
    return {
      ...defaultFill(showMenu),
      animation: `${backgroundShrink} 200ms forwards`,
      animationTimingFunction: animationTiming
    };
  }

  if (showMenu) {
    return {
      ...defaultFill(showMenu),
      animation: `${backgroundGrow} 200ms forwards`,
      animationTimingFunction: animationTiming
    };
  }

  return defaultFill(showMenu);
};

export const menuOptions = {
  zIndex: 100,
  left: 64,
  display: 'flex',
  flex: 1,
  height: '100vh',
  flexDirection: 'column',
  position: 'absolute',
  justifyContent: 'center',
  '@media (max-width: 468px)': {
    left: 32
  }
};

export const menuOption = {
  color: '#4C4C4C',
  fontSize: '3rem',
  fontWeight: 900,
  marginTop: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  '@media (max-width: 468px)': {
    fontSize: '2.5rem'
  }
};

export const selectedOption = {
  backgroundColor: '#FFF',
  width: '100%',
  height: 12,
  zIndex: 97,
  opacity: 0.3,
  marginTop: -18
};

export const linkText = {
  zIndex: 100,
  overflow: 'hidden'
};

function calculateFillStart(itemWidth) {
  const leftMargin = 32;
  const circleWidth = 40;

  return leftMargin - (circleWidth - itemWidth) / 2;
}
