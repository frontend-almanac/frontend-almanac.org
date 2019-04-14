import Header from '../Header/Header'
import Link from 'next/link'
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
      <div className={props.classes.headerLayout}>
        <div className={props.classes.headerLogo}>
          <Link href="/" as="/"><a href="/"><img src="/static/logo.svg" width="100px" alt=""/></a></Link>
        </div>
        <div className={props.classes.headerRight}>
          <Header />
        </div>
      </div>
      {props.children}
      <Footer />
    </div>
  )
}
export default injectSheet(styles)(Layout);
