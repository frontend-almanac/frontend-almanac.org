import App from 'next/app';
import Router from "next/router";
import withGA from "next-ga";

class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }
}

export default withGA("UA-88991617-2", Router)(MyApp);
