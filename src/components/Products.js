import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Title } from './Title';
import { ProductSearch } from './Products/ProductSearch';
import ProductTable from './Products/ProductTable';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            inStockOnly: false,
            products: [
                { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
                { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
                { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
                { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
                { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
                { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
            ]
        };
    }

    setFilterText = (event) => {
        const eventValue = event.target.value;

        this.setState(() => {
            return {
                filterText: eventValue
            };
        });
    }

    setStockOption = (event) => {
        const eventValue = event.target.checked;

        this.setState(() => {
            return {
                inStockOnly: eventValue
            };
        });
    }

    render() {
        return (
            <div>
                <Grid direction='row' container spacing={16}>
                    <Grid item xs={12}>
                        <div className='App-header'>
                            <Title title="Products" />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='App-form'>
                            <ProductSearch
                                filterText={this.state.filterText}
                                inStockOnly={this.state.inStockOnly}
                                setFilterText={this.setFilterText}
                                setStockOption={this.setStockOption}
                             />
                        </div>
                    </Grid>
                    <Grid justify="center" container>
                        <ProductTable 
                            filterText={this.state.filterText}
                            inStockOnly={this.state.inStockOnly}
                            products={this.state.products} 
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Products;