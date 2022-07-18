import { Link, useParams } from "react-router-dom";
import product from '../data'
const SingleProduct = () => {
  let { productId } = useParams()

  let item = product.find(item => item.id === productId)

  return (
    <section className='section product'>
      <h2>single product</h2>
      <img src={item.image} />
      <h3>{item.name}</h3>
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;
