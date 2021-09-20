import "@shopify/polaris/dist/styles.css";
import { useEffect } from "react";
import {AppProvider} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import Header from './Components/Header';
import Tabs from './Components/Tabs';

function App() {
  useEffect(()=> {
    if(window.localStorage.getItem("likes")==undefined) window.localStorage.setItem("likes",JSON.stringify({}));
    if(window.localStorage.getItem("likesList")==undefined) window.localStorage.setItem("likesList",JSON.stringify({}));
  },[]);

  return (
    <AppProvider i18n={en} theme={{colorScheme: "light"}}>
      <Header />
      <Tabs />
    </AppProvider>
  );
}

export default App;
