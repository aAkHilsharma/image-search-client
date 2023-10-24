import React, { useCallback, useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import { PiThumbsUpLight } from "react-icons/pi";
import { CiTwitter, CiInstagram } from "react-icons/ci";

import useImageModal from "../hooks/use-modal";

const ImageModal = () => {
  const { isOpen, onClose, data } = useImageModal();
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center overflow-hidden fixed inset-0 z-50 outline-none bg-neutral-800/70">
      <div className="w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto lg:h-auto md:h-auto p-2 md:p-0">
        <div
          className={`translate duration-300 h-full 
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg w-full bg-white outline-none focus:outline-none">
            <div className="flex flex-col items-center rounded-lg overflow-hidden justify-center relative">
              <button className="p-1 rounded-full bg-[#fafafa] border-0 hover:opacity-70 transition absolute top-2 right-2">
                <IoMdClose onClick={handleClose} size={18} />
              </button>
              <div className="w-full">
                <img
                  className="h-96 object-cover w-full"
                  src={data.urls.full}
                  alt={data?.alt_description}
                />
              </div>
              <div className="w-full flex flex-col p-4 gap-4">
                <div className="flex text-xs w-full justify-between items-center mb-2">
                  <div className="flex items-center justify-center gap-3">
                    <img
                      className="rounded-full h-10 border-2"
                      src={data.user.profile_image.small}
                      alt="profile"
                    />
                    <div className="">
                      <div className="text-sm font-medium">
                        {data?.user?.name}
                      </div>
                      <div className="text-neutral-400">
                        @{data?.user?.username}
                      </div>
                    </div>
                    <div className="flex gap-2 text-[10px] text-neutral-500">
                      {data?.user?.social?.instagram_username && (
                        <div className="flex justify-center items-center">
                          <CiInstagram size={15} />
                          <p>/{data?.user?.social?.instagram_username}</p>
                        </div>
                      )}
                      {data?.user?.social?.twitter_username && (
                        <div className="flex justify-center items-center">
                          <CiTwitter size={15} />
                          <p>/{data?.user?.social?.twitter_username}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <PiThumbsUpLight size={18} />
                    <p>{data.likes}</p>
                  </div>
                </div>
                {data.tags && (
                  <div className="text-[#4f4f4f]">
                    <p className="text-sm font-black mb-2 px-1">Related Tags</p>
                    <div className="flex gap-1">
                      {data.tags.map((tag, index) => (
                        <p
                          key={index}
                          className="font-semibold rounded-lg text-xs px-4 py-2 bg-[#ececec] capitalize"
                        >
                          {tag.title}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
