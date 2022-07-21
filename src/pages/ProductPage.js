import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../compenent/breadcrumb';
import Product from '../compenent/Product';
import { useGlobalContext } from '../context/ContextProduct';


const ProductPage = () => {
    let { isLoading, products } = useGlobalContext()
    console.log(products);
    if (products) {
        return (
            <main>
                <Breadcrumb title={"products"} />
                <Wrapper className='page'>
                    <div className='section-center products'>
                        <WrapperGridVeiw>
                            <div className='products-container'>
                                {
                                    products.map((product) => {
                                        return <Product key={product.id} {...product} />
                                    })
                                }
                            </div>
                        </WrapperGridVeiw>
                    </div>
                </Wrapper>
            </main>
        );
    }

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

const WrapperGridVeiw = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default ProductPage;
