import App from 'next/app';
import Router from "next/router";
import withGA from "next-ga";
import { appWithTranslation } from "../i18n";

class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default appWithTranslation(
  withGA("UA-88991617-2", Router)(MyApp)
);
