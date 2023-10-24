import React from "react";

import Image from "./image-component";
import Loading from "../loading-component";
import useImageModal from "../../hooks/use-modal";
import useImages from "../../hooks/use-images";

const ImageList = () => {
  const { images, loading } = useImages();

  const { onOpen, setData } = useImageModal();

  const handleClick = (data) => {
    setData(data);
    onOpen();
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 px-4 max-w-7xl mx-auto">
      {loading ? (
        <Loading item={10} />
      ) : (
        images.map((data, key) => (
          <Image key={key} data={data} onClick={() => handleClick(data)} />
        ))
      )}
    </div>
  );
};

export default ImageList;
