import React from "react";
import { Input } from "reactstrap";
const Note = ({ value, noteChange }) => {
  return (
    <div>
      <Input
        type="textarea"
        className="textarea"
        onChange={noteChange}
        style={{ paddingLeft: "5px" }}
        value={value}
      />
    </div>
  );
};

export default Note;
