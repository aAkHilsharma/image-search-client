import React, { useEffect } from "react";

import ImageList from "./components/images/image-list-component";
import JumboTron from "./components/jumbotron-component";
import useAxios from "./hooks/use-axios";
import ImageModal from "./modals/image-modal";

const API_URL = `/search/photos?per_page=20&query=peace&client_id=${process.env.REACT_APP_ACCESS_KEY}`;

function App() {
  const { fetchImages } = useAxios();

  useEffect(() => {
    fetchImages(API_URL);
  }, []);

  return (
    <>
      <JumboTron />
      <ImageList />
      <ImageModal />
    </>
  );
}

export default App;
