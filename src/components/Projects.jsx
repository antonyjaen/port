import React, { useState } from 'react';

const videos = [
  { label: "TTS", file: './TTS.mp4', columns: 2, rows: 2 },
  { label: "QAA", file: './QAA.mp4', columns: 1, rows: 1 },
  { label: "CI/CD", file: './SS.mp4', columns: 1, rows: 1 },
  { label: "E.G.", file: "./primera.mp4", columns: 1, rows: 1 },
  { label: "IONIC", file: './IonicApp.mp4', columns: 2, rows: 1 },
  { label: "EP", file: './EP.mp4', columns: 2, rows: 1 }
];

export const Projects = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [showControls, setShowControls] = useState(Array(videos.length).fill(false));

  const handleClose = () => {
    setPlayingVideo(null);
    setShowControls(Array(videos.length).fill(false));
  };



  return (
    <div className='h-screen bg-white ml-[1.2%] grid grid-flow-row-dense grid-cols-4 grid-rows-10 '>
    
        {videos.map((video, index) => (
          <div key={index} className={`col-span-${video.columns} row-span-${video.rows} bg-slate-400` }>
            {`col-span-${video.columns} row-span-${video.rows} bg-slate-400 w-[100%] h-[100%]`} 
         
            <video
              width="100%"
              height="100"
              onClick={() => {
                setShowControls(showControls.map((_, i) => i === index));
                setPlayingVideo(index);
              }}
              controls={showControls[index]}
            >
              <source src={video.file} type="video/mp4" />
            </video>
            {playingVideo === index && (
              <button className="close-button" onClick={handleClose}>
                Close
              </button>
            )}
          </div>
        ))}
    </div>
  );
};
