import React, { FC } from 'react';

const Wrapper: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {children}
    </div>
  )
}

export default Wrapper