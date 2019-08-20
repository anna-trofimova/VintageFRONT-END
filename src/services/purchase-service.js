import axios from 'axios';

class PurchaseService {
  constructor () {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    });
  }

  myPurchase () {
    return this.auth.get('/purchases')
      .then(({ data }) => data);
  }

  buyItem (itemId) {
    return this.auth.post(`/purchases/${itemId}/buy`)
      .then(({ data }) => data);
  }
}

const purchaseService = new PurchaseService();
export default purchaseService;