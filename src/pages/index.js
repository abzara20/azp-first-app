import React from 'react';
import {Link} from 'gatsby';

const HomePage = () => {
  //Creating a function for when button is clicked
  function onButtonClick(){
    console.log('hello');
  }

  return (
    //react fragment tags hold multiple tags on one since the return would usually take only one tag. it bundles them together
    <React.Fragment>
      <h1>Home Page</h1>
      <p>Hi</p>
    {/* the onClick function uses curly brackets */}
      <button onClick={onButtonClick}>Click Me!</button>
      <div></div>
      <a href='/about'>Go to the About Page</a>
      <div></div>
      <Link to='/about'>Link to the About Page</Link>
      {/* Link is nice because it loads faster than the 'a' tag, and it keeps the little memory
      for example. the data from clicking the button and it console logging. 'a' tag reloads the page, and is slower */}
    </React.Fragment>
  );
};

export default HomePage;