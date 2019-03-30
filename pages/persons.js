import { Component } from 'react';
import Layout from '../components/MyLayout/MyLayout.js'
import videoList from '../services/videoList'

class Persons extends Component {
  render() {
    return <Layout>
      <section>
        <h1>Спикеры</h1>

        <ul>
          {this.props.speakers.map(el => <li key={el}>{el}</li>)}
        </ul>
      </section>

    </Layout>
  }
  static async getInitialProps({ query: { id } }) {
    const res = await videoList.fetch();
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
    };
  }
}

export default Persons
