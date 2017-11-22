/**
 * Created by yangshan on 2017/9/22.
 */
import * as options from './options'
import * as computeFunctions from './auto-fill-dealing-functions'
import { totalFalse, meaningfulOrZero } from '../utils/common-tools'
import { idVerify } from './form-validate-functions'
// const labels = { applicantLabel, houseLabel }
export const inputFieldSetting = [


// 个人信息
//   姓名
  {
    type: 'input',
    propName: 'name',
    parentObject: ['applicant'],
    showStep: ['client'],
    inputType: 'china-name',
  },
  // 身份证号
  {
    type: 'input',
    propName: 'idNumber',
    parentObject: ['applicant'],
    showStep: ['client'],
    inputType: 'Id',
  },


  // 工作信息

// 公司地址
  {
    type: 'input',
    propName: 'companyAddress',
    parentObject: ['applicant'],
  },

  // 单位性质
  {
    type: 'select',
    propName: 'companyType',
    option: 'companyTypes',
    parentObject: ['applicant']
  },

  // 职业类型
  {
    type: 'autoFill',
    propName: 'professionType',
    targetPropName: 'clientWorkType',
    parentObject: ['applicant'],
    autoFillType: 'computFn',
    computFn: 'getProfessionType',
  },


// 自雇
//   经营实体名称
//   {
//     type: 'input',
//     propName: 'companyName',
//     parentObject: ['applicant', 'extra'],
//     isShow: 'professionType === 1',
//   },
  {
    type: 'autoFill',
    propName: 'companyName',
    targetPropName: 'company',
    parentObject: ['applicant', 'extra'],
    autoFillType: 'computFn',
    computFn: 'sameValue',
  },


// 经营年限
  {
    type: 'input',
    propName: 'businessTerm',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 1',
    inputType: 'p-number',
  },
// 企业年收入
  {
    type: 'input',
    propName: 'companyAnnualIncome',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 1',
    inputType: 'p-number',
  },
// 工商登记证号
  {
    type: 'input',
    propName: 'registerNumber',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 1',
  },
// 经营场所所有权
  {
    type: 'select',
    propName: 'officeOwner',
    option: 'officeOwnerTypes',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 1',
  },
// 单位规模
//   {
//     type: 'select',
//     propName: 'companySize',
//     option: 'companySizes',
//     parentObject: ['applicant'],
//     isShow: 'professionType === 1',
//   },
// 单位规模
  {
    type: 'select',
    propName: 'employeeCount',
    option: 'companySizes',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 1',
  },


// 自雇字段结束

// 受薪
  // 职业类型/工作类型
  {
    type: 'select',
    propName: 'professionCatType',
    option: 'professionCatTypes',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 0',
  },
// 职称
  {
    type: 'select',
    propName: 'professionalTitle',
    option: 'professionalTitles',
    parentObject: ['applicant'],
    isShow: 'professionType === 0',
  },
// 职务
  {
    type: 'select',
    propName: 'title',
    option: 'titles',
    parentObject: ['applicant'],
    isShow: 'professionType === 0',
  },

// 职业
  {
    type: 'autoFill',
    propName: 'profession',
    parentObject: ['applicant'],
    targetPropName: 'professionCatType',
    autoFillType: 'computFn',
    computFn: 'sameValue',
  },

// 岗位
  {
    type: 'autoFill',
    propName: 'mainJob',
    targetPropName: 'professionCatType',
    parentObject: ['applicant', 'extra'],
    autoFillType: 'computFn',
    computFn: 'sameValue',
  },
// 单位电话
  {
    type: 'input',
    propName: 'companyPhone',
    parentObject: ['applicant'],
    inputType: 'number',
    isShow: 'professionType === 0'
  },
// 工作单位
  {
    type: 'input',
    propName: 'company',
    parentObject: ['applicant'],
  },


// 受薪字段结束

//   个人年收入
  {
    type: 'input',
    propName: 'annualIncome',
    parentObject: ['applicant'],
    inputType: 'p-number',
  },
// 客户类型
  {
    type: 'select',
    propName: 'clientWorkType',
    option: 'clientWorkTypes',
    parentObject: ['applicant', 'extra']
  },

// 工作年限
  {
    type: 'input',
    propName: 'yearOfWork',
    parentObject: ['applicant'],
    inputType: 'p-number',
  },

// 单位省市
  {
    type: 'autoFillCascadeName',
    propName: 'officeCity',
    targetPropName: 'officeCityCodes',
    parentObject: ['applicant'],
  },


  // 单位省市code
  {
    type: 'cascadeSelect',
    propName: 'officeCityCodes',
    option: 'cities',
    cascadeNumber: 3,
    cascadeName: ['省', '市', '区'],
    parentObject: ['applicant']

  },

// '产业情况'
  {
    type: 'autoFillCascadeName',
    propName: 'industryName',
    targetPropName: 'industryCodes',
    parentObject: ['applicant'],

  },


  // *************************************
  // 从事行业code
  {
    type: 'cascadeSelect',
    propName: 'industryCodes',
    option: 'industries',
    cascadeNumber: 4,
    cascadeName: ['一级门类', '二级门类', '三级门类', '四级门类'],
    parentObject: ['applicant'],

  },

  // 地址code
  {
    type: 'cascadeSelect',
    propName: 'addressCityCodes',
    option: 'cities',
    cascadeNumber: 3,
    cascadeName: ['省', '市', '区'],
    parentObject: ['applicant']
  },


  // *************************************

// 地址省市
  {
    type: 'autoFillCascadeName',
    propName: 'addressCity',
    targetPropName: 'addressCityCodes',
    parentObject: ['applicant']
  },

// 共同居住人
  {
    type: 'select',
    propName: 'commonResident',
    option: 'commonResidents',
    parentObject: ['applicant']
  },
  // 居住地址
  {
    type: 'input',
    propName: 'householdNowAddress',
    parentObject: ['applicant'],
    showStep: ['client'],
  },

  // 通讯地址类型
  {
    type: 'select',
    propName: 'addressType',
    option: 'addressTypes',
    parentObject: ['applicant', 'extra']
  },
  // 性别
  {
    type: 'autoFill',
    propName: 'gender',
    targetPropName: 'idNumber',
    autoFillType: 'computFn',
    computFn: 'getGenderFromId',
    parentObject: ['applicant'],
    showStep: ['client'],
  },
  // 现住房情况
  {
    type: 'select',
    propName: 'housingSituation',
    option: 'housingSituations',
    parentObject: ['applicant'],
    showStep: ['client'],
  },

// 婚姻状况
  {
    type: 'select',
    propName: 'maritalStatus',
    option: 'maritalStatus',
    parentObject: ['applicant'],
    showStep: ['client'],
  },

  // 已婚字段
  // 配偶姓名
  {
    type: 'input',
    propName: 'spouseName',
    parentObject: ['applicant'],
    isShow: 'maritalStatus === 5,6',
    showStep: ['client'],
  },
  // 配偶证件号码
  {
    type: 'input',
    propName: 'spouseIdNumber',
    parentObject: ['applicant'],
    isShow: 'maritalStatus === 5,6',
    inputType: 'Id',
    showStep: ['client'],
  },
// 已婚字段结束
// 手机号码
  {
    type: 'input',
    propName: 'mobile',
    parentObject: ['applicant'],
    showStep: ['client'],
    inputType: 'tel',
  },
// 户籍地址
  {
    type: 'input',
    propName: 'householdAddress',
    parentObject: ['applicant'],
    showStep: ['client']
  },


// 最高学历
  {
    type: 'select',
    propName: 'educationLevel',
    option: 'educations',
    parentObject: ['applicant']
  },


  // 开户银行
  {
    type: 'select',
    propName: 'bankCode',
    option: 'bankCodes',
    parentObject: ['applicant'],
    // showStep: ['client'],
  },
// 银行卡号
  {
    type: 'input',
    propName: 'bankCardNumber',
    parentObject: ['applicant'],
    // showStep: ['client'],
    inputType: 'number',
  },
// 银行名称
  {
    type: 'autoFill',
    propName: 'bankName',
    targetPropName: 'bankCode',
    parentObject: ['applicant'],
    autoFillType: 'value',
    // showStep: ['client'],
  },

// 生日
  {
    type: 'autoFill',
    propName: 'birthdate',
    targetPropName: 'idNumber',
    parentObject: ['applicant'],
    autoFillType: 'computFn',
    computFn: 'idNumber2Bir',
    showStep: ['client'],
  },

  // 银行开户名
  {
    type: 'input',
    propName: 'bankCardName',
    parentObject: ['applicant'],
    // showStep: ['client'],
  },

// 紧急联系人1字段

//   紧急联系人1关系类型
  {
    type: 'select',
    propName: 'ec1RType',
    option: 'relationshipType',
    parentObject: ['applicant'],
  },
  // 紧急联系人1与申请人关系
  {
    type: 'select',
    propName: 'ec1RwBorrower',
    option: 'rwApplicant',
    parentObject: ['applicant'],
  },
// 紧急联系人1姓名
  {
    type: 'input',
    propName: 'emergencyContactName',
    parentObject: ['applicant'],
  },
// 紧急联系人1电话
  {
    type: 'input',
    propName: 'emergencyContactMobile',
    parentObject: ['applicant'],
    inputType: 'tel',
  },
// 紧急联系人2字段

//   紧急联系人2关系类型
  {
    type: 'select',
    propName: 'ec2RType',
    option: 'relationshipType',
    parentObject: ['applicant'],
  },
  // 紧急联系人2与申请人关系
  {
    type: 'select',
    propName: 'ec2RwBorrower',
    option: 'rwApplicant',
    parentObject: ['applicant'],
  },
// 紧急联系人2姓名
  {
    type: 'input',
    propName: 'emergencyContactName2',
    parentObject: ['applicant'],
  },
// 紧急联系人2电话
  {
    type: 'input',
    propName: 'emergencyContactMobile2',
    parentObject: ['applicant'],
    inputType: 'tel',
  },


  // 补充房产信息


  // 房产证编号
  {
    type: 'input',
    propName: 'certNumber',
    parentObject: ['house'],
  },


  // 房产所在地
  {
    type: 'select',
    propName: 'city',
    option: 'houseCities',
    parentObject: ['house']
  },


  // 详细地址
  {
    type: 'input',
    propName: 'address',
    parentObject: ['house'],
  },


  // 朝向
  {
    type: 'select',
    propName: 'orientation',
    option: 'allOrientations',
    parentObject: ['house']
  },


  // 建筑类型（房产种类）
  {
    type: 'select',
    propName: 'buildingType',
    option: 'buildingTypes',
    parentObject: ['house']
  },
  // 修建时间
  {
    type: 'calendar',
    propName: 'buildTime',
    parentObject: ['house']
  },
  // 小区名称
  {
    type: 'input',
    propName: 'communityName',
    parentObject: ['house'],
  },
  // 建筑面积
  {
    type: 'input',
    propName: 'constructionArea',
    parentObject: ['house'],
    inputType: 'p-number',
  },
  // 楼层
  {
    type: 'input',
    propName: 'floor',
    parentObject: ['house'],
    inputType: 'p-number',
  },

  // 房型：一室/二室...
  {
    type: 'select',
    propName: 'propertyType',
    option: 'propertyTypes',
    parentObject: ['house']
  },

  // 土地使用年限
  {
    type: 'input',
    propName: 'propertyYears',
    parentObject: ['house'],
    inputType: 'p-number',
  },


  // 购买时间
  {
    type: 'calendar',
    propName: 'purchaseTime',
    parentObject: ['house']
  },
  // 购买单价
  {
    type: 'input',
    propName: 'purchaseUnitPrice',
    parentObject: ['house'],
    inputType: 'p-number',
  },
  // 购买总价
  {
    type: 'input',
    propName: 'totalPrice',
    parentObject: ['house'],
    inputType: 'p-number',
  },
  // 使用面积
  {
    type: 'input',
    propName: 'usefulArea',
    parentObject: ['house'],
    inputType: 'p-number',
  },

  // 规划用途
  {
    type: 'select',
    propName: 'planningPurpose',
    option: 'planningPurposes',
    parentObject: ['house']
  },

  // 房屋登记时间
  {
    type: 'calendar',
    propName: 'houseRegisterDate',
    parentObject: ['house', 'extra']
  },

  // 套内建筑面积
  {
    type: 'input',
    propName: 'houseUsedArea',
    parentObject: ['house', 'extra'],
    inputType: 'p-number',
  },


  // 土地使用权取得方式
  {
    type: 'select',
    propName: 'landGain',
    option: 'landGains',
    parentObject: ['house', 'extra']
  },

  // 房屋所有情况
  {
    type: 'select',
    propName: 'ownerType',
    option: 'ownerTypes',
    parentObject: ['house', 'extra']
  },


// 共借人字段
// 姓名
  {
    type: 'input',
    propName: 'name',
    parentObject: ['unionBorrower'],
  },
// 性别
  {
    type: 'select',
    propName: 'gender',
    option: 'genders',
    parentObject: ['unionBorrower']
  },
// 证件号码
  {
    type: 'input',
    propName: 'idNumber',
    parentObject: ['unionBorrower'],
    inputType: 'Id',
  },
// 手机号码
  {
    type: 'input',
    propName: 'mobile',
    parentObject: ['unionBorrower'],
    inputType: 'tel',
  },

// 婚姻状况
  {
    type: 'select',
    propName: 'maritalStatus',
    option: 'maritalStatus',
    parentObject: ['unionBorrower'],
  },

// 子女字段
  // 姓名
  {
    type: 'input',
    propName: 'name',
    parentObject: ['children'],
  },

// 抵押信息
//   房屋抵押情况
  {
    type: 'select',
    propName: 'mortgageSituation',
    option: 'mortgageSituations',
    parentObject: ['hlMortgage'],
  },
  // 房屋中介名称1
  {
    type: 'input',
    propName: 'housingAgency1',
    parentObject: ['hlMortgage'],
  },
  // 中介评估价1
  {
    type: 'input',
    propName: 'agencyEvaluationPrice1',
    parentObject: ['hlMortgage'],
    inputType: 'p-number',
  },

// 订单信息
  {
    type: 'input',
    propName: 'agencyEvaluationPrice1',
    parentObject: ['hlMortgage'],
    inputType: 'p-number',
  },

  {
    type: 'title',
    propName: 'jobInfo',
    label: '职业信息',
    parentObject: ['applicant'],
    noRequired: true
  }

]
// export const fieldsInXIahu = [
//   'name', 'idNumber', 'householdAddress', 'companyAddress', 'companyType', 'professionType',
//   'companyName', 'professionType', 'businessTerm',
//   'companyAnnualIncome', 'registerNumber', 'officeOwner',
//   // 'companySize',
//   'employeeCount',
//   'professionCatType', 'professionalTitle',
//   'title', 'profession', 'mainJob', 'companyPhone', 'company',
//   'annualIncome', 'clientWorkType', 'yearOfWork', 'officeCity',
//   'officeCityCodes', 'industryName', 'industryCodes',
//   'addressCityCodes', 'addressCity',
//   'addressType', 'gender', 'housingSituation', 'maritalStatus',
//   'spouseName', 'spouseIdNumber', 'mobile',
//   'educationLevel', 'householdNowAddress', 'bankCode',
//   'bankCardNumber', 'bankName', 'bankCardName',
// // 以上是申请人信息，暂时就是没有紧急联系人2 的字段
//   'certNumber', 'houseCities', 'orientation',
//   'buildingType', 'buildTime', 'communityName', 'propertyYears',
//   'landGain', 'ownerType', 'houseRegisterDate', 'address',
//   'constructionArea', 'floor', 'propertyType',
//   'purchaseTime', 'purchaseUnitPrice', 'totalPrice',
//   'usefulArea', 'planningPurpose',
//   'houseUsedArea',
// // 以上是房产信息字段，所有的都有
//   'mortgageSituation', 'housingAgency1', 'agencyEvaluationPrice1'
// // 以上是抵押字段，所有的都有
// ]

