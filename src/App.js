import "@shopify/polaris/dist/styles.css";
import { useEffect } from "react";
import Header from './Components/Header';
import Images from './Components/Images';


function App() {
  useEffect(()=> {
    if(window.localStorage.getItem("likes")===undefined) window.localStorage.setItem("likes",JSON.stringify({}));
    if(window.localStorage.getItem("likesArray")===undefined) window.localStorage.setItem("likesArray",JSON.stringify([]));
  },[]);

  return (
    <div className="App">
      <Header />
      <Images />
    </div>
  );
}

export default App;
