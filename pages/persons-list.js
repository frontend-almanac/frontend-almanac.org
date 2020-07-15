import { Component } from 'react';
import Head from 'next/head';
import { withTranslation } from "../i18n";

import Layout from '../components/MyLayout/MyLayout.js'
import videoList from '../services/videoList'
import SearchResult from '../components/SearchResult/search-result.js';
import Speakers from '../components/Speakers/speakers.js';
import Title from '../components/Title/title';
import OpenGraph from '../components/OpenGraph/openGraph';

class Person extends Component {
  render() {
    const { t } = this.props;
    const titleText = this.props.name
      ? t("Speakes: {{name}}", { name: this.props.name })
      : t("Speakers");
    const ogUrl = this.props.name ? `/${this.props.name}` : "";
    const ogDesc = this.props.name
      ? t(
          "Conference videos {{name}}. Search by Title and Author. Statistics.",
          { name: this.props.name }
        )
      : t("Speakers list and Ukranian Frontend Conference videos");
    
    return (
      <Layout>
        <Head>
          <title>{t("Speaks List – Frontend Almanac")}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <OpenGraph
            url={`https://frontend-almanac.org/persons${ogUrl}`}
            title={t("{{titleText}} – Frontend Almanac", { titleText })}
            description={ogDesc}
          />
        </Head>
        <section>
          <Title title={titleText} />
          {this.props.speakers && <Speakers list={this.props.speakers} />}
          {this.props.name && (
            <SearchResult searchSuccess={true} list={this.props.list} />
          )}
        </section>
      </Layout>
    );
  }
  static async getInitialProps({ query: { id, name } }) {
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
    }
  }
}

export default withTranslation("common")(Person)
