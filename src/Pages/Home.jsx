import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Import your CSS file for styling
import { Image } from 'react-bootstrap';
import WhatsAppButton from '../components/WhatsappButton';

const Home = () => {
  // Sample images for the slider
  const sliderImages = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/5.jpg',
    // Add more images as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
 
  return (
   
    
    <div className="container" >
      {/* Hero Section */}
      <section className="hero top-0 w-100 mb-5" expand="lg">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img className="img-fluid" src={image} alt={`Slider ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <div className="hero-content">
          <h1>Welcome to Grocery Hub</h1>
          <p>Your one-stop shop for fresh and convenient grocery delivery</p>
          <Link to="/shop" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      </section>
      
 {/* WhatsApp Button */}
 <WhatsAppButton />
      {/* Features Section */}
      <section className="features">
        <div className="feature">
        <i class="fa-solid fa-basket-shopping text-danger"></i>
          <h2>Wide Selection</h2>
          <p>Explore a vast range of fresh produce, pantry staples, and more.</p>
        </div>

        <div className="feature">
          <i className="fa-solid fa-truck text-danger"></i>
          <h2>Express Delivery</h2>
          <p>Get your groceries delivered to your doorstep quickly and efficiently.</p>
        </div>

        <div className="feature">
          <i className="fa-solid fa-check text-danger"></i>
          <h2>Easy Ordering</h2>
          <p>Place orders effortlessly with our user-friendly interface.</p>
        </div>
      </section>
      <section className="product-showcase mt-5  ">
      <h2 className="text-center mb-4 fw-bolder text-success fs-2">Featured Products</h2>
      <div className="products row">
        {/* Display featured products with images and details */}
        <div className="col-md-4 mb-4">
          <div className="product-card   " >
            <div className='img-container border rounded shadow'>
            <img  src="assets/11.jpg" alt="Fresh Apples" className="img-fluid rounded" />
            </div>
            <p className="product-name text-success fs-4 mt-3 d-flex  justify-content-center align-items-center">Fresh Apples</p>
            <div className=' d-flex  justify-content-center align-items-center'><Link to="/shop" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
</div>
        <div className="col-md-4 mb-4">
          <div className="product-card">
          <div className='img-container border rounded shadow'>
            <img src="assets/12.jpg" alt="Whole Wheat Bread" className="img-fluid rounded"  />
            </div>
            <p className="product-name text-success fs-4 mt-3  d-flex  justify-content-center align-items-center">Whole Wheat Bread</p>
           <div className=' d-flex  justify-content-center align-items-center'> <Link to="/shop" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="product-card">
          <div className='img-container border rounded shadow'>
            <img src="assets/13.jpg" alt="Organic Spinach" className="img-fluid rounded" />
            </div>
            <p className="product-name text-success fs-4 mt-3 d-flex  justify-content-center align-items-center">Organic Spinach</p>
            <div className=' d-flex  justify-content-center align-items-center'>   <Link to="/shop" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
</div>
        {/* Add more products as needed */}
      </div>
    </section>
    <div className='step-container bg-secondary-subtle mt-4 p-2 shadow'>
    <section className="how-it-works mt-5 ">
      <h2 className="text-center mb-4 ">How It Works</h2>
      <div className="steps row justify-content-center">
        {/* Step 1 */}
        <div className="col-md-3 mb-4">
          <div className="step-card text-center ms-2">
            <Image src="./assets/21.jpg" roundedCircle fluid />
            <p className="step-description d-flex  justify-content-center align-items-center">Step 1: Browse Products</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="col-md-3 mb-4">
          <div className="step-card text-center ms-2 ">
            <Image src="./assets/22.jpg" roundedCircle fluid />
            <p className="step-description d-flex  justify-content-center align-items-center">Step 2: Add to Cart</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="col-md-3 mb-4">
          <div className="step-card text-center ms-2">
            <Image src="./assets/23.jpg" roundedCircle fluid />
            <p className="step-description d-flex  justify-content-center align-items-center">Step 3: Checkout</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="col-md-3 mb-4">
          <div className="step-card text-center ms-2">
            <Image src="./assets/24.jpg" roundedCircle fluid />
            <p className="step-description d-flex  justify-content-center align-items-center">Step 4: Delivery</p>
          </div>
        </div>
      </div>
    </section>
    </div>
    <section className="specials mt-5 ms-3 me-3 mt-4 " >
      <h2 className="text-center mb-4 ">🌟 Specials & Deals 🌟</h2>
      <div className="deals row">
        {/* Deal 1 */}
        <div className="col-md-4 mb-4">
          <div className="deal-card">
            <Image className=' shadow border rounded' src="./assets/31.jpg" alt="Deal 1" fluid />
            <p className="mt-2 fw-bold deal-description d-flex  justify-content-center align-items-center">Save <span className="highlight ms-1 me-1">20%</span> on Fresh Produce</p>
          </div>
        </div>

        {/* Deal 2 */}
        <div className="col-md-4 mb-4">
          <div className="deal-card ">
            <Image className=' shadow border rounded' src="./assets/33.jpg" alt="Deal 2" fluid />
            <p className="mt-2 fw-bold deal-description d-flex  justify-content-center align-items-center"><span className="highlight  ms-1 me-1">Buy 1 Get 1 Free</span> on Snacks</p>
          </div>
        </div>

        {/* Deal 3 */}
        <div className="col-md-4 mb-4">
          <div className="deal-card">
            <Image className=' shadow border rounded' src="./assets/32.jpg" alt="Deal 3" fluid />
            <p className="mt-2 fw-bold deal-description d-flex  justify-content-center align-items-center">Special Discount on <span className="highlight ms-1 me-1">Fresh Bakery Delights</span></p>
          </div>
        </div>

        {/* Add more deals as needed */}
      </div>
    </section>
    <div className='cat-container bg-secondary-subtle shadow p-3'>
    <section className="popular-categories mt-5 ms-3 me-3 mt-4 ">
  <h2 className="text-center mb-4 p-4 fw-bolder text-danger">Popular Categories</h2>
  <div className="categories row">
  {/* Category 1 */}
  <div className="col-md-4 mb-4">
    <div className="category-card">
      <Image className="shadow" src="./assets/41.jpg" alt="New Category 1" fluid />
      <h3 className="mt-2 fw-bold category-name text-center">Grocery</h3>
      <Link to="/shop" className="btn btn-outline-success" style={{ display: 'block', margin: '0 auto' }}>
        Shop Now
      </Link>
    </div>
  </div>

  {/* Category 2 */}
  <div className="col-md-4 mb-4">
    <div className="category-card">
      <Image className="shadow" src="./assets/42.jpg" alt="New Category 2" fluid />
      <h3 className="mt-2 fw-bold category-name text-center">Fresh Vegetables</h3>
      <Link to="/shop" className="btn btn-outline-success" style={{ display: 'block', margin: '0 auto' }}>
        Shop Now
      </Link>
    </div>
  </div>

  {/* Category 3 */}
  <div className="col-md-4 mb-4">
    <div className="category-card">
      <Image className="shadow" src="./assets/43.jpg" alt="New Category 3" fluid />
      <h3 className="mt-2 fw-bold category-name text-center">Cleaning & Hygiene</h3>
      <Link to="/shop" className="btn btn-outline-success" style={{ display: 'block', margin: '0 auto' }}>
        Shop Now
      </Link>
    </div>
  </div>

  {/* Category 4 */}
  <div className="col-md-4 mb-4">
    <div className="category-card">
      <Image className="shadow" src="./assets/44.jpg" alt="New Category 4" fluid />
      <h3 className="mt-2 fw-bold category-name text-center">Personal Care</h3>
      <Link to="/shop" className="btn btn-outline-success" style={{ display: 'block', margin: '0 auto' }}>
        Shop Now
      </Link>
    </div>
  </div>

  {/* Category 5 */}
  <div className="col-md-4 mb-4">
    <div className="category-card">
      <Image className="shadow" src="./assets/45.jpg" alt="New Category 5" fluid />
      <h3 className="mt-2 fw-bold category-name text-center">Dry Fruits & Chocolates</h3>
      <Link to="/shop" className="btn btn-outline-success" style={{ display: 'block', margin: '0 auto' }}>
        Shop Now
      </Link>
    </div>
  </div>

  {/* Category 6 */}
  <div className="col-md-4 mb-4">
    <div className="category-card">
      <Image className="shadow" src="./assets/46.jpg" alt="New Category 7" fluid />
      <h3 className="mt-2 fw-bold category-name text-center">Meat & Poultry</h3>
      <Link to="/shop" className="btn btn-outline-success" style={{ display: 'block', margin: '0 auto' }}>
        Shop Now
      </Link>
    </div>
  </div>
  {/* Repeat similar code for other categories */}
</div>
</section>
</div>

    
    </div>
  );
};

export default Home;
