import Header from '../Header/Header'
import injectSheet from 'react-jss'
import { styles } from './styles.js'


function Layout(props) {
  return (
    <div className={props.classes.layout}>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #F7F9FA;
        }
      `}</style>
      <Header />
      {props.children}
    </div>
  )
}
export default injectSheet(styles)(Layout);
