import React from 'react';
import { Create, SimpleForm } from 'react-admin'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      marginRight: '100px',
    },
});

const Test = () => (
    <form noValidate autoComplete="off">
        <TextField
            id="standard-name"
            label="Name"
            // className={classes.textField}
            // value={this.state.name}
            // onChange={this.handleChange('name')}
            margin="normal"
        />
        <Button variant="outlined" style={styles.button}>
            Default
        </Button>
    </form>
);

export const CreateItem = (props) => (
    <Create {...props}>
        <SimpleForm>
            <Test />
        </SimpleForm>
    </Create>
);