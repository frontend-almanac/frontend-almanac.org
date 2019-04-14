import Link from 'next/link'
import injectSheet from 'react-jss'
import { styles } from './styles.js'
import { withRouter } from 'next/router'

function Header(props) {
  return (
    <nav className={props.classes.nav}>
      <Link href="/" as="/">
        <a href="/" className={[props.classes.link, props.router.pathname === '/' ? 'active': ''].join(' ')}>На главную</a>
      </Link>
      <Link href="/persons" as="/persons">
        <a href="/persons" className={[props.classes.link, props.router.pathname === '/persons-list' ? 'active' : ''].join(' ')}>Спикеры</a>
      </Link>
      <Link href="/about" as="/about">
        <a href="/about" className={[props.classes.link, props.router.pathname === '/about' ? 'active' : ''].join(' ')}>О проекте</a>
      </Link>
    </nav>
  )
}

export default withRouter(injectSheet(styles)(Header))
