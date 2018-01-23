import * as React from 'react';

export default function SponsoredBy() {
  return <div className="sponsored-by">
    <h3 className="sponsored-by-header">Sponsored by</h3>
    <a className="sponsored-by-image" href="https://m.do.co/c/473e904fbb85">
      <img
        src="/assets/img/digitalocean.png"
        alt="Digitalocean"
      />
    </a>
  </div>;
}
