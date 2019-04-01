import { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/MyLayout/MyLayout.js'
import Title from '../components/Title/title'

class About extends Component {
    render() {
      return <Layout>
        <Head>
          <title>О проекте – Frontend Almanac</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:url" content="https://frontend-almanac.org/about" />
          <meta property="og:title" content="О проекте – Frontend Almanac" />
          <meta property="og:description" content="Каталог ссылок на видео фронтенд конференций Украины" />
        </Head>
        <section>
          <Title title="О проекте" />
          
          <p>
            Frontend Almanac – это своего рода ретроспектива докладов конференций о фронтенде. 
            Вся информация взята из открытых источников и легко ищется в Youtube и поисковых системах.
          </p>
          <p>
            Изначально информация просто накапливалась в XLS файле с интересными видео, 
            но потом появилась идея собрать и систематизировать доклады сообщества украинского фронтенда.
          </p>
          <p>
            На текущий момент в планах наполнить коллекцию ссылками на видео докладов за прошедшие годы и далее 
            добавлять новинки. Уже сейчас в коллекции более 300 ссылок на видео с возможностью поиска и фильтрации.
          </p>
          <p>
            Проект рассчитан в первую очередь на начинающих фронтенд разработчиков и призван помочь им с поиском информации. 
            Хотя, может быть кому-то просто будет интересно посмотреть на конференции в разрезе спикеров или тематики. 
            А кто-то может быть просто найдет себя в списке докладчиков.
          </p>
          <p>
            Все видео собраны в <a href="https://github.com/frontend-almanac/frontend-almanac.org/blob/master/list.csv">CSV файл</a> и каждый может помочь с наполнением. 
            Если хотите помочь – присылайте пулреквесты или просто пишите <a href="mailto:denis.zavgorodny@gmail.com">на почту</a>.
          </p>
          
        </section>

      </Layout>
    }
}

export default About
