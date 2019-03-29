import Link from 'next/link'
import { Component } from 'react';
import fetch from 'cross-fetch'
import Layout from '../components/MyLayout.js'

import csvToJSON from '../helpser/csv_to_json';

class About extends Component {
    render() {
      return <Layout>
        <section>
          <h1>О проекте</h1>
          
          <p>Текст о проекте</p>
        </section>

      </Layout>
    }
}

export default About
