export const styles = {
  searchResult: {
    backgroundColor: '#E9EEF2',
    padding: '1%',
    borderRadius: 8
  },
  title: {
    color: '#212529',
    fontSize: '18px',
    lineHeight: 1.2,
    fontWeight: 'normal',
    margin: 0,
    padding: 0
  },
  cardList: {
    margin: 0,
    padding: 0
  },
  cardItem: {
    backgroundColor: '#fff',
    boxShadow: '0 0.1875rem 0.375rem rgba(33, 37, 41, 0.05)',
    margin: '1% 0 0',
    padding: '1%',
    borderRadius: 8,
    listStyle: 'none',
    position: 'relative',
  },
  cardItemMark: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    border: 0,
    borderTop: '2px solid #E9EEF2',
    borderRadius: '30px'
  },
  cardItemTitle: {
    maxWidth: '70%',
    fontWeight: 600,
    fontSize: 15,
    '& a': {
      color: '#212529',
      textDecoration: 'none',
      '&:hover': {
        color: '#007bff'
      }
    }
  },
  cardItemAuthor: {
    maxWidth: '70%',
    '& a': {
      color: '#6c757d',
      textDecoration: 'none',
      '&:hover': {
        color: '#212529'
      }
    }
  },
  cardItemYear: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '1% 1% 0 0'
  },
  cardItemConference: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '0 1% 1% 0'
  },
  '@media (max-width: 800px)': {
    searchResult: {
      padding: '6vw',
    },
    title: {
      fontSize: '7vw',
      margin: '0 0 6vw 0',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },
    cardItem: {
      padding: '3vw',
      margin: '6vw 0 0',
    },
    cardItemTitle: {
      fontSize: '5vw',
      lineHeight: 1.2,
      margin: '0 0 3vw'
    },
    cardItemAuthor: {
      fontSize: '4vw'
    },
    cardItemYear: {
      fontSize: '4vw',
      padding: '3vw 3vw 0 0'      
    },
    cardItemConference: {
      fontSize: '4vw',
      padding: '0 3vw 3vw 0'      
    }
  }
}
