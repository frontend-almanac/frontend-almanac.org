import { Component } from 'react';
import Layout from '../components/MyLayout.js';
import csvToJSON from '../helpser/csv_to_json';
import fetch from 'cross-fetch';

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
    const videos = await fetch('https://raw.githubusercontent.com/frontend-almanac/frontend-almanac.org/master/list.csv?1').then(data => data.text()).catch(error => console.log(error));
    const speakers = csvToJSON(videos).reduce((acc, el) => {
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
        console.log(letterFirst[0], letterSecond[0]);
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
