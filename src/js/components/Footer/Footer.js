import React from 'react';
import { APP_NAME, CURRENT_YEAR } from '../../app-data';

export const Footer = () => (
  <footer>
    <div className='container'>
      {APP_NAME}, {CURRENT_YEAR}
    </div>
  </footer>
);
