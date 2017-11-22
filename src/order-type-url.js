import { has } from '../utils/static-tools'
import store from '../store'
// 需要转换url中参数的请求
const orderTypeUrl = [
  'pre-orders/order', // 创建订单
  'pre-orders order', // 获取 进件详情
  'productType', // 获得产品列表
  'pre-orders applicant', // 进件 上传/获取申请人信息
  'pre-orders house', // 进件 上传/获取申请人信息
  'pre-orders confirm', // 确认订单信息
  'sld/pre-orders' // 获取全部订单详情
  // 'search/orders/my-claimed', // 查找我的订单
]

let typeKey = {
  FANG_DI_DAI: ['/hl/', '/sld/', 'SHU_LOU_DAI', 'FANG_DI_DAI', { productType: 'FANG_DI_DAI' }],
  SHU_LOU_DAI: ['/sld/', '/hl/', 'FANG_DI_DAI', 'SHU_LOU_DAI', { productType: 'SHU_LOU_DAI' }],
}

function replace(config, orderType, propName) {
  let url = config.url
  let keys = typeKey[orderType]
  let rurl = url.replace(keys[1], keys[0]).replace(keys[2], keys[3])
  // let tmp = null
  if (propName && config.params && config.params[propName]) {
    // console.log('change, propName = ', propName)
    // tmp = keys[4][propName]
    config.params[propName] = keys[4][propName]
  }
  // return{rurl ,params:tmp}
  return rurl
}

function hasParams(config, i) {
  return config.params && config.params[i]
}

export function confUrl(config) {
  let rurl = config.url
  // let tmp={}
  if (store.getters.orderType === 'FANG_DI_DAI') {
    // console.log('1111 FANG_DI_DAI')
    for (let i of orderTypeUrl) {
      if (has(i, ' ')) {
        // console.log(1)
        let params = i.split(' ')
        // console.log('params = ', params)
        let reg = new RegExp('(' + params[0] + ').+(' + params[1] + ')')
        // console.log('reg =', reg)
        if (rurl.search(reg) > -1) {
          // console.log('space!  rurl = ', rurl, ' and reg = ', reg, ' result = ', rurl.search(reg))
          rurl = replace(config, store.getters.orderType)
          // tmp = replace(config, store.getters.orderType)
        }
      } else {
        // if (i === 'sld/orders' && has(rurl, i)) {
        //   console.log('whole', rurl)
        // }
        // if (i === 'sld/pre-orders') {
        //   console.log('whole', rurl)
        // }
        if (has(rurl, i) || hasParams(config, i)) {
          // console.log('has key')
          rurl = replace(config, store.getters.orderType, i)
          // console.log('rurl = ', rurl, ' and key = ', i)
        }
      }
    }
  }
  // return tmp
  // console.log('rurl = ', rurl, ' config= ', config)
  return rurl
}