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
      <Link href="/about" as="/about">
        <a
          href="/about"
          className={[
            props.classes.link,
            props.router.pathname === "/about" ? "active" : "",
          ].join(" ")}
        >
          {props.t("About")}
        </a>
      </Link>
    </nav>
  );
}

export default withTranslation('common')(withRouter(injectSheet(styles)(Header)));
