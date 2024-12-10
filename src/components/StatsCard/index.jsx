import React from "react";
import classes from "./StatsCard.module.css";

export default function StatsCard({ data }) {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.iconDiv}>
        <div className={classes.imageDiv}>
          <img src={data?.icon} alt="icon" />
        </div>
      </div>
      <div className={classes.textsDiv}>
        <h3>{data?.value}</h3>
        <h6>{data?.label}</h6>
      </div>
    </div>
  );
}
