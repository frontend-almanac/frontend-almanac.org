import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'


//1px solid #E9EEF2
function Title(props) {
  return (
    <h1 className={props.classes.title}>{props.title}</h1>
  )
}

export default injectSheet(styles)(Title);
