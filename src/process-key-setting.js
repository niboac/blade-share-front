/**
 * Created by yangshan on 2017/9/13.
 */
const flowKeySetting = {
  下户: {
    // 补充贷款资料: {
    //   type: 'fieldGroupBlock'
    // },
    补充客户资料: {
      type: 'fieldGroupBlock'
    },
    补充房产资料: {
      type: 'fieldGroupBlock'
    },
    补充抵押资料: {
      type: 'fieldGroupBlock',
      showOrderType: 'FANG_DI_DAI'
    },
    补充共借人信息: {
      type: 'fieldGroupBlock'
    },
    补充子女信息: {
      type: 'fieldGroupBlock'
    },
    下户照片: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    上传下户照片: {
      label: '下户照片',
      type: 'imgGroupBlock',
      showOrderType: 'FANG_DI_DAI'
    },
    资料清单: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    合同声明: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    下户意见: {
      type: 'commentBlock'
    }
  },
  核行: {
    核行资料: {
      type: 'imgGroupBlock'
    },
    核行确认表: {
      type: 'singleImgUploadBlock'
    },
    核行意见: {
      type: 'commentBlock'
    }
  },
  合同: {
    借款合同: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    信用咨询及管理服务协议: {
      type: 'imgGroupWrap',
      showOrderType: 'SHU_LOU_DAI'
    },
    划款委托及承诺书: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    代还款委托书: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    借据: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    租赁合同: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    购销合同: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    同意借款声明书: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    业务申请表: {
      type: 'imgGroupBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    面签拍照: {
      type: 'singleImgUploadBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    公证: {
      type: 'imgGroupBlock',
      showOrderType: 'FANG_DI_DAI'
    },
    备注意见: {
      type: 'commentBlock'
    }
  },
  控件: {
    控件照片: {
      type: 'singleImgUploadBlock'
    },
    备注意见: {
      type: 'commentBlock'
    }
  },
  归档: {
    归档单号: {
      type: 'serialNumber'
    },
    归档照片: {
      type: 'singleImgUploadBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    归档: {
      type: 'imgGroupBlock',
      showOrderType: 'FANG_DI_DAI'
    },
    备注意见: {
      type: 'commentBlock'
    }
  },
  抵押: {
    抵押回执单号: {
      type: 'serialNumber',
      showOrderType: 'SHU_LOU_DAI'
    },
    '抵押权注销凭单、章': {
      type: 'singleImgUploadBlock',
      showOrderType: 'SHU_LOU_DAI'
    },
    抵押: {
      type: 'imgGroupBlock',
      showOrderType: 'FANG_DI_DAI'
    },
    备注意见: {
      type: 'commentBlock'
    }
  },
  解抵押: {
    抵押回执单号: {
      type: 'serialNumber'
    },
    '抵押权注销凭单、章': {
      type: 'singleImgUploadBlock'
    },
    备注意见: {
      type: 'commentBlock'
    }
  },
  进抵: {
    抵押回执单号: {
      type: 'serialNumber'
    },
    抵押证照片: {
      type: 'singleImgUploadBlock'
    },
    备注意见: {
      type: 'commentBlock'
    }
  },
  归档结案: {
    归档单号: {
      type: 'serialNumber'
    },
    结案照片: {
      type: 'singleImgUploadBlock'
    },
    备注意见: {
      type: 'commentBlock'
    }
  },


}
export { flowKeySetting }