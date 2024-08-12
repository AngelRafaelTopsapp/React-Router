import React, { useState } from 'react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <iframe 
          width="100%" 
          height="315" 
          src={videoUrl} 
          title="Video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="p-4">
      <button 
        onClick={handleOpenModal} 
        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
      >
        Open Video
      </button>
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" 
      />
    </div>
  );
};

export default Video;
