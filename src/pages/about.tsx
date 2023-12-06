// pages/about.tsx
import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    
    <div>
      <h1>About Us</h1>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
      {/* Other content */}
    </div>
  );
};

export default About;
