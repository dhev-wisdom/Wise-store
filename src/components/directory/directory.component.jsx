import CategoryItem from "../category-item/category-item-component"
import './directory.styles.scss'

const categories = [
    {
      id: 1,
      title: 'Hats',
      image: 'https://images.pexels.com/photos/936038/pexels-photo-936038.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Jackets',
      image: 'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Sneakers',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'Womens',
      image: 'https://images.pexels.com/videos/7305158/pexels-photo-7305158.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408',
    },
    {
      id: 5,
      title: 'Mens',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
  ]

const Directory = () => {
    return (
      <div className='directory-container'>
        {categories.map(({title, id, image}) => (
          <CategoryItem key={id} title={title} image={image} />
        ))}
      </div>
    )
}

export default Directory;