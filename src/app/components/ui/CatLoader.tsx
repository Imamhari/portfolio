import React from 'react';
import styles from "../../styles/catLoader.module.css";

const CatLoader: React.FC = () => {
  const segments = Array.from({ length: 30 });

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2c4763] relative">
      <p className={`${styles.loading__text} absolute text-white text-[1.9rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        Loading
      </p>
      <div className={`${styles.cat} cat relative w-[16em] h-[16em] m-auto`}>
        {segments.map((_, index) => (
          <div key={index} className={`${styles.cat__segment}`} />
        ))}
      </div>
    </div>
  );
};

export default CatLoader;
