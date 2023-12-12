import React from "react";

import Image from "./image-component";
import Loading from "../loading-component";
import useImageModal from "../../hooks/use-modal";
import useImages from "../../hooks/use-images";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageList = () => {
  const { images, loading } = useImages();
  const { onOpen, setData } = useImageModal();

  const handleClick = (data, dataTest) => {
    setData(data, dataTest);
    onOpen();
  };

  return (
    <div
      className="my-10 px-4 max-w-7xl mx-auto"
      data-test="image-list-container"
    >
      {loading ? (
        <Loading />
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            300: 1,
            600: 2,
            700: 2,
            900: 3,
            1200: 4,
          }}
        >
          <Masonry gutter="20px">
            {images.map((data, key) => (
              <Image
                dataTest={`image-${key}`}
                key={key}
                data={data}
                onClick={() => handleClick(data, `modal-${key}`)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </div>
  );
};

export default ImageList;
