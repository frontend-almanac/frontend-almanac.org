import { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/MyLayout/MyLayout.js'
import videoList from '../services/videoList'
import SearchResult from '../components/SearchResult/search-result.js';
import Speakers from '../components/Speakers/speakers.js';
import Title from '../components/Title/title';
import OpenGraph from '../components/OpenGraph/openGraph';

class Event extends Component {
  render() {
    const titleText = `Видео конференции ${this.props.name}`;
    const ogUrl = `/${this.props.name}`;
    const ogDesc = `Ссылки на видео докладов ${this.props.name}. Поиск по названию, автору. Статистика по конференциям.`;
    return <Layout>
      <Head>
        <title>Видео конференции {this.props.name} – Фронтенд Альманах</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <OpenGraph url={`https://frontend-almanac.org/event${ogUrl}`} title={`${titleText} – Фронтенд Альманах`} description={ogDesc} />        
      </Head>
      <section>
        <Title title={titleText} />
        {this.props.speakers && <Speakers list={this.props.speakers} />}
        {this.props.name && <SearchResult searchSuccess={true} list={this.props.list} />}
      </section>
    </Layout>
  }
  static async getInitialProps({ query: { id, name } }) {
    const res = await videoList.fetch();
    if (name) {
      return {
        name,
        list: res.filter(el => el.conferenceName === name)
      }
    }
  }
}

export default Event
