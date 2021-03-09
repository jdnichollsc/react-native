/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 */

'use strict';

const React = require('react');

/**
 * A simple function that renders a React Node.
 * 
 * @param {string} Component - A React Node. Can be a React Component Class, a render function, or a rendered element.
 */
function renderNode(Component?: React.ReactNode) {
  if (!Component) {
    return null;
  } else if (React.isValidElement(Component) || typeof Component !== 'function') {
    return Component;
  } else {
    return (
      // $FlowFixMe
      <Component />
    );
  }
}
 
module.exports = renderNode;
