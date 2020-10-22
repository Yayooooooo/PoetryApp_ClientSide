import Api from '@/services/api'

export default {
  fetchPoems () {
    return Api().get('/poems')
  },
  fetchAuthors () {
    return Api().get('/authors')
  },
  fetchPoemsByTitle(title) {
    return Api().get(`/poems/${title}`)
  },
  fetchPoemsById(id) {
    return Api().get(`/poems/${id}`)
  },
  fetchMyPoems () {
    return Api().get('/mypoems')
  },
  logout() {
    return Api().get('/usersLogout')
  },
  increasePoemLikes(id){
    return Api().put(`/poems/${id}/like`)
  },
  decreasePoemLikes(id){
    return Api().put(`/poems/${id}/unlike`)
  },
  increaseAuthorLikes(id){
    return Api().put(`/authors/${id}/like`)
  },
  decreaseAuthorLikes(id){
    return Api().put(`/authors/${id}/unlike`)
  },
  increasePoems(){
    return Api().post('/poems')
  },
  postRegister (register) {
    return Api().post('/usersRegister',register,{ headers: {'Content-type': 'application/json'} })
  },
  postLogin(login) {
    return Api().post('/users/login',login,{ headers: {'Content-type': 'application/json'} })
  },
  addMyPoem(poem){
    return Api().post("/poems",poem,{ headers: {'Content-type': 'application/json'}})
  },
  deletePoems(id){
    return Api().delete(`/poems/${id}`)
  },
  putEditedPoem(id,edit){
    return Api().put(`/poems/${id}`, edit, { headers: {'Content-type': 'application/json'} })
  },
  fetchUserById(id){
    return Api().get(`/users/${id}`)
  },
  saveProfile(url){
    return Api().post(`/users/${url}`)
  }
}
