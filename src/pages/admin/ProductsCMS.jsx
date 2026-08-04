import { useState } from 'react';

const ProductsCMS = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: 'Dresses',
    imageUrl: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding Product:", formData);
    alert(`Product '${formData.title}' added to catalog successfully.`);
    setFormData({ title: '', price: '', category: 'Dresses', imageUrl: '', description: '' });
  };

  return (
    <div className="admin-content-inner">
      <div className="flex justify-between items-center mb-8">
        <h2>Products & Categories CMS</h2>
      </div>

      <div className="card" style={{ maxWidth: '600px' }}>
        <h3 className="mb-4">Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--on-surface-variant)' }}>Product Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="mb-4">
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--on-surface-variant)' }}>Price ($)</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--on-surface-variant)' }}>Category</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Dresses">Dresses</option>
                <option value="Accessories">Accessories</option>
                <option value="Tops">Tops</option>
                <option value="Suits">Suits</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--on-surface-variant)' }}>Image URL</label>
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="/images/galleryX.jpg" required />
          </div>

          <div className="mb-8">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--on-surface-variant)' }}>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows="3" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">Publish to Catalog</button>
        </form>
      </div>
    </div>
  );
};

export default ProductsCMS;