export const inputFieldGroupSetting = {
  applicant: {
    api: {},
    get: 'getApplicantDetailByOrderId',
    post: 'addApplicantInfo2OrderAuto',
    defaultObject: {},
    currentObject: {},
    chineseName: '申请人工作信息',
    triggerProps: {},
  },
  house: {
    api: {},
    get: 'getHouseDetail',
    post: 'addHouseInfo2Order',
    defaultObject: {},
    currentObject: {},
    chineseName: '抵押房产信息',
    triggerProps: {},
  },
  unionBorrower: {
    api: {},
    // get: 'getHouseDetail',
    get: 'getUnionBorrower',
    post: 'saveUnionBorrower',
    del: 'delUnionBorrower',
    defaultObject: {},
    currentObject: {},
    chineseName: '共借人信息',
    triggerProps: {},
  },
  children: {
    api: {},
    get: 'getChildren',
    post: 'saveChildren',
    del: 'delChildren',
    defaultObject: {},
    currentObject: {},
    chineseName: '子女信息',
    triggerProps: {},
  },
  hlMortgage: {
    api: {},
    get: 'getMortgage',
    post: 'editMortgage',
    defaultObject: {},
    currentObject: {},
    chineseName: '抵押信息',
    triggerProps: {},
  }
}


export const personInfoFieldsName = {
  SHU_LOU_DAI: ['name', 'idNumber',
    'householdAddress', 'mobile', 'maritalStatus',
    'spouseName', 'spouseIdNumber', 'clientWorkType',
    // 'housingSituation','educationLevel',
    // 'bankCode', 'bankCardNumber', 'bankName', 'bankCardName',
    'householdNowAddress', 'birthdate', 'gender'
  ],
  FANG_DI_DAI: ['name', 'idNumber',
    'householdAddress', 'mobile', 'maritalStatus',
    'spouseName', 'spouseIdNumber', 'clientWorkType',
    // 'housingSituation','educationLevel',
    // 'bankCode', 'bankCardNumber', 'bankName', 'bankCardName',
    'householdNowAddress', 'birthdate', 'gender'
  ]
}

