import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class navComponent extends Component {


render() {
  return (

    <nav>
      <ul className="links-ul-left">
        <li className="link-archive"><Link to='/'>Archives</Link></li>
      </ul>
      <ul className="links-ul-right">
      <li className="link-create"><Link to='/createpost#main'>Create Post</Link></li>
      </ul>
    </nav>
    )
  }
}

export default navComponent;
