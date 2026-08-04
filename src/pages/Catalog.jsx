import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Catalog.css';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Gilded Rose Dress', price: 1200, category: 'Dresses', img: '/images/gallery6.jpg' },
  { id: 2, name: 'Floral Silk Scarf', price: 150, category: 'Accessories', img: '/images/gallery1.jpg' },
  { id: 3, name: 'Midnight Elegance Gown', price: 1800, category: 'Dresses', img: '/images/atelier.jpg' },
  { id: 4, name: 'Golden Pearl Earrings', price: 350, category: 'Accessories', img: '/images/gallery2.jpg' },
  { id: 5, name: 'Blush Chiffon Blouse', price: 420, category: 'Tops', img: '/images/gallery3.jpg' },
  { id: 6, name: 'Ivory Tailored Suit', price: 2100, category: 'Suits', img: '/images/gallery4.jpg' },
];

const Catalog = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(MOCK_PRODUCTS.map(p => p.category))];
  
  const filteredProducts = filter === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="catalog-page">
      <div className="container">
        <div className="section-title animate-fade-up">
          <h2>The Collection</h2>
          <div className="title-divider">
            <span className="divider-icon">❦</span>
          </div>
          <p className="text-muted mt-4">Discover our curated pieces, designed with botanical elegance.</p>
        </div>

        <div className="catalog-filters animate-fade-up">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="catalog-grid animate-fade-up">
          {filteredProducts.map(product => (
            <div key={product.id} className="catalog-card card">
              <div className="product-image-container">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price.toLocaleString()}</p>
                <button 
                  className="btn btn-primary w-full mt-4" 
                  onClick={() => addToCart(product)}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
