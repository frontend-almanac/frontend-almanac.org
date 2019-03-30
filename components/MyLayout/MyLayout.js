import Header from '../Header/Header'
import Footer from '../Footer/Footer'
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
        a {
          color: rgba(33, 37, 41, 0.5);
        }
        a:hover {
          color: #007bff;
        }
      `}</style>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
export default injectSheet(styles)(Layout);
