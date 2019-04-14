import { Fragment } from 'react';

function OpenGraph(props) {
  return (
    <Fragment>
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.content} />
      <meta property="og:image" content='https://frontend-almanac.org/static/logo-fb.png?v2' />
      
      
      <meta name="twitter:card" content="summary"></meta>
      <meta property="twitter:description" content={props.content} />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:image" content='https://frontend-almanac.org/static/logo.png' />

    </Fragment>
  )
}

export default OpenGraph;
