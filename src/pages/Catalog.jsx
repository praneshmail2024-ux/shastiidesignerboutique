import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

const PRODUCTS = [
  { id: 1, name: 'Rani Pink Silk Blouse', price: '₹8,900', category: 'Blouses', img: '/images/gallery1.jpg' },
  { id: 2, name: 'Mauve Pearl Reception Gown', price: '₹56,000', category: 'Gowns', img: '/images/atelier.jpg' },
  { id: 3, name: 'Golden Zari Lehenga', price: '₹1,20,000', category: 'Bridal', img: '/images/gallery2.jpg' },
  { id: 4, name: 'Emerald Silk Saree', price: '₹34,000', category: 'Sarees', img: '/images/gallery3.jpg' },
  { id: 5, name: 'Royal Velvet Sherwani', price: '₹45,000', category: 'Menswear', img: '/images/gallery4.jpg' },
  { id: 6, name: 'Chanderi Anarkali Suit', price: '₹28,000', category: 'Suits', img: '/images/gallery5.jpg' },
  { id: 7, name: 'Blush Organza Dupatta', price: '₹6,500', category: 'Accessories', img: '/images/gallery6.jpg' },
  { id: 8, name: 'Ivory Bridal Lehenga', price: '₹1,85,000', category: 'Bridal', img: '/images/gallery1.jpg' },
];

const Catalog = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="catalog-page">
      <div className="catalog-container">
        {/* Header */}
        <div className="catalog-header">
          <div>
            <span className="gold-label">THE COLLECTION</span>
            <h1 className="catalog-title">Our Pieces</h1>
          </div>
          <Link to="/request-quote" className="catalog-quote-link">
            Request a quote <span className="arrow">↗</span>
          </Link>
        </div>

        {/* Filters */}
        <div className="catalog-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-chip ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="catalog-grid">
          {filtered.map((product, i) => (
            <div key={product.id} className="catalog-item" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="catalog-item-image">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="catalog-item-info">
                <span className="catalog-item-name">{product.name}</span>
                <span className="catalog-item-price">{product.price}</span>
              </div>
              <div className="catalog-item-category">{product.category.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
