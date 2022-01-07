import React from 'react';

export default  function OperatorGroupList ({ children }) {
    return (
        <div className="my-6 py-1 flex justify-between space-x-2 overflow-y-scroll sm:overflow-y-visible">
            {children}
        </div>
    );
}