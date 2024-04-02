// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState({}); 

    const handleAdd = () => {
        axios.post('/api/add', data)
            .then(response => {
                console.log(response.data);
               
            })
            .catch(error => {
                console.error('Error adding data:', error);
            });
    };

    const handleUpdate = () => {
        axios.put('/api/edit', data)
            .then(response => {
                console.log(response.data);
               
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };

    const handleCount = () => {
        axios.get('/api/count')
            .then(response => {
                console.log('Add count:', response.data.addCount);
                console.log('Update count:', response.data.updateCount);
               
            })
            .catch(error => {
                console.error('Error fetching count:', error);
            });
    };

    return (
        <div class="m-4" style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleCount}>Count</button>
        </div>
    );
};

export default App;
