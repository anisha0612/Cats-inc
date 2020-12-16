import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    textAlign: "center",
    margin: "4em",
  },
});

interface ISearchBoxProps {
handleChange(event:React.SyntheticEvent<HTMLElement>):void
}

const SearchBox = ({ handleChange }:ISearchBoxProps) => {
  const classes = useStyles();
  return (
    <div className={classes.textField}>
      <TextField
        type="search"
        placeholder="Search Cats"
        variant="filled"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
