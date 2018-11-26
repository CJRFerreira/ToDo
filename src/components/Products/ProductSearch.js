import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox
} from '@material-ui/core';

export class ProductSearch extends Component {
    render() {
        return (
            <form>
                <FormControl>
                    <FormGroup>
                        <TextField
                            id="productSearch"
                            label="Search Products"
                            name='productSearch'
                            margin="normal"
                            value={this.props.filterText}
                            onChange={(event) => this.props.setFilterText(event)}
                        />
                    </FormGroup>
                </FormControl>
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.props.inStockOnly}
                                    onChange={(event) => this.props.setStockOption(event)}
                                />
                            }
                            label="Only show products in stock"
                        />
                    </FormGroup>
                </FormControl>
            </form>
        );
    }
}