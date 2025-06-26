import './category-products.styles.scss';
// import '../category-preview/category-preview.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

const CategoryProducts = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <div className='category-preview-container'>
            <h2 className='title'>{category.toUpperCase()}</h2>
            <div className="preview">
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default CategoryProducts;