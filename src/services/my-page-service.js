import axios from 'axios';

class MyPageService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }

  myPage(user) {
    const {id} = user
    return this.auth.get('/myPage', {id})
    .then(({ data }) => data);   
  }

  editMyPage(user) {
    const {id} = user
    return this.auth.get(`/myPage/${id}/edit`, {id})
    .then(({ data }) => data);   
  }
}


const myPageService = new MyPageService();
export default myPageService;