import injectSheet from 'react-jss'
import { styles } from './styles.js'
import { withRouter } from 'next/router'

function Footer(props) {
  return (
    <footer className={props.classes.footer}>
      <span>Frontend Almanac 2019 – 2020</span>
    </footer>
  )
}

export default withRouter(injectSheet(styles)(Footer))
