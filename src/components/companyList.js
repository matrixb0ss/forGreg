import React from 'react';
import { List, SimpleList } from 'react-admin';

export default (props) => (
    <List {...props} title="Search result:">
        <SimpleList
            primaryText={record => record.name}
            onClick={() => console.log('1') }
        />
    </List>
);