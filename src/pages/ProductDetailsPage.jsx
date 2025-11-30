import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import '../App.css';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!product) return <div>Загрузка данных товара...</div>;

    return (
        <div className="details-container">
            <div className="details-card">
                <h3>{product.title}</h3>
                <div className="image-wrapper">
                    <img src={product.image} alt={product.title} />
                </div>
                <p className="price">Price: {product.price} $</p>
                <p className="description">{product.description}</p>

                {/* Рейтинг */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Rating rate={product.rating.rate} />
                </div>

                <button className="back-btn" onClick={() => navigate(-1)}>
                    НАЗАД
                </button>
            </div>
        </div>
    );
};

export default ProductDetailsPage;