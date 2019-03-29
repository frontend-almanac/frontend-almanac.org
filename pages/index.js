import Link from 'next/link';
import { Component, Fragment } from 'react';
import fetch from 'cross-fetch';

import Layout from '../components/MyLayout.js'
import videoList from '../videoList';
import csvToJSON from '../helpser/csv_to_json';

const searchStyle = {
  border: '1px solid #c0c0c0',
  padding: '1% 1%',
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  fontSize: '18px',
  borderRadius: '10px'
}
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
    if (query.length > 3) {
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
      <input onChange={this.search.bind(this)} style={searchStyle} type="text"/>
      
      <section>
        <h1>{this.state.searchSuccess ? 'Результаты поиска' : 'Случайное видео'}</h1>
        <ul>
          {list.map((el, index) => <li key={index}>
            <Link href="/about?id=2" as="/about/2" ><a style={speakerName} href="/about/2">{el.name}</a></Link>
            {' '}
            <a href={el.link} target="_blank">{el.title}</a>
            {' '}
            <a target="_blank">{el.conferenceName} [{el.year}]</a>
          </li>)}
        </ul>
      </section>

    </Layout>
  }

  static async getInitialProps({ query: { id }}) {
    const videos = await fetch('https://raw.githubusercontent.com/frontend-almanac/frontend-almanac.org/master/list.csv?1').then(data => data.text()).catch(error => console.log(error));
    return {
      id,
      list: csvToJSON(videos).sort((el) => {
        return .5 - Math.random();
      }).slice(0, 5)
    };
  }
}

export default Home
