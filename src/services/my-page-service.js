import axios from 'axios';

class MyPageService {
  constructor () {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    });
  }

  myPage () {
    return this.auth.get('/myPage')
      .then(({ data }) => data);
  }

  editMyPage (id, updated) {
    return this.auth.put(`/myPage/${id}/edit`, updated)
      .then(({ data }) => data);
  }
}

const myPageService = new MyPageService();
export default myPageService;
