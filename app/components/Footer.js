import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p>
        <Link to="/" className="mx-1">
          Home
        </Link>{' '}
        |
        <a className="mx-1" href="/about-us">
          About Us
        </a>{' '}
        |
        <a className="mx-1" href="/terms">
          Terms
        </a>
      </p>
      <p className="m-0">
        Copyright &copy; 2020{' '}
        <Link to="/" className="text-muted">
          SocialApp
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
