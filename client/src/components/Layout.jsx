import React from 'react';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <main className="px-3 lg:px-0 lg:max-w-6xl mx-auto h-screen">
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
