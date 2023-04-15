import { useParams } from 'react-router-dom'
import ListPosts from '../components/ListPosts/ListPosts'

function Subcategorias() {
  const { subcategoria } = useParams()
  return <ListPosts url={`/posts?subcategoria=${subcategoria}`} />
}

export default Subcategorias
