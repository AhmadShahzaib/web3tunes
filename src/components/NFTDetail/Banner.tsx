import React from 'react';

export default function Banner() {
  return (
    <section className="inner-page-banner bg-2 bg-image">
      <div className="container">
        <div className="inner text-center">
          <h1 className="title">Item Details</h1>
          <nav className="mt-4">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Item Details
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End .container */}
    </section>
  );
}
