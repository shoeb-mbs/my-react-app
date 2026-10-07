import React, { Component } from 'react';

class Header extends Component {
    title = 'Galaxy Store';
  render() {
    return (
      <div style={{borderBottom:'1px solid #ccc',padding:'10px', display:'flex', alignItems:'center'}}>
                <img src="../public/favicon.svg" alt="logo" height="40" width="40" verticalAlign ="top" />
                <h3 style={{display:'inline-block',verticalAlign:'top',marginLeft:'10px'}}>{this.title.toLocaleUpperCase()}</h3>
            </div>
    );
  }
}

export default Header;
