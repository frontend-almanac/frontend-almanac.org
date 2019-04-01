import { Fragment } from 'react';

function OpenGraph(props) {
  return (
    <Fragment>
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.content} />
      
      <meta name="twitter:card" content="summary"></meta>
      <meta property="twitter:description" content={props.content} />
      <meta property="twitter:title" content={props.title} />

    </Fragment>
  )
}

export default OpenGraph;
