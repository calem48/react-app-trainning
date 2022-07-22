import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/ContextProduct';
import Product from './Product';


const FeaturedProduct = () => {
  let { isLoading, Featrued_Products, Error_Products } = useGlobalContext()

  if (isLoading) {
    return (
      <div className="section section-center">
        <h2>loading ...</h2>
      </div>
    )
  }

  if (Error_Products) {
    return <div className="section section-center">
      <h2>error for fetch data ...</h2>
    </div>
  }

  return (
    <Wrapper className='section'>
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className='section-center featured'>
        {
          Featrued_Products.slice(0, 3).map(item => {
            return <Product key={item.id} {...item} />
          })
        }
      </div>
    </Wrapper>
  );


}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`



export default FeaturedProduct;
