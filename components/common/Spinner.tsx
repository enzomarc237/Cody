
import React from 'react';

interface SpinnerProps {
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-400"></div>
    </div>
  );
};

export default Spinner;
