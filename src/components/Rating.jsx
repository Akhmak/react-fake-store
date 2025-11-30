import React from 'react';

const Rating = ({ rate }) => {
    // Округляем по правилам математики
    const roundedRate = Math.round(rate);

    // Создаем массив из 5 элементов
    const stars = Array.from({ length: 5 }, (_, index) => {
        // Если индекс меньше рейтинга, звезда закрашена
        return (
            <span
                key={index}
                style={{ color: index < roundedRate ? '#ffcc00' : '#ccc', fontSize: '20px' }}
            >
        ★
      </span>
        );
    });

    return <div>{stars}</div>;
};

export default Rating;