import { useState } from "react";

export default function WatchVideo( {handerColose}) {
  return (
    <div className="fixed inset-0 bg-black/50 z-40">
      <div className="w-full max-w-[940px] aspect-video absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto">
        <button
          onClick={(e)=>handerColose(false)}
          className="absolute top-2 right-2 text-white text-2xl z-50"
        >
          ✕
        </button>
        <iframe
         className="w-full h-full"
          width="940"
          height="529"
          src="https://www.youtube.com/embed/iSbzh0r9IV4?si=YmKgBVgpTykOxq5O"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
