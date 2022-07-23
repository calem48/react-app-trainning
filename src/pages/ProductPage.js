import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../compenent/breadcrumb';
import FilterPage from '../compenent/FilterPage';
import ProductLIst from '../compenent/ProductLIst';
import Sort from '../compenent/Sort';

const ProductPage = () => {


  return (
    <main>
      <Breadcrumb title={"products"} />
      <Wrapper className='page'>
        <div className='section-center products'>
          <FilterPage />
          <div>
            <Sort />
            <ProductLIst />
          </div>
        </div>
      </Wrapper>
    </main>
  );


}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`



export default ProductPage;
