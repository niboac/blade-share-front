import industries from './industries'
import cities from './cities'

export { blockSettingWeb, blockSetting } from './img-group-setting'

function clone(obj) {
  if (typeof obj !== 'object') {
    return obj
  } else if (!obj) { // null
    return obj
  } else {
    let newobj = null
    if (obj instanceof Set) {
      newobj = new Set([...obj])
    } else if (obj instanceof Map) {
      newobj = new Map()
      obj.forEach((i, key) => {
        newobj.set(key, clone(i))
      })
    } else {
      newobj = obj instanceof Array ? [] : {};
      for (let i in obj) {
        newobj[i] = typeof obj[i] === 'object' ? clone(obj[i]) : obj[i];
      }
    }
    return newobj;
  }
}

export const bankInfoLabel = {
  bankCode: '开户银行',
  branchBank: '支行名称',
  bankCardNumber: '放款卡号',
  bankCardName: '开户人名字',
  bankName: '开户银行',
};

export const applicantLabel = {
  name: '客户姓名',
  gender: '性别',
  homePhone: null,
  mobile: '手机号码',
  phoneBrand: '家庭电话',
  phoneStatus: '手机状态',
  idType: '证件类型',
  idNumber: '身份证号',
  householdNowProvince: '现住址所在省',
  householdNowCity: '现住址所在市',
  householdNowAddress: '居住地址', // 通讯地址
  householdType: '户籍类型',
  householdProvince: '户籍所在省',
  householdCity: '户籍所在市',
  householdAddress: '户籍地址',
  payPeriod: 1, // 还款间隔，默认为1，页面不需要展示。
  addressCity: '居住省市',
  addressCityCodes: '居住省市', //  []
  officeCity: '公司地区',
  officeCityCodes: '公司地区', //  []
  company: '公司名称',
  companyType: '公司类型',
  industryName: '产业情况',
  industryCodes: '从事行业', // []
  profession: '职业',
  professionalTitle: '职称',
  title: '职务',
  yearOfWork: '工作年限',
  annualIncome: '个人年收入',
  annualIncomeRemarks: null,
  graduatedSchool: '毕业学校',
  educationLevel: '最高学历',
  maritalStatus: '婚姻状况',
  spouseName: '配偶姓名',
  spouseMobile: '配偶手机号码',
  spouseIdType: '身份证',
  spouseIdNumber: '配偶身份证号',
  marriageTime: '结婚时间',
  spouseHouseholdType: '配偶户籍类型',
  spouseHouseholdProvince: '配偶户籍所在省',
  spouseHouseholdCity: '配偶户籍所在市',
  spouseHouseholdAddress: '配偶户籍地址',
  spouseCompany: '配偶工作单位',
  spouseCompanyType: '公司类型',
  spouseIndustry: '配偶从事行业',
  familyMonthlyIncome: '家庭月收入',
  emergencyContactName: '紧急联系人1', // 紧急联系人1
  emergencyContactMobile: '电话', // '紧急联系人电话'
  emergencyContactName2: '紧急联系人2', // 紧急联系人2
  emergencyContactMobile2: '电话', // 紧急联系人2电话
  ec1RwBorrower: '与借款人关系', // 紧急联系人1与借款人关系
  ec2RwBorrower: '与借款人关系', // 紧急联系人2与借款人关系
  ec1RType: '紧急联系人1关系类型', // 关系类型
  ec2RType: '紧急联系人2关系类型',
  housingSituation: '现住房情况',
  commonResident: '共同居住人',
  professionType: '职业类别',

  companySize: '单位规模', // 字段弃用
  companyAddress: '公司地址',
  companyPhone: '办公电话',

  increaseCreditItems: '增信项',
  // officeOwner: '经营场所所有权',
  email: '电子邮件',
  birthdate: '出生日期',
  // clientWorkType: null,
  extra: {
    clientLoanType: null,
    clientWorkType: '客户类型',
    addressType: '通讯地址类型',
    registerNumber: '工商登记证号',
    officeOwner: '经营场所所有权',
    businessTerm: '经营年限',
    companyAnnualIncome: '企业年收入',
    employeeCount: '公司规模',
    mainJob: '岗位',
    companyName: '经营实体名称', // 经营实体名称
    professionCatType: '职业类型', // 职业类型
    householdSize: '家庭人数',
    companyRental: '经营场所租金',
    companyArea: '经营场所面积',
    companyMonthlyIncome: '企业月收入',
    personalMonthlyIncome: '个人月收入',
  }
}
export const houseLabel = {
  accountSituation: '房产内户口情况',
  address: '房屋地址',
  addressConsistentWithLicense: '实际地址和房产证地址是否一致',
  buildTime: '建成年代',
  buildingType: '房屋类型',
  certNumber: '房产证号码',
  city: '城市',
  communityName: '小区名称',
  constructionArea: '建筑面积',
  constructionTime: '建成时间',
  floor: '楼层',
  roomNumber: '房号',
  buildingId: '楼号',
  hasElevator: '是否有电梯',
  hlMortgage: '',
  landUsageCertNumber: '土地使用编号',
  // nameOfOwner: null,
  orientation: '朝向',
  parkingSituation: '车位情况',
  plannedLandUsage: '房产种类',
  propertyType: '户型',
  propertyYears: '土地使用年限',
  proportionOfHousing: '房屋比例',
  purchaseTime: '购买时间',
  purchaseUnitPrice: '购买单价',
  purchaseWay: null,
  realEstateCertNumber: '不动产权编号',
  // spouseName: null,
  surroundings: '抵押房产所在地及周边情况',
  totalPrice: '购买总价',
  usefulArea: '使用面积',
  carInformation: '增信项：车辆信息',
  financialProduct: '增信项：理财产品信息',
  planningPurpose: '规划用途',
  extra: {
    houseUsedArea: '套内建筑面积', // 套内建筑面积
    landGain: '土地使用权取得方式', // 土地使用权取得方式
    houseRegisterDate: '房屋登记时间', // 房屋登记时间
    ownerType: '房屋所有情况', // 房屋所有情况
  }
}

