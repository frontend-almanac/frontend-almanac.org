import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'


//1px solid #E9EEF2
function SearchResult(props) {
  return (
    <section className={props.classes.searchResult}>
      <h1 className={props.classes.title}>{props.searchSuccess ? 'Результаты поиска' : 'Случайное видео'}</h1>
      <ul className={props.classes.cardList}>
        {props.list.map((el, index) => <li className={props.classes.cardItem} key={index}>
          <a className={props.classes.cardItemTitle} href={el.link} target="_blank">{el.title}</a>
          {' '}

          <Link href="/about?id=2" as="/about/2" ><a className={props.classes.cardItemAuthor} href="/about/2">{el.name}</a></Link>
          {' '}
          <a className={props.classes.cardItemConference} target="_blank">{el.conferenceName} [{el.year}]</a>
        </li>)}
      </ul>
    </section>
  )
}

export default injectSheet(styles)(SearchResult);
