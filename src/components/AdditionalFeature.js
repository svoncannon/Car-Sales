import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/actions'


const AdditionalFeature = props => {
  const { feature, addFeature } = props
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => {addFeature(feature)}} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
