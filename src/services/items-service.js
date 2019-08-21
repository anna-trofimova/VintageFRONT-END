import axios from 'axios';

class ItemsService {
  constructor () {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    });
  }

  items() {
    return this.auth.get('/items')
      .then(({ data }) => data);
  }

  myItems() {
    return this.auth.get('/items/nyItems')
    .then(({ data }) => data);
  }

  itemDetails(id) {
    return this.auth.get(`/items/${id}/details`)
      .then(({ data }) => data);
  }

  createItem(createItem) {
    return this.auth.post('/items/create', createItem)
    .then(({ data }) => data);
  }

  editItem(id, changedItem) {
    return this.auth.post(`/items/${id}/edit`, changedItem)
    .then(({ data }) => data);
  }

  deleteItem(id) {
    return this.auth.post(`/items/${id}/delete`)
    .then(({ data }) => data);
  }

  

}

const itemService = new ItemsService();
export default itemService;