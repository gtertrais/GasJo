import axios from "axios";

const API_URL = "http://localhost:8080/";

class TutorialDataService {
  getAll() {
    return axios.get(API_URL + `tutorials`);
  }

  get(id) {
    return axios.get(API_URL + `tutorial/${id}`);
  }

  create(title, description, author) {
    return axios.post(API_URL + `tutorial`, 
      title,
      description,
      author,
    );
  }

  update(id, data) {
    return axios.put(API_URL + `tutorial/${id}`, data);
  }

  delete(id) {
    return axios.delete(API_URL + `tutorial/${id}`);
  }

  deleteAll() {
    return axios.delete(API_URL + `tutorials`);
  }

  findByTitle(title) {
    return axios.get(API_URL + `tutorial?title=${title}`);
  }
}

export default new TutorialDataService();