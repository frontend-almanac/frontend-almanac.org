import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'


//1px solid #E9EEF2
function SearchResult(props) {
  return (
    <section className={props.classes.searchResult}>
      <h1 className={props.classes.title}>{props.searchSuccess ? `Результаты поиска [${props.list.length} шт]` : 'Случайное видео'}</h1>
      <ul className={props.classes.cardList}>
        {props.list.map((el, index) => <li className={props.classes.cardItem} key={index}>
          <div className={props.classes.cardItemTitle}>
            <a href={el.link} target="_blank">{el.title}</a>
          </div>
          
          <div className={props.classes.cardItemAuthor}>
            <Link href={{ pathname: '/persons-detail', query: { name: el.name } }} as={`/persons/${el.name}`} ><a href={`/persons/${el.name}`}>{el.name}</a></Link>
          </div>
          <div className={props.classes.cardItemYear}>{el.year}</div>
          <div className={props.classes.cardItemConference}>
            <Link href={{ pathname: '/event', query: { name: el.conferenceName } }} as={`/events/${el.conferenceName}`} ><a href={`/event/${el.conferenceName}`}>{el.conferenceName}</a></Link>
          </div>

          <span style={{borderColor: el.color}} className={props.classes.cardItemMark}></span>
        </li>)}
      </ul>
    </section>
  )
}

export default injectSheet(styles)(SearchResult);
