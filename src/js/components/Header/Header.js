import React from 'react';
import { APP_NAME } from '../../app-data';

export const Header = () => (
  <header>
    <div className='container'>
      {/* <a href='#'>{APP_NAME}</a> */}
      <h1>{APP_NAME}</h1>
      {/* <span className='text'>Design</span> */}
      {/* <nav>
        <a href='#'>Work</a>
        <a href='#'>Contact</a>
      </nav> */}
    </div>
  </header>
);