export const unionBorrowerLabel = {
  name: '姓名',
  gender: '性别',
  idType: '证件类型',
  idNumber: '身份证号',
  mobile: '手机号码',
  housingSituation: '现住房情况',
  graduatedSchool: '毕业院校',
  commonResident: '共同居住人',
  educationLevel: '最高学历',
  maritalStatus: '婚姻状况',
  relationshipWithCustomer: '与主借人关系',
  householdAddress: '户籍地址',
  householdNowAddress: '居住地址',
  company: '工作单位',
  companyType: '单位性质',
  professionType: '工作类型',
  companySize: '单位规模',
  industry: '从事行业',
  yearOfWork: '工作年限',
  profession: '职业',
  professionalTitle: '职称',
  annualIncome: '年收入',
  companyPhone: '单位电话',
  companyAddress: '单位地址'
};

export const hlMortgageLabel = {
  isUniqueHouse: '是否唯一房屋',
  hasChangeHousingMainStructure: '房屋主体结构有无变化',
  beingRent: '是否出租',
  abandonPurchasePriority: '是否签署放弃优先购买权',
  livingWeakPeople: '是否老弱病残孕',
  livingPeople: '房屋现居住人情况',
  mortgageSituation: '房屋抵押情况',
  housingAgency1: '房屋中介名称1',
  housingAgency2: '房屋中介名称2',
  agencyEvaluationPrice1: '中介评估价1',
  agencyEvaluationPrice2: '中介评估价2',
  overallEvaluationPrice: '综合评估价',
  fastBid1: '快出价1',
  fastBid2: '快出价2',
  houseOwner: '产权人',
  houseUid: '房产id',
  estateResearch: '产调情况',
  mortgageRemain: '抵押余额',
  originalLoanType: '原贷款类型',
  firstMortgageRemain: '一抵余额',
  secondMortgageRemain: '二抵余额',
};

