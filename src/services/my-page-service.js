import axios from 'axios';

class MyPageService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }

  myPage() {
    
    return this.auth.get('/myPage')
    .then(({ data }) => data);   
  }

  editMyPage(user,updated) {
    const {id} = user
    return this.auth.get(`/myPage/${id}/edit`, updated)
    .then(({ data }) => data);   
  }
}


const myPageService = new MyPageService();
export default myPageService;