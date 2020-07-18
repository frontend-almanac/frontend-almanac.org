export const styles = {
         searchWrapper: {
           padding: "1% 0",
           position: "relative",
         },
         searchIcon: {
           position: "absolute",
           top: "52%",
           left: "1.5%",
           transform: "translateY(-50%)",
           "& svg": {
             width: 12,
           },
         },
         search: {
           border: "1px solid #E9EEF2",
           padding: "1% 1.5% 1% 3.5%",
           display: "block",
           boxSizing: "border-box",
           width: "100%",
           fontSize: "16px",
           borderRadius: "100px",
           outline: "none",
           color: "6c757d",
           "&:focus": {
             borderColor: "#99caff",
           },
           "&::placeholder": {
             color: "#6c757d",
             fontWeight: 150,
           },
         },
         "@media (max-width: 800px)": {
           searchWrapper: {
             padding: "6vw 0",
           },
           search: {
             fontSize: "6vw",
             padding: "4vw",
           },
           searchIcon: {
             display: 'none',
           }
         },
       };
