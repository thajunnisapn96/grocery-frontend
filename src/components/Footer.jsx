import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column bg-primary text-light mt-5" style={{ width: "100%", height: "300px" }}>
      <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
        <div style={{ width: '400px' }} className="website">
          <h4>
            <i className="fa-solid fa-shopping-cart"></i> Grocery Hub
          </h4>
          <p>
            Your one-stop destination for fresh groceries. Browse, order, and get your groceries delivered with love by the Grocery Hub team.
          </p>
        </div>
        <div className="links d-flex flex-column">
          <h4>Quick Links</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
          <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'https://www.asweetpeachef.com/grocery-shopping-tips/'} style={{ textDecoration: 'none', color: 'white' }}>Grocery Shopping Tips</Link>
          <Link to={'https://www.allrecipes.com/recipes/78/breakfast-and-brunch/'} style={{ textDecoration: 'none', color: 'white' }}>Recipes</Link>
          <Link to={'/https://www.instagram.com/zamzam_fresh/'} style={{ textDecoration: 'none', color: 'white' }}>Delivery Information</Link>
        </div>
        <div className="contact d-flex flex-column flex-wrap">
          <h4>Contact Us</h4>
          <div className="d-flex">
            <input className="form-control" placeholder="Enter your Email" />
            <div className="btn btn-warning ms-3"><i className="fa-solid fa-arrow-right"></i></div>
          </div>
          <div className="icons mt-3 d-flex justify-content-evenly fs-4">
            <a href={'https://instagram.com/'} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-instagram"></i></a>
          
            <a href={'https://facebook.com/'} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-facebook-f"></i></a>
            <a href={'mailto:info@groceryhub.com'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-regular fa-envelope"></i></a>
          </div>
        </div>
      </div>
      <p>Copyright 2023 Grocery Hub. Built with React.</p>
    </div>
  );
}

export default Footer;
