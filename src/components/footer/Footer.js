import { fontWeight } from '@mui/system';
import React from 'react';
import './footer.module.css';

function Footer() {
  return (
    <div className='footer_container'>
        <h3 style={{textAlign: 'center', color: 'rgba(53, 48, 55, 0.7)', fontWeight: 'bold'}}>Copyright &#169; 2022 Made by ACA students</h3>
    </div>
  );
}

export default Footer;
