import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'


//1px solid #E9EEF2
function Conferencies({ classes, list, as }) {
  return (
    <section className={classes.listContainer}>
      <ul className={classes.speakerList}>
        {list.map((el, index) => (
          <li
            className={
              as !== "side" ? classes.speakerItem : classes.speakerItemRow
            }
            key={index}
          >
            <Link
              href={{ pathname: "/event", query: { name: el.name } }}
              as={`/events/${el.name}`}
            >
              <a
                className={
                  as !== "side"
                    ? classes.speakerItemLink
                    : classes.speakerItemLinkRow
                }
                style={{ borderColor: el.color }}
                href={`/events/${el.name}`}
              >
                {el.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default injectSheet(styles)(Conferencies);
