import '../index.html';
import '../styles/app.css';
import { initProducts } from './product-management';

const addProduct = (event) => {
  import('./product-management.js').then((module) => {
    module.addProduct(event);
  });
};

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
