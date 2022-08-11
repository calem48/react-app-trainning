import React from 'react';

import { useGlobalContextFilter } from '../context/contextFilter';
import GridView from './GridView';
import ListView from './ListView';

const ProductLIst = () => {
    let { filtered_products, gridView } = useGlobalContextFilter()

    if (filtered_products.length < 1) {
        return <h5>sorry no items</h5>
    }

    if (gridView === false) {
        return <ListView products={filtered_products}></ListView>
    }

    return <GridView products={filtered_products}></GridView>
}




export default ProductLIst;
