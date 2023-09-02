import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFoundScreen = () => {
    return (
        <div>
          <h1> 404 ERROR </h1> 
          <NavLink to="/">go to Home Page</NavLink> 
        </div>
    );
};

export default PageNotFoundScreen;