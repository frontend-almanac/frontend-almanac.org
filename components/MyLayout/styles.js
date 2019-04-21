export const styles = {
  headerLogo: {
    width: 100,
    margin: '0 auto',
    '& img': {
      width: '100%'
    }
  },
  headerLayout: {
    
  },
  headerRight: {
    
  },
  layout: {
    margin: '0 auto',
    padding: '10px 50px',
    fontSize: 14,
    lineHeight: 1.5,
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
    color: '#6c757d',
    maxWidth: '1300px',
  },
  '@media (max-width: 800px)': {
    layout: {
      padding: '2vw',
      fontSize: '5vw',
      '& p': {
        margin: '5vw'
      }
    },
    headerLogo: {
      width: '25vw',
      margin: '0 auto'
    },
  }
}
