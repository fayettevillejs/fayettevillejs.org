import ArrowRight from '../../public/arrow-right.svg';
import * as styles from './ListItem.styles';

const ListItem = ({ title, text, bottomMargin }) => {
  return (
    <li css={styles.bottomSpacing(bottomMargin || 24)}>
      <div css={styles.listItemTitleLayout}>
        <div css={styles.iconMargin}>
          <ArrowRight />
        </div>

        <p css={styles.listItemTitle}>{title}</p>
      </div>
      <p css={[styles.listItemText]}>{text}</p>
    </li>
  );
};

export default ListItem;
