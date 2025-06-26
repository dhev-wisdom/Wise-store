import './category-preview.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';
import { useNavigate } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate()
    const handleTitleClick = () => {
        const urlSafeTitle = encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));
        navigate(urlSafeTitle);
    }
    return (
        <div className='category-preview-container'>
            <h2>
                <span onClick={() => handleTitleClick()} className='title'>{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {
                    products
                    .filter((_, index) => index < 4)
                    .map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview;