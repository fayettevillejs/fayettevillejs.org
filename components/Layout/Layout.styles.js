export const global = {
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    webkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    mozUserSelect: 'none',
    webkitUserSelect: 'none'
  },
  body: {
    backgroundColor: '#FFF',
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Lato, sans-serif',
    overflow: 'hidden',
    '@media (max-width: 967px)': {
      overflowY: 'scroll',
      backgroundColor: '#4C4C4C'
    }
  }
};

export const titleSection = {
  width: 200,
  marginRight: 32,
  marginTop: 16,
  '@media (max-width: 468px)': {
    width: 180
  }
};

export const section = {
  height: '100vh',
  width: '50vw',
  padding: '0 4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  '@media (max-width: 967px)': {
    width: '100vw'
  },
  '@media (max-width: 468px)': {
    padding: '0 2rem',
    height: 'auto',
    marginTop: 85,
    paddingTop: 32,
    marginBottom: 48
  }
};

export const layout = {
  display: 'flex',
  flexDirection: 'row'
};

export const menuSpacer = {
  backgroundColor: '#4C4C4C',
  width: '50vw',
  zIndex: 98,
  height: 85,
  position: 'fixed',
  left: 0,
  top: 0,
  '@media (max-width: 967px)': {
    width: '100vw'
  }
};

export const h2 = {
  fontWeight: 900,
  fontSize: '3rem',
  lineHeight: '2.85rem',
  marginRight: 64,
  textAlign: 'right',
  borderBottom: '4px solid #F85025',
  textShadow: '2px 2px #4C4C4C, 2px -2px #4C4C4C, -2px 2px #4C4C4C, -2px -2px #4C4C4C',
  '@media (max-width: 967px)': {
    fontSize: '2.5rem',
    lineHeight: '2.35rem',
    marginRight: 32
  }
};

export const hideIfSmallScreen = {
  '@media (max-width: 967px)': {
    display: 'none'
  }
};

export const titleContainer = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center'
};
