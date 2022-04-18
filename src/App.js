import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./App.scss";
import MusicFestivalIndex from "./MusicFestivalIndex";

const App = () => {
  return (
    <div className="App">
      <MusicFestivalIndex/>
    </div>
  );
};

export default App;