import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        const rows = [];
        let lastCategory = null;
        
        let filteredProducts = this.props.products.slice(0);

        if (this.props.filterText && this.props.filterText.length > 0) {
            filteredProducts = filteredProducts.filter(product => product.name.includes(this.props.filterText));
        }

        if (this.props.inStockOnly) {
            filteredProducts = filteredProducts.filter(product => product.stocked === true);
        }

        filteredProducts.forEach((product) => {

            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ProductTable;