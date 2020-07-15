import { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/MyLayout/MyLayout.js';
import Title from '../components/Title/title';
import OpenGraph from '../components/OpenGraph/openGraph';
import { withTranslation } from "../i18n";

const About = ({ t }) => (
  <Layout>
    <Head>
      <title>{t("About – Frontend Almanac")}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <OpenGraph
        url="https://frontend-almanac.org/about"
        title={t("About – Frontend Almanac")}
        description={t("Ukrainian Frontend Conference Videos catalog")}
      />
    </Head>
    <section>
      <Title title={t("About")} />

      <p>
        {t(
          "Frontend Almanac – это своего рода ретроспектива докладов конференций о фронтенде. Вся информация взята из открытых источников и легко ищется в Youtube и поисковых системах."
        )}
      </p>

      <p>
        {t("Все видео собраны в ")}
        <a href="https://github.com/frontend-almanac/frontend-almanac.org/blob/master/list.csv">
          {t("CSV файл")}
        </a>
      </p>
    </section>
  </Layout>
);

About.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(About);
