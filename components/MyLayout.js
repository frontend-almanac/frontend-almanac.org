import Header from './Header'

const layoutStyle = {
  margin: 0,
  padding: '10px 10px',
  fontSize: 16,
  fontFamily: 'Arial, Sans'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
