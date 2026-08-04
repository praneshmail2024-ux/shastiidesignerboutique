import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <div className="container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="section-title animate-fade-up">
        <h2>Your Wishlist</h2>
        <div className="title-divider">
          <span className="divider-icon">❦</span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center animate-fade-up">
          <p className="text-muted mb-8">Your wishlist is currently empty.</p>
          <Link to="/catalog" className="btn btn-primary">Discover the Collection</Link>
        </div>
      ) : (
        <div className="cart-content animate-fade-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {cartItems.map(item => (
            <div key={item.id} className="card flex justify-between items-center mb-4" style={{ padding: '1rem 2rem' }}>
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} style={{ width: '60px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>{item.name}</h4>
                  <p className="text-muted">${item.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span>Qty: {item.qty}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--error)', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="card mt-8 flex justify-between items-center" style={{ background: 'var(--surface-container-high)' }}>
            <h3 style={{ margin: 0 }}>Estimated Total:</h3>
            <h3 style={{ margin: 0, color: 'var(--primary-container)' }}>${cartTotal.toLocaleString()}</h3>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/request-quote" className="btn btn-primary">Request Custom Quote</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
