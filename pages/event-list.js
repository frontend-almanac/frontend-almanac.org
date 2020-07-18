import { Component } from 'react';
import Head from 'next/head';
import { withTranslation } from "../i18n";

import Layout from '../components/MyLayout/MyLayout.js'
import videoList from '../services/videoList'
import Conferencies from '../components/Conferencies/Conferencies';
import Title from '../components/Title/title';
import OpenGraph from '../components/OpenGraph/openGraph';
import getConferencies from '../helpser/get-conferencies';
class Persons extends Component {
  render() {
    const { t } = this.props;
    const titleText = t("Conference list");
    const ogDesc = t(
      "Frontend Conference list. Speaker list and Ukrainian Frontend Conference Videos catalog"
    );

    return (
      <Layout>
        <Head>
          <title>{t("Conference list – Frontend Almanac")}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <OpenGraph
            url={`https://frontend-almanac.org/conferencies`}
            title={t("{{titleText}} – Frontend Almanac", { titleText })}
            description={ogDesc}
          />
        </Head>
        <section>
          <Title title={titleText} />
          <Conferencies list={this.props.events} />
        </section>
      </Layout>
    );
  }
  static async getInitialProps({ query: { id, name } }) {
    const res = await videoList.fetch();

    return {
      id,
      events: getConferencies(res),
    };
  }
}

export default withTranslation("common")(Persons)
