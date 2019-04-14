import { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/MyLayout/MyLayout.js'
import videoList from '../services/videoList'
import Conferencies from '../components/Conferencies/Conferencies';
import Title from '../components/Title/title';
import OpenGraph from '../components/OpenGraph/openGraph';

class Persons extends Component {
  render() {
    const titleText = `Список конференций`;
    const ogDesc = 'Список конференций. Список спикеров и каталог ссылок на видео фронтенд конференций Украины';

    return <Layout>
      <Head>
        <title>Список конференций – Фронтенд Альманах</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <OpenGraph url={`https://frontend-almanac.org/conferencies`} title={`${titleText} – Фронтенд Альманах`} description={ogDesc} />
      </Head>
      <section>
        <Title title={titleText} />
        <Conferencies list={this.props.events} />
      </section>
    </Layout>
  }
  static async getInitialProps({ query: { id, name } }) {
    const res = await videoList.fetch();

    const events = res.reduce((acc, el) => {
      if (acc.indexOf(el.conferenceName) === -1) {
        acc.push(el.conferenceName);
      }
      return acc;
    }, []);
    return {
      id,
      events: events.sort()
    }
  }
}

export default Persons
