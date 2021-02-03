import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const SideBar = ({ files, itemClicked, selectedFile }) => {
  return (
    <ListGroup>
      {files?.map((file, key) => (
        <ListGroupItem
          active={selectedFile.fileName === file.fileName}
          key={key}
          onClick={() => itemClicked(file)}
        >
          {file.fileName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default SideBar;
