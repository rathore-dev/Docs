import { useRef, useState } from "react";
import Card from "./Card";


function Foreground() {
    const ref = useRef(null)

  const data = [
    {
      id:1,
      desc: "This is the shop car audio upgrade in Audiophile.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      id:2,
      desc: "This is the shop car audio upgrade in Audiophile.",
      filesize: ".8mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      id:3,
      desc: "This is the shop car audio upgrade in Audiophile.",
      filesize: ".6mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      
    },
   
  ];
  return (
    <div ref={ref} className="fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap">
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
