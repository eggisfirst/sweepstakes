import { Request } from './request'
import qs from 'qs'
import axios from 'axios' 

class IndexModel extends Request {
  //模拟获取抽奖类型
  getAwardList() {
    return this.getData({
      url: '/good/seller',
    })
  }
  //模拟获取全部头像
  getMockAllUser(id) {
    return this.getData({
      url: '/good/users',
      data: {
        lotteryId: id
      }
    })
  }
  //获取全部头像
  getAllUser(id) {
    return this.getData({
      url: 'http://10.11.8.207/api/lotteryUser/getALlUser',
      // url: '/lotteryUser/getALlUser',
      params: {
        'lotteryId': id
      }
    })
  }
  //抽奖接口
  getDrawLottery(prizeId, drawNum) {
    return this.getData({
      url: 'http://10.11.8.207/api/lotteryWinner/drawLottery',
      params: {
        prizeId: prizeId, // 奖品id
        drawNum:  drawNum// 抽奖人数
      }
    })
  }
  //模拟抽奖接口
  // getDrawLottery(prizeId, drawNum) {
  //   return this.getData({
  //     url: '/good/list',
  //     data: {
  //       prizeId: prizeId, // 奖品id
  //       drawNum:  drawNum// 抽奖人数
  //     }
  //   })
  // }
  //删除中奖记录
  deleteLottery(prizeId,userIds) {
    return this.getPostData({
      url: 'http://10.11.8.207/api/lotteryWinner/delete',
      data: {
        prizeId,
        userIds
      },
    })
  }
}

export { IndexModel }