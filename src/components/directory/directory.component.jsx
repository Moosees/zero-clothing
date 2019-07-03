import React, { Component } from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import { sections } from './directory.data';
import './directory.styles.scss';

class Directory extends Component {
  state = { sections };

  render() {
    const items = this.state.sections.map(({ title, imageUrl, size, id }) => (
      <MenuItem title={title} imageUrl={imageUrl} size={size} keu={id} />
    ));
    return <div className="directory-menu">{items}</div>;
  }
}

export default Directory;
