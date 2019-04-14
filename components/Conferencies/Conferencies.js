import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'


//1px solid #E9EEF2
function Conferencies(props) {
  return (
    <section className={props.classes.listContainer}>
      <ul className={props.classes.speakerList}>
        {props.list.map((el, index) => <li className={props.classes.speakerItem} key={index}>
          <Link href={`/events?name=${el}`} as={`/events/${el}`} ><a className={props.classes.speakerItemLink} href={`/events/${el}`}>{el}</a></Link>
        </li>)}
      </ul>
    </section>
  )
}

export default injectSheet(styles)(Conferencies);
