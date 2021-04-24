import React from 'react';

const TagComponent = ({ tag, handleClickTag }) => {
  return (
    <span
      className=" tags mr-6 mb-10 md:mb-0"
      onClick={() => handleClickTag(tag)}
    >
      {tag}
    </span>
  );
};

export default TagComponent;
