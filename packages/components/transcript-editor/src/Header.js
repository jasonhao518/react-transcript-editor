import React from 'react';
import {
  faCog,
  faKeyboard,
  faShare
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from '../index.module.css';

class Header extends React.Component {

  // to avoid unnecessary re-renders
  shouldComponentUpdate(nextProps) {
    if (nextProps !== this.props) return true;

    return false;
  }
  render() {
    const props = this.props;

    return (<>
      <nav className={ style.nav }>
        {props.mediaUrl === null ? null : props.mediaControls}
      </nav>


    </>);
  };
}

export default Header;
