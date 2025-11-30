import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import '../App.css';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    if (loading) return <div>Загрузка товаров...</div>;

    return (
        <div className="products-container">
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                    {/* --- ДОБАВЛЕНО: Вывод картинки --- */}
                    <div className="img-wrapper">
                        <img src={product.image} alt={product.title} />
                    </div>
                    {/* ------------------------------- */}

                    <div className="card-title">{product.title}</div>
                    <Rating rate={product.rating.rate} />
                </Link>
            ))}
        </div>
    );
};

export default ProductsPage;