import { Request } from './request'

class IndexModel extends Request {
  getTitleList() {
    return this.getData({
      url: '/good/seller',
      // data: {
      //   title: value
      // }
    })
  }
}

export { IndexModel }