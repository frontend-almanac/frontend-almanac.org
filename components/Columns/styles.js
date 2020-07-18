export const styles = {
  columns: {
    display: "flex",
  },
  side: {
    width: "19%",
    margin: [0, "1%", 0, 0],
  },
  content: {
    width: "80%",
  },
  "@media (max-width: 800px)": {
    columns: {
      flexDirection: 'column-reverse'
    },
    side: {
      width: '100%',
    },
    content: {
      width: '100%',
    }
  },
       };
