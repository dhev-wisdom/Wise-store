import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import CategoryProduct from '../category-products/category-products.component'
import './shop.styles.scss'

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<CategoryProduct />}/>
        </Routes>
    )
}

export default Shop;