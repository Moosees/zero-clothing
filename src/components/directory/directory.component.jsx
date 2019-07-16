import React, { Component } from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import { sections } from './directory.data';
import './directory.styles.scss';

class Directory extends Component {
  state = { sections };

  render() {
    const items = this.state.sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ));
    return <div className="directory-menu">{items}</div>;
  }
}

export default Directory;