export const orderLabel = {
  loanType: '贷款类型',
  businessType: '业务种类',
  loanProduct: '贷款产品',
  accompaniesName: '陪同人员姓名',
  accompaniesNumber: '陪同人数',
  alternativeHouseAddress: null,
  alternativeHouseArea: null,
  alternativeHouseCertNumber: null,
  applyDate: '申请时间',
  applyLimit: '申请额度',
  approvalAmount: '审批额度',
  expectedLoanTime: '期望放款时间',
  hlMortgageUid: null,
  loanAmount: '借款金额',
  loanPurpose: '借款用途',
  loanTerm: '贷款期限',
  annualInterestRate: '年利率',
  mortgageInfo: null,
  priceEvaluation: '内部评房值',
  priceEvaluationCustom: '客户评房值',
  productId: '贷款产品',
  repaySource: '还款来源',
  repayMode: '还款方式',
  serviceFee: '服务费',
  expectedRepayTime: '预计还款时间',
  platform: '进件来源',
};
export const childrenLabel = {
  name: '姓名',
  birthdate: '出生年月日',
  mobile: '手机号码',
  company: '单位名称',
  householdAddress: '户籍地址',
  householdCity: '户籍所在城市',
  householdProvince: '户籍所在省份',
  householdType: '户籍类型',
  profession: '职业'
};
export const hetongInfoLabel = Object.assign({
  notarizeTime: '公证时间',
  operator: '经办人',
  receiveTime: '领取时间',
  receiver: '领证人',
}, bankInfoLabel)
export const diyaInfoLabel = {
  diyaResult: '抵押结果',
  diyaTime: '抵押时间',
  operator: '经办人',
  receiveTime: '领取时间',
  receiver: '领证人',
  failReason: '失败原因'
}
export const xiahuAcompanyInfoLabel = {
  xiahuTime: '下户时间',
  followerName: '陪同人',
}

export const appointLabel = {
  appointmentTime: '预约时间',
  contactMobile: '预约联系电话',
  contactName: '预约人姓名',
  contactType: '预约人类型',
  orderUid: '订单Uid',
  taskType: '节点类型',
}

export const diyaInfoDefault = {
  diyaResult: null,
  diyaTime: null,
  operator: null,
  receiveTime: null,
  receiver: null,
  failReason: null
}

export const xiahuAcompanyInfoDefault = {
  xiahuTime: null,
  followerName: null,
}
export const bankInfoDefault = {
  bankName: null,
  bankCode: null,
  bankCardNumber: null,
  bankCardName: null,
  branchBank: null,
}
export const hetongInfoDefault = Object.assign({
  notarizeTime: null,
  operator: null,
  receiveTime: null,
  receiver: null,
}, bankInfoDefault)

export const orderDefault = {
  loanType: 'fdd',
  businessType: '3',
  loanProduct: null,
  applyDate: null,
  applyLimit: null,
  approvalAmount: null,
  expectedLoanTime: '2018-01-08T21:02:49.000Z',
  hlMortgageUid: null,
  loanAmount: null,
  loanPurpose: null,
  loanTerm: null,
  annualInterestRate: null,
  mortgageInfo: null,
  priceEvaluation: null,
  priceEvaluationCustom: null,
  repaySource: null,
  repayMode: null,
  serviceFee: null,
  accompaniesName: null,
  accompaniesNumber: null,
  productId: null,
  extra: {},
  expectedRepayTime: '2018-01-08T21:02:49.000Z',
  platform: 1,
}
export const hlMortgageDefault = {
  isUniqueHouse: null,
  hasChangeHousingMainStructure: null,
  beingRent: null,
  abandonPurchasePriority: null,
  livingWeakPeople: null,
  livingPeople: null,
  mortgageSituation: null,
  housingAgency1: null,
  housingAgency2: null,
  agencyEvaluationPrice1: null,
  agencyEvaluationPrice2: null,
  overallEvaluationPrice: null,
  fastBid1: null,
  fastBid2: null,
  houseOwner: null,
  houseUid: null,
  estateResearch: null,
  mortgageRemain: null,
  firstMortgageRemain: null,
  secondMortgageRemain: null,
  originalLoanType: null,
}
export const unionBorrowerDefault = {
  name: null,
  gender: null,
  idType: '0',
  idNumber: null,
  mobile: null,
  housingSituation: null,
  graduatedSchool: null,
  commonResident: null,
  educationLevel: null,
  maritalStatus: null,
  relationshipWithCustomer: null,
  householdAddress: null,
  householdNowAddress: null,
  company: null,
  companyType: null,
  professionType: null,
  companySize: null,
  industry: null,
  yearOfWork: null,
  profession: null,
  professionalTitle: null,
  annualIncome: null,
  companyPhone: null,
  companyAddress: null

};

