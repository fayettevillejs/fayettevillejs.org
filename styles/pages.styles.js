export const h3 = {
  marginBottom: 24,
  fontSize: '1.5rem'
};

export const bottomSpacing = value => ({
  marginBottom: value
});

export const link = {
  color: '#25F7B2',
  fontWeight: 700,
  textDecoration: 'none',
  '&:visited': {
    color: '#25F7B2'
  },
  '&:active': {
    color: '#fff'
  }
};

export const emphasis = {
  fontWeight: 700
};

export const customLayoutPadding = { paddingRight: '4rem' };

export const textContentContainer = {
  overflowY: 'scroll',
  marginRight: '-4rem',
  paddingRight: '4rem',
  paddingTop: 120,
  paddingBottom: 60,
  '@media (max-width: 468px)': {
    paddingBottom: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: 0,
    paddingTop: 0
  }
};

export const logo = {
  paddingBottom: 24,
  paddingTop: 24
};

export const subList = { paddingLeft: 34 };

export const subListItem = {
  display: 'list-item',
  listStyleType: 'square',
  marginLeft: 24
};

export const supportButtonLayout = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '50vw',
  zIndex: 97,
  paddingLeft: 64,
  paddingRight: 64,
  paddingTop: 32,
  paddingBottom: 32,
  '@media (max-width: 967px)': {
    width: '100vw'
  }
};

export const sponsorLayout = {
  paddingRight: 0,
  paddingTop: 0,
  margin: '0 auto',
  '@media (max-width: 468px)': {
    marginRight: 24,
    marginLeft: 24
  }
};

export const errorContainer = {
  paddingLeft: 64,
  paddingRight: 64,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

export const errorTitle = {
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 900,
  marginTop: 16
};

export const errorSubTitle = { textAlign: 'center', marginTop: 8 };

export const loftyLogo = {
  height: 160,
  margin: '24px auto -16px auto',
  display: 'block',
  marginTop: 0,
  paddingTop: 0,
  '@media (max-width: 468px)': { height: 140 }
};

export const sponsorBottomMargin = {
  marginTop: 85,
  paddingBottom: 96,
  '@media (max-width: 468px)': {
    paddingBottom: 96
  }
};
