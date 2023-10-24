import React from "react";
import { PiThumbsUpLight } from "react-icons/pi";

const Image = ({ data, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-lg border shadow-md overflow-hidden hover:opacity-80 cursor-pointer"
    >
      <img
        className="h-64 w-full object-cover"
        src={data.urls.small}
        alt={data.alt_description}
      />
      <div className="flex text-xs p-4 justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <img
            className="rounded-full h-10 border-2"
            src={data.user.profile_image.small}
            alt="profile"
          />
          <div className="">
            <div className="text-sm font-medium">{data?.user?.name}</div>
            <div className="text-neutral-400">@{data?.user?.username}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <PiThumbsUpLight size={18} />
          <p>{data.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
