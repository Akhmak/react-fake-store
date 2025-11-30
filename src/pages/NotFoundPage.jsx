import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Страница не найдена</h1>
            <p>Вы перешли по несуществующему адресу.</p>
            <Link to="/products">
                <button className="back-btn">Перейти к товарам</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;