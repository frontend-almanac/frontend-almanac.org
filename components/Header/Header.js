import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'
import { withRouter } from 'next/router'
import { withTranslation } from "../../i18n";

function Header(props) {
  return (
    <nav className={props.classes.nav}>
      <Link href="/" as="/">
        <a
          href="/"
          className={[
            props.classes.link,
            props.router.pathname === "/" ? "active" : "",
          ].join(" ")}
        >
          {props.t("Main page")}
        </a>
      </Link>
      <Link href="/persons-list" as="/persons">
        <a
          href="/persons"
          className={[
            props.classes.link,
            props.router.pathname === "/persons-list" ? "active" : "",
          ].join(" ")}
        >
          {props.t("Speakers")}
        </a>
      </Link>
      <Link href="/event-list" as="/events">
        <a
          href="/events"
          className={[
            props.classes.link,
            props.router.pathname === "/event-list" ? "active" : "",
          ].join(" ")}
        >
          {props.t("Conferencies")}
        </a>
      </Link>
      <a
        href="https://github.com/frontend-almanac/frontend-almanac.org"
        target='_blank'
        className={props.classes.link}
      >
        {props.t("How to contribute")}
      </a>
    </nav>
  );
}

export default withTranslation('common')(withRouter(injectSheet(styles)(Header)));
