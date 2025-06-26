import { CategoriesContext } from '../../contexts/categories.context.jsx'
import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.components.jsx'

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <div>
            {
                Object.keys(categoriesMap).map((title, index) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={index} title={title} products={products} />
                })
            }
        </div>
    )
}

export default CategoriesPreview;