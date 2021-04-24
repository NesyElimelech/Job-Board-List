# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Links

- Solution URL: [https://github.com/NesyElimelech/Job-Board-List](https://github.com/NesyElimelech/Job-Board-List)
- Live Site URL: [https://job-board-list.vercel.app/](https://job-board-list.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

I've learned how to use TailwindCSS inside react app.
Also learned to layout components 'mobile-first' workflow.

To see how you can add code snippets, see below:

```html
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
```

```css
.proud-of-this-css {
  :root {
    --primary: #5ba4a4;
    --secondary: #7b8e8e;
    --bgColor: #effafa;
    --filterTable: #eef6f6;
    --dark: #2c3a3a;
    --black: #242424;
    --shadow: #5ba4a42c;
    --mobile: 375px;
    --desktop: 1440px;
  }
}
```

```js
const proudOfThisFunc = () => {
  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) return true;
    const tags = [role, level];
    if (tools) tags.push(...tools);
    if (languages) tags.push(...languages);
    return filters.every((filter) => tags.includes(filter));
  };
};
```

## Author

- Frontend Mentor - [@NesyElimelech](https://www.frontendmentor.io/profile/NesyElimelech)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
