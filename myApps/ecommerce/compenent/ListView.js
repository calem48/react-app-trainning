import React from 'react';
import Product from "./Product";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListView = ({ products }) => {
    return (
        <WrapperListView>

            {
                products.map(item => {
                    return (
                        <article key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <h5 className="price">${item.price / 100}</h5>
                                <p>{item.description.substring(0, 150)}...</p>
                                <Link className="btn" to={`/products/${item.id}`}>Details</Link>
                            </div>
                        </article>
                    )
                })
            }

        </WrapperListView>
    );
}


const WrapperListView = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView;
