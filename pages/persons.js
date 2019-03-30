import { Component } from 'react';
import Layout from '../components/MyLayout/MyLayout.js'
import videoList from '../services/videoList'
import SearchResult from '../components/SearchResult/search-result.js';
import Speakers from '../components/Speakers/speakers.js';
import Title from '../components/Title/title';

class Persons extends Component {
  render() {
    const titleText = this.props.name ? `Спикеры: ${this.props.name}` : 'Спикеры';
    return <Layout>
      <section>
        <Title title={titleText} />
        {this.props.speakers && <Speakers list={this.props.speakers} /> }
        { this.props.name && <SearchResult searchSuccess={true} list={this.props.list} /> }
      </section>
    </Layout>
  }
  static async getInitialProps({ query: { id, name } }) {
    const res = await videoList.fetch();
    if (name) {
      return {
        name,
        list: res.filter(el => el.name === name )
      }
    }
    const speakers = res.reduce((acc, el) => {
      if (acc.indexOf(el.name) === -1) {
        acc.push(el.name);
      }
      return acc;
    }, []);
    return {
      id,
      speakers: speakers.sort((first, second) => {
        const letterFirst = first.split(' ').pop();
        const letterSecond = second.split(' ').pop();
        if(letterFirst[0] > letterSecond[0]) {
          return 1;
        } else if (letterFirst[0] < letterSecond[0]) {
          return -1
        }
        return 0;
      })
    }
  }
}

export default Persons
