import './globals.css'

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <nav className="nav">
          <div className="logo">AeroSuite</div>
          <div className="nav-links">
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">
            Elevate Your
            <span className="gradient-text"> Essence</span>
          </h1>
          <p className="hero-subtitle">
            Discover luxury fragrances crafted for the refined soul
          </p>
          <button className="cta-button">Explore Collection</button>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="collection">
        <h2 className="section-title">Signature Collection</h2>
        <div className="collection-grid">
          <div className="product-card">
            <div className="product-image noir"></div>
            <h3 className="product-name">Midnight Noir</h3>
            <p className="product-description">Mysterious bergamot meets deep amber</p>
            <p className="product-price">$185</p>
            <button className="product-button">Discover</button>
          </div>

          <div className="product-card featured">
            <div className="featured-badge">Bestseller</div>
            <div className="product-image celestial"></div>
            <h3 className="product-name">Celestial Rose</h3>
            <p className="product-description">Ethereal rose petals with vanilla essence</p>
            <p className="product-price">$210</p>
            <button className="product-button primary">Discover</button>
          </div>

          <div className="product-card">
            <div className="product-image azure"></div>
            <h3 className="product-name">Azure Mist</h3>
            <p className="product-description">Fresh citrus with ocean breeze notes</p>
            <p className="product-price">$195</p>
            <button className="product-button">Discover</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">The Art of Fragrance</h2>
            <p className="about-description">
              Since 2015, AeroSuite has been crafting exquisite perfumes that transcend ordinary fragrances.
              Each bottle represents a journey through carefully selected ingredients from the world's finest
              perfumeries.
            </p>
            <p className="about-description">
              Our master perfumers blend tradition with innovation, creating scents that capture emotion,
              memory, and elegance in every drop.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Unique Fragrances</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Natural Ingredients</div>
              </div>
              <div className="stat">
                <div className="stat-number">10</div>
                <div className="stat-label">Awards Won</div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2 className="section-title">The AeroSuite Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-icon">✦</div>
            <h3 className="experience-title">Handcrafted Excellence</h3>
            <p className="experience-text">Every bottle is meticulously crafted by expert artisans</p>
          </div>
          <div className="experience-card">
            <div className="experience-icon">◆</div>
            <h3 className="experience-title">Sustainable Luxury</h3>
            <p className="experience-text">Ethically sourced ingredients, eco-conscious packaging</p>
          </div>
          <div className="experience-card">
            <div className="experience-icon">✧</div>
            <h3 className="experience-title">Personalized Service</h3>
            <p className="experience-text">Complimentary fragrance consultations and samples</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2 className="section-title">Stay Connected</h2>
          <p className="contact-subtitle">Join our exclusive circle for early access and special offers</p>
          <form className="contact-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button type="submit" className="submit-button">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Pinterest</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">AeroSuite</div>
            <p className="footer-tagline">Luxury in every drop</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Shop</h4>
              <a href="#">New Arrivals</a>
              <a href="#">Best Sellers</a>
              <a href="#">Gift Sets</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">Contact Us</a>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">Our Story</a>
              <a href="#">Sustainability</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AeroSuite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