export const childrenDefault = {
  name: null,
  birthdate: null,
  mobile: null,
  company: null,
  householdAddress: null,
  householdCity: null,
  householdProvince: null,
  householdType: null,
  profession: null
};

export const applicantDefault = {
  name: null,
  gender: null,
  homePhone: null,
  birthdate: null,
  mobile: null,
  email: null,
  phoneBrand: null,
  phoneStatus: null,
  idType: '0',
  idNumber: null,
  householdNowProvince: null,
  householdNowCity: null,
  householdNowAddress: null, // 通讯地址
  householdType: null,
  householdProvince: null,
  householdCity: null,
  householdAddress: null,
  payPeriod: 1,
  addressCity: null,
  addressCityCodes: null,
  officeCity: null,
  officeCityCodes: null,
  company: null,
  companyType: null,
  industryName: null,
  industryCodes: [],
  // industryCode: null,
  profession: null,
  professionalTitle: null,
  title: null,
  yearOfWork: null,
  annualIncome: null,
  annualIncomeRemarks: null,
  graduatedSchool: null,
  educationLevel: null,
  maritalStatus: null,
  spouseName: null,
  spouseMobile: null,
  spouseIdType: '身份证',
  spouseIdNumber: null,
  marriageTime: null,
  spouseHouseholdType: null,
  spouseHouseholdProvince: null,
  spouseHouseholdCity: null,
  spouseHouseholdAddress: null,
  spouseCompany: null,
  spouseCompanyType: null,
  spouseIndustry: null,
  familyMonthlyIncome: null,
  emergencyContactName: null, // 紧急联系人1
  emergencyContactMobile: null, // '紧急联系人电话'
  emergencyContactName2: null, // 紧急联系人2
  emergencyContactMobile2: null, // 紧急联系人2电话
  housingSituation: null,
  commonResident: null,
  professionType: null,
  companySize: null,
  companyAddress: null,
  companyPhone: null,
  ec1RwBorrower: null, // 紧急联系人1与借款人关系
  ec2RwBorrower: null, // 紧急联系人2与借款人关系
  ec1RType: null, // 关系类型
  ec2RType: null,
  // clientWorkType: null,
  extra: {

    clientLoanType: null,
    clientWorkType: null,
    addressType: null,
    registerNumber: null,
    officeOwner: null,
    businessTerm: null,
    companyAnnualIncome: null,
    employeeCount: null,
    mainJob: null,
    companyName: null, // 经营实体名称
    professionCatType: null, // 职业类型
    householdSize: null,
    companyRental: null,
    companyArea: null,
    companyMonthlyIncome: null,
    personalMonthlyIncome: null,
  }
}
export const houseDefault = {
  accountSituation: null,
  address: null,
  addressConsistentWithLicense: null,
  buildTime: null,
  buildingType: null,
  certNumber: null,
  city: null,
  communityName: null,
  constructionArea: null,
  constructionTime: null,
  floor: null,
  roomNumber: null,
  buildingId: null,
  hasElevator: null,
  hlMortgage: [],
  landUsageCertNumber: null,
  // nameOfOwner: null,
  orientation: null,
  parkingSituation: null,
  plannedLandUsage: null,
  propertyType: '',
  propertyYears: '',
  proportionOfHousing: null,
  purchaseTime: null,
  purchaseUnitPrice: null,
  purchaseWay: null,
  realEstateCertNumber: null,
  // spouseName: null,
  surroundings: null,
  totalPrice: null,
  usefulArea: null,
  carInformation: null,
  financialProduct: null,
  planningPurpose: null,

  extra: {
    houseUsedArea: null, // 套内建筑面积
    landGain: null, // 土地使用权取得方式
    houseRegisterDate: null, // 房屋登记时间
    ownerType: null, // 房屋所有情况
  }
}
export const appointDefault = {
  appointmentTime: null,
  contactMobile: null,
  contactName: null,
  contactType: null,
  orderUid: null,
  taskType: null,
}

