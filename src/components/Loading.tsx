import React from 'react';
import Spinner from './Spinner';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Spinner />
        <p className="mt-4 text-gray-600">Caricamento...</p>
      </div>
    </div>
  );
};

export default Loading;
