import React from 'react';

const MyComponent = ({ data }) => {
  // Ensure 'data' is serializable
  // For example, if 'data' is an object, make sure it doesn't contain functions or non-serializable types

  return (
    <div>
      {/* Render your component */}
      {JSON.stringify(data)}
    </div>
  );
};

export default MyComponent;
