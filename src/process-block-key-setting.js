/**
 * Created by yangshan on 2017/9/13.
 */
const blockSetting = {
  // 补充贷款资料: {
  //   iconKey: '#icon-kehuziliao',
  //   routeName: '补充信息',
  //   objName: 'order',
  // },
  补充客户资料: {
    iconKey: '#icon-kehuziliao',
    routeName: '补充信息',
    objName: 'applicant',
  },
  补充房产资料: {
    iconKey: '#icon-kehuziliao',
    routeName: '补充信息',
    objName: 'house',
  },
  补充抵押资料: {
    iconKey: '#icon-kehuziliao',
    routeName: '补充信息',
    objName: 'hlMortgage',
  },
  补充共借人信息: {
    iconKey: '#icon-kehuziliao',
    routeName: '补充附加信息',
    objName: 'unionBorrower',
  },

  补充子女信息: {
    iconKey: '#icon-kehuziliao',
    routeName: '补充附加信息',
    objName: 'children',
  },
  下户照片: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      定位截图: { imageRequire: '' },
      小区大门: { imageRequire: '小区大门必须体现小区名，如无小区名需拍摄附近地标建筑（银行等）' },
      楼号: { imageRequire: '' },
      单元号: { imageRequire: '' },
      门牌号: { imageRequire: '' },
      客厅: { imageRequire: '' },
      卧室: { imageRequire: '每室不少于一张' },
      厨房: { imageRequire: '' },
      卫生间: { imageRequire: '' },
      阳台: { imageRequire: '' },
      阳台外拍: { imageRequire: '左中右合计3张' },
      小区内景: { imageRequire: '3张以上' },
      居住细节: { imageRequire: '即家庭合影、婚纱照、书桌、卫生间清洁度等细节类照片' },
      户型图: { imageRequire: '接受网查截图或手绘草图' },
      合影: { imageRequire: '' },
    }
  },
  上传下户照片: {

    iconKey: '#icon-kehuziliao',
    imgUrls: {
      xiaoqu: { label: '小区', imageRequire: '' },
      wailimian: { label: '房屋外立面', imageRequire: '' },
      ruhukou: { label: '入户口', imageRequire: '' },
      keting: { label: '客厅', imageRequire: '' },
      chufang: { label: '厨房', imageRequire: '' },
      woshi: { label: '卧室', imageRequire: '' },
      weishengjian: { label: '卫生间', imageRequire: '每室不少于一张' },
      canting: { label: '餐厅', imageRequire: '' },
      dianti: { label: '电梯', imageRequire: '' },
    }
  },
  抵押: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      diya: { label: '抵押', imageRequire: '' },
      shouju: { label: '收据', imageRequire: '' },
    }
  },
  公证: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      notarize: { label: '公证', imageRequire: '' },
    }
  },
  归档: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      archive: { label: '归档', imageRequire: '' },
    }
  },


  资料清单: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      下户确认单: { imageRequire: '' },
      房产查档单: { imageRequire: '' },
      征信报告: { imageRequire: '' },
      户口本: { imageRequire: '' },
      房产估价单: { imageRequire: '' },
      贷款余额确认单: { imageRequire: '' },
      回款确认书: { imageRequire: '' },
      法院查询结果: { imageRequire: '' }
    }
  },
  合同声明: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      借款申请表: { imageRequire: '' },
      承租人声明: { imageRequire: '' },
      接受居住承诺书: { imageRequire: '' },
      未出租声明: { imageRequire: '' },
      婚姻状况声明: { imageRequire: '' }
    }
  },
  核行资料: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      核行定位截图: { imageRequire: '' },
      核行地合影: { imageRequire: '' },
      问询记录名片: { imageRequire: '' },
      其他核行证明材料: { imageRequire: '合同截屏等' },
    },

  },
  核行确认表: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      核行确认表: { imageRequire: '' }
    },
    hideBtn: true
  },
  借款合同: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      借款合同: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  信用咨询及管理服务协议: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      信用咨询及管理服务协议: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  划款委托及承诺书: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      划款委托及承诺书: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  代还款委托书: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      代还款委托书: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  借据: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      借据: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  租赁合同: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      租赁合同: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  购销合同: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      购销合同: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  同意借款声明书: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      同意借款声明书: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  业务申请表: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      业务申请表: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  面签拍照: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      面签拍照: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  控件照片: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      控件照片: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  归档照片: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      归档照片: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  '抵押权注销凭单、章': {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      '抵押权注销凭单、章': { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  抵押证照片: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      抵押证照片: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },
  结案照片: {
    iconKey: '#icon-kehuziliao',
    imgUrls: {
      结案照片: { imageRequire: '最多10张，单张不超过2MB' }
    },
  },


}
export { blockSetting }