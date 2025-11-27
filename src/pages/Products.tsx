// src/pages/Products.tsx - Backward compatibility redirect
import { Navigate } from 'react-router-dom';

const Products = () => {
  // Redirect to Portfolio page for backward compatibility
  return <Navigate to='/portfolio' replace />;
};

export default Products;
