import React from 'react';

const FeaturedProducts = ({ onAddToCart }) => {
  const products = [
    {
      name: 'MacBook Pro M3',
      price: 1599,
      oldPrice: 1799,
      tag: 'Sale',
      img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1026'
    },
    {
      name: 'Dell XPS 15',
      price: 1299,
      oldPrice: null,
      tag: null,
      img: 'https://images.unsplash.com/photo-1593642632823-8f785bc67bf7?auto=format&fit=crop&q=80&w=1170'
    },
    {
      name: 'Keychron K2 V2',
      price: 89,
      oldPrice: 99,
      tag: 'Sale',
      img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1171'
    },
    {
      name: 'iPad Pro 12.9',
      price: 1099,
      oldPrice: 1199,
      tag: 'New',
      img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1030'
    }
  ];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-main m-0">Featured products</h2>
          <div className="flex gap-3">
            <button className="w-11 h-11 border border-border-main rounded-full flex items-center justify-center text-text-muted hover:bg-bg-offset hover:text-text-main transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="w-11 h-11 border border-border-main rounded-full flex items-center justify-center text-text-muted hover:bg-bg-offset hover:text-text-main transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div key={index} className="group transition-all duration-300">
              <div className="relative aspect-[4/5] bg-bg-offset rounded-2xl overflow-hidden mb-5">
                {product.tag && (
                  <span className={`absolute top-4 left-4 text-white px-4 py-1.5 rounded-lg text-[0.8rem] font-extrabold z-10 ${product.tag.toLowerCase() === 'sale' ? 'bg-red-500' : 'bg-primary'}`}>
                    {product.tag}
                  </span>
                )}
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" />
                <button
                  className="absolute bottom-4 right-4 bg-secondary text-white w-[50px] h-[50px] rounded-xl flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 hover:bg-primary hover:scale-110"
                  onClick={() => onAddToCart(product)}
                  title="Add to Cart"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </button>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <div className="flex items-center gap-4">
                  <span className="font-extrabold text-xl text-text-main">${product.price}</span>
                  {product.oldPrice && <span className="text-text-muted line-through text-sm opacity-60">${product.oldPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