export const house_hlMortgageLabel = clone(houseLabel)
house_hlMortgageLabel.hlMortgage = [clone(hlMortgageLabel)]
export const house_hlMortgageDefault = clone(houseDefault)
house_hlMortgageDefault.hlMortgage = [clone(hlMortgageDefault)]

export const person_bankLabel = Object.assign(clone(applicantLabel), clone(bankInfoLabel))
export const person_bankDefault = Object.assign(clone(applicantDefault), clone(bankInfoDefault))


export const orderDetailLabel = Object.assign(clone(orderLabel), clone(applicantLabel))
export const orderDetailDefault = Object.assign(clone(orderDefault), clone(applicantDefault))

// export const fastOrderLabel = Object.assign(clone(orderLabel), clone(applicantLabel))
export const fastOrderLabel = clone(orderLabel)
fastOrderLabel.applicant = clone(applicantLabel)
export const fastOrderDefault = clone(orderDefault)
fastOrderDefault.applicant = clone(applicantDefault)

export const diyaResults = [
  { value: '抵押成功', key: '1' },
  { value: '抵押失败', key: '0' },
]

export const diyaRejectReasons = ['用户放弃', '房本查封中', '房本抵押、上市时间或条件未达到']

export const diyaFailedReasons = [
  '抵押人临时缺席', '抵押债权额偏离审批值', '抵押人到场不合规', '房本网签中', '未过解压归档期',
  '无抵押号源', '当日号源过晚未办结', '系统字段冲突、如字体错误', '合同版本未通过房管局审核', '有土地证',
  ...diyaRejectReasons
]

const allOrientations = [
  { value: '朝南', key: '朝南' },
  { value: '朝北', key: '朝北' },
  { value: '朝东', key: '朝东' },
  { value: '朝西', key: '朝西' },
  { value: '南北', key: '南北' },
  { value: '其它', key: '其它' }
]
const houseTypes = [
  { key: '0', value: '普通住宅' },
  { key: '1', value: '别墅' },
  { key: '2', value: '其它' }
]
const educations = [{
  key: '1',
  value: '研究生及以上'
}, {
  key: '2',
  value: '大学'
}, {
  key: '3',
  value: '大专'
}, {
  key: '4',
  value: '中专'
}, {
  key: '5',
  value: '技术学校'
}, {
  key: '6',
  value: '高中'
}, {
  key: '7',
  value: '初中'
}, {
  key: '8',
  value: '小学'
}, {
  key: '9',
  value: '文盲或半文盲'
}, {
  key: '10',
  value: '未知'
}]

export const clientWorkTypes = [
  { value: '一般自然人', key: '0' },
  { value: '个体工商户', key: '1' },
  { value: '小微企业主', key: '2' }
]

const maritalStatus = [{
  key: '0',
  value: '未婚'
}, {
  key: '2',
  value: '离异'
}, {
  key: '3',
  value: '丧偶'
}, {
  key: '4',
  value: '其他'
}, {
  key: '5',
  value: '已婚无子女'
}, {
  key: '6',
  value: '已婚有子女'
}]
const livingConditions = [{
  key: '1',
  value: '未婚'
}, {
  key: '2',
  value: '已婚'
}]
const
  professionTypes = [{
    key: '0',
    value: '受薪'
  }, {
    key: '1',
    value: '自雇'
  }]
