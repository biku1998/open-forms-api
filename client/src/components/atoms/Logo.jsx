import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div
      className="inline-block cursor-pointer font-bold text-blue-700 text-xl lg:text-2xl"
      style={{ fontFamily: 'Itim' }}
    >
      <Link to="/forms"> Open Forms </Link>
    </div>
  );
}
