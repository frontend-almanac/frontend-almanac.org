import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}
const navStyle = {
  padding: '1% 0'
}

export default function Header() {
  return (
    <nav style={navStyle}>
      <Link href="/">
        <a href="/" style={linkStyle}>На главную</a>
      </Link>
      <Link href="/persons">
        <a href="/persons" style={linkStyle}>Спикеры</a>
      </Link>
      <Link href="/about">
        <a href="/about" style={linkStyle}>О проекте</a>
      </Link>
    </nav>
  )
}
