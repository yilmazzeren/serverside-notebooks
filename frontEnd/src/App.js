import "./App.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotebooks, newPost } from "./redux/actions/notebooksAction";
import Note from "./components/Note";
import SideBar from "./components/SideBar";
import { Button } from "reactstrap";
import alertify from "alertifyjs";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.notebooksReducer);
  const [selectedFile, setSelectedFile] = useState({ fileName: "", value: "" });
  const [inputsValue, setInputsValue] = useState({ fileName: "", value: "" });
  const [localNameInputValue, setlocalNameInputValue] = useState("");
  const [unique, setUniqueness] = useState(false);
  const { files } = state;

  useEffect(async () => {
    dispatch(getNotebooks());
  }, []);

  const handleItemClicked = (file) => {
    setSelectedFile(file);
  };

  const handleSaveNewNote = () => {
    const newObject = {
      fileName: inputsValue.fileName,
      value: "",
    };
    dispatch(newPost({ ...newObject }));
    setlocalNameInputValue("");
    alertify.alert(newObject.fileName, function () {
      alertify.success(`Added New Notebook => ${newObject.fileName}`);
    });
  };

  const handleFileName = (e) => {
    setInputsValue({ ...inputsValue, fileName: e.target.value });
    setlocalNameInputValue(e.target.value);
    checkUniqueness(e);
  };

  const checkUniqueness = (e) => {
    const notUnique = files.some(
      (file) => file.fileName === e.target.value + ".txt"
    );
    setUniqueness(!notUnique);
  };

  const handleNoteChange = (e) => {
    setSelectedFile({ ...selectedFile, value: e.target.value });
  };

  const handleSave = () => {
    const name = selectedFile.fileName.split(".")[0];
    const { value } = selectedFile;
    const file = { fileName: name, value };
    dispatch(newPost(file));
    alertify.alert(value, function () {
      alertify.success(`Changed => ${value}`);
    });
  };
  return (
    <div className="App">
      <h1>Serverside Notebooks</h1>
      <div className="app__components">
        <div className="sidebar__wrapper">
          <div className="sideBar">
            <SideBar
              selectedFile={selectedFile}
              itemClicked={handleItemClicked}
              files={files}
            />
          </div>
          <div className="inputs">
            <label>Name</label>
            <input
              style={{ border: unique ? "2px solid black" : "1px solid red" }}
              value={localNameInputValue}
              onChange={handleFileName}
              type="text"
            />
          </div>
          <Button
            outline
            color="primary"
            style={{ opacity: unique ? "1" : "0.5" }}
            className="button"
            disabled={!unique}
            onClick={handleSaveNewNote}
          >
            New Notebook
          </Button>
        </div>
        <div className="note__container">
          <Note noteChange={handleNoteChange} value={selectedFile.value} />
          <Button
            outline
            color="primary"
            className="save__button"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
