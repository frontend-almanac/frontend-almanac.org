import React from 'react';
import injectSheet from "react-jss";
import { styles } from "./styles.js";

function Columns({ children, classes }) {
  const [side, ...rest] = children;
  return (
    <div className={classes.columns}>
      <div className={classes.side}>{side}</div>
      <div className={classes.content}>{rest}</div>
    </div>
  );
}

export default injectSheet(styles)(Columns);
