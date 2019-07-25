import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../../components/menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

const Directory = ({ sections }) => {
  const items = sections.map(({ id, ...sectionProps }) => (
    <MenuItem key={id} {...sectionProps} />
  ));
  return <div className="directory-menu">{items}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
