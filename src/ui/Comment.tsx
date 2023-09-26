import React from 'react';

const Comment: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <p className='text-xl font-medium leading-[2.5rem] text-[#607b96]'>
      {children}
    </p>
  );
};

export default Comment;
