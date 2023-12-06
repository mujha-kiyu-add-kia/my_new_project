// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      {/* Other content */}
    </div>
  );
};

export default Home;
