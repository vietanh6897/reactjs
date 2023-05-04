import React, { useState } from "react";
import AlbumList from "../components/album";

function AlbumFeature(props) {
  let initAlbumList = [
    {
      id: 1,
      title: "Eat",
      status: true,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/2/0/1/e20121d239e5536869d4544cbef7a9ae.jpg",
    },
    {
      id: 2,
      title: "Eat2",
      status: true,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/2/0/1/e20121d239e5536869d4544cbef7a9ae.jpg",
    },
    {
      id: 3,
      title: "Eat3",
      status: true,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/2/0/1/e20121d239e5536869d4544cbef7a9ae.jpg",
    },
  ];
  let [albumList] = useState(initAlbumList);

  return (
    <div>
      <h3>Albums List</h3>
      <AlbumList albumList={albumList}></AlbumList>
    </div>
  );
}

export default AlbumFeature;
