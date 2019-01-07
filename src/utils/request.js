import axios from 'axios' 
class Request {
  baseUrl = ''
  
  getData({url, data = {}, method = "GET" }) {
    return new Promise((resolve, reject) => {
      axios({
        url: this.baseUrl + url,
        method: method,
        data: data,
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