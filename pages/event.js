import { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/MyLayout/MyLayout.js'
import Search from '../components/Search/search.js';
import videoList from '../services/videoList'
import SearchResult from '../components/SearchResult/search-result.js';
import Speakers from '../components/Speakers/speakers.js';
import Title from '../components/Title/title';
import OpenGraph from '../components/OpenGraph/openGraph';
import { withTranslation } from "../i18n";

class Event extends Component {
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
    const { t, name, list: propList, speakers } = this.props;
    const { list: stateList } = this.state;
    const titleText = t("Conference videos {{name}}", { name });
    
    const ogUrl = `/${name}`;
    const ogDesc = t(
      "Conference videos {{name}}. Search by title, author. Statistics.",
      { name }
    );
    const list = this.state.searchSuccess ? stateList : propList;
    return (
      <Layout>
        <Head>
          <title>
            {t("Conference videos {{name}} – Frontend Almanac", { name })}
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <OpenGraph
            url={`https://frontend-almanac.org/event${ogUrl}`}
            title={t("{{titleText}} – Frontend Almanac", { titleText })}
            description={ogDesc}
          />
        </Head>
        <section>
          <Title title={titleText} />
          <Search page="event" onSearch={this.search.bind(this)}></Search>
          {speakers && <Speakers list={speakers} />}
          {name && <SearchResult searchSuccess={true} list={list} />}
        </section>
      </Layout>
    );
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

export default withTranslation("common")(Event);
