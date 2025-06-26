import './category-items.styles.scss'
import { useNavigate } from 'react-router-dom'

const CategoryItem = ({ title, image }) => {
    const navigate = useNavigate()
    const handleTitleClick = () => {
        const urlSafeTitle = encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));
        navigate(`shop/${urlSafeTitle}`);
    }

    return (
        <div className="background-image category-container" style={{backgroundImage: `url(${image})`}}>
            <div onClick={() => handleTitleClick()} className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;