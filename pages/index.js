import { Component } from 'react';
import Head from 'next/head';

import Layout from '../components/MyLayout/MyLayout.js'
import Search from '../components/Search/search.js';
import SearchResult from '../components/SearchResult/search-result.js';
import videoList from '../services/videoList';


const speakerName = {
  fontSize: '18px',
  textDecoration: 'none'
}

class Home extends Component {
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
    await videoList.fetch();
  }
  render() {
    const list = this.state.searchSuccess ? this.state.list : this.props.list;
    return <Layout>
      <Head>
        <title>Главная – Фронтенд Альманах</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://frontend-almanac.org/" />
        <meta property="og:title" content="Фронтенд Альманах" />
        <meta property="og:description" content="Каталог ссылок на видео фронтенд конференций Украины" />
      </Head>
      <Search onSearch={this.search.bind(this)}></Search>
      <SearchResult searchSuccess={this.state.searchSuccess} list={list} />
    </Layout>
  }

  static async getInitialProps({ query: { id }}) {
    const res = await videoList.fetch();
    
    return {
      id,
      list: res.sort((el) => {
        return .5 - Math.random();
      }).slice(0, 5)
    };
  }
}

export default Home
