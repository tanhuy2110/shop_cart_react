import axios from 'axios';

export default {
    product:  {
        fetchAll: () =>
            axios.get('http://127.0.0.1:8000/api/products'),
        create: data => 
            axios.post('http://127.0.0.1:8000/api/products', data)
    }
}