import "./styles.css";
import React, { useState, useCallback} from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.debug("サイレンだ");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false),[setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>ボタン</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
