import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from './HelloMessage';

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('app')
);