const relationshipTypes = [{
  key: '1',
  value: '未婚'
}, {
  key: '2',
  value: '已婚'
}]
const applicantRelationshipTypes = [{
  key: '1',
  value: '未婚'
}, {
  key: '2',
  value: '已婚'
}]
const time = [{
  key: '6',
  value: '6期'
}, {
  key: '12',
  value: '12期'
}, {
  key: '24',
  value: '24期'
}, {
  key: '36',
  value: '36期'
}]
const periods = [{
  key: 6,
  value: '6期'
}, {
  key: 12,
  value: '12期'
}, {
  key: 24,
  value: '24期'
}, {
  key: 36,
  value: '36期'
}]
const businessTypes = [{
  key: '1',
  value: '银行贷款赎楼'
}, {
  key: '2',
  value: '非银行金融机构贷款赎楼'
}, {
  key: '3',
  value: '房抵贷'
}]
export const businessTypes2OrderType = {
  1: ['SHU_LOU_DAI'],
  2: ['SHU_LOU_DAI'],
  3: ['FANG_DI_DAI'],
}
export const orderType2BusinessTypes = {
  SHU_LOU_DAI: 1,
  FANG_DI_DAI: 3,
}
const IdInfos = [
  'idCardFaceUrl',
  'portraitUrl',
  'idNumber',
  'name',
  'gender',
  'birthday',
  'address',
  'nationality',
  'cardIssuer'
]
const rwApplicant = [ // 与申请人的关系
  { value: '父母', key: '1' },
  { value: '配偶', key: '2' },
  { value: '子女', key: '3' },
  { value: '兄弟姐妹', key: '4' },
  { value: '朋友', key: '5' },
  { value: '同事', key: '6' },
  { value: '合伙人', key: '7' },
  { value: '其他', key: '8' },
];
const relationshipType = [ // 关系类型
  { value: '其他联系人', key: '0' },
  { value: '直系联系人', key: '1' },
];
let housingSituations = [
  { key: '租赁', value: '租赁' },
  { key: '自置有贷款', value: '自置有贷款' },
  { key: '自置无贷款', value: '自置无贷款' },
  { key: '单位', value: '单位' },
  { key: '其他', value: '其他' }
];

export const taskType2Submit = {
  产调核房征信补件: '下户',
  下户: '下户'
}

let taskTypeBtnShow = {
  产调核房征信补件: '下户'
}


export const flowKey2ImgTasktype = {
  进件: 'jinjian',
  jinjian: 'jinjian',
  下户: '下户',
  合同: '合同',
  抵押: '抵押',
  归档: '归档',

  核行: '核行',
  控件: '控件',
  解抵押: '解抵押',
  进抵: '进抵',
  归档结案: '归档结案',
}


const bankCodes = [
  { value: '工商银行', key: '102' },
  { value: '农业银行', key: '103' },
  { value: '中国银行', key: '104' },
  { value: '建设银行', key: '105' },
  { value: '交通银行', key: '301' },
  { value: '中信银行', key: '302' },
  { value: '平安银行', key: '307' },
  { value: '广发银行', key: '306' },
  { value: '兴业银行', key: '309' },
  { value: '光大银行', key: '303' },
  { value: '浦发银行', key: '310' },
  { value: '民生银行', key: '305' },
  { value: '上海银行', key: '401' },
  { value: '华夏银行', key: '304' },
  { value: '邮储银行', key: '100' },
];

const companyTypes = [
  { key: '100', value: '党政机关' },
  { key: '200', value: '事业单位' },
  { key: '300', value: '军队' },
  { key: '400', value: '社会团体' },
  { key: '500', value: '内资企业' },
  { key: '510', value: '国有企业' },
  { key: '520', value: '集体企业' },
  { key: '530', value: '股份合作企业' },
  { key: '540', value: '联营企业' },
  { key: '550', value: '有限责任公司' },
  { key: '560', value: '股份有限公司' },
  { key: '570', value: '私营企业' },
  { key: '600', value: '外商投资企业(含港、澳、台)' },
  { key: '610', value: '中外合资经营企业(含港、澳、台)' },
  { key: '620', value: '中外合作经营企业(含港、澳、台)' },
  { key: '630', value: '外资企业(含港、澳、台)' },
  { key: '640', value: '外商投资股份有限公司(含港、澳、台)' },
  { key: '700', value: '个体经营' },
  { key: '800', value: '其他' },
  { key: '900', value: '未知' },
];

