import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'
import { withTranslation } from "../../i18n";

function Search(props) {
  let placeholder;
  switch(props.page) {
    case 'event':
      placeholder = props.t("Search by author or title...");
      break;
    case 'persons':
      placeholder = props.t("Search by title or conference name...");
      break;
    default:
      placeholder = props.t("Search by author, title or conference name...");
  }
  return (
    <div className={props.classes.searchWrapper}>
      <input placeholder={placeholder} onChange={props.onSearch} className={props.classes.search} type="search" />
    </div>
  )
}

export default withTranslation('common')(injectSheet(styles)(Search));