export const xiahuFields = {
  applicant: [
    // 个人信息
    'name', 'idNumber', 'householdAddress', 'mobile', 'maritalStatus',
    'spouseName', 'spouseIdNumber', 'educationLevel', 'housingSituation',
    'commonResident', 'addressCityCodes', 'householdNowAddress', 'addressType',
    'clientWorkType', 'annualIncome', 'bankCardNumber', 'bankCardName',
    'bankName', 'bankCode',

    // 职业信息
    'jobInfo',
    'professionType', 'industryCodes', 'yearOfWork', 'company',
    'companyType', 'employeeCount', 'officeCityCodes', 'companyAddress',
    'professionCatType', 'professionalTitle', 'title', 'mainJob',
    'companyPhone', 'businessTerm', 'companyAnnualIncome', 'registerNumber',
    'officeOwner',
    // 'companySize',

    // 紧急联系人

    // 自动填充字段
    'profession', 'companyName', 'addressCity', 'officeCity',
    'gender', 'industryName',

  ],
  house: [
    'certNumber', 'city', 'orientation',
    'buildingType', 'buildTime', 'communityName', 'propertyYears',
    'landGain', 'ownerType', 'houseRegisterDate', 'address',
    'constructionArea', 'floor', 'propertyType',
    'purchaseTime', 'purchaseUnitPrice', 'totalPrice',
    'usefulArea', 'planningPurpose',
    'houseUsedArea',
  ],
  hlMortgage: ['mortgageSituation', 'housingAgency1', 'agencyEvaluationPrice1'],
  unionBorrower: ['name', 'gender', 'idNumber', 'mobile', 'maritalStatus'],
  children: ['name']
}


export const contact1FieldsName = {
  SHU_LOU_DAI: ['ec1RType', 'ec1RwBorrower', 'emergencyContactName', 'emergencyContactMobile'],
  FANG_DI_DAI: ['ec1RType', 'ec1RwBorrower', 'emergencyContactName', 'emergencyContactMobile'],
}

export const contact2FieldsName = {
  SHU_LOU_DAI: ['ec2RType', 'ec2RwBorrower', 'emergencyContactName2', 'emergencyContactMobile2'],
  FANG_DI_DAI: ['ec2RType', 'ec2RwBorrower', 'emergencyContactName2', 'emergencyContactMobile2'],
}

export const housFieldsName = {
  SHU_LOU_DAI: ['certNumber', 'city', 'address', 'constructionArea', 'floor', 'orientation', 'buildingType'],
  FANG_DI_DAI: ['certNumber', 'city', 'address', 'constructionArea', 'floor', 'orientation', 'buildingType'],
}








