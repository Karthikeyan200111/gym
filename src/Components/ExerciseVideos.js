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

      <div className="flex flex-wrap justify-around md:gap-14 gap-5  items-center ">
        {exerciseVideo.contents?.slice(0, 6)?.map((item,index) => (
          <div key={index} className="p-5 bg-black md:w-80 md:h-96 w-52 h-80    rounded-md hover:translate-y-5 transition-transform">
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="md:w-80 md:h-56 w-44 h-32"
          >
            <img className="md:w-80 md:h-56 w-44 h-32 align-item rounded-md md:mr-3"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div className="md:w-80 md:h-56 p-2 w-44 h-36 my-3 ">
              <p className="font-bold text-white text-sm md:text-lg">{item.video.title}</p>
              <p className="font-semibold text-red-500 mt-1 text-sm md:text-lg">{item.video.channelName.slice(0,25)}</p>
            </div>
          </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
