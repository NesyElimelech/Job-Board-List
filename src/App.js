import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  // Shows only the filtered jobs according the tags pressed on
  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) return true; //check for if the filters array is empty and if it dose return all results
    const tags = [role, level];
    if (tools) tags.push(...tools);
    if (languages) tags.push(...languages);
    return filters.every((filter) => tags.includes(filter));
  };

  const filteredJobs = jobs.filter(filterFunc);

  const handleClickTag = (tag) => {
    //Prevent from adding again the same tag
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const clearFilters = () => {
    // Clear the filters array and make the filter component invisible
    setFilters([]);
  };

  const removeTagFromFilters = (filter) => {
    // Removes a filtered tag from the filters array
    setFilters(filters.filter((f) => f !== filter));
  };

  const width = window.innerWidth;
  const [bgImage, setBgImage] = useState('/images/bg-header-desktop.svg');
  useEffect(() => {
    // Fetching the data from the data.json file
    setJobs(data);
    // Check if the screen size is for desktop or mobile and change the background image accordingly
    width > 640
      ? setBgImage('/images/bg-header-desktop.svg')
      : setBgImage('/images/bg-header-mobile.svg');
  }, [width]);
  return (
    <>
      <header className="banner mb-28 md:mb-16 ">
        <img
          src={bgImage}
          alt="BackgroundImage"
          srcSet={bgImage}
          className="w-screen"
        />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className="flex flex-wrap -my-48 mb-28 md:-my-28 md:mb-16 lg:-my-24 lg:mb-10 mx-12 md:mx-40 p-6 rounded-md justify-between bg-white board relative z-10 ">
            <div className="flex flex-wrap">
              {filters.map((filter) => (
                <div
                  key={filter}
                  className="flex items-center mb-5 md:mb-0 curser-pointer"
                >
                  <span className="tag rounded-md font-bold ">{filter}</span>

                  <span
                    className="remove mr-6 text-3xl text-white font-bold"
                    onClick={() => removeTagFromFilters(filter)}
                  >
                    ×
                  </span>
                </div>
              ))}
            </div>
            <div>
              <button className="clear font-bold" onClick={clearFilters}>
                Clear
              </button>
            </div>
          </div>
        )}
        {filteredJobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              key={job.id}
              job={job}
              handleClickTag={handleClickTag}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;

/**
 *TODO: 1. Study the design & json ✅
 *TODO: 2. Build a Job-Board Component ✅
 *TODO: 3. Get the data from the JSON ✅
 *TODO: 4. Pass down the data to the JBC ✅
 *TODO: 5.a. Style it ✅
 *TODO: 5.b. "Mobile friendly" it ✅
 *TODO: 6. Build Filter component ✅
 *TODO: 7. filter the data ✅
 */
