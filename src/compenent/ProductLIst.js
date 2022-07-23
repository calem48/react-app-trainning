import React from 'react';

import { useGlobalContextFilter } from '../context/contextFilter';
import GridView from './GridView';
import ListView from './ListView';

const ProductLIst = () => {
    let { all_products, gridView } = useGlobalContextFilter()

    if (all_products.length < 1) {
        return <h5>sorry no items</h5>
    }

    if (gridView === false) {
        return <ListView products={all_products}></ListView>
    }

    return <GridView products={all_products}></GridView>
}




export default ProductLIst;
