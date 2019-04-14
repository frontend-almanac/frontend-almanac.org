import { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/MyLayout/MyLayout.js'
import Search from '../components/Search/search.js';
import videoList from '../services/videoList'
import SearchResult from '../components/SearchResult/search-result.js';
import Speakers from '../components/Speakers/speakers.js';
import Title from '../components/Title/title';
import OpenGraph from '../components/OpenGraph/openGraph';

class Persons extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      searchSuccess: false
    };
  }
  search(el) {
    const query = el.target.value;
    if (query.length >= 3) {
      const res = videoList.search(el.target.value);
      this.setState({
        list: res,
        searchSuccess: true
      });
    } else {
      this.setState({
        list: [],
        searchSuccess: false
      });
    }
  }
  async componentDidMount() {
    videoList.forceSet(this.props.list);
  }
  render() {
    const titleText = this.props.name ? `Спикеры: ${this.props.name}` : 'Спикеры';
    const ogUrl = this.props.name ? `/${this.props.name}` : '';
    const ogDesc = this.props.name ? `Ссылки на видео докладов ${this.props.name}. Поиск по названию, автору. Статистика по конференциям.` : 'Список спикеров и каталог ссылок на видео фронтенд конференций Украины';
    const list = this.state.searchSuccess ? this.state.list : this.props.list;

    return <Layout>
      <Head>
        <title>Список спикеров – Фронтенд Альманах</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <OpenGraph url={`https://frontend-almanac.org/persons${ogUrl}`} title={`${titleText} – Фронтенд Альманах`} description={ogDesc} />
      </Head>
      <section>
        <Title title={titleText} />
        {this.props.name && <Search page='persons' onSearch={this.search.bind(this)}></Search>}
        {this.props.speakers && <Speakers list={this.props.speakers} />}
        {this.props.name && <SearchResult searchSuccess={true} list={list} />}
      </section>
    </Layout>
  }
  static async getInitialProps({ query: { id, name } }) {
    const res = await videoList.fetch();
    return {
      name,
      list: res.filter(el => el.name === name)
    }
  }
}

export default Persons
