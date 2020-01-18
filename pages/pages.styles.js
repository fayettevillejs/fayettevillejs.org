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
  paddingBottom: 60
};

export const logo = {
  marginBottom: 32,
  marginTop: 32
};

export const subList = { paddingLeft: 34 };

export const subListItem = {
  display: 'list-item',
  listStyleType: 'square',
  marginLeft: 24
};

export const supportButtonLayout = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '50vw',
  paddingLeft: 64,
  paddingRight: 64,
  paddingTop: 32,
  paddingBottom: 32
};

export const sponsorLayout = {
  paddingRight: 0,
  margin: '0 auto'
};