export const commonResidents = [
  { key: '父母', value: '父母' },
  { key: '配偶及子女', value: '配偶及子女' },
  { key: '朋友', value: '朋友' },
  { key: '独居', value: '独居' },
  { key: '其他', value: '其他' },
]
export const addressTypes = [
  { key: '0', value: '住宅' },
  { key: '1', value: '单位' }
]
export const genders = [
  { key: '0', value: '女' },
  { key: '1', value: '男' }
]
export const professionCatTypes = [
  { key: '0', value: '国家机关、党群组织、企业、事业单位负责人' },
  { key: '1', value: '专业技术人员' },
  { key: '2', value: '办事人员和有关人员' },
  { key: '3', value: '商业、服务业人员' },
  { key: '4', value: '农、林、牧、渔、水利业生产人员' },
  { key: '5', value: '生产、运输操作人员及有关人员' },
  { key: '6', value: '军人' },
  { key: '7', value: '不便分类的其他从业人员' },
  { key: '8', value: '未知' },
]
export const propertyTypes = [
  { value: '一室', key: '一室' },
  { value: '二室', key: '二室' },
  { value: '三室', key: '三室' },
  { value: '四室', key: '四室' },
  { value: '五室', key: '五室' },
  { value: '五室以上', key: '五室以上' }
];
export const titles = [
  { key: '0', value: '高级领导(局级及以上或大公司高级管理人员)' },
  { key: '1', value: '中级领导(局级以下或大公司中级管理人员)' },
  { key: '2', value: '一般员工' },
  { key: '3', value: '其它' },
  { key: '4', value: '未知' },
]
export const professionalTitles = [ // 职称
  { value: '无', key: '0' },
  { value: '高级', key: '1' },
  { value: '中级', key: '2' },
  { value: '初级', key: '3' },
  { value: '未知', key: '4' },
];

export const buildingTypes = [
  { key: '0', value: '普通住宅' },
  { key: '1', value: '别墅' },
  { key: '2', value: '其它' }
];
export const planningPurposes = [
  { key: '0', value: '商业' },
  { key: '1', value: '住宅' },
  { key: '2', value: '商住' }
]
export const landGains = [ // 土地使用权取得方式
  { key: '出让', value: '出让' },
  { key: '划拨', value: '划拨' },
  // { key: '70年产权', value: '70年产权' },
  { key: '其它', value: '其它' },
]
export const ownerTypes = [ // 房屋所有情况
  { key: '单独所有', value: '单独所有' },
  { key: '共同所有', value: '共同所有' }
]

export const officeOwnerTypes = [ // 经营场所所有权
  { key: '0', value: '自置有贷款' },
  { key: '1', value: '自置无贷款' },
  { key: '2', value: '租赁' },
  { key: '3', value: '其他' },
]
export const companySizes = [
  { key: '10人以下', value: '10人以下' },
  { key: '10-100人', value: '10-100人' },
  { key: '100-300人', value: '100-300人' },
  { key: '300人以上', value: '300人以上' },
];
export const mortgageSituations = [ // 抵押情况
  { key: '无抵押', value: '无抵押' },
  { key: '一抵', value: '一抵' },
  { key: '二抵', value: '二抵' },
  { key: '其它', value: '其它' },
];

export const loanPurposesGuoyu = [ // 借款用途
  { value: '消费品', key: '0' },
  { value: '支付货款', key: '1' },
  { value: '支付经营费用', key: '2' },
  { value: '装修经营场所', key: '3' },
  { value: '开新店', key: '4' },
  { value: '购置类固定资产', key: '5' },
  { value: '购车', key: '6' },
  { value: '婚庆', key: '7' },
  { value: '旅游', key: '8' },
  { value: '装修', key: '9' },
  { value: '教育', key: '10' },
  { value: '其他', key: '11' },
];

export const loanPurposes = [ // 借款用途
  { value: '转抵押垫资', key: '21' },
  ...loanPurposesGuoyu
];

export let houseCities = [
  { key: '北京', value: '北京' },
  // { key: '上海', value: '上海' },
]


export {
  educations, livingConditions, professionTypes,
  relationshipTypes, applicantRelationshipTypes, time,
  maritalStatus, periods, businessTypes,
  rwApplicant, relationshipType, housingSituations,
  allOrientations, houseTypes, taskTypeBtnShow,
  bankCodes, companyTypes, industries, cities
}