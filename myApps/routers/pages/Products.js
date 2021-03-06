import { Link } from "react-router-dom";
import data from '../data'

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <div className="product">
          {
            data.map(item => {
              return <article key={item.id}>
                <h5>{item.name}</h5>
                <Link to={`/products/${item.id}`}>red more</Link>
              </article>
            })
          }
        </div>
      </section>
    </>
  );
};

export default Products;
