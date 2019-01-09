import axios from 'axios' 
class Request {
  // baseUrl = 'http://10.11.8.207/api'
  baseUrl = ''
  
  getData({url, params = {}, method = "GET" }) {
    return new Promise((resolve, reject) => {
      axios({
        url: this.baseUrl + url,
        method: method,
        params: params,
      }).then(res => {
        if(res.data.code == 0)
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export {Request}