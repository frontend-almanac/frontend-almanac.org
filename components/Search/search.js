import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'

function Search(props) {
  let placeholder;
  switch(props.page) {
    case 'event':
      placeholder = 'Ищите по автору или названию доклада...';
      break;
    case 'persons':
      placeholder = 'Ищите названию доклада или конференции...';
      break;
    default:
      placeholder = 'Ищите по автору, названию доклада или названию конференции...';
  }
  return (
    <div className={props.classes.searchWrapper}>
      <input placeholder={placeholder} onChange={props.onSearch} className={props.classes.search} type="search" />
    </div>
  )
}

export default injectSheet(styles)(Search);
