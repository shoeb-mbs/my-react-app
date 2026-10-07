import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div style={{borderBottom:'1px solid #ccc',padding:'10px'}}>
                <img src="../public/logo.png" alt="logo" height="40" width="40" />
                <h3 style={{display:'inline-block',verticalAlign:'top',marginLeft:'10px'}}>Galaxy Store   </h3>
            </div>
    );
  }
}

export default Header;
