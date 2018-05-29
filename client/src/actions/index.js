import axios from 'axios';

export function getBooks(
  limit = 7,
  start = 0,
  order = 'asc',
  list = ''
){

  //const request = `/api/books?limit=${limit}&skip=${start}&order=${order}`;

  const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
  .then(response => {
        if(list){
              return[...list,...response.data]
        }else{
          return response.data
        }


      }
  )
//console.log(request)
return {
  type: 'GET_BOOKS',
  payload:request
}
}

/*export function addBook(book){
  const request = axios.post('/api/book',book)
      .then(response => response.data)
  return {
      type:'ADD_BOOK',
      payload:request
  }
}*/

export function addBook(book){
  const request = axios.post('/api/book',book)
      .then(response => response.data);

  return {
      type:'ADD_BOOK',
      payload:request
  }
}



export function getBookWithReviewer(id){

const request= axios.get(`/api/getBook?id=${id}`)

return(dispatch)=>{
  request.then(({data})=>{
    let book = data;
    console.log(book)

    axios.get(`/api/getReviewer?id=${book.ownerId}`)
.then(({data})=>{

  let response = {
    book,
    reviewer:data
  }
  //console.log(response)
  dispatch({
    type:'GET_BOOK_W_REVIEWER',
    payload:response
})
})      
})
}
}

export function clearBookWithReviewer(){
  return {
      type:'CLEAR_BOOK_W_REVIEWER',
      payload:{
          book:{},
          reviewer:{}
      }
  }
}





export function clearNewBook() {
  return {
      type:'CLEAR_NEWBOOK',
      payload:{}
  }
}



export function getUserPosts (userId){
  const request = axios.get(`/api/user_post?user=${userId}`)
  .then(response => response.data)
  return {
    type:'GET_USER_POST',
    payload:request
  }
};







//User


export function loginUser({email,password}){
  const request = axios.post('/api/login',{email,password})
  .then(response => response.data)
  return{
    type: 'USER_LOGIN',
    payload:request
  }
}



export function auth(){
  const request = axios.get('/api/auth')
  .then(response=> response.data);
  return{
    type: 'USER_AUTH',
    payload:request
  }
}


