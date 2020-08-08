import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  name: {
    fontSize: "2em",
  },
  email: {
    fontSize: "1.3em",
  },
  paddingTop: {
    paddingTop: "1.2em",
  },
  card: {
    margin: "1em",
    textAlign: "center",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    padding: "1.5em",
    background:
      "linear-gradient(to right top, #8bcdcd, #98d7c8, #ade0c1, #c7e7ba, #e5edb7);",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.06)",
    },
  },
});

const EachCard = (props) => {
  const imgUrl = `https://robohash.org/${props.monster.id}?set=set4&size=200x200`;
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <img src={imgUrl} alt={props.monster.name} />
        <CardContent>
          <Typography className={classes.name}>{props.monster.name}</Typography>
          <Typography className={classes.email}>
            {props.monster.email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default EachCard;
