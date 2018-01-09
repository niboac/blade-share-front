const xiahuInCommon = {
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
}
const xaihuSld = {
  资料清单: {
    iconKey: '#icon-kehuziliao',
    imgUrls: [
      { label: '下户确认单', group: '下户确认单' },
      { label: '房产查档单', group: '房产查档单' },
      { label: '征信报告', group: '征信报告' },
      { label: '户口本', group: '户口本' },
      { label: '房产估价单', group: '房产估价单' },
      { label: '贷款余额确认单', group: '贷款余额确认单' },
      { label: '回款确认书', group: '回款确认书' },
      { label: '法院查询结果', group: '法院查询结果' },
    ]
  },
  合同声明: {
    iconKey: '#icon-kehuziliao',
    imgUrls: [
      { label: '借款申请表', group: '借款申请表' },
      { label: '承租人声明', group: '承租人声明' },
      { label: '接受居住承诺书', group: '接受居住承诺书' },
      { label: '未出租声明', group: '未出租声明' },
      { label: '婚姻状况声明', group: '婚姻状况声明' },
    ]
  },
}

const blockSetting = {
  // 补充贷款资料: {
  //   iconKey: '#icon-kehuziliao',
  //   routeName: '补充信息',
  //   objName: 'order',
  // },
  FANG_DI_DAI: {
    进件: {
      借款信息: {
        iconKey: 'icon-ziliao',
        routeName: '补充信息',
        objName: 'order',
        backRoutePath: '/nd/buchong'
      },
      借款人信息: {
        iconKey: 'icon-jiekuanren-',
        routeName: '补充信息',
        objName: 'person_bank',
        backRoutePath: '/nd/buchong'
      },
      职业信息: {
        iconKey: 'icon-zhiyexinxi',
        routeName: '补充信息',
        objName: 'applicantJob',
        backRoutePath: '/nd/buchong'
      },
      共借人信息: {
        iconKey: 'icon-gongjieren',
        routeName: '补充附加信息',
        objName: 'unionBorrowerNoReq',
        backRoutePath: '/nd/buchong'
      },
      抵押物信息: {
        iconKey: 'icon-diyawu',
        routeName: '补充复合信息',
        objName: 'house_hlMortgage',
        backRoutePath: '/nd/buchong'
      },
      上传图片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '婚姻证明', group: '婚姻证明' },
          { label: '户口本', group: '户口本' },
          { label: '房产证其他照片', group: '房产证其他照片' },
        ],
        backRoutePath: '/nd/buchong'
      },
      进件上传图片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '婚姻证明', group: '婚姻证明' },
          { label: '户口本', group: '户口本' },
          { label: '房产证其他照片', group: '房产证其他照片' },
        ],
        backRoutePath: '/nd/index'
      },
    },
    下户: Object.assign(xiahuInCommon, {
      补充抵押资料: {
        iconKey: '#icon-kehuziliao',
        routeName: '补充信息',
        objName: 'hlMortgage',
      },
      上传下户照片: {
        iconKey: 'icon-xiahuzhaopian-',
        imgUrls: [
          { label: '小区', group: 'xiaoqu' },
          { label: '房屋外立面', group: 'wailimian' },
          { label: '入户口', group: 'ruhukou' },
          { label: '客厅', group: 'keting' },
          { label: '厨房', group: 'chufang' },
          { label: '卧室', group: 'woshi' },
          { label: '卫生间', group: 'weishengjian', imageRequire: '每室不少于一张' },
          { label: '餐厅', group: 'canting' },
          { label: '电梯', group: 'dianti' },
        ]
      }
    }),
    合同: {
      公证: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '公证', group: 'notarize' },
        ]
      }
    },
    抵押: {
      抵押: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '抵押证', group: 'diya' },
          { label: '抵押受理通知单/收据', group: 'shouju' },
        ]
      },
    },

  },
  SHU_LOU_DAI: {
    下户: Object.assign(xiahuInCommon, {
      下户照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '定位截图', group: '定位截图' },
          { label: '小区大门', group: '小区大门', imageRequire: '小区大门必须体现小区名，如无小区名需拍摄附近地标建筑（银行等）' },
          { label: '楼号', group: '楼号' },
          { label: '单元号', group: '单元号' },
          { label: '门牌号', group: '门牌号' },
          { label: '客厅', group: '客厅' },
          { label: '卧室', group: '卧室', imageRequire: '每室不少于一张' },
          { label: '厨房', group: '厨房' },
          { label: '卫生间', group: '卫生间' },
          { label: '阳台', group: '阳台' },
          { label: '阳台外拍', group: '阳台外拍', imageRequire: '左中右合计3张' },
          { label: '小区内景', group: '小区内景', imageRequire: '3张以上' },
          { label: '居住细节', group: '居住细节', imageRequire: '即家庭合影、婚纱照、书桌、卫生间清洁度等细节类照片' },
          { label: '户型图', group: '户型图', imageRequire: '接受网查截图或手绘草图' },
          { label: '合影', group: '合影' },
        ]
      }
    }, xaihuSld),
    核行: {
      核行资料: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '核行定位截图', group: '核行定位截图' },
          { label: '核行地合影', group: '核行地合影' },
          { label: '问询记录名片', group: '问询记录名片' },
          { label: '其他核行证明材料', group: '其他核行证明材料' },
        ],
      },
      核行确认表: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '核行确认表', group: '核行确认表' },
        ],
        hideBtn: true
      },

    },
    合同: {
      借款合同: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '借款合同', group: '借款合同', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
      信用咨询及管理服务协议: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '信用咨询及管理服务协议', group: '信用咨询及管理服务协议', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
      划款委托及承诺书: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '划款委托及承诺书', group: '划款委托及承诺书', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
      代还款委托书: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '代还款委托书', group: '代还款委托书', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
      借据: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '借据', group: '借据', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
      租赁合同: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '租赁合同', group: '租赁合同', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
      购销合同: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '购销合同', group: '购销合同', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
      同意借款声明书: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '同意借款声明书', group: '同意借款声明书', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
      业务申请表: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '业务申请表', group: '业务申请表', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
      面签拍照: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '面签拍照', group: '面签拍照', imageRequire: '最多10张，单张不超过2MB' },
        ],
      }
    },
    控件: {
      控件照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '控件照片', group: '控件照片', imageRequire: '最多10张，单张不超过2MB' },
        ],
      },
    },
    归档: {
      归档照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '归档照片', group: '归档照片', imageRequire: '最多10张，单张不超过2MB' }
        ]
      }
    },
    解抵押: {
      '抵押权注销凭单、章': {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '抵押权注销凭单、章', group: '抵押权注销凭单、章', imageRequire: '最多10张，单张不超过2MB' }
        ],
      },
    },
    进抵: {
      抵押证照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '抵押证照片', group: '抵押证照片', imageRequire: '最多10张，单张不超过2MB' }
        ],
      }
    },
    归档结案: {
      结案照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
          { label: '结案照片', group: '结案照片', imageRequire: '最多10张，单张不超过2MB' }
        ],
      },
    }
  },

}


