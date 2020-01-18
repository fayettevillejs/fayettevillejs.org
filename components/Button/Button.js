import * as styles from './Button.styles';

const Button = ({ text, onClick, fullWidth, bottomMargin }) => {
  return (
    <button
      css={[
        styles.button,
        fullWidth && { width: '100%' },
        bottomMargin && { marginBottom: bottomMargin }
      ]}
      onClick={onClick}
    >
      <span css={styles.buttonText}>{text}</span>
    </button>
  );
};

export default Button;
