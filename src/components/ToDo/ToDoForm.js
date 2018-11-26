import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

export class ToDoForm extends Component {
    render() {
        return (
            <div>
                <Grid container 
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={16}>
                    <Grid item>
                        <TextField
                            id="toDo"
                            label="To Do"
                            name='addToDo'
                            value={this.props.toDo}
                            onChange={(event) => this.props.isFieldEmpty(event)}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type='button'
                            disabled={!this.props.isValid}
                            onClick={() => this.props.addToDo(this.props.toDo)}
                        >
                            Add
                    </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}