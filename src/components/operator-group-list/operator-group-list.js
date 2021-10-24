import React from 'react';

export default  function OperatorGroupList ({ children }) {
    return (
        <div className="my-6 flex justify-between">
            {children}
        </div>
    );
}