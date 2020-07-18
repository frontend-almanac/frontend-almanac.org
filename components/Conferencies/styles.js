export const styles = {
         listContainer: {
           backgroundColor: "#E9EEF2",
           padding: "1%",
           borderRadius: 8,
         },
         speakerList: {
           listStyle: "none",
           margin: 0,
           padding: 0,
           textAlign: "center",
         },
         speakerItem: {
           display: "inline-block",
         },
         speakerItemRow: {
           display: "block",
           textAlign: "left",
         },
         speakerItemLink: {
           display: "block",
           backgroundColor: "#fff",
           borderRadius: "5px",
           margin: "0 10px 10px 0",
           padding: "2px 5px",
           color: "rgba(33, 37, 41, 0.5)",
           textDecoration: "none",
           "&:hover": {
             color: "#007bff",
           },
         },
         speakerItemLinkRow: {
           display: "block",
           backgroundColor: "#fff",
           borderRadius: "5px",
           borderWidth: 3,
           borderTopWidth: 0,
           borderBottomWidth: 0,
           borderRightWidth: 0,
           borderStyle: 'solid',
           margin: [10, 8],
           padding: "2px 5px",
           color: "rgba(33, 37, 41, 0.5)",
           textDecoration: "none",
           "&:hover": {
             color: "#007bff",
           },
         },
         "@media (max-width: 800px)": {
           listContainer: {
             padding: "6vw",
           },
           speakerItemLink: {
             fontSize: "5vw",
             margin: "0 4vw 4vw 0",
           },
         },
       };
