import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'


//1px solid #E9EEF2
function Search(props) {
  return (
    <div className={props.classes.searchWrapper}>
      <input placeholder="Ищите по автору, названию доклада или названию конференции..." onChange={props.onSearch} className={props.classes.search} type="search" />
    </div>
  )
}

export default injectSheet(styles)(Search);
