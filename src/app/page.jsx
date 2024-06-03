import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sakaslist</h1>
        <p>Connecting Verified Artisans, Vendors, and Subscribers</p>
      </header>
      <main className="App-main">
        <h2>Welcome to Sakaslist</h2>
        <p>
          Sakaslist is the premier platform for connecting skilled artisans and trusted vendors with discerning subscribers
          who seek high-quality craftsmanship and reliable services. Whether you're an artisan looking to showcase your
          work, a vendor seeking new customers, or a subscriber searching for exceptional service providers, Sakaslist
          is your go-to solution.
        </p>
        <a href="https://play.google.com/store/apps/details?id=com.lafiagi.sakaslistmobile" className="cta-button">Download the App on Google Play</a>
        <section className="features">
          <div className="feature">
            {/* <img src={artisanImg} alt="Artisans" /> */}
            <h3>Verified Artisans</h3>
            <p>Our platform features a curated list of verified artisans who excel in their respective crafts. From
              skilled carpenters to talented painters, find the right expert for your project on Sakaslist.</p>
          </div>
          <div className="feature">
            {/* <img src={vendorImg} alt="Vendors" /> */}
            <h3>Trusted Vendors</h3>
            <p>Discover vendors who offer high-quality products and services. Our verification process ensures that you
              only connect with reliable and reputable vendors on Sakaslist.</p>
          </div>
          <div className="feature">
            {/* <img src={subscriberImg} alt="Subscribers" /> */}
            <h3>Happy Subscribers</h3>
            <p>Join a community of satisfied subscribers who trust Sakaslist for their artisan and vendor needs. Enjoy
              seamless connections and exceptional service every time.</p>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Sakaslist. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
