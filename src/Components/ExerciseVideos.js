import React from "react";


const ExerciseVideos = ({ name, exerciseVideo }) => {




  return (
    <div className="p-5">
      <div className="p-3 font-bold md:text-2xl text-lg mb-5 text-white">
        <p>
          Watch{" "}
          <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
            {name}
          </span>{" "}
          exercise videos
        </p>
      </div>

      <div className="flex flex-wrap justify-around md:gap-14 gap-5 p-4 ">
        {exerciseVideo.contents?.slice(0, 6)?.map((item,index) => (
          <div key={index} className=" p-2 bg-black md:h-[26rem] w-4/5 md:w-auto   rounded-md">
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img className="md:w-80 md:h-56 w-44 h-32 align-item rounded-md"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div className="md:w-80 md:h-56 p-4 w-44 h-32 my-3">
              <p className="font-bold text-white text-sm md:text-lg">{item.video.title}</p>
              <p className="font-semibold text-red-500 mt-2 text-sm md:text-lg">{item.video.channelName.slice(0,30)}</p>
            </div>
          </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
