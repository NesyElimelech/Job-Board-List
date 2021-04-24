import React from 'react';
import TagComponent from './TagComponent';

const JobBoardComponent = ({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleClickTag,
}) => {
  // Array of tags (role, level, languages, tools) from the data
  const tags = [role, level];
  if (languages) tags.push(...languages);
  if (tools) tags.push(...tools);

  return (
    <div
      className={`flex flex-wrap content-center justify-between mx-10 md:mx-40 mb-12 md:mb-5 p-6 bg-white rounded-md relative board ${
        featured && 'featured'
      }`}
    >
      {/* Left side of the board */}
      {/* Image */}
      <div className="mb-5 xl:mb-0 flex md:items-center">
        <div className="absolute -mt-28 md:mt-auto md:relative md:mr-5">
          <img className="w-28 h-28 md:w-32 md:h-32" src={logo} alt={company} />
        </div>
        {/* Text */}
        <div className="mt-9 md:mt-0 leftSide">
          <div className="flex items-center">
            <h3 className="font-bold text-lg">{company}</h3>
            {/* Labels */}
            {isNew && (
              <span className="mx-5 uppercase font-bold text-sm text-white py-1 px-2 rounded-full newLabel">
                {isNew ? 'New!' : ''}
              </span>
            )}
            {featured && (
              <span className="uppercase font-bold text-sm text-white py-1 px-2 rounded-full bg-gray-700">
                {featured ? 'Featured' : ''}
              </span>
            )}
          </div>
          {/* Text */}
          <h2 className="my-3 text-2xl font-bold text-gray-700 link cursor-pointer">
            {position}
          </h2>
          <p className="text-gray-400">
            {postedAt} <span className="text-2xl font-bold mx-2">·</span>{' '}
            {contract} <span className="text-2xl font-bold mx-2">·</span>{' '}
            {location}
          </p>
        </div>
      </div>
      {/* Right side of the board */}
      <div className="flex flex-wrap items-center ml-auto">
        {/* view all the tags, By clinking on one, it's filters out the rest  */}
        {tags
          ? tags.map((tag, index) => (
              <TagComponent
                key={index}
                tag={tag}
                handleClickTag={handleClickTag}
              />
            ))
          : ''}
      </div>
    </div>
  );
};

export default JobBoardComponent;
