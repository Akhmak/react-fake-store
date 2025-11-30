import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  // basename нужен для корректной работы на GitHub Pages (например, /repo-name/)
  // При локальной разработке process.env.PUBLIC_URL будет пустой строкой.
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* Перенаправляем корневой путь сразу на /products */}
          <Route path="/" element={<Navigate to="/products" replace />} />

          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />

          {/* Обработка 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
  );
}

export default App;