const blockSettingWeb = {
  FANG_DI_DAI: {
    下户: [
      ...blockSetting.FANG_DI_DAI['下户']['上传下户照片'].imgUrls
    ],
    合同: [
      ...blockSetting.FANG_DI_DAI['合同']['公证'].imgUrls
    ],
    抵押: [
      ...blockSetting.FANG_DI_DAI['抵押']['抵押'].imgUrls
    ]
  },
  SHU_LOU_DAI: {
    下户: [
      ...blockSetting.SHU_LOU_DAI['下户']['下户照片'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['下户']['资料清单'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['下户']['合同声明'].imgUrls
    ],
    核行: [
      ...blockSetting.SHU_LOU_DAI['核行']['核行资料'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['核行']['核行确认表'].imgUrls,
    ],
    合同: [
      ...blockSetting.SHU_LOU_DAI['合同']['借款合同'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['合同']['信用咨询及管理服务协议'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['合同']['划款委托及承诺书'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['合同']['借据'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['合同']['租赁合同'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['合同']['购销合同'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['合同']['业务申请表'].imgUrls,
      ...blockSetting.SHU_LOU_DAI['合同']['面签拍照'].imgUrls,
    ],
    控件: [
      ...blockSetting.SHU_LOU_DAI['控件']['控件照片'].imgUrls,
    ],
    归档: [
      ...blockSetting.SHU_LOU_DAI['归档']['归档照片'].imgUrls,
    ],
    解抵押: [
      ...blockSetting.SHU_LOU_DAI['解抵押']['抵押权注销凭单、章'].imgUrls,
    ],
    进抵: [
      ...blockSetting.SHU_LOU_DAI['进抵']['抵押证照片'].imgUrls,
    ],
    归档结案: [
      ...blockSetting.SHU_LOU_DAI['归档结案']['结案照片'].imgUrls,
    ]
  }
}
export{
  blockSetting, blockSettingWeb
}