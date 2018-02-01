(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cities = exports.industries = exports.companyTypes = exports.bankCodes = exports.taskTypeBtnShow = exports.houseTypes = exports.allOrientations = exports.housingSituations = exports.relationshipType = exports.rwApplicant = exports.businessTypes = exports.periods = exports.maritalStatus = exports.time = exports.applicantRelationshipTypes = exports.relationshipTypes = exports.professionTypes = exports.livingConditions = exports.educations = exports.houseCities = exports.loanPurposes = exports.loanPurposesGuoyu = exports.mortgageSituations = exports.companySizes = exports.officeOwnerTypes = exports.ownerTypes = exports.landGains = exports.planningPurposes = exports.buildingTypes = exports.professionalTitles = exports.titles = exports.propertyTypes = exports.professionCatTypes = exports.genders = exports.addressTypes = exports.commonResidents = exports.flowKey2ImgTasktype = exports.taskType2Submit = exports.orderType2BusinessTypes = exports.businessTypes2OrderType = exports.clientWorkTypes = exports.diyaFailedReasons = exports.diyaRejectReasons = exports.diyaResults = exports.fastOrderDefault = exports.fastOrderLabel = exports.orderDetailDefault = exports.orderDetailLabel = exports.person_bankDefault = exports.person_bankLabel = exports.house_hlMortgageDefault = exports.house_hlMortgageLabel = exports.appointDefault = exports.houseDefault = exports.applicantDefault = exports.childrenDefault = exports.unionBorrowerDefault = exports.hlMortgageDefault = exports.orderDefault = exports.hetongInfoDefault = exports.bankInfoDefault = exports.xiahuAcompanyInfoDefault = exports.diyaInfoDefault = exports.appointLabel = exports.xiahuAcompanyInfoLabel = exports.diyaInfoLabel = exports.hetongInfoLabel = exports.childrenLabel = exports.orderLabel = exports.hlMortgageLabel = exports.unionBorrowerLabel = exports.houseLabel = exports.applicantLabel = exports.bankInfoLabel = exports.blockSetting = exports.blockSettingWeb = undefined;

var _imgGroupSetting = __webpack_require__(1);

Object.defineProperty(exports, 'blockSettingWeb', {
  enumerable: true,
  get: function get() {
    return _imgGroupSetting.blockSettingWeb;
  }
});
Object.defineProperty(exports, 'blockSetting', {
  enumerable: true,
  get: function get() {
    return _imgGroupSetting.blockSetting;
  }
});

var _industries = __webpack_require__(2);

var _industries2 = _interopRequireDefault(_industries);

var _cities = __webpack_require__(3);

var _cities2 = _interopRequireDefault(_cities);

var _lodash = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bankInfoLabel = exports.bankInfoLabel = {
  bankCode: '开户银行',
  branchBank: '支行名称',
  bankCardNumber: '放款卡号',
  bankCardName: '开户人名字',
  bankName: '开户银行'
};

var applicantLabel = exports.applicantLabel = {
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
    personalMonthlyIncome: '个人月收入'
  }
};
var houseLabel = exports.houseLabel = {
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
    ownerType: '房屋所有情况' // 房屋所有情况
  }
};

var unionBorrowerLabel = exports.unionBorrowerLabel = {
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

var hlMortgageLabel = exports.hlMortgageLabel = {
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
  secondMortgageRemain: '二抵余额'
};

var orderLabel = exports.orderLabel = {
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
  extra: {
    customerName: '客户姓名',
    loanperiodCode: '贷款期限代码',
    productCode: '产品代码'
  }
};
var childrenLabel = exports.childrenLabel = {
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
var hetongInfoLabel = exports.hetongInfoLabel = Object.assign({
  notarizeTime: '公证时间',
  operator: '经办人',
  receiveTime: '领取时间',
  receiver: '领证人'
}, bankInfoLabel);
var diyaInfoLabel = exports.diyaInfoLabel = {
  diyaResult: '抵押结果',
  diyaTime: '抵押时间',
  operator: '经办人',
  receiveTime: '领取时间',
  receiver: '领证人',
  failReason: '失败原因'
};
var xiahuAcompanyInfoLabel = exports.xiahuAcompanyInfoLabel = {
  xiahuTime: '下户时间',
  followerName: '陪同人'
};

var appointLabel = exports.appointLabel = {
  appointmentTime: '预约时间',
  contactMobile: '预约联系电话',
  contactName: '预约人姓名',
  contactType: '预约人类型',
  orderUid: '订单Uid',
  taskType: '节点类型'
};

var diyaInfoDefault = exports.diyaInfoDefault = {
  diyaResult: null,
  diyaTime: null,
  operator: null,
  receiveTime: null,
  receiver: null,
  failReason: null
};

var xiahuAcompanyInfoDefault = exports.xiahuAcompanyInfoDefault = {
  xiahuTime: null,
  followerName: null
};
var bankInfoDefault = exports.bankInfoDefault = {
  bankName: null,
  bankCode: null,
  bankCardNumber: null,
  bankCardName: null,
  branchBank: null
};
var hetongInfoDefault = exports.hetongInfoDefault = Object.assign({
  notarizeTime: null,
  operator: null,
  receiveTime: null,
  receiver: null
}, bankInfoDefault);

var orderDefault = exports.orderDefault = {
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
  extra: {
    customerName: null,
    loanperiodCode: null,
    productCode: null
  },
  expectedRepayTime: '2018-01-08T21:02:49.000Z',
  platform: 1
};
var hlMortgageDefault = exports.hlMortgageDefault = {
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
  originalLoanType: null
};
var unionBorrowerDefault = exports.unionBorrowerDefault = {
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

var childrenDefault = exports.childrenDefault = {
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

var applicantDefault = exports.applicantDefault = {
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
    personalMonthlyIncome: null
  }
};
var houseDefault = exports.houseDefault = {
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
    ownerType: null // 房屋所有情况
  }
};
var appointDefault = exports.appointDefault = {
  appointmentTime: null,
  contactMobile: null,
  contactName: null,
  contactType: null,
  orderUid: null,
  taskType: null
};

var house_hlMortgageLabel = exports.house_hlMortgageLabel = (0, _lodash.cloneDeep)(houseLabel);
house_hlMortgageLabel.hlMortgage = [(0, _lodash.cloneDeep)(hlMortgageLabel)];
var house_hlMortgageDefault = exports.house_hlMortgageDefault = (0, _lodash.cloneDeep)(houseDefault);
house_hlMortgageDefault.hlMortgage = [(0, _lodash.cloneDeep)(hlMortgageDefault)];

var person_bankLabel = exports.person_bankLabel = Object.assign((0, _lodash.cloneDeep)(applicantLabel), (0, _lodash.cloneDeep)(bankInfoLabel));
var person_bankDefault = exports.person_bankDefault = Object.assign((0, _lodash.cloneDeep)(applicantDefault), (0, _lodash.cloneDeep)(bankInfoDefault));

var orderDetailLabel = exports.orderDetailLabel = Object.assign((0, _lodash.cloneDeep)(orderLabel), (0, _lodash.cloneDeep)(applicantLabel));
var orderDetailDefault = exports.orderDetailDefault = Object.assign((0, _lodash.cloneDeep)(orderDefault), (0, _lodash.cloneDeep)(applicantDefault));

// export const fastOrderLabel = Object.assign(clone(orderLabel), clone(applicantLabel))

var fastOrderLabel = exports.fastOrderLabel = (0, _lodash.cloneDeep)(orderLabel);
fastOrderLabel.applicant = (0, _lodash.cloneDeep)(applicantLabel);
var fastOrderDefault = exports.fastOrderDefault = (0, _lodash.cloneDeep)(orderDefault);
fastOrderDefault.applicant = (0, _lodash.cloneDeep)(applicantDefault);
// export const fastOrder_hhLabel = clone(fastOrderLabel)
// export const fastOrder_hhDefault = clone(fastOrderDefault)

var diyaResults = exports.diyaResults = [{ value: '抵押成功', key: '1' }, { value: '抵押失败', key: '0' }];

var diyaRejectReasons = exports.diyaRejectReasons = ['用户放弃', '房本查封中', '房本抵押、上市时间或条件未达到'];

var diyaFailedReasons = exports.diyaFailedReasons = ['抵押人临时缺席', '抵押债权额偏离审批值', '抵押人到场不合规', '房本网签中', '未过解压归档期', '无抵押号源', '当日号源过晚未办结', '系统字段冲突、如字体错误', '合同版本未通过房管局审核', '有土地证'].concat(diyaRejectReasons);

var allOrientations = [{ value: '朝南', key: '朝南' }, { value: '朝北', key: '朝北' }, { value: '朝东', key: '朝东' }, { value: '朝西', key: '朝西' }, { value: '南北', key: '南北' }, { value: '其它', key: '其它' }];
var houseTypes = [{ key: '0', value: '普通住宅' }, { key: '1', value: '别墅' }, { key: '2', value: '其它' }];
var educations = [{
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
}];

var clientWorkTypes = exports.clientWorkTypes = [{ value: '一般自然人', key: '0' }, { value: '个体工商户', key: '1' }, { value: '小微企业主', key: '2' }];

var maritalStatus = [{
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
}];
var livingConditions = [{
  key: '1',
  value: '未婚'
}, {
  key: '2',
  value: '已婚'
}];
var professionTypes = [{
  key: '0',
  value: '受薪'
}, {
  key: '1',
  value: '自雇'
}];
var relationshipTypes = [{
  key: '1',
  value: '未婚'
}, {
  key: '2',
  value: '已婚'
}];
var applicantRelationshipTypes = [{
  key: '1',
  value: '未婚'
}, {
  key: '2',
  value: '已婚'
}];
var time = [{
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
}];
var periods = [{
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
}];
var businessTypes = [{
  key: '1',
  value: '银行贷款赎楼'
}, {
  key: '2',
  value: '非银行金融机构贷款赎楼'
}, {
  key: '3',
  value: '房抵贷'
}];
var businessTypes2OrderType = exports.businessTypes2OrderType = {
  1: ['SHU_LOU_DAI'],
  2: ['SHU_LOU_DAI'],
  3: ['FANG_DI_DAI']
};
var orderType2BusinessTypes = exports.orderType2BusinessTypes = {
  SHU_LOU_DAI: 1,
  FANG_DI_DAI: 3
};
var IdInfos = ['idCardFaceUrl', 'portraitUrl', 'idNumber', 'name', 'gender', 'birthday', 'address', 'nationality', 'cardIssuer'];
var rwApplicant = [// 与申请人的关系
{ value: '父母', key: '1' }, { value: '配偶', key: '2' }, { value: '子女', key: '3' }, { value: '兄弟姐妹', key: '4' }, { value: '朋友', key: '5' }, { value: '同事', key: '6' }, { value: '合伙人', key: '7' }, { value: '其他', key: '8' }];
var relationshipType = [// 关系类型
{ value: '其他联系人', key: '0' }, { value: '直系联系人', key: '1' }];
var housingSituations = [{ key: '租赁', value: '租赁' }, { key: '自置有贷款', value: '自置有贷款' }, { key: '自置无贷款', value: '自置无贷款' }, { key: '单位', value: '单位' }, { key: '其他', value: '其他' }];

var taskType2Submit = exports.taskType2Submit = {
  产调核房征信补件: '下户',
  下户: '下户'
};

var taskTypeBtnShow = {
  产调核房征信补件: '下户'
};

var flowKey2ImgTasktype = exports.flowKey2ImgTasktype = {
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
  归档结案: '归档结案'
};

var bankCodes = [{ value: '工商银行', key: '102' }, { value: '农业银行', key: '103' }, { value: '中国银行', key: '104' }, { value: '建设银行', key: '105' }, { value: '交通银行', key: '301' }, { value: '中信银行', key: '302' }, { value: '平安银行', key: '307' }, { value: '广发银行', key: '306' }, { value: '兴业银行', key: '309' }, { value: '光大银行', key: '303' }, { value: '浦发银行', key: '310' }, { value: '民生银行', key: '305' }, { value: '上海银行', key: '401' }, { value: '华夏银行', key: '304' }, { value: '邮储银行', key: '100' }];

var companyTypes = [{ key: '100', value: '党政机关' }, { key: '200', value: '事业单位' }, { key: '300', value: '军队' }, { key: '400', value: '社会团体' }, { key: '500', value: '内资企业' }, { key: '510', value: '国有企业' }, { key: '520', value: '集体企业' }, { key: '530', value: '股份合作企业' }, { key: '540', value: '联营企业' }, { key: '550', value: '有限责任公司' }, { key: '560', value: '股份有限公司' }, { key: '570', value: '私营企业' }, { key: '600', value: '外商投资企业(含港、澳、台)' }, { key: '610', value: '中外合资经营企业(含港、澳、台)' }, { key: '620', value: '中外合作经营企业(含港、澳、台)' }, { key: '630', value: '外资企业(含港、澳、台)' }, { key: '640', value: '外商投资股份有限公司(含港、澳、台)' }, { key: '700', value: '个体经营' }, { key: '800', value: '其他' }, { key: '900', value: '未知' }];

var commonResidents = exports.commonResidents = [{ key: '父母', value: '父母' }, { key: '配偶及子女', value: '配偶及子女' }, { key: '朋友', value: '朋友' }, { key: '独居', value: '独居' }, { key: '其他', value: '其他' }];
var addressTypes = exports.addressTypes = [{ key: '0', value: '住宅' }, { key: '1', value: '单位' }];
var genders = exports.genders = [{ key: '0', value: '女' }, { key: '1', value: '男' }];
var professionCatTypes = exports.professionCatTypes = [{ key: '0', value: '国家机关、党群组织、企业、事业单位负责人' }, { key: '1', value: '专业技术人员' }, { key: '2', value: '办事人员和有关人员' }, { key: '3', value: '商业、服务业人员' }, { key: '4', value: '农、林、牧、渔、水利业生产人员' }, { key: '5', value: '生产、运输操作人员及有关人员' }, { key: '6', value: '军人' }, { key: '7', value: '不便分类的其他从业人员' }, { key: '8', value: '未知' }];
var propertyTypes = exports.propertyTypes = [{ value: '一室', key: '一室' }, { value: '二室', key: '二室' }, { value: '三室', key: '三室' }, { value: '四室', key: '四室' }, { value: '五室', key: '五室' }, { value: '五室以上', key: '五室以上' }];
var titles = exports.titles = [{ key: '0', value: '高级领导(局级及以上或大公司高级管理人员)' }, { key: '1', value: '中级领导(局级以下或大公司中级管理人员)' }, { key: '2', value: '一般员工' }, { key: '3', value: '其它' }, { key: '4', value: '未知' }];
var professionalTitles = exports.professionalTitles = [// 职称
{ value: '无', key: '0' }, { value: '高级', key: '1' }, { value: '中级', key: '2' }, { value: '初级', key: '3' }, { value: '未知', key: '4' }];

var buildingTypes = exports.buildingTypes = [{ key: '0', value: '普通住宅' }, { key: '1', value: '别墅' }, { key: '2', value: '其它' }];
var planningPurposes = exports.planningPurposes = [{ key: '0', value: '商业' }, { key: '1', value: '住宅' }, { key: '2', value: '商住' }];
var landGains = exports.landGains = [// 土地使用权取得方式
{ key: '出让', value: '出让' }, { key: '划拨', value: '划拨' },
// { key: '70年产权', value: '70年产权' },
{ key: '其它', value: '其它' }];
var ownerTypes = exports.ownerTypes = [// 房屋所有情况
{ key: '单独所有', value: '单独所有' }, { key: '共同所有', value: '共同所有' }];

var officeOwnerTypes = exports.officeOwnerTypes = [// 经营场所所有权
{ key: '0', value: '自置有贷款' }, { key: '1', value: '自置无贷款' }, { key: '2', value: '租赁' }, { key: '3', value: '其他' }];
var companySizes = exports.companySizes = [{ key: '10人以下', value: '10人以下' }, { key: '10-100人', value: '10-100人' }, { key: '100-300人', value: '100-300人' }, { key: '300人以上', value: '300人以上' }];
var mortgageSituations = exports.mortgageSituations = [// 抵押情况
{ key: '无抵押', value: '无抵押' }, { key: '一抵', value: '一抵' }, { key: '二抵', value: '二抵' }, { key: '其它', value: '其它' }];

var loanPurposesGuoyu = exports.loanPurposesGuoyu = [// 借款用途
{ value: '消费品', key: '0' }, { value: '支付货款', key: '1' }, { value: '支付经营费用', key: '2' }, { value: '装修经营场所', key: '3' }, { value: '开新店', key: '4' }, { value: '购置类固定资产', key: '5' }, { value: '购车', key: '6' }, { value: '婚庆', key: '7' }, { value: '旅游', key: '8' }, { value: '装修', key: '9' }, { value: '教育', key: '10' }, { value: '其他', key: '11' }];

var loanPurposes = exports.loanPurposes = [// 借款用途
{ value: '转抵押垫资', key: '21' }].concat(loanPurposesGuoyu);

var houseCities = exports.houseCities = [{ key: '北京', value: '北京' }];

exports.educations = educations;
exports.livingConditions = livingConditions;
exports.professionTypes = professionTypes;
exports.relationshipTypes = relationshipTypes;
exports.applicantRelationshipTypes = applicantRelationshipTypes;
exports.time = time;
exports.maritalStatus = maritalStatus;
exports.periods = periods;
exports.businessTypes = businessTypes;
exports.rwApplicant = rwApplicant;
exports.relationshipType = relationshipType;
exports.housingSituations = housingSituations;
exports.allOrientations = allOrientations;
exports.houseTypes = houseTypes;
exports.taskTypeBtnShow = taskTypeBtnShow;
exports.bankCodes = bankCodes;
exports.companyTypes = companyTypes;
exports.industries = _industries2.default;
exports.cities = _cities2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var xiahuInCommon = {
  补充客户资料: {
    iconKey: 'icon-jiekuanren-',
    routeName: '补充信息',
    objName: 'applicant'
  },
  补充房产资料: {
    iconKey: 'icon-fangchanxinxi-',
    routeName: '补充信息',
    objName: 'house'
  },
  补充共借人信息: {
    iconKey: 'icon-gongjieren',
    routeName: '补充附加信息',
    objName: 'unionBorrower'
  },

  补充子女信息: {
    iconKey: 'icon-zinvxinxi-',
    routeName: '补充附加信息',
    objName: 'children'
  }
};
var xaihuSld = {
  资料清单: {
    iconKey: 'icon-kehuziliao',
    imgUrls: [{ label: '下户确认单', group: '下户确认单' }, { label: '房产查档单', group: '房产查档单' }, { label: '征信报告', group: '征信报告' }, { label: '户口本', group: '户口本' }, { label: '房产估价单', group: '房产估价单' }, { label: '贷款余额确认单', group: '贷款余额确认单' }, { label: '回款确认书', group: '回款确认书' }, { label: '法院查询结果', group: '法院查询结果' }]
  },
  合同声明: {
    iconKey: 'icon-kehuziliao',
    imgUrls: [{ label: '借款申请表', group: '借款申请表' }, { label: '承租人声明', group: '承租人声明' }, { label: '接受居住承诺书', group: '接受居住承诺书' }, { label: '未出租声明', group: '未出租声明' }, { label: '婚姻状况声明', group: '婚姻状况声明' }]
  }
};

var blockSetting = {
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
        objName: 'unionBorrowerWithIdFace',
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
        // { label: '婚姻证明', group: 'marriage', limit: 10, uploadType: 'multiPic' },
        // { label: '户口本', group: 'household', limit: 10, uploadType: 'multiPic' },
        // { label: '房产证', group: '房产证', limit: 10, uploadType: 'multiPic' },
        { label: '其他资料', group: 'other', limit: 20, uploadType: 'multiPic' }],
        backRoutePath: '/nd/buchong'
      },
      进件上传图片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [
        // { label: '婚姻证明', group: 'marriage', limit: 10, uploadType: 'multiPic' },
        // { label: '户口本', group: 'household', limit: 10, uploadType: 'multiPic' },
        // { label: '房产证', group: '房产证', limit: 10, uploadType: 'multiPic' },
        { label: '其他资料', group: 'other', limit: 10, uploadType: 'multiPic' }],
        backRoutePath: '/nd/index'
      },
      房产证其他照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '房产证其他照片', group: '房产证其他照片' }]
      },
      房屋照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '房屋照片', group: '房屋照片' }]
      },
      备用房: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '备用房', group: '备用房' }]
      }
    },
    下户: Object.assign(xiahuInCommon, {
      补充抵押资料: {
        iconKey: 'icon-diyawu',
        routeName: '补充信息',
        objName: 'hlMortgage'
      },
      补充图片资料: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '补充图片资料', group: '补充图片资料' }]
      },
      上传下户照片: {
        iconKey: 'icon-shijing-',
        imgUrls: [{ label: '小区', group: 'xiaoqu' }, { label: '房屋外立面', group: 'wailimian' }, { label: '门牌号', group: 'ruhukou' }, { label: '客厅', group: 'keting' }, { label: '厨房', group: 'chufang' }, { label: '卧室', group: 'woshi', imageRequire: '每室不少于一张' }, { label: '卫生间', group: 'weishengjian' }, { label: '餐厅', group: 'canting' }, { label: '电梯', group: 'dianti' }]
      }
    }),
    合同: {
      公证: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '公证', group: 'notarize' }]
      }
    },
    抵押: {
      // 抵押: {
      //   iconKey: 'icon-zhaopian',
      //   imgUrls: [
      //     { label: '抵押证', group: 'diya' },
      //     { label: '抵押受理通知单/收据', group: 'shouju' },
      //   ]
      // },
      抵押证: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '抵押证', group: 'diya' }]
      },
      '抵押受理通知单/收据': {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '抵押受理通知单/收据', group: 'shouju' }]
      }
    }

  },
  SHU_LOU_DAI: {
    下户: Object.assign(xiahuInCommon, {
      下户照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '定位截图', group: '定位截图' }, { label: '小区大门', group: '小区大门', imageRequire: '小区大门必须体现小区名，如无小区名需拍摄附近地标建筑（银行等）' }, { label: '楼号', group: '楼号' }, { label: '单元号', group: '单元号' }, { label: '门牌号', group: '门牌号' }, { label: '客厅', group: '客厅' }, { label: '卧室', group: '卧室', imageRequire: '每室不少于一张' }, { label: '厨房', group: '厨房' }, { label: '卫生间', group: '卫生间' }, { label: '阳台', group: '阳台' }, { label: '阳台外拍', group: '阳台外拍', imageRequire: '左中右合计3张' }, { label: '小区内景', group: '小区内景', imageRequire: '3张以上' }, { label: '居住细节', group: '居住细节', imageRequire: '即家庭合影、婚纱照、书桌、卫生间清洁度等细节类照片' }, { label: '户型图', group: '户型图', imageRequire: '接受网查截图或手绘草图' }, { label: '合影', group: '合影' }]
      }
    }, xaihuSld),
    核行: {
      核行资料: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '核行定位截图', group: '核行定位截图' }, { label: '核行地合影', group: '核行地合影' }, { label: '问询记录名片', group: '问询记录名片' }, { label: '其他核行证明材料', group: '其他核行证明材料' }]
      },
      核行确认表: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '核行确认表', group: '核行确认表' }],
        hideBtn: true
      }

    },
    合同: {
      借款合同: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '借款合同', group: '借款合同', imageRequire: '最多10张，单张不超过2MB' }]
      },
      信用咨询及管理服务协议: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '信用咨询及管理服务协议', group: '信用咨询及管理服务协议', imageRequire: '最多10张，单张不超过2MB' }]
      },
      划款委托及承诺书: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '划款委托及承诺书', group: '划款委托及承诺书', imageRequire: '最多10张，单张不超过2MB' }]
      },
      代还款委托书: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '代还款委托书', group: '代还款委托书', imageRequire: '最多10张，单张不超过2MB' }]
      },
      借据: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '借据', group: '借据', imageRequire: '最多10张，单张不超过2MB' }]
      },
      租赁合同: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '租赁合同', group: '租赁合同', imageRequire: '最多10张，单张不超过2MB' }]
      },
      购销合同: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '购销合同', group: '购销合同', imageRequire: '最多10张，单张不超过2MB' }]
      },
      同意借款声明书: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '同意借款声明书', group: '同意借款声明书', imageRequire: '最多10张，单张不超过2MB' }]
      },
      业务申请表: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '业务申请表', group: '业务申请表', imageRequire: '最多10张，单张不超过2MB' }]
      },
      面签拍照: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '面签拍照', group: '面签拍照', imageRequire: '最多10张，单张不超过2MB' }]
      }
    },
    控件: {
      控件照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '控件照片', group: '控件照片', imageRequire: '最多10张，单张不超过2MB' }]
      }
    },
    归档: {
      归档照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '归档照片', group: '归档照片', imageRequire: '最多10张，单张不超过2MB' }]
      }
    },
    解抵押: {
      '抵押权注销凭单、章': {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '抵押权注销凭单、章', group: '抵押权注销凭单、章', imageRequire: '最多10张，单张不超过2MB' }]
      }
    },
    进抵: {
      抵押证照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '抵押证照片', group: '抵押证照片', imageRequire: '最多10张，单张不超过2MB' }]
      }
    },
    归档结案: {
      结案照片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '结案照片', group: '结案照片', imageRequire: '最多10张，单张不超过2MB' }]
      }
    }
  }

};

var blockSettingWeb = {
  FANG_DI_DAI: {
    进件: [].concat(_toConsumableArray(blockSetting.FANG_DI_DAI['进件']['上传图片'].imgUrls), [{ label: '附件', group: 'file', limit: 20, uploadType: 'multiFile' }]),
    下户: [].concat(_toConsumableArray(blockSetting.FANG_DI_DAI['下户']['上传下户照片'].imgUrls)),
    合同: [].concat(_toConsumableArray(blockSetting.FANG_DI_DAI['合同']['公证'].imgUrls)),
    抵押: [].concat(_toConsumableArray(blockSetting.FANG_DI_DAI['抵押']['抵押证'].imgUrls), _toConsumableArray(blockSetting.FANG_DI_DAI['抵押']['抵押受理通知单/收据'].imgUrls))
  },
  SHU_LOU_DAI: {
    下户: [].concat(_toConsumableArray(blockSetting.SHU_LOU_DAI['下户']['下户照片'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['下户']['资料清单'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['下户']['合同声明'].imgUrls)),
    核行: [].concat(_toConsumableArray(blockSetting.SHU_LOU_DAI['核行']['核行资料'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['核行']['核行确认表'].imgUrls)),
    合同: [].concat(_toConsumableArray(blockSetting.SHU_LOU_DAI['合同']['借款合同'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['合同']['信用咨询及管理服务协议'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['合同']['划款委托及承诺书'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['合同']['借据'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['合同']['租赁合同'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['合同']['购销合同'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['合同']['业务申请表'].imgUrls), _toConsumableArray(blockSetting.SHU_LOU_DAI['合同']['面签拍照'].imgUrls)),
    控件: [].concat(_toConsumableArray(blockSetting.SHU_LOU_DAI['控件']['控件照片'].imgUrls)),
    归档: [].concat(_toConsumableArray(blockSetting.SHU_LOU_DAI['归档']['归档照片'].imgUrls)),
    解抵押: [].concat(_toConsumableArray(blockSetting.SHU_LOU_DAI['解抵押']['抵押权注销凭单、章'].imgUrls)),
    进抵: [].concat(_toConsumableArray(blockSetting.SHU_LOU_DAI['进抵']['抵押证照片'].imgUrls)),
    归档结案: [].concat(_toConsumableArray(blockSetting.SHU_LOU_DAI['归档结案']['结案照片'].imgUrls))
  }
};
exports.blockSetting = blockSetting;
exports.blockSettingWeb = blockSettingWeb;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var industry = [{
  value: 'A',
  label: '农、林、牧、渔业',
  children: [{
    value: '01',
    label: '农业',
    children: [{
      value: '011',
      label: '谷物种植',
      children: [{
        value: '0111',
        label: '稻谷种植'

      }, {
        value: '0112',
        label: '小麦种植'

      }, {
        value: '0113',
        label: '玉米种植'

      }, {
        value: '0119',
        label: '其他谷物种植'

      }]
    }, {
      value: '012',
      label: '豆类、油料和薯类种植',
      children: [{
        value: '0121',
        label: '豆类种植'

      }, {
        value: '0122',
        label: '油料种植'

      }, {
        value: '0123',
        label: '薯类种植'

      }]
    }, {
      value: '013',
      label: '棉、麻、糖、烟草种植',
      children: [{
        value: '0131',
        label: '棉花种植'

      }, {
        value: '0132',
        label: '麻类种植'

      }, {
        value: '0133',
        label: '糖料种植'

      }, {
        value: '0134',
        label: '烟草种植'

      }]
    }, {
      value: '014',
      label: '蔬菜、食用菌及园艺作物种植',
      children: [{
        value: '0141',
        label: '蔬菜种植'

      }, {
        value: '0142',
        label: '食用菌种植'

      }, {
        value: '0143',
        label: '花卉种植'

      }, {
        value: '0149',
        label: '其他园艺作物种植'

      }]
    }, {
      value: '015',
      label: '水果种植',
      children: [{
        value: '0151',
        label: '仁果类和核果类水果种植'

      }, {
        value: '0152',
        label: '葡萄种植'

      }, {
        value: '0153',
        label: '柑橘类种植'

      }, {
        value: '0154',
        label: '香蕉等亚热带水果种植'

      }, {
        value: '0159',
        label: '其他水果种植'

      }]
    }, {
      value: '016',
      label: '坚果、含油果、香料和饮料作物种植',
      children: [{
        value: '0161',
        label: '坚果种植'

      }, {
        value: '0162',
        label: '含油果种植'

      }, {
        value: '0163',
        label: '香料作物种植'

      }, {
        value: '0169',
        label: '茶及其他饮料作物种植'

      }]
    }, {
      value: '017',
      label: '中药材种植',
      children: [{
        value: '0170',
        label: '中药材种植'

      }]
    }, {
      value: '019',
      label: '其他农业',
      children: [{
        value: '0190',
        label: '其他农业'

      }]
    }]
  }, {
    value: '02',
    label: '林业',
    children: [{
      value: '021',
      label: '林木育种和育苗',
      children: [{
        value: '0211',
        label: '林木育种'

      }, {
        value: '0212',
        label: '林木育苗'

      }]
    }, {
      value: '022',
      label: '造林和更新',
      children: [{
        value: '0220',
        label: '造林和更新'

      }]
    }, {
      value: '023',
      label: '森林经营和管护',
      children: [{
        value: '0230',
        label: '森林经营和管护'

      }]
    }, {
      value: '024',
      label: '木材和竹材采运',
      children: [{
        value: '0241',
        label: '木材采运'

      }, {
        value: '0242',
        label: '竹材采运'

      }]
    }, {
      value: '025',
      label: '林产品采集',
      children: [{
        value: '0251',
        label: '木竹材林产品采集'

      }, {
        value: '0252',
        label: '非木竹材林产品采集'

      }]
    }]
  }, {
    value: '03',
    label: '畜牧业',
    children: [{
      value: '031',
      label: '牲畜饲养',
      children: [{
        value: '0311',
        label: '牛的饲养'

      }, {
        value: '0312',
        label: '马的饲养'

      }, {
        value: '0313',
        label: '猪的饲养'

      }, {
        value: '0314',
        label: '羊的饲养'

      }, {
        value: '0315',
        label: '骆驼饲养'

      }, {
        value: '0319',
        label: '其他牲畜饲养'

      }]
    }, {
      value: '032',
      label: '家禽饲养',
      children: [{
        value: '0321',
        label: '鸡的饲养'

      }, {
        value: '0322',
        label: '鸭的饲养'

      }, {
        value: '0323',
        label: '鹅的饲养'

      }, {
        value: '0329',
        label: '其他家禽饲养'

      }]
    }, {
      value: '033',
      label: '狩猎和捕捉动物',
      children: [{
        value: '0330',
        label: '狩猎和捕捉动物'

      }]
    }, {
      value: '039',
      label: '其他畜牧业',
      children: [{
        value: '0390',
        label: '其他畜牧业'

      }]
    }]
  }, {
    value: '04',
    label: '渔业',
    children: [{
      value: '041',
      label: '水产养殖',
      children: [{
        value: '0411',
        label: '海水养殖'

      }, {
        value: '0412',
        label: '内陆养殖'

      }]
    }, {
      value: '042',
      label: '水产捕捞',
      children: [{
        value: '0421',
        label: '海水捕捞'

      }, {
        value: '0422',
        label: '内陆捕捞'

      }]
    }]
  }, {
    value: '05',
    label: '农、林、牧、渔服务业',
    children: [{
      value: '051',
      label: '农业服务业',
      children: [{
        value: '0511',
        label: '农业机械服务'

      }, {
        value: '0512',
        label: '灌溉服务'

      }, {
        value: '0513',
        label: '农产品初加工服务'

      }, {
        value: '0519',
        label: '其他农业服务'

      }]
    }, {
      value: '052',
      label: '林业服务业',
      children: [{
        value: '0521',
        label: '林业有害生物防治服务'

      }, {
        value: '0522',
        label: '森林防火服务'

      }, {
        value: '0523',
        label: '林产品初级加工服务'

      }, {
        value: '0529',
        label: '其他林业服务'

      }]
    }, {
      value: '053',
      label: '畜牧服务业',
      children: [{
        value: '0530',
        label: '畜牧服务业'

      }]
    }, {
      value: '054',
      label: '渔业服务业',
      children: [{
        value: '0540',
        label: '渔业服务业'

      }]
    }]
  }]
}, {
  value: 'B',
  label: '采矿业',
  children: [{
    value: '06',
    label: '煤炭开采和洗选业',
    children: [{
      value: '061',
      label: '烟煤和无烟煤开采洗选',
      children: [{
        value: '0610',
        label: '烟煤和无烟煤开采洗选'

      }]
    }, {
      value: '062',
      label: '褐煤开采洗选',
      children: [{
        value: '0620',
        label: '褐煤开采洗选'

      }]
    }, {
      value: '069',
      label: '其他煤炭采选',
      children: [{
        value: '0690',
        label: '其他煤炭采选'

      }]
    }]
  }, {
    value: '10',
    label: '非金属矿采选业',
    children: [{
      value: '101',
      label: '土砂石开采',
      children: [{
        value: '1011',
        label: '石灰石、石膏开采'

      }, {
        value: '1012',
        label: '建筑装饰用石开采'

      }, {
        value: '1013',
        label: '耐火土石开采'

      }, {
        value: '1019',
        label: '粘土及其他土砂石开采'

      }]
    }, {
      value: '102',
      label: '化学矿开采',
      children: [{
        value: '1020',
        label: '化学矿开采'

      }]
    }, {
      value: '103',
      label: '采盐',
      children: [{
        value: '1030',
        label: '采盐'

      }]
    }, {
      value: '109',
      label: '石棉及其他非金属矿采选',
      children: [{
        value: '1091',
        label: '石棉、云母矿采选'

      }, {
        value: '1092',
        label: '石墨、滑石采选'

      }, {
        value: '1093',
        label: '宝石、玉石采选'

      }, {
        value: '1099',
        label: '其他未列明非金属矿采选'

      }]
    }]
  }, {
    value: '11',
    label: '开采辅助活动',
    children: [{
      value: '111',
      label: '煤炭开采和洗选辅助活动',
      children: [{
        value: '1110',
        label: '煤炭开采和洗选辅助活动'

      }]
    }, {
      value: '112',
      label: '石油和天然气开采辅助活动',
      children: [{
        value: '1120',
        label: '石油和天然气开采辅助活动'

      }]
    }, {
      value: '119',
      label: '其他开采辅助活动',
      children: [{
        value: '1190',
        label: '其他开采辅助活动'

      }]
    }]
  }, {
    value: '12',
    label: '其他采矿业',
    children: [{
      value: '120',
      label: '其他采矿业',
      children: [{
        value: '1200',
        label: '其他采矿业'

      }]
    }]
  }]
}, {
  value: 'C',
  label: '制造业',
  children: [{
    value: '13',
    label: '农副食品加工业',
    children: [{
      value: '131',
      label: '谷物磨制',
      children: [{
        value: '1310',
        label: '谷物磨制'

      }]
    }, {
      value: '132',
      label: '饲料加工',
      children: [{
        value: '1320',
        label: '饲料加工'

      }]
    }, {
      value: '133',
      label: '植物油加工',
      children: [{
        value: '1331',
        label: '食用植物油加工'

      }, {
        value: '1332',
        label: '非食用植物油加工'

      }]
    }, {
      value: '134',
      label: '制糖业',
      children: [{
        value: '1340',
        label: '制糖业'

      }]
    }, {
      value: '135',
      label: '屠宰及肉类加工',
      children: [{
        value: '1351',
        label: '牲畜屠宰'

      }, {
        value: '1352',
        label: '禽类屠宰'

      }, {
        value: '1353',
        label: '肉制品及副产品加工'

      }]
    }, {
      value: '136',
      label: '水产品加工',
      children: [{
        value: '1361',
        label: '水产品冷冻加工'

      }, {
        value: '1362',
        label: '鱼糜制品及水产品干腌制加工'

      }, {
        value: '1363',
        label: '水产饲料制造'

      }, {
        value: '1364',
        label: '鱼油提取及制品制造'

      }, {
        value: '1369',
        label: '其他水产品加工'

      }]
    }, {
      value: '137',
      label: '蔬菜、水果和坚果加工',
      children: [{
        value: '1371',
        label: '蔬菜加工'

      }, {
        value: '1372',
        label: '水果和坚果加工'

      }]
    }, {
      value: '139',
      label: '其他农副食品加工',
      children: [{
        value: '1391',
        label: '淀粉及淀粉制品制造'

      }, {
        value: '1392',
        label: '豆制品制造'

      }, {
        value: '1393',
        label: '蛋品加工'

      }, {
        value: '1399',
        label: '其他未列明农副食品加工'

      }]
    }]
  }, {
    value: '14',
    label: '食品制造业',
    children: [{
      value: '141',
      label: '焙烤食品制造',
      children: [{
        value: '1411',
        label: '糕点、面包制造'

      }, {
        value: '1419',
        label: '饼干及其他焙烤食品制造'

      }]
    }, {
      value: '142',
      label: '糖果、巧克力及蜜饯制造',
      children: [{
        value: '1421',
        label: '糖果、巧克力制造'

      }, {
        value: '1422',
        label: '蜜饯制作'

      }]
    }, {
      value: '143',
      label: '方便食品制造',
      children: [{
        value: '1431',
        label: '米、面制品制造'

      }, {
        value: '1432',
        label: '速冻食品制造'

      }, {
        value: '1439',
        label: '方便面及其他方便食品制造'

      }]
    }, {
      value: '144',
      label: '乳制品制造',
      children: [{
        value: '1440',
        label: '乳制品制造'

      }]
    }, {
      value: '145',
      label: '罐头食品制造',
      children: [{
        value: '1451',
        label: '肉、禽类罐头制造'

      }, {
        value: '1452',
        label: '水产品罐头制造'

      }, {
        value: '1453',
        label: '蔬菜、水果罐头制造'

      }, {
        value: '1459',
        label: '其他罐头食品制造'

      }]
    }, {
      value: '146',
      label: '调味品、发酵制品制造',
      children: [{
        value: '1461',
        label: '味精制造'

      }, {
        value: '1462',
        label: '酱油、食醋及类似制品制造'

      }, {
        value: '1469',
        label: '其他调味品、发酵制品制造'

      }]
    }, {
      value: '149',
      label: '其他食品制造',
      children: [{
        value: '1491',
        label: '营养食品制造'

      }, {
        value: '1492',
        label: '保健食品制造'

      }, {
        value: '1493',
        label: '冷冻饮品及食用冰制造'

      }, {
        value: '1494',
        label: '盐加工'

      }, {
        value: '1495',
        label: '食品及饲料添加剂制造'

      }, {
        value: '1499',
        label: '其他未列明食品制造'

      }]
    }]
  }, {
    value: '15',
    label: '酒、饮料和精制茶制造业',
    children: [{
      value: '151',
      label: '酒的制造',
      children: [{
        value: '1511',
        label: '酒精制造'

      }, {
        value: '1512',
        label: '白酒制造'

      }, {
        value: '1513',
        label: '啤酒制造'

      }, {
        value: '1514',
        label: '黄酒制造'

      }, {
        value: '1515',
        label: '葡萄酒制造'

      }, {
        value: '1519',
        label: '其他酒制造'

      }]
    }, {
      value: '152',
      label: '饮料制造',
      children: [{
        value: '1521',
        label: '碳酸饮料制造'

      }, {
        value: '1522',
        label: '瓶（罐）装饮用水制造'

      }, {
        value: '1523',
        label: '果菜汁及果菜汁饮料制造'

      }, {
        value: '1524',
        label: '含乳饮料和植物蛋白饮料制造'

      }, {
        value: '1525',
        label: '固体饮料制造'

      }, {
        value: '1529',
        label: '茶饮料及其他饮料制造'

      }]
    }, {
      value: '153',
      label: '精制茶加工',
      children: [{
        value: '1530',
        label: '精制茶加工'

      }]
    }]
  }, {
    value: '16',
    label: '烟草制品业',
    children: [{
      value: '161',
      label: '烟叶复烤',
      children: [{
        value: '1610',
        label: '烟叶复烤'

      }]
    }, {
      value: '162',
      label: '卷烟制造',
      children: [{
        value: '1620',
        label: '卷烟制造'

      }]
    }, {
      value: '169',
      label: '其他烟草制品制造',
      children: [{
        value: '1690',
        label: '其他烟草制品制造'

      }]
    }]
  }, {
    value: '17',
    label: '纺织业',
    children: [{
      value: '171',
      label: '棉纺织及印染精加工',
      children: [{
        value: '1711',
        label: '棉纺纱加工'

      }, {
        value: '1712',
        label: '棉织造加工'

      }, {
        value: '1713',
        label: '棉印染精加工'

      }]
    }, {
      value: '172',
      label: '毛纺织及染整精加工',
      children: [{
        value: '1721',
        label: '毛条和毛纱线加工'

      }, {
        value: '1722',
        label: '毛织造加工'

      }, {
        value: '1723',
        label: '毛染整精加工'

      }]
    }, {
      value: '173',
      label: '麻纺织及染整精加工',
      children: [{
        value: '1731',
        label: '麻纤维纺前加工和纺纱'

      }, {
        value: '1732',
        label: '麻织造加工'

      }, {
        value: '1733',
        label: '麻染整精加工'

      }]
    }, {
      value: '174',
      label: '丝绢纺织及印染精加工',
      children: [{
        value: '1741',
        label: '缫丝加工'

      }, {
        value: '1742',
        label: '绢纺和丝织加工'

      }, {
        value: '1743',
        label: '丝印染精加工'

      }]
    }, {
      value: '175',
      label: '化纤织造及印染精加工',
      children: [{
        value: '1751',
        label: '化纤织造加工'

      }, {
        value: '1752',
        label: '化纤织物染整精加工'

      }]
    }, {
      value: '176',
      label: '针织或钩针编织物及其制品制造',
      children: [{
        value: '1761',
        label: '针织或钩针编织物织造'

      }, {
        value: '1762',
        label: '针织或钩针编织物印染精加工'

      }, {
        value: '1763',
        label: '针织或钩针编织品制造'

      }]
    }, {
      value: '177',
      label: '家用纺织制成品制造',
      children: [{
        value: '1771',
        label: '床上用品制造'

      }, {
        value: '1772',
        label: '毛巾类制品制造'

      }, {
        value: '1773',
        label: '窗帘、布艺类产品制造'

      }, {
        value: '1779',
        label: '其他家用纺织制成品制造'

      }]
    }, {
      value: '178',
      label: '非家用纺织制成品制造',
      children: [{
        value: '1781',
        label: '非织造布制造'

      }, {
        value: '1782',
        label: '绳、索、缆制造'

      }, {
        value: '1783',
        label: '纺织带和帘子布制造'

      }, {
        value: '1784',
        label: '篷、帆布制造'

      }, {
        value: '1789',
        label: '其他非家用纺织制成品制造'

      }]
    }]
  }, {
    value: '18',
    label: '纺织服装、服饰业',
    children: [{
      value: '181',
      label: '机织服装制造',
      children: [{
        value: '1810',
        label: '机织服装制造'

      }]
    }, {
      value: '182',
      label: '针织或钩针编织服装制造',
      children: [{
        value: '1820',
        label: '针织或钩针编织服装制造'

      }]
    }, {
      value: '183',
      label: '服饰制造',
      children: [{
        value: '1830',
        label: '服饰制造'

      }]
    }]
  }, {
    value: '19',
    label: '皮革、毛皮、羽毛及其制品和制鞋业',
    children: [{
      value: '191',
      label: '皮革鞣制加工',
      children: [{
        value: '1910',
        label: '皮革鞣制加工'

      }]
    }, {
      value: '192',
      label: '皮革制品制造',
      children: [{
        value: '1921',
        label: '皮革服装制造'

      }, {
        value: '1922',
        label: '皮箱、包（袋）制造'

      }, {
        value: '1923',
        label: '皮手套及皮装饰制品制造'

      }, {
        value: '1929',
        label: '其他皮革制品制造'

      }]
    }, {
      value: '193',
      label: '毛皮鞣制及制品加工',
      children: [{
        value: '1931',
        label: '毛皮鞣制加工'

      }, {
        value: '1932',
        label: '毛皮服装加工'

      }, {
        value: '1939',
        label: '其他毛皮制品加工'

      }]
    }, {
      value: '194',
      label: '羽毛(绒)加工及制品制造',
      children: [{
        value: '1941',
        label: '羽毛（绒）加工'

      }, {
        value: '1942',
        label: '羽毛（绒）制品加工'

      }]
    }, {
      value: '195',
      label: '制鞋业',
      children: [{
        value: '1951',
        label: '纺织面料鞋制造'

      }, {
        value: '1952',
        label: '皮鞋制造'

      }, {
        value: '1953',
        label: '塑料鞋制造'

      }, {
        value: '1954',
        label: '橡胶鞋制造'

      }, {
        value: '1959',
        label: '其他制鞋业'

      }]
    }]
  }, {
    value: '20',
    label: '木材加工和木、竹、藤、棕、草制品业',
    children: [{
      value: '201',
      label: '木材加工',
      children: [{
        value: '2011',
        label: '锯材加工'

      }, {
        value: '2012',
        label: '木片加工'

      }, {
        value: '2013',
        label: '单板加工'

      }, {
        value: '2019',
        label: '其他木材加工'

      }]
    }, {
      value: '202',
      label: '人造板制造',
      children: [{
        value: '2021',
        label: '胶合板制造'

      }, {
        value: '2022',
        label: '纤维板制造'

      }, {
        value: '2023',
        label: '刨花板制造'

      }, {
        value: '2029',
        label: '其他人造板制造'

      }]
    }, {
      value: '203',
      label: '木制品制造',
      children: [{
        value: '2031',
        label: '建筑用木料及木材组件加工'

      }, {
        value: '2032',
        label: '木门窗、楼梯制造'

      }, {
        value: '2033',
        label: '地板制造'

      }, {
        value: '2034',
        label: '木制容器制造'

      }, {
        value: '2039',
        label: '软木制品及其他木制品制造'

      }]
    }, {
      value: '204',
      label: '竹、藤、棕、草等制品制造',
      children: [{
        value: '2041',
        label: '竹制品制造'

      }, {
        value: '2042',
        label: '藤制品制造'

      }, {
        value: '2043',
        label: '棕制品制造'

      }, {
        value: '2049',
        label: '草及其他制品制造'

      }]
    }]
  }, {
    value: '21',
    label: '家具制造业',
    children: [{
      value: '211',
      label: '木质家具制造',
      children: [{
        value: '2110',
        label: '木质家具制造'

      }]
    }, {
      value: '212',
      label: '竹、藤家具制造',
      children: [{
        value: '2120',
        label: '竹、藤家具制造'

      }]
    }, {
      value: '213',
      label: '金属家具制造',
      children: [{
        value: '2130',
        label: '金属家具制造'

      }]
    }, {
      value: '214',
      label: '塑料家具制造',
      children: [{
        value: '2140',
        label: '塑料家具制造'

      }]
    }, {
      value: '219',
      label: '其他家具制造',
      children: [{
        value: '2190',
        label: '其他家具制造'

      }]
    }]
  }, {
    value: '22',
    label: '造纸和纸制品业',
    children: [{
      value: '221',
      label: '纸浆制造',
      children: [{
        value: '2211',
        label: '木竹浆制造'

      }, {
        value: '2212',
        label: '非木竹浆制造'

      }]
    }, {
      value: '222',
      label: '造纸',
      children: [{
        value: '2221',
        label: '机制纸及纸板制造'

      }, {
        value: '2222',
        label: '手工纸制造'

      }, {
        value: '2223',
        label: '加工纸制造'

      }]
    }, {
      value: '223',
      label: '纸制品制造',
      children: [{
        value: '2231',
        label: '纸和纸板容器制造'

      }, {
        value: '2239',
        label: '其他纸制品制造'

      }]
    }]
  }, {
    value: '23',
    label: '印刷和记录媒介复制业',
    children: [{
      value: '231',
      label: '印刷',
      children: [{
        value: '2311',
        label: '书、报刊印刷'

      }, {
        value: '2312',
        label: '本册印制'

      }, {
        value: '2319',
        label: '包装装潢及其他印刷'

      }]
    }, {
      value: '232',
      label: '装订及印刷相关服务',
      children: [{
        value: '2320',
        label: '装订及印刷相关服务'

      }]
    }, {
      value: '233',
      label: '记录媒介复制',
      children: [{
        value: '2330',
        label: '记录媒介复制'

      }]
    }]
  }, {
    value: '24',
    label: '文教、工美、体育和娱乐用品制造业',
    children: [{
      value: '241',
      label: '文教办公用品制造',
      children: [{
        value: '2411',
        label: '文具制造'

      }, {
        value: '2412',
        label: '笔的制造'

      }, {
        value: '2413',
        label: '教学用模型及教具制造'

      }, {
        value: '2414',
        label: '墨水、墨汁制造'

      }, {
        value: '2419',
        label: '其他文教办公用品制造'

      }]
    }, {
      value: '242',
      label: '乐器制造',
      children: [{
        value: '2421',
        label: '中乐器制造'

      }, {
        value: '2422',
        label: '西乐器制造'

      }, {
        value: '2423',
        label: '电子乐器制造'

      }, {
        value: '2429',
        label: '其他乐器及零件制造'

      }]
    }, {
      value: '243',
      label: '工艺美术品制造',
      children: [{
        value: '2431',
        label: '雕塑工艺品制造'

      }, {
        value: '2432',
        label: '金属工艺品制造'

      }, {
        value: '2433',
        label: '漆器工艺品制造'

      }, {
        value: '2434',
        label: '花画工艺品制造'

      }, {
        value: '2435',
        label: '天然植物纤维编织工艺品制造'

      }, {
        value: '2436',
        label: '抽纱刺绣工艺品制造'

      }, {
        value: '2437',
        label: '地毯、挂毯制造'

      }, {
        value: '2438',
        label: '珠宝首饰及有关物品制造'

      }, {
        value: '2439',
        label: '其他工艺美术品制造'

      }]
    }, {
      value: '244',
      label: '体育用品制造',
      children: [{
        value: '2441',
        label: '球类制造'

      }, {
        value: '2442',
        label: '体育器材及配件制造'

      }, {
        value: '2443',
        label: '训练健身器材制造'

      }, {
        value: '2444',
        label: '运动防护用具制造'

      }, {
        value: '2449',
        label: '其他体育用品制造'

      }]
    }, {
      value: '245',
      label: '玩具制造',
      children: [{
        value: '2450',
        label: '玩具制造'

      }]
    }, {
      value: '246',
      label: '游艺器材及娱乐用品制造',
      children: [{
        value: '2461',
        label: '露天游乐场所游乐设备制造'

      }, {
        value: '2462',
        label: '游艺用品及室内游艺器材制造'

      }, {
        value: '2469',
        label: '其他娱乐用品制造'

      }]
    }]
  }, {
    value: '25',
    label: '石油加工、炼焦和核燃料加工业',
    children: [{
      value: '251',
      label: '精炼石油产品制造',
      children: [{
        value: '2511',
        label: '原油加工及石油制品制造'

      }, {
        value: '2512',
        label: '人造原油制造'

      }]
    }, {
      value: '252',
      label: '炼焦',
      children: [{
        value: '2520',
        label: '炼焦'

      }]
    }, {
      value: '253',
      label: '核燃料加工',
      children: [{
        value: '2530',
        label: '核燃料加工'

      }]
    }]
  }, {
    value: '26',
    label: '化学原料和化学制品制造业',
    children: [{
      value: '261',
      label: '基础化学原料制造',
      children: [{
        value: '2611',
        label: '无机酸制造'

      }, {
        value: '2612',
        label: '无机碱制造'

      }, {
        value: '2613',
        label: '无机盐制造'

      }, {
        value: '2614',
        label: '有机化学原料制造'

      }, {
        value: '2619',
        label: '其他基础化学原料制造'

      }]
    }, {
      value: '262',
      label: '肥料制造',
      children: [{
        value: '2621',
        label: '氮肥制造'

      }, {
        value: '2622',
        label: '磷肥制造'

      }, {
        value: '2623',
        label: '钾肥制造'

      }, {
        value: '2624',
        label: '复混肥料制造'

      }, {
        value: '2625',
        label: '有机肥料及微生物肥料制造'

      }, {
        value: '2629',
        label: '其他肥料制造'

      }]
    }, {
      value: '263',
      label: '农药制造',
      children: [{
        value: '2631',
        label: '化学农药制造'

      }, {
        value: '2632',
        label: '生物化学农药及微生物农药制造'

      }]
    }, {
      value: '264',
      label: '涂料、油墨、颜料及类似产品制造',
      children: [{
        value: '2641',
        label: '涂料制造'

      }, {
        value: '2642',
        label: '油墨及类似产品制造'

      }, {
        value: '2643',
        label: '颜料制造'

      }, {
        value: '2644',
        label: '染料制造'

      }, {
        value: '2645',
        label: '密封用填料及类似品制造'

      }]
    }, {
      value: '265',
      label: '合成材料制造',
      children: [{
        value: '2651',
        label: '初级形态塑料及合成树脂制造'

      }, {
        value: '2652',
        label: '合成橡胶制造'

      }, {
        value: '2653',
        label: '合成纤维单（聚合）体制造'

      }, {
        value: '2659',
        label: '其他合成材料制造'

      }]
    }, {
      value: '266',
      label: '专用化学产品制造',
      children: [{
        value: '2661',
        label: '化学试剂和助剂制造'

      }, {
        value: '2662',
        label: '专项化学用品制造'

      }, {
        value: '2663',
        label: '林产化学产品制造'

      }, {
        value: '2664',
        label: '信息化学品制造'

      }, {
        value: '2665',
        label: '环境污染处理专用药剂材料制造'

      }, {
        value: '2666',
        label: '动物胶制造'

      }, {
        value: '2669',
        label: '其他专用化学产品制造'

      }]
    }, {
      value: '267',
      label: '炸药、火工及焰火产品制造',
      children: [{
        value: '2671',
        label: '炸药及火工产品制造'

      }, {
        value: '2672',
        label: '焰火、鞭炮产品制造'

      }]
    }, {
      value: '268',
      label: '日用化学产品制造',
      children: [{
        value: '2681',
        label: '肥皂及合成洗涤剂制造'

      }, {
        value: '2682',
        label: '化妆品制造'

      }, {
        value: '2683',
        label: '口腔清洁用品制造'

      }, {
        value: '2684',
        label: '香料、香精制造'

      }, {
        value: '2689',
        label: '其他日用化学产品制造'

      }]
    }]
  }, {
    value: '27',
    label: '医药制造业',
    children: [{
      value: '271',
      label: '化学药品原料药制造',
      children: [{
        value: '2710',
        label: '化学药品原料药制造'

      }]
    }, {
      value: '272',
      label: '化学药品制剂制造',
      children: [{
        value: '2720',
        label: '化学药品制剂制造'

      }]
    }, {
      value: '273',
      label: '中药饮片加工',
      children: [{
        value: '2730',
        label: '中药饮片加工'

      }]
    }, {
      value: '274',
      label: '中成药生产',
      children: [{
        value: '2740',
        label: '中成药生产'

      }]
    }, {
      value: '275',
      label: '兽用药品制造',
      children: [{
        value: '2750',
        label: '兽用药品制造'

      }]
    }, {
      value: '276',
      label: '生物药品制造',
      children: [{
        value: '2760',
        label: '生物药品制造'

      }]
    }, {
      value: '277',
      label: '卫生材料及医药用品制造',
      children: [{
        value: '2770',
        label: '卫生材料及医药用品制造'

      }]
    }]
  }, {
    value: '28',
    label: '化学纤维制造业',
    children: [{
      value: '281',
      label: '纤维素纤维原料及纤维制造',
      children: [{
        value: '2811',
        label: '化纤浆粕制造'

      }, {
        value: '2812',
        label: '人造纤维（纤维素纤维）制造'

      }]
    }, {
      value: '282',
      label: '合成纤维制造',
      children: [{
        value: '2821',
        label: '锦纶纤维制造'

      }, {
        value: '2822',
        label: '涤纶纤维制造'

      }, {
        value: '2823',
        label: '腈纶纤维制造'

      }, {
        value: '2824',
        label: '维纶纤维制造'

      }, {
        value: '2825',
        label: '丙纶纤维制造'

      }, {
        value: '2826',
        label: '氨纶纤维制造'

      }, {
        value: '2829',
        label: '其他合成纤维制造'

      }]
    }]
  }, {
    value: '29',
    label: '橡胶和塑料制品业',
    children: [{
      value: '291',
      label: '橡胶制品业',
      children: [{
        value: '2911',
        label: '轮胎制造'

      }, {
        value: '2912',
        label: '橡胶板、管、带制造'

      }, {
        value: '2913',
        label: '橡胶零件制造'

      }, {
        value: '2914',
        label: '再生橡胶制造'

      }, {
        value: '2915',
        label: '日用及医用橡胶制品制造'

      }, {
        value: '2919',
        label: '其他橡胶制品制造'

      }]
    }, {
      value: '292',
      label: '塑料制品业',
      children: [{
        value: '2921',
        label: '塑料薄膜制造'

      }, {
        value: '2922',
        label: '塑料板、管、型材制造'

      }, {
        value: '2923',
        label: '塑料丝、绳及编织品制造'

      }, {
        value: '2924',
        label: '泡沫塑料制造'

      }, {
        value: '2925',
        label: '塑料人造革、合成革制造'

      }, {
        value: '2926',
        label: '塑料包装箱及容器制造'

      }, {
        value: '2927',
        label: '日用塑料制品制造'

      }, {
        value: '2928',
        label: '塑料零件制造'

      }, {
        value: '2929',
        label: '其他塑料制品制造'

      }]
    }]
  }, {
    value: '30',
    label: '非金属矿物制品业',
    children: [{
      value: '301',
      label: '水泥、石灰和石膏制造',
      children: [{
        value: '3011',
        label: '水泥制造'

      }, {
        value: '3012',
        label: '石灰和石膏制造'

      }]
    }, {
      value: '302',
      label: '石膏、水泥制品及类似制品制造',
      children: [{
        value: '3021',
        label: '水泥制品制造'

      }, {
        value: '3022',
        label: '砼结构构件制造'

      }, {
        value: '3023',
        label: '石棉水泥制品制造'

      }, {
        value: '3024',
        label: '轻质建筑材料制造'

      }, {
        value: '3029',
        label: '其他水泥类似制品制造'

      }]
    }, {
      value: '303',
      label: '砖瓦、石材等建筑材料制造',
      children: [{
        value: '3031',
        label: '粘土砖瓦及建筑砌块制造'

      }, {
        value: '3032',
        label: '建筑陶瓷制品制造'

      }, {
        value: '3033',
        label: '建筑用石加工'

      }, {
        value: '3034',
        label: '防水建筑材料制造'

      }, {
        value: '3035',
        label: '隔热和隔音材料制造'

      }, {
        value: '3039',
        label: '其他建筑材料制造'

      }]
    }, {
      value: '304',
      label: '玻璃制造',
      children: [{
        value: '3041',
        label: '平板玻璃制造'

      }, {
        value: '3049',
        label: '其他玻璃制造'

      }]
    }, {
      value: '305',
      label: '玻璃制品制造',
      children: [{
        value: '3051',
        label: '技术玻璃制品制造'

      }, {
        value: '3052',
        label: '光学玻璃制造'

      }, {
        value: '3053',
        label: '玻璃仪器制造'

      }, {
        value: '3054',
        label: '日用玻璃制品制造'

      }, {
        value: '3055',
        label: '玻璃包装容器制造'

      }, {
        value: '3056',
        label: '玻璃保温容器制造'

      }, {
        value: '3057',
        label: '制镜及类似品加工'

      }, {
        value: '3059',
        label: '其他玻璃制品制造'

      }]
    }, {
      value: '306',
      label: '玻璃纤维和玻璃纤维增强塑料制品制造',
      children: [{
        value: '3061',
        label: '玻璃纤维及制品制造'

      }, {
        value: '3062',
        label: '玻璃纤维增强塑料制品制造'

      }]
    }, {
      value: '307',
      label: '陶瓷制品制造',
      children: [{
        value: '3071',
        label: '卫生陶瓷制品制造'

      }, {
        value: '3072',
        label: '特种陶瓷制品制造'

      }, {
        value: '3073',
        label: '日用陶瓷制品制造'

      }, {
        value: '3079',
        label: '园林、陈设艺术及其他陶瓷制品制造'

      }]
    }, {
      value: '308',
      label: '耐火材料制品制造',
      children: [{
        value: '3081',
        label: '石棉制品制造'

      }, {
        value: '3082',
        label: '云母制品制造'

      }, {
        value: '3089',
        label: '耐火陶瓷制品及其他耐火材料制造'

      }]
    }, {
      value: '309',
      label: '石墨及其他非金属矿物制品制造',
      children: [{
        value: '3091',
        label: '石墨及碳素制品制造'

      }, {
        value: '3099',
        label: '其他非金属矿物制品制造'

      }]
    }]
  }, {
    value: '31',
    label: '黑色金属冶炼和压延加工业',
    children: [{
      value: '311',
      label: '炼铁',
      children: [{
        value: '3110',
        label: '炼铁'

      }]
    }, {
      value: '312',
      label: '炼钢',
      children: [{
        value: '3120',
        label: '炼钢'

      }]
    }, {
      value: '313',
      label: '黑色金属铸造',
      children: [{
        value: '3130',
        label: '黑色金属铸造'

      }]
    }, {
      value: '314',
      label: '钢压延加工',
      children: [{
        value: '3140',
        label: '钢压延加工'

      }]
    }, {
      value: '315',
      label: '铁合金冶炼',
      children: [{
        value: '3150',
        label: '铁合金冶炼'

      }]
    }]
  }, {
    value: '32',
    label: '有色金属冶炼和压延加工业',
    children: [{
      value: '321',
      label: '常用有色金属冶炼',
      children: [{
        value: '3211',
        label: '铜冶炼'

      }, {
        value: '3212',
        label: '铅锌冶炼'

      }, {
        value: '3213',
        label: '镍钴冶炼'

      }, {
        value: '3214',
        label: '锡冶炼'

      }, {
        value: '3215',
        label: '锑冶炼'

      }, {
        value: '3216',
        label: '铝冶炼'

      }, {
        value: '3217',
        label: '镁冶炼'

      }, {
        value: '3219',
        label: '其他常用有色金属冶炼'

      }]
    }, {
      value: '322',
      label: '贵金属冶炼',
      children: [{
        value: '3221',
        label: '金冶炼'

      }, {
        value: '3222',
        label: '银冶炼'

      }, {
        value: '3229',
        label: '其他贵金属冶炼'

      }]
    }, {
      value: '323',
      label: '稀有稀土金属冶炼',
      children: [{
        value: '3231',
        label: '钨钼冶炼'

      }, {
        value: '3232',
        label: '稀土金属冶炼'

      }, {
        value: '3239',
        label: '其他稀有金属冶炼'

      }]
    }, {
      value: '324',
      label: '有色金属合金制造',
      children: [{
        value: '3240',
        label: '有色金属合金制造'

      }]
    }, {
      value: '325',
      label: '有色金属铸造',
      children: [{
        value: '3250',
        label: '有色金属铸造'

      }]
    }, {
      value: '326',
      label: '有色金属压延加工',
      children: [{
        value: '3261',
        label: '铜压延加工'

      }, {
        value: '3262',
        label: '铝压延加工'

      }, {
        value: '3263',
        label: '贵金属压延加工'

      }, {
        value: '3264',
        label: '稀有稀土金属压延加工'

      }, {
        value: '3269',
        label: '其他有色金属压延加工'

      }]
    }]
  }, {
    value: '33',
    label: '金属制品业',
    children: [{
      value: '331',
      label: '结构性金属制品制造',
      children: [{
        value: '3311',
        label: '金属结构制造'

      }, {
        value: '3312',
        label: '金属门窗制造'

      }]
    }, {
      value: '332',
      label: '金属工具制造',
      children: [{
        value: '3321',
        label: '切削工具制造'

      }, {
        value: '3322',
        label: '手工具制造'

      }, {
        value: '3323',
        label: '农用及园林用金属工具制造'

      }, {
        value: '3324',
        label: '刀剪及类似日用金属工具制造'

      }, {
        value: '3329',
        label: '其他金属工具制造'

      }]
    }, {
      value: '333',
      label: '集装箱及金属包装容器制造',
      children: [{
        value: '3331',
        label: '集装箱制造'

      }, {
        value: '3332',
        label: '金属压力容器制造'

      }, {
        value: '3333',
        label: '金属包装容器制造'

      }]
    }, {
      value: '334',
      label: '金属丝绳及其制品制造',
      children: [{
        value: '3340',
        label: '金属丝绳及其制品制造'

      }]
    }, {
      value: '335',
      label: '建筑、安全用金属制品制造',
      children: [{
        value: '3351',
        label: '建筑、家具用金属配件制造'

      }, {
        value: '3352',
        label: '建筑装饰及水暖管道零件制造'

      }, {
        value: '3353',
        label: '安全、消防用金属制品制造'

      }, {
        value: '3359',
        label: '其他建筑、安全用金属制品制造'

      }]
    }, {
      value: '336',
      label: '金属表面处理及热处理加工',
      children: [{
        value: '3360',
        label: '金属表面处理及热处理加工'

      }]
    }, {
      value: '337',
      label: '搪瓷制品制造',
      children: [{
        value: '3371',
        label: '生产专用搪瓷制品制造'

      }, {
        value: '3372',
        label: '建筑装饰搪瓷制品制造'

      }, {
        value: '3373',
        label: '搪瓷卫生洁具制造'

      }, {
        value: '3379',
        label: '搪瓷日用品及其他搪瓷制品制造'

      }]
    }, {
      value: '338',
      label: '金属制日用品制造',
      children: [{
        value: '3381',
        label: '金属制厨房用器具制造'

      }, {
        value: '3382',
        label: '金属制餐具和器皿制造'

      }, {
        value: '3383',
        label: '金属制卫生器具制造'

      }, {
        value: '3389',
        label: '其他金属制日用品制造'

      }]
    }, {
      value: '339',
      label: '其他金属制品制造',
      children: [{
        value: '3391',
        label: '锻件及粉末冶金制品制造'

      }, {
        value: '3392',
        label: '交通及公共管理用金属标牌制造'

      }, {
        value: '3399',
        label: '其他未列明金属制品制造'

      }]
    }]
  }, {
    value: '34',
    label: '通用设备制造业',
    children: [{
      value: '341',
      label: '锅炉及原动设备制造',
      children: [{
        value: '3411',
        label: '锅炉及辅助设备制造'

      }, {
        value: '3412',
        label: '内燃机及配件制造'

      }, {
        value: '3413',
        label: '汽轮机及辅机制造'

      }, {
        value: '3414',
        label: '水轮机及辅机制造'

      }, {
        value: '3415',
        label: '风能原动设备制造'

      }, {
        value: '3419',
        label: '其他原动设备制造'

      }]
    }, {
      value: '342',
      label: '金属加工机械制造',
      children: [{
        value: '3421',
        label: '金属切削机床制造'

      }, {
        value: '3422',
        label: '金属成形机床制造'

      }, {
        value: '3423',
        label: '铸造机械制造'

      }, {
        value: '3424',
        label: '金属切割及焊接设备制造'

      }, {
        value: '3425',
        label: '机床附件制造'

      }, {
        value: '3429',
        label: '其他金属加工机械制造'

      }]
    }, {
      value: '343',
      label: '物料搬运设备制造',
      children: [{
        value: '3431',
        label: '轻小型起重设备制造'

      }, {
        value: '3432',
        label: '起重机制造'

      }, {
        value: '3433',
        label: '生产专用车辆制造'

      }, {
        value: '3434',
        label: '连续搬运设备制造'

      }, {
        value: '3435',
        label: '电梯、自动扶梯及升降机制造'

      }, {
        value: '3439',
        label: '其他物料搬运设备制造'

      }]
    }, {
      value: '344',
      label: '泵、阀门、压缩机及类似机械制造',
      children: [{
        value: '3441',
        label: '泵及真空设备制造'

      }, {
        value: '3442',
        label: '气体压缩机械制造'

      }, {
        value: '3443',
        label: '阀门和旋塞制造'

      }, {
        value: '3444',
        label: '液压和气压动力机械及元件制造'

      }]
    }, {
      value: '345',
      label: '轴承、齿轮和传动部件制造',
      children: [{
        value: '3451',
        label: '轴承制造'

      }, {
        value: '3452',
        label: '齿轮及齿轮减、变速箱制造'

      }, {
        value: '3459',
        label: '其他传动部件制造'

      }]
    }, {
      value: '346',
      label: '烘炉、风机、衡器、包装等设备制造',
      children: [{
        value: '3461',
        label: '烘炉、熔炉及电炉制造'

      }, {
        value: '3462',
        label: '风机、风扇制造'

      }, {
        value: '3463',
        label: '气体、液体分离及纯净设备制造'

      }, {
        value: '3464',
        label: '制冷、空调设备制造'

      }, {
        value: '3465',
        label: '风动和电动工具制造'

      }, {
        value: '3466',
        label: '喷枪及类似器具制造'

      }, {
        value: '3467',
        label: '衡器制造'

      }, {
        value: '3468',
        label: '包装专用设备制造'

      }]
    }, {
      value: '347',
      label: '文化、办公用机械制造',
      children: [{
        value: '3471',
        label: '电影机械制造'

      }, {
        value: '3472',
        label: '幻灯及投影设备制造'

      }, {
        value: '3473',
        label: '照相机及器材制造'

      }, {
        value: '3474',
        label: '复印和胶印设备制造'

      }, {
        value: '3475',
        label: '计算器及货币专用设备制造'

      }, {
        value: '3479',
        label: '其他文化、办公用机械制造'

      }]
    }, {
      value: '348',
      label: '通用零部件制造',
      children: [{
        value: '3481',
        label: '金属密封件制造'

      }, {
        value: '3482',
        label: '紧固件制造'

      }, {
        value: '3483',
        label: '弹簧制造'

      }, {
        value: '3484',
        label: '机械零部件加工'

      }, {
        value: '3489',
        label: '其他通用零部件制造'

      }]
    }, {
      value: '349',
      label: '其他通用设备制造业',
      children: [{
        value: '3490',
        label: '其他通用设备制造业'

      }]
    }]
  }, {
    value: '35',
    label: '专用设备制造业',
    children: [{
      value: '351',
      label: '采矿、冶金、建筑专用设备制造',
      children: [{
        value: '3511',
        label: '矿山机械制造'

      }, {
        value: '3512',
        label: '石油钻采专用设备制造'

      }, {
        value: '3513',
        label: '建筑工程用机械制造'

      }, {
        value: '3514',
        label: '海洋工程专用设备制造'

      }, {
        value: '3515',
        label: '建筑材料生产专用机械制造'

      }, {
        value: '3516',
        label: '冶金专用设备制造'

      }]
    }, {
      value: '352',
      label: '化工、木材、非金属加工专用设备制造',
      children: [{
        value: '3521',
        label: '炼油、化工生产专用设备制造'

      }, {
        value: '3522',
        label: '橡胶加工专用设备制造'

      }, {
        value: '3523',
        label: '塑料加工专用设备制造'

      }, {
        value: '3524',
        label: '木材加工机械制造'

      }, {
        value: '3525',
        label: '模具制造'

      }, {
        value: '3529',
        label: '其他非金属加工专用设备制造'

      }]
    }, {
      value: '353',
      label: '食品、饮料、烟草及饲料生产专用设备制造',
      children: [{
        value: '3531',
        label: '食品、酒、饮料及茶生产专用设备制造'

      }, {
        value: '3532',
        label: '农副食品加工专用设备制造'

      }, {
        value: '3533',
        label: '烟草生产专用设备制造'

      }, {
        value: '3534',
        label: '饲料生产专用设备制造'

      }]
    }, {
      value: '354',
      label: '印刷、制药、日化及日用品生产专用设备制造',
      children: [{
        value: '3541',
        label: '制浆和造纸专用设备制造'

      }, {
        value: '3542',
        label: '印刷专用设备制造'

      }, {
        value: '3543',
        label: '日用化工专用设备制造'

      }, {
        value: '3544',
        label: '制药专用设备制造'

      }, {
        value: '3545',
        label: '照明器具生产专用设备制造'

      }, {
        value: '3546',
        label: '玻璃、陶瓷和搪瓷制品生产专用设备制造'

      }, {
        value: '3549',
        label: '其他日用品生产专用设备制造'

      }]
    }, {
      value: '355',
      label: '纺织、服装和皮革加工专用设备制造',
      children: [{
        value: '3551',
        label: '纺织专用设备制造'

      }, {
        value: '3552',
        label: '皮革、毛皮及其制品加工专用设备制造'

      }, {
        value: '3553',
        label: '缝制机械制造'

      }, {
        value: '3554',
        label: '洗涤机械制造'

      }]
    }, {
      value: '356',
      label: '电子和电工机械专用设备制造',
      children: [{
        value: '3561',
        label: '电工机械专用设备制造'

      }, {
        value: '3562',
        label: '电子工业专用设备制造'

      }]
    }, {
      value: '357',
      label: '农、林、牧、渔专用机械制造',
      children: [{
        value: '3571',
        label: '拖拉机制造'

      }, {
        value: '3572',
        label: '机械化农业及园艺机具制造'

      }, {
        value: '3573',
        label: '营林及木竹采伐机械制造'

      }, {
        value: '3574',
        label: '畜牧机械制造'

      }, {
        value: '3575',
        label: '渔业机械制造'

      }, {
        value: '3576',
        label: '农林牧渔机械配件制造'

      }, {
        value: '3577',
        label: '棉花加工机械制造'

      }, {
        value: '3579',
        label: '其他农、林、牧、渔业机械制造'

      }]
    }, {
      value: '358',
      label: '医疗仪器设备及器械制造',
      children: [{
        value: '3581',
        label: '医疗诊断、监护及治疗设备制造'

      }, {
        value: '3582',
        label: '口腔科用设备及器具制造'

      }, {
        value: '3583',
        label: '医疗实验室及医用消毒设备和器具制造'

      }, {
        value: '3584',
        label: '医疗、外科及兽医用器械制造'

      }, {
        value: '3585',
        label: '机械治疗及病房护理设备制造'

      }, {
        value: '3586',
        label: '假肢、人工器官及植（介）入器械制造'

      }, {
        value: '3589',
        label: '其他医疗设备及器械制造'

      }]
    }, {
      value: '359',
      label: '环保、社会公共服务及其他专用设备制造',
      children: [{
        value: '3591',
        label: '环境保护专用设备制造'

      }, {
        value: '3592',
        label: '地质勘查专用设备制造'

      }, {
        value: '3593',
        label: '邮政专用机械及器材制造'

      }, {
        value: '3594',
        label: '商业、饮食、服务专用设备制造'

      }, {
        value: '3595',
        label: '社会公共安全设备及器材制造'

      }, {
        value: '3596',
        label: '交通安全、管制及类似专用设备制造'

      }, {
        value: '3597',
        label: '水资源专用机械制造'

      }, {
        value: '3599',
        label: '其他专用设备制造'

      }]
    }]
  }, {
    value: '36',
    label: '汽车制造业',
    children: [{
      value: '361',
      label: '汽车整车制造',
      children: [{
        value: '3610',
        label: '汽车整车制造'

      }]
    }, {
      value: '362',
      label: '改装汽车制造',
      children: [{
        value: '3620',
        label: '改装汽车制造'

      }]
    }, {
      value: '363',
      label: '低速载货汽车制造',
      children: [{
        value: '3630',
        label: '低速载货汽车制造'

      }]
    }, {
      value: '364',
      label: '电车制造',
      children: [{
        value: '3640',
        label: '电车制造'

      }]
    }, {
      value: '365',
      label: '汽车车身、挂车制造',
      children: [{
        value: '3650',
        label: '汽车车身、挂车制造'

      }]
    }, {
      value: '366',
      label: '汽车零部件及配件制造',
      children: [{
        value: '3660',
        label: '汽车零部件及配件制造'

      }]
    }]
  }, {
    value: '37',
    label: '铁路、船舶、航空航天和其他运输设备制造业',
    children: [{
      value: '371',
      label: '铁路运输设备制造',
      children: [{
        value: '3711',
        label: '铁路机车车辆及动车组制造'

      }, {
        value: '3712',
        label: '窄轨机车车辆制造'

      }, {
        value: '3713',
        label: '铁路机车车辆配件制造'

      }, {
        value: '3714',
        label: '铁路专用设备及器材、配件制造'

      }, {
        value: '3719',
        label: '其他铁路运输设备制造'

      }]
    }, {
      value: '372',
      label: '城市轨道交通设备制造',
      children: [{
        value: '3720',
        label: '城市轨道交通设备制造'

      }]
    }, {
      value: '373',
      label: '船舶及相关装置制造',
      children: [{
        value: '3731',
        label: '金属船舶制造'

      }, {
        value: '3732',
        label: '非金属船舶制造'

      }, {
        value: '3733',
        label: '娱乐船和运动船制造'

      }, {
        value: '3734',
        label: '船用配套设备制造'

      }, {
        value: '3735',
        label: '船舶改装与拆除'

      }, {
        value: '3739',
        label: '航标器材及其他相关装置制造'

      }]
    }, {
      value: '374',
      label: '航空、航天器及设备制造',
      children: [{
        value: '3741',
        label: '飞机制造'

      }, {
        value: '3742',
        label: '航天器制造'

      }, {
        value: '3743',
        label: '航空、航天相关设备制造'

      }, {
        value: '3749',
        label: '其他航空航天器制造'

      }]
    }, {
      value: '375',
      label: '摩托车制造',
      children: [{
        value: '3751',
        label: '摩托车整车制造'

      }, {
        value: '3752',
        label: '摩托车零部件及配件制造'

      }]
    }, {
      value: '376',
      label: '自行车制造',
      children: [{
        value: '3761',
        label: '脚踏自行车及残疾人座车制造'

      }, {
        value: '3762',
        label: '助动自行车制造'

      }]
    }, {
      value: '377',
      label: '非公路休闲车及零配件制造',
      children: [{
        value: '3770',
        label: '非公路休闲车及零配件制造'

      }]
    }, {
      value: '379',
      label: '潜水救捞及其他未列明运输设备制造',
      children: [{
        value: '3791',
        label: '潜水及水下救捞装备制造'

      }, {
        value: '3799',
        label: '其他未列明运输设备制造'

      }]
    }]
  }, {
    value: '38',
    label: '电气机械和器材制造业',
    children: [{
      value: '381',
      label: '电机制造',
      children: [{
        value: '3811',
        label: '发电机及发电机组制造'

      }, {
        value: '3812',
        label: '电动机制造'

      }, {
        value: '3819',
        label: '微电机及其他电机制造'

      }]
    }, {
      value: '382',
      label: '输配电及控制设备制造',
      children: [{
        value: '3821',
        label: '变压器、整流器和电感器制造'

      }, {
        value: '3822',
        label: '电容器及其配套设备制造'

      }, {
        value: '3823',
        label: '配电开关控制设备制造'

      }, {
        value: '3824',
        label: '电力电子元器件制造'

      }, {
        value: '3825',
        label: '光伏设备及元器件制造'

      }, {
        value: '3829',
        label: '其他输配电及控制设备制造'

      }]
    }, {
      value: '383',
      label: '电线、电缆、光缆及电工器材制造',
      children: [{
        value: '3831',
        label: '电线、电缆制造'

      }, {
        value: '3832',
        label: '光纤、光缆制造'

      }, {
        value: '3833',
        label: '绝缘制品制造'

      }, {
        value: '3839',
        label: '其他电工器材制造'

      }]
    }, {
      value: '384',
      label: '电池制造',
      children: [{
        value: '3841',
        label: '锂离子电池制造'

      }, {
        value: '3842',
        label: '镍氢电池制造'

      }, {
        value: '3849',
        label: '其他电池制造'

      }]
    }, {
      value: '385',
      label: '家用电力器具制造',
      children: [{
        value: '3851',
        label: '家用制冷电器具制造'

      }, {
        value: '3852',
        label: '家用空气调节器制造'

      }, {
        value: '3853',
        label: '家用通风电器具制造'

      }, {
        value: '3854',
        label: '家用厨房电器具制造'

      }, {
        value: '3855',
        label: '家用清洁卫生电器具制造'

      }, {
        value: '3856',
        label: '家用美容、保健电器具制造'

      }, {
        value: '3857',
        label: '家用电力器具专用配件制造'

      }, {
        value: '3859',
        label: '其他家用电力器具制造'

      }]
    }, {
      value: '386',
      label: '非电力家用器具制造',
      children: [{
        value: '3861',
        label: '燃气、太阳能及类似能源家用器具制造'

      }, {
        value: '3869',
        label: '其他非电力家用器具制造'

      }]
    }, {
      value: '387',
      label: '照明器具制造',
      children: [{
        value: '3871',
        label: '电光源制造'

      }, {
        value: '3872',
        label: '照明灯具制造'

      }, {
        value: '3879',
        label: '灯用电器附件及其他照明器具制造'

      }]
    }, {
      value: '389',
      label: '其他电气机械及器材制造',
      children: [{
        value: '3891',
        label: '电气信号设备装置制造'

      }, {
        value: '3899',
        label: '其他未列明电气机械及器材制造'

      }]
    }]
  }, {
    value: '39',
    label: '计算机、通信和其他电子设备制造业',
    children: [{
      value: '391',
      label: '计算机制造',
      children: [{
        value: '3911',
        label: '计算机整机制造'

      }, {
        value: '3912',
        label: '计算机零部件制造'

      }, {
        value: '3913',
        label: '计算机外围设备制造'

      }, {
        value: '3919',
        label: '其他计算机制造'

      }]
    }, {
      value: '392',
      label: '通信设备制造',
      children: [{
        value: '3921',
        label: '通信系统设备制造'

      }, {
        value: '3922',
        label: '通信终端设备制造'

      }]
    }, {
      value: '393',
      label: '广播电视设备制造',
      children: [{
        value: '3931',
        label: '广播电视节目制作及发射设备制造'

      }, {
        value: '3932',
        label: '广播电视接收设备及器材制造'

      }, {
        value: '3939',
        label: '应用电视设备及其他广播电视设备制造'

      }]
    }, {
      value: '394',
      label: '雷达及配套设备制造',
      children: [{
        value: '3940',
        label: '雷达及配套设备制造'

      }]
    }, {
      value: '395',
      label: '视听设备制造',
      children: [{
        value: '3951',
        label: '电视机制造'

      }, {
        value: '3952',
        label: '音响设备制造'

      }, {
        value: '3953',
        label: '影视录放设备制造'

      }]
    }, {
      value: '396',
      label: '电子器件制造',
      children: [{
        value: '3961',
        label: '电子真空器件制造'

      }, {
        value: '3962',
        label: '半导体分立器件制造'

      }, {
        value: '3963',
        label: '集成电路制造'

      }, {
        value: '3969',
        label: '光电子器件及其他电子器件制造'

      }]
    }, {
      value: '397',
      label: '电子元件制造',
      children: [{
        value: '3971',
        label: '电子元件及组件制造'

      }, {
        value: '3972',
        label: '印制电路板制造'

      }]
    }, {
      value: '399',
      label: '其他电子设备制造',
      children: [{
        value: '3990',
        label: '其他电子设备制造'

      }]
    }]
  }, {
    value: '40',
    label: '仪器仪表制造业',
    children: [{
      value: '401',
      label: '通用仪器仪表制造',
      children: [{
        value: '4011',
        label: '工业自动控制系统装置制造'

      }, {
        value: '4012',
        label: '电工仪器仪表制造'

      }, {
        value: '4013',
        label: '绘图、计算及测量仪器制造'

      }, {
        value: '4014',
        label: '实验分析仪器制造'

      }, {
        value: '4015',
        label: '试验机制造'

      }, {
        value: '4019',
        label: '供应用仪表及其他通用仪器制造'

      }]
    }, {
      value: '402',
      label: '专用仪器仪表制造',
      children: [{
        value: '4021',
        label: '环境监测专用仪器仪表制造'

      }, {
        value: '4022',
        label: '运输设备及生产用计数仪表制造'

      }, {
        value: '4023',
        label: '导航、气象及海洋专用仪器制造'

      }, {
        value: '4024',
        label: '农林牧渔专用仪器仪表制造'

      }, {
        value: '4025',
        label: '地质勘探和地震专用仪器制造'

      }, {
        value: '4026',
        label: '教学专用仪器制造'

      }, {
        value: '4027',
        label: '核子及核辐射测量仪器制造'

      }, {
        value: '4028',
        label: '电子测量仪器制造'

      }, {
        value: '4029',
        label: '其他专用仪器制造'

      }]
    }, {
      value: '403',
      label: '钟表与计时仪器制造',
      children: [{
        value: '4030',
        label: '钟表与计时仪器制造'

      }]
    }, {
      value: '404',
      label: '光学仪器及眼镜制造',
      children: [{
        value: '4041',
        label: '光学仪器制造'

      }, {
        value: '4042',
        label: '眼镜制造'

      }]
    }, {
      value: '409',
      label: '其他仪器仪表制造业',
      children: [{
        value: '4090',
        label: '其他仪器仪表制造业'

      }]
    }]
  }, {
    value: '41',
    label: '其他制造业',
    children: [{
      value: '411',
      label: '日用杂品制造',
      children: [{
        value: '4111',
        label: '鬃毛加工、制刷及清扫工具制造'

      }, {
        value: '4119',
        label: '其他日用杂品制造'

      }]
    }, {
      value: '412',
      label: '煤制品制造',
      children: [{
        value: '4120',
        label: '煤制品制造'

      }]
    }, {
      value: '413',
      label: '核辐射加工',
      children: [{
        value: '4130',
        label: '核辐射加工'

      }]
    }, {
      value: '419',
      label: '其他未列明制造业',
      children: [{
        value: '4190',
        label: '其他未列明制造业'

      }]
    }]
  }, {
    value: '42',
    label: '废弃资源综合利用业',
    children: [{
      value: '421',
      label: '金属废料和碎屑加工处理',
      children: [{
        value: '4210',
        label: '金属废料和碎屑加工处理'

      }]
    }, {
      value: '422',
      label: '非金属废料和碎屑加工处理',
      children: [{
        value: '4220',
        label: '非金属废料和碎屑加工处理'

      }]
    }]
  }, {
    value: '43',
    label: '金属制品、机械和设备修理业',
    children: [{
      value: '431',
      label: '金属制品修理',
      children: [{
        value: '4310',
        label: '金属制品修理'

      }]
    }, {
      value: '432',
      label: '通用设备修理',
      children: [{
        value: '4320',
        label: '通用设备修理'

      }]
    }, {
      value: '433',
      label: '专用设备修理',
      children: [{
        value: '4330',
        label: '专用设备修理'

      }]
    }, {
      value: '434',
      label: '铁路、船舶、航空航天等运输设备修理',
      children: [{
        value: '4341',
        label: '铁路运输设备修理'

      }, {
        value: '4342',
        label: '船舶修理'

      }, {
        value: '4343',
        label: '航空航天器修理'

      }, {
        value: '4349',
        label: '其他运输设备修理'

      }]
    }, {
      value: '435',
      label: '电气设备修理',
      children: [{
        value: '4350',
        label: '电气设备修理'

      }]
    }, {
      value: '436',
      label: '仪器仪表修理',
      children: [{
        value: '4360',
        label: '仪器仪表修理'

      }]
    }, {
      value: '439',
      label: '其他机械和设备修理业',
      children: [{
        value: '4390',
        label: '其他机械和设备修理业'

      }]
    }]
  }]
}, {
  value: 'D',
  label: '电力、热力、燃气及水生产和供应业',
  children: [{
    value: '44',
    label: '电力、热力生产和供应业',
    children: [{
      value: '441',
      label: '电力生产',
      children: [{
        value: '4411',
        label: '火力发电'

      }, {
        value: '4412',
        label: '水力发电'

      }, {
        value: '4413',
        label: '核力发电'

      }, {
        value: '4414',
        label: '风力发电'

      }, {
        value: '4415',
        label: '太阳能发电'

      }, {
        value: '4419',
        label: '其他电力生产'

      }]
    }, {
      value: '442',
      label: '电力供应',
      children: [{
        value: '4420',
        label: '电力供应'

      }]
    }, {
      value: '443',
      label: '热力生产和供应',
      children: [{
        value: '4430',
        label: '热力生产和供应'

      }]
    }]
  }, {
    value: '45',
    label: '燃气生产和供应业',
    children: [{
      value: '450',
      label: '燃气生产和供应业',
      children: [{
        value: '4500',
        label: '燃气生产和供应业'

      }]
    }]
  }, {
    value: '46',
    label: '水的生产和供应业',
    children: [{
      value: '461',
      label: '自来水生产和供应',
      children: [{
        value: '4610',
        label: '自来水生产和供应'

      }]
    }, {
      value: '462',
      label: '污水处理及其再生利用',
      children: [{
        value: '4620',
        label: '污水处理及其再生利用'

      }]
    }, {
      value: '469',
      label: '其他水的处理、利用与分配',
      children: [{
        value: '4690',
        label: '其他水的处理、利用与分配'

      }]
    }]
  }]
}, {
  value: 'E',
  label: '建筑业',
  children: [{
    value: '47',
    label: '房屋建筑业',
    children: [{
      value: '470',
      label: '房屋建筑业',
      children: [{
        value: '4700',
        label: '房屋建筑业'

      }]
    }]
  }, {
    value: '48',
    label: '土木工程建筑业',
    children: [{
      value: '481',
      label: '铁路、道路、隧道和桥梁工程建筑',
      children: [{
        value: '4811',
        label: '铁路工程建筑'

      }, {
        value: '4812',
        label: '公路工程建筑'

      }, {
        value: '4813',
        label: '市政道路工程建筑'

      }, {
        value: '4819',
        label: '其他道路、隧道和桥梁工程建筑'

      }]
    }, {
      value: '482',
      label: '水利和内河港口工程建筑',
      children: [{
        value: '4821',
        label: '水源及供水设施工程建筑'

      }, {
        value: '4822',
        label: '河湖治理及防洪设施工程建筑'

      }, {
        value: '4823',
        label: '港口及航运设施工程建筑'

      }]
    }, {
      value: '483',
      label: '海洋工程建筑',
      children: [{
        value: '4830',
        label: '海洋工程建筑'

      }]
    }, {
      value: '484',
      label: '工矿工程建筑',
      children: [{
        value: '4840',
        label: '工矿工程建筑'

      }]
    }, {
      value: '485',
      label: '架线和管道工程建筑',
      children: [{
        value: '4851',
        label: '架线及设备工程建筑'

      }, {
        value: '4852',
        label: '管道工程建筑'

      }]
    }, {
      value: '489',
      label: '其他土木工程建筑',
      children: [{
        value: '4890',
        label: '其他土木工程建筑'

      }]
    }]
  }, {
    value: '49',
    label: '建筑安装业',
    children: [{
      value: '491',
      label: '电气安装',
      children: [{
        value: '4910',
        label: '电气安装'

      }]
    }, {
      value: '492',
      label: '管道和设备安装',
      children: [{
        value: '4920',
        label: '管道和设备安装'

      }]
    }, {
      value: '499',
      label: '其他建筑安装业',
      children: [{
        value: '4990',
        label: '其他建筑安装业'

      }]
    }]
  }, {
    value: '50',
    label: '建筑装饰和其他建筑业',
    children: [{
      value: '501',
      label: '建筑装饰业',
      children: [{
        value: '5010',
        label: '建筑装饰业'

      }]
    }, {
      value: '502',
      label: '工程准备活动',
      children: [{
        value: '5021',
        label: '建筑物拆除活动'

      }, {
        value: '5029',
        label: '其他工程准备活动'

      }]
    }, {
      value: '503',
      label: '提供施工设备服务',
      children: [{
        value: '5030',
        label: '提供施工设备服务'

      }]
    }, {
      value: '509',
      label: '其他未列明建筑业',
      children: [{
        value: '5090',
        label: '其他未列明建筑业'

      }]
    }]
  }]
}, {
  value: 'F',
  label: '批发和零售业',
  children: [{
    value: '51',
    label: '批发业',
    children: [{
      value: '511',
      label: '农、林、牧产品批发',
      children: [{
        value: '5111',
        label: '谷物、豆及薯类批发'

      }, {
        value: '5112',
        label: '种子批发'

      }, {
        value: '5113',
        label: '饲料批发'

      }, {
        value: '5114',
        label: '棉、麻批发'

      }, {
        value: '5115',
        label: '林业产品批发'

      }, {
        value: '5116',
        label: '牲畜批发'

      }, {
        value: '5119',
        label: '其他农牧产品批发'

      }]
    }, {
      value: '512',
      label: '食品、饮料及烟草制品批发',
      children: [{
        value: '5121',
        label: '米、面制品及食用油批发'

      }, {
        value: '5122',
        label: '糕点、糖果及糖批发'

      }, {
        value: '5123',
        label: '果品、蔬菜批发'

      }, {
        value: '5124',
        label: '肉、禽、蛋、奶及水产品批发'

      }, {
        value: '5125',
        label: '盐及调味品批发'

      }, {
        value: '5126',
        label: '营养和保健品批发'

      }, {
        value: '5127',
        label: '酒、饮料及茶叶批发'

      }, {
        value: '5128',
        label: '烟草制品批发'

      }, {
        value: '5129',
        label: '其他食品批发'

      }]
    }, {
      value: '513',
      label: '纺织、服装及家庭用品批发',
      children: [{
        value: '5131',
        label: '纺织品、针织品及原料批发'

      }, {
        value: '5132',
        label: '服装批发'

      }, {
        value: '5133',
        label: '鞋帽批发'

      }, {
        value: '5134',
        label: '化妆品及卫生用品批发'

      }, {
        value: '5135',
        label: '厨房、卫生间用具及日用杂货批发'

      }, {
        value: '5136',
        label: '灯具、装饰物品批发'

      }, {
        value: '5137',
        label: '家用电器批发'

      }, {
        value: '5139',
        label: '其他家庭用品批发'

      }]
    }, {
      value: '514',
      label: '文化、体育用品及器材批发',
      children: [{
        value: '5141',
        label: '文具用品批发'

      }, {
        value: '5142',
        label: '体育用品及器材批发'

      }, {
        value: '5143',
        label: '图书批发'

      }, {
        value: '5144',
        label: '报刊批发'

      }, {
        value: '5145',
        label: '音像制品及电子出版物批发'

      }, {
        value: '5146',
        label: '首饰、工艺品及收藏品批发'

      }, {
        value: '5149',
        label: '其他文化用品批发'

      }]
    }, {
      value: '515',
      label: '医药及医疗器材批发',
      children: [{
        value: '5151',
        label: '西药批发'

      }, {
        value: '5152',
        label: '中药批发'

      }, {
        value: '5153',
        label: '医疗用品及器材批发'

      }]
    }, {
      value: '516',
      label: '矿产品、建材及化工产品批发',
      children: [{
        value: '5161',
        label: '煤炭及制品批发'

      }, {
        value: '5162',
        label: '石油及制品批发'

      }, {
        value: '5163',
        label: '非金属矿及制品批发'

      }, {
        value: '5164',
        label: '金属及金属矿批发'

      }, {
        value: '5165',
        label: '建材批发'

      }, {
        value: '5166',
        label: '化肥批发'

      }, {
        value: '5167',
        label: '农药批发'

      }, {
        value: '5168',
        label: '农用薄膜批发'

      }, {
        value: '5169',
        label: '其他化工产品批发'

      }]
    }, {
      value: '517',
      label: '机械设备、五金产品及电子产品批发',
      children: [{
        value: '5171',
        label: '农业机械批发'

      }, {
        value: '5172',
        label: '汽车批发'

      }, {
        value: '5173',
        label: '汽车零配件批发'

      }, {
        value: '5174',
        label: '摩托车及零配件批发'

      }, {
        value: '5175',
        label: '五金产品批发'

      }, {
        value: '5176',
        label: '电气设备批发'

      }, {
        value: '5177',
        label: '计算机、软件及辅助设备批发'

      }, {
        value: '5178',
        label: '通讯及广播电视设备批发'

      }, {
        value: '5179',
        label: '其他机械设备及电子产品批发'

      }]
    }, {
      value: '518',
      label: '贸易经纪与代理',
      children: [{
        value: '5181',
        label: '贸易代理'

      }, {
        value: '5182',
        label: '拍卖'

      }, {
        value: '5189',
        label: '其他贸易经纪与代理'

      }]
    }, {
      value: '519',
      label: '其他批发业',
      children: [{
        value: '5191',
        label: '再生物资回收与批发'

      }, {
        value: '5199',
        label: '其他未列明批发业'

      }]
    }]
  }, {
    value: '52',
    label: '零售业',
    children: [{
      value: '521',
      label: '综合零售',
      children: [{
        value: '5211',
        label: '百货零售'

      }, {
        value: '5212',
        label: '超级市场零售'

      }, {
        value: '5219',
        label: '其他综合零售'

      }]
    }, {
      value: '522',
      label: '食品、饮料及烟草制品专门零售',
      children: [{
        value: '5221',
        label: '粮油零售'

      }, {
        value: '5222',
        label: '糕点、面包零售'

      }, {
        value: '5223',
        label: '果品、蔬菜零售'

      }, {
        value: '5224',
        label: '肉、禽、蛋、奶及水产品零售'

      }, {
        value: '5225',
        label: '营养和保健品零售'

      }, {
        value: '5226',
        label: '酒、饮料及茶叶零售'

      }, {
        value: '5227',
        label: '烟草制品零售'

      }, {
        value: '5229',
        label: '其他食品零售'

      }]
    }, {
      value: '523',
      label: '纺织、服装及日用品专门零售',
      children: [{
        value: '5231',
        label: '纺织品及针织品零售'

      }, {
        value: '5232',
        label: '服装零售'

      }, {
        value: '5233',
        label: '鞋帽零售'

      }, {
        value: '5234',
        label: '化妆品及卫生用品零售'

      }, {
        value: '5235',
        label: '钟表、眼镜零售'

      }, {
        value: '5236',
        label: '箱、包零售'

      }, {
        value: '5237',
        label: '厨房用具及日用杂品零售'

      }, {
        value: '5238',
        label: '自行车零售'

      }, {
        value: '5239',
        label: '其他日用品零售'

      }]
    }, {
      value: '524',
      label: '文化、体育用品及器材专门零售',
      children: [{
        value: '5241',
        label: '文具用品零售'

      }, {
        value: '5242',
        label: '体育用品及器材零售'

      }, {
        value: '5243',
        label: '图书、报刊零售'

      }, {
        value: '5244',
        label: '音像制品及电子出版物零售'

      }, {
        value: '5245',
        label: '珠宝首饰零售'

      }, {
        value: '5246',
        label: '工艺美术品及收藏品零售'

      }, {
        value: '5247',
        label: '乐器零售'

      }, {
        value: '5248',
        label: '照相器材零售'

      }, {
        value: '5249',
        label: '其他文化用品零售'

      }]
    }, {
      value: '525',
      label: '医药及医疗器材专门零售',
      children: [{
        value: '5251',
        label: '药品零售'

      }, {
        value: '5252',
        label: '医疗用品及器材零售'

      }]
    }, {
      value: '526',
      label: '汽车、摩托车、燃料及零配件专门零售',
      children: [{
        value: '5261',
        label: '汽车零售'

      }, {
        value: '5262',
        label: '汽车零配件零售'

      }, {
        value: '5263',
        label: '摩托车及零配件零售'

      }, {
        value: '5264',
        label: '机动车燃料零售'

      }]
    }, {
      value: '527',
      label: '家用电器及电子产品专门零售',
      children: [{
        value: '5271',
        label: '家用视听设备零售'

      }, {
        value: '5272',
        label: '日用家电设备零售'

      }, {
        value: '5273',
        label: '计算机、软件及辅助设备零售'

      }, {
        value: '5274',
        label: '通信设备零售'

      }, {
        value: '5279',
        label: '其他电子产品零售'

      }]
    }, {
      value: '528',
      label: '五金、家具及室内装饰材料专门零售',
      children: [{
        value: '5281',
        label: '五金零售'

      }, {
        value: '5282',
        label: '灯具零售'

      }, {
        value: '5283',
        label: '家具零售'

      }, {
        value: '5284',
        label: '涂料零售'

      }, {
        value: '5285',
        label: '卫生洁具零售'

      }, {
        value: '5286',
        label: '木质装饰材料零售'

      }, {
        value: '5287',
        label: '陶瓷、石材装饰材料零售'

      }, {
        value: '5289',
        label: '其他室内装饰材料零售'

      }]
    }, {
      value: '529',
      label: '货摊、无店铺及其他零售业',
      children: [{
        value: '5291',
        label: '货摊食品零售'

      }, {
        value: '5292',
        label: '货摊纺织、服装及鞋零售'

      }, {
        value: '5293',
        label: '货摊日用品零售'

      }, {
        value: '5294',
        label: '互联网零售'

      }, {
        value: '5295',
        label: '邮购及电视、电话零售'

      }, {
        value: '5296',
        label: '旧货零售'

      }, {
        value: '5297',
        label: '生活用燃料零售'

      }, {
        value: '5299',
        label: '其他未列明零售业'

      }]
    }]
  }]
}, {
  value: 'G',
  label: '交通运输、仓储和邮政业',
  children: [{
    value: '53',
    label: '铁路运输业',
    children: [{
      value: '531',
      label: '铁路旅客运输',
      children: [{
        value: '5310',
        label: '铁路旅客运输'

      }]
    }, {
      value: '532',
      label: '铁路货物运输',
      children: [{
        value: '5320',
        label: '铁路货物运输'

      }]
    }, {
      value: '533',
      label: '铁路运输辅助活动',
      children: [{
        value: '5331',
        label: '客运火车站'

      }, {
        value: '5332',
        label: '货运火车站'

      }, {
        value: '5339',
        label: '其他铁路运输辅助活动'

      }]
    }]
  }, {
    value: '54',
    label: '道路运输业',
    children: [{
      value: '541',
      label: '城市公共交通运输',
      children: [{
        value: '5411',
        label: '公共电汽车客运'

      }, {
        value: '5412',
        label: '城市轨道交通'

      }, {
        value: '5413',
        label: '出租车客运'

      }, {
        value: '5419',
        label: '其他城市公共交通运输'

      }]
    }, {
      value: '542',
      label: '公路旅客运输',
      children: [{
        value: '5420',
        label: '公路旅客运输'

      }]
    }, {
      value: '543',
      label: '道路货物运输',
      children: [{
        value: '5430',
        label: '道路货物运输'

      }]
    }, {
      value: '544',
      label: '道路运输辅助活动',
      children: [{
        value: '5441',
        label: '客运汽车站'

      }, {
        value: '5442',
        label: '公路管理与养护'

      }, {
        value: '5449',
        label: '其他道路运输辅助活动'

      }]
    }]
  }, {
    value: '55',
    label: '水上运输业',
    children: [{
      value: '551',
      label: '水上旅客运输',
      children: [{
        value: '5511',
        label: '海洋旅客运输'

      }, {
        value: '5512',
        label: '内河旅客运输'

      }, {
        value: '5513',
        label: '客运轮渡运输'

      }]
    }, {
      value: '552',
      label: '水上货物运输',
      children: [{
        value: '5521',
        label: '远洋货物运输'

      }, {
        value: '5522',
        label: '沿海货物运输'

      }, {
        value: '5523',
        label: '内河货物运输'

      }]
    }, {
      value: '553',
      label: '水上运输辅助活动',
      children: [{
        value: '5531',
        label: '客运港口'

      }, {
        value: '5532',
        label: '货运港口'

      }, {
        value: '5539',
        label: '其他水上运输辅助活动'

      }]
    }]
  }, {
    value: '56',
    label: '航空运输业',
    children: [{
      value: '561',
      label: '航空客货运输',
      children: [{
        value: '5611',
        label: '航空旅客运输'

      }, {
        value: '5612',
        label: '航空货物运输'

      }]
    }, {
      value: '562',
      label: '通用航空服务',
      children: [{
        value: '5620',
        label: '通用航空服务'

      }]
    }, {
      value: '563',
      label: '航空运输辅助活动',
      children: [{
        value: '5631',
        label: '机场'

      }, {
        value: '5632',
        label: '空中交通管理'

      }, {
        value: '5639',
        label: '其他航空运输辅助活动'

      }]
    }]
  }, {
    value: '57',
    label: '管道运输业',
    children: [{
      value: '570',
      label: '管道运输业',
      children: [{
        value: '5700',
        label: '管道运输业'

      }]
    }]
  }, {
    value: '58',
    label: '装卸搬运和运输代理业',
    children: [{
      value: '581',
      label: '装卸搬运',
      children: [{
        value: '5810',
        label: '装卸搬运'

      }]
    }, {
      value: '582',
      label: '运输代理业',
      children: [{
        value: '5821',
        label: '货物运输代理'

      }, {
        value: '5822',
        label: '旅客票务代理'

      }, {
        value: '5829',
        label: '其他运输代理业'

      }]
    }]
  }, {
    value: '59',
    label: '仓储业',
    children: [{
      value: '591',
      label: '谷物、棉花等农产品仓储',
      children: [{
        value: '5911',
        label: '谷物仓储'

      }, {
        value: '5912',
        label: '棉花仓储'

      }, {
        value: '5919',
        label: '其他农产品仓储'

      }]
    }, {
      value: '599',
      label: '其他仓储业',
      children: [{
        value: '5990',
        label: '其他仓储业'

      }]
    }]
  }, {
    value: '60',
    label: '邮政业',
    children: [{
      value: '601',
      label: '邮政基本服务',
      children: [{
        value: '6010',
        label: '邮政基本服务'

      }]
    }, {
      value: '602',
      label: '快递服务',
      children: [{
        value: '6020',
        label: '快递服务'

      }]
    }]
  }]
}, {
  value: 'H',
  label: '住宿和餐饮业',
  children: [{
    value: '61',
    label: '住宿业',
    children: [{
      value: '611',
      label: '旅游饭店',
      children: [{
        value: '6110',
        label: '旅游饭店'

      }]
    }, {
      value: '612',
      label: '一般旅馆',
      children: [{
        value: '6120',
        label: '一般旅馆'

      }]
    }, {
      value: '619',
      label: '其他住宿业',
      children: [{
        value: '6190',
        label: '其他住宿业'

      }]
    }]
  }, {
    value: '62',
    label: '餐饮业',
    children: [{
      value: '621',
      label: '正餐服务',
      children: [{
        value: '6210',
        label: '正餐服务'

      }]
    }, {
      value: '622',
      label: '快餐服务',
      children: [{
        value: '6220',
        label: '快餐服务'

      }]
    }, {
      value: '623',
      label: '饮料及冷饮服务',
      children: [{
        value: '6231',
        label: '茶馆服务'

      }, {
        value: '6232',
        label: '咖啡馆服务'

      }, {
        value: '6233',
        label: '酒吧服务'

      }, {
        value: '6239',
        label: '其他饮料及冷饮服务'

      }]
    }, {
      value: '629',
      label: '其他餐饮业',
      children: [{
        value: '6291',
        label: '小吃服务'

      }, {
        value: '6292',
        label: '餐饮配送服务'

      }, {
        value: '6299',
        label: '其他未列明餐饮业'

      }]
    }]
  }]
}, {
  value: 'I',
  label: '信息传输、软件和信息技术服务业',
  children: [{
    value: '63',
    label: '电信、广播电视和卫星传输服务',
    children: [{
      value: '631',
      label: '电信',
      children: [{
        value: '6311',
        label: '固定电信服务'

      }, {
        value: '6312',
        label: '移动电信服务'

      }, {
        value: '6319',
        label: '其他电信服务'

      }]
    }, {
      value: '632',
      label: '广播电视传输服务',
      children: [{
        value: '6321',
        label: '有线广播电视传输服务'

      }, {
        value: '6322',
        label: '无线广播电视传输服务'

      }]
    }, {
      value: '633',
      label: '卫星传输服务',
      children: [{
        value: '6330',
        label: '卫星传输服务'

      }]
    }]
  }, {
    value: '64',
    label: '互联网和相关服务',
    children: [{
      value: '641',
      label: '互联网接入及相关服务',
      children: [{
        value: '6410',
        label: '互联网接入及相关服务'

      }]
    }, {
      value: '642',
      label: '互联网信息服务',
      children: [{
        value: '6420',
        label: '互联网信息服务'

      }]
    }, {
      value: '649',
      label: '其他互联网服务',
      children: [{
        value: '6490',
        label: '其他互联网服务'

      }]
    }]
  }, {
    value: '65',
    label: '软件和信息技术服务业',
    children: [{
      value: '651',
      label: '软件开发',
      children: [{
        value: '6510',
        label: '软件开发'

      }]
    }, {
      value: '652',
      label: '信息系统集成服务',
      children: [{
        value: '6520',
        label: '信息系统集成服务'

      }]
    }, {
      value: '653',
      label: '信息技术咨询服务',
      children: [{
        value: '6530',
        label: '信息技术咨询服务'

      }]
    }, {
      value: '654',
      label: '数据处理和存储服务',
      children: [{
        value: '6540',
        label: '数据处理和存储服务'

      }]
    }, {
      value: '655',
      label: '集成电路设计',
      children: [{
        value: '6550',
        label: '集成电路设计'

      }]
    }, {
      value: '659',
      label: '其他信息技术服务业',
      children: [{
        value: '6591',
        label: '数字内容服务'

      }, {
        value: '6592',
        label: '呼叫中心'

      }, {
        value: '6599',
        label: '其他未列明信息技术服务业'

      }]
    }]
  }]
}, {
  value: 'J',
  label: '金融业',
  children: [{
    value: '66',
    label: '货币金融服务',
    children: [{
      value: '661',
      label: '中央银行服务',
      children: [{
        value: '6610',
        label: '中央银行服务'

      }]
    }, {
      value: '662',
      label: '货币银行服务',
      children: [{
        value: '6620',
        label: '货币银行服务'

      }]
    }, {
      value: '663',
      label: '非货币银行服务',
      children: [{
        value: '6631',
        label: '金融租赁服务'

      }, {
        value: '6632',
        label: '财务公司'

      }, {
        value: '6633',
        label: '典当'

      }, {
        value: '6639',
        label: '其他非货币银行服务'

      }]
    }, {
      value: '664',
      label: '银行监管服务',
      children: [{
        value: '6640',
        label: '银行监管服务'

      }]
    }]
  }, {
    value: '67',
    label: '资本市场服务',
    children: [{
      value: '671',
      label: '证券市场服务',
      children: [{
        value: '6711',
        label: '证券市场管理服务'

      }, {
        value: '6712',
        label: '证券经纪交易服务'

      }, {
        value: '6713',
        label: '基金管理服务'

      }]
    }, {
      value: '672',
      label: '期货市场服务',
      children: [{
        value: '6721',
        label: '期货市场管理服务'

      }, {
        value: '6729',
        label: '其他期货市场服务'

      }]
    }, {
      value: '673',
      label: '证券期货监管服务',
      children: [{
        value: '6730',
        label: '证券期货监管服务'

      }]
    }, {
      value: '674',
      label: '资本投资服务',
      children: [{
        value: '6740',
        label: '资本投资服务'

      }]
    }, {
      value: '679',
      label: '其他资本市场服务',
      children: [{
        value: '6790',
        label: '其他资本市场服务'

      }]
    }]
  }, {
    value: '68',
    label: '保险业',
    children: [{
      value: '681',
      label: '人身保险',
      children: [{
        value: '6811',
        label: '人寿保险'

      }, {
        value: '6812',
        label: '健康和意外保险'

      }]
    }, {
      value: '682',
      label: '财产保险',
      children: [{
        value: '6820',
        label: '财产保险'

      }]
    }, {
      value: '683',
      label: '再保险',
      children: [{
        value: '6830',
        label: '再保险'

      }]
    }, {
      value: '684',
      label: '养老金',
      children: [{
        value: '6840',
        label: '养老金'

      }]
    }, {
      value: '685',
      label: '保险经纪与代理服务',
      children: [{
        value: '6850',
        label: '保险经纪与代理服务'

      }]
    }, {
      value: '686',
      label: '保险监管服务',
      children: [{
        value: '6860',
        label: '保险监管服务'

      }]
    }, {
      value: '689',
      label: '其他保险活动',
      children: [{
        value: '6891',
        label: '风险和损失评估'

      }, {
        value: '6899',
        label: '其他未列明保险活动'

      }]
    }]
  }, {
    value: '69',
    label: '其他金融业',
    children: [{
      value: '691',
      label: '金融信托与管理服务',
      children: [{
        value: '6910',
        label: '金融信托与管理服务'

      }]
    }, {
      value: '692',
      label: '控股公司服务',
      children: [{
        value: '6920',
        label: '控股公司服务'

      }]
    }, {
      value: '693',
      label: '非金融机构支付服务',
      children: [{
        value: '6930',
        label: '非金融机构支付服务'

      }]
    }, {
      value: '694',
      label: '金融信息服务',
      children: [{
        value: '6940',
        label: '金融信息服务'

      }]
    }, {
      value: '699',
      label: '其他未列明金融业',
      children: [{
        value: '6990',
        label: '其他未列明金融业'

      }]
    }]
  }]
}, {
  value: 'K',
  label: '房地产业',
  children: [{
    value: '70',
    label: '房地产业',
    children: [{
      value: '701',
      label: '房地产开发经营',
      children: [{
        value: '7010',
        label: '房地产开发经营'

      }]
    }, {
      value: '702',
      label: '物业管理',
      children: [{
        value: '7020',
        label: '物业管理'

      }]
    }, {
      value: '703',
      label: '房地产中介服务',
      children: [{
        value: '7030',
        label: '房地产中介服务'

      }]
    }, {
      value: '704',
      label: '自有房地产经营活动',
      children: [{
        value: '7040',
        label: '自有房地产经营活动'

      }]
    }, {
      value: '709',
      label: '其他房地产业',
      children: [{
        value: '7090',
        label: '其他房地产业'

      }]
    }]
  }]
}, {
  value: 'L',
  label: '租赁和商务服务业',
  children: [{
    value: '71',
    label: '租赁业',
    children: [{
      value: '711',
      label: '机械设备租赁',
      children: [{
        value: '7111',
        label: '汽车租赁'

      }, {
        value: '7112',
        label: '农业机械租赁'

      }, {
        value: '7113',
        label: '建筑工程机械与设备租赁'

      }, {
        value: '7114',
        label: '计算机及通讯设备租赁'

      }, {
        value: '7119',
        label: '其他机械与设备租赁'

      }]
    }, {
      value: '712',
      label: '文化及日用品出租',
      children: [{
        value: '7121',
        label: '娱乐及体育设备出租'

      }, {
        value: '7122',
        label: '图书出租'

      }, {
        value: '7123',
        label: '音像制品出租'

      }, {
        value: '7129',
        label: '其他文化及日用品出租'

      }]
    }]
  }, {
    value: '72',
    label: '商务服务业',
    children: [{
      value: '721',
      label: '企业管理服务',
      children: [{
        value: '7211',
        label: '企业总部管理'

      }, {
        value: '7212',
        label: '投资与资产管理'

      }, {
        value: '7213',
        label: '单位后勤管理服务'

      }, {
        value: '7219',
        label: '其他企业管理服务'

      }]
    }, {
      value: '722',
      label: '法律服务',
      children: [{
        value: '7221',
        label: '律师及相关法律服务'

      }, {
        value: '7222',
        label: '公证服务'

      }, {
        value: '7229',
        label: '其他法律服务'

      }]
    }, {
      value: '723',
      label: '咨询与调查',
      children: [{
        value: '7231',
        label: '会计、审计及税务服务'

      }, {
        value: '7232',
        label: '市场调查'

      }, {
        value: '7233',
        label: '社会经济咨询'

      }, {
        value: '7239',
        label: '其他专业咨询'

      }]
    }, {
      value: '724',
      label: '广告业',
      children: [{
        value: '7240',
        label: '广告业'

      }]
    }, {
      value: '725',
      label: '知识产权服务',
      children: [{
        value: '7250',
        label: '知识产权服务'

      }]
    }, {
      value: '726',
      label: '人力资源服务',
      children: [{
        value: '7261',
        label: '公共就业服务'

      }, {
        value: '7262',
        label: '职业中介服务'

      }, {
        value: '7263',
        label: '劳务派遣服务'

      }, {
        value: '7269',
        label: '其他人力资源服务'

      }]
    }, {
      value: '727',
      label: '旅行社及相关服务',
      children: [{
        value: '7271',
        label: '旅行社服务'

      }, {
        value: '7272',
        label: '旅游管理服务'

      }, {
        value: '7279',
        label: '其他旅行社相关服务'

      }]
    }, {
      value: '728',
      label: '安全保护服务',
      children: [{
        value: '7281',
        label: '安全服务'

      }, {
        value: '7282',
        label: '安全系统监控服务'

      }, {
        value: '7289',
        label: '其他安全保护服务'

      }]
    }, {
      value: '729',
      label: '其他商务服务业',
      children: [{
        value: '7291',
        label: '市场管理'

      }, {
        value: '7292',
        label: '会议及展览服务'

      }, {
        value: '7293',
        label: '包装服务'

      }, {
        value: '7294',
        label: '办公服务'

      }, {
        value: '7295',
        label: '信用服务'

      }, {
        value: '7296',
        label: '担保服务'

      }, {
        value: '7299',
        label: '其他未列明商务服务业'

      }]
    }]
  }]
}, {
  value: 'M',
  label: '科学研究和技术服务业',
  children: [{
    value: '73',
    label: '研究和试验发展',
    children: [{
      value: '731',
      label: '自然科学研究和试验发展',
      children: [{
        value: '7310',
        label: '自然科学研究和试验发展'

      }]
    }, {
      value: '732',
      label: '工程和技术研究和试验发展',
      children: [{
        value: '7320',
        label: '工程和技术研究和试验发展'

      }]
    }, {
      value: '733',
      label: '农业科学研究和试验发展',
      children: [{
        value: '7330',
        label: '农业科学研究和试验发展'

      }]
    }, {
      value: '734',
      label: '医学研究和试验发展',
      children: [{
        value: '7340',
        label: '医学研究和试验发展'

      }]
    }, {
      value: '735',
      label: '社会人文科学研究',
      children: [{
        value: '7350',
        label: '社会人文科学研究'

      }]
    }]
  }, {
    value: '74',
    label: '专业技术服务业',
    children: [{
      value: '741',
      label: '气象服务',
      children: [{
        value: '7410',
        label: '气象服务'

      }]
    }, {
      value: '742',
      label: '地震服务',
      children: [{
        value: '7420',
        label: '地震服务'

      }]
    }, {
      value: '743',
      label: '海洋服务',
      children: [{
        value: '7430',
        label: '海洋服务'

      }]
    }, {
      value: '744',
      label: '测绘服务',
      children: [{
        value: '7440',
        label: '测绘服务'

      }]
    }, {
      value: '745',
      label: '质检技术服务',
      children: [{
        value: '7450',
        label: '质检技术服务'

      }]
    }, {
      value: '746',
      label: '环境与生态监测',
      children: [{
        value: '7461',
        label: '环境保护监测'

      }, {
        value: '7462',
        label: '生态监测'

      }]
    }, {
      value: '747',
      label: '地质勘查',
      children: [{
        value: '7471',
        label: '能源矿产地质勘查'

      }, {
        value: '7472',
        label: '固体矿产地质勘查'

      }, {
        value: '7473',
        label: '水、二氧化碳等矿产地质勘查'

      }, {
        value: '7474',
        label: '基础地质勘查'

      }, {
        value: '7475',
        label: '地质勘查技术服务'

      }]
    }, {
      value: '748',
      label: '工程技术',
      children: [{
        value: '7481',
        label: '工程管理服务'

      }, {
        value: '7482',
        label: '工程勘察设计'

      }, {
        value: '7483',
        label: '规划管理'

      }]
    }, {
      value: '749',
      label: '其他专业技术服务业',
      children: [{
        value: '7491',
        label: '专业化设计服务'

      }, {
        value: '7492',
        label: '摄影扩印服务'

      }, {
        value: '7493',
        label: '兽医服务'

      }, {
        value: '7499',
        label: '其他未列明专业技术服务业'

      }]
    }]
  }, {
    value: '75',
    label: '科技推广和应用服务业',
    children: [{
      value: '751',
      label: '技术推广服务',
      children: [{
        value: '7511',
        label: '农业技术推广服务'

      }, {
        value: '7512',
        label: '生物技术推广服务'

      }, {
        value: '7513',
        label: '新材料技术推广服务'

      }, {
        value: '7514',
        label: '节能技术推广服务'

      }, {
        value: '7519',
        label: '其他技术推广服务'

      }]
    }, {
      value: '752',
      label: '科技中介服务',
      children: [{
        value: '7520',
        label: '科技中介服务'

      }]
    }, {
      value: '759',
      label: '其他科技推广和应用服务业',
      children: [{
        value: '7590',
        label: '其他科技推广和应用服务业'

      }]
    }]
  }]
}, {
  value: 'N',
  label: '水利、环境和公共设施管理业',
  children: [{
    value: '76',
    label: '水利管理业',
    children: [{
      value: '761',
      label: '防洪除涝设施管理',
      children: [{
        value: '7610',
        label: '防洪除涝设施管理'

      }]
    }, {
      value: '762',
      label: '水资源管理',
      children: [{
        value: '7620',
        label: '水资源管理'

      }]
    }, {
      value: '763',
      label: '天然水收集与分配',
      children: [{
        value: '7630',
        label: '天然水收集与分配'

      }]
    }, {
      value: '764',
      label: '水文服务',
      children: [{
        value: '7640',
        label: '水文服务'

      }]
    }, {
      value: '769',
      label: '其他水利管理业',
      children: [{
        value: '7690',
        label: '其他水利管理业'

      }]
    }]
  }, {
    value: '77',
    label: '生态保护和环境治理业',
    children: [{
      value: '771',
      label: '生态保护',
      children: [{
        value: '7711',
        label: '自然保护区管理'

      }, {
        value: '7712',
        label: '野生动物保护'

      }, {
        value: '7713',
        label: '野生植物保护'

      }, {
        value: '7719',
        label: '其他自然保护'

      }]
    }, {
      value: '772',
      label: '环境治理业',
      children: [{
        value: '7721',
        label: '水污染治理'

      }, {
        value: '7722',
        label: '大气污染治理'

      }, {
        value: '7723',
        label: '固体废物治理'

      }, {
        value: '7724',
        label: '危险废物治理'

      }, {
        value: '7725',
        label: '放射性废物治理'

      }, {
        value: '7729',
        label: '其他污染治理'

      }]
    }]
  }, {
    value: '78',
    label: '公共设施管理业',
    children: [{
      value: '781',
      label: '市政设施管理',
      children: [{
        value: '7810',
        label: '市政设施管理'

      }]
    }, {
      value: '782',
      label: '环境卫生管理',
      children: [{
        value: '7820',
        label: '环境卫生管理'

      }]
    }, {
      value: '783',
      label: '城乡市容管理',
      children: [{
        value: '7830',
        label: '城乡市容管理'

      }]
    }, {
      value: '784',
      label: '绿化管理',
      children: [{
        value: '7840',
        label: '绿化管理'

      }]
    }, {
      value: '785',
      label: '公园和游览景区管理',
      children: [{
        value: '7851',
        label: '公园管理'

      }, {
        value: '7852',
        label: '游览景区管理'

      }]
    }]
  }]
}, {
  value: 'O',
  label: '居民服务、修理和其他服务业',
  children: [{
    value: '79',
    label: '居民服务业',
    children: [{
      value: '791',
      label: '家庭服务',
      children: [{
        value: '7910',
        label: '家庭服务'

      }]
    }, {
      value: '792',
      label: '托儿所服务',
      children: [{
        value: '7920',
        label: '托儿所服务'

      }]
    }, {
      value: '793',
      label: '洗染服务',
      children: [{
        value: '7930',
        label: '洗染服务'

      }]
    }, {
      value: '794',
      label: '理发及美容服务',
      children: [{
        value: '7940',
        label: '理发及美容服务'

      }]
    }, {
      value: '795',
      label: '洗浴服务',
      children: [{
        value: '7950',
        label: '洗浴服务'

      }]
    }, {
      value: '796',
      label: '保健服务',
      children: [{
        value: '7960',
        label: '保健服务'

      }]
    }, {
      value: '797',
      label: '婚姻服务',
      children: [{
        value: '7970',
        label: '婚姻服务'

      }]
    }, {
      value: '798',
      label: '殡葬服务',
      children: [{
        value: '7980',
        label: '殡葬服务'

      }]
    }, {
      value: '799',
      label: '其他居民服务业',
      children: [{
        value: '7990',
        label: '其他居民服务业'

      }]
    }]
  }, {
    value: '80',
    label: '机动车、电子产品和日用产品修理业',
    children: [{
      value: '801',
      label: '汽车、摩托车修理与维护',
      children: [{
        value: '8011',
        label: '汽车修理与维护'

      }, {
        value: '8012',
        label: '摩托车修理与维护'

      }]
    }, {
      value: '802',
      label: '计算机和办公设备维修',
      children: [{
        value: '8021',
        label: '计算机和辅助设备修理'

      }, {
        value: '8022',
        label: '通讯设备修理'

      }, {
        value: '8029',
        label: '其他办公设备维修'

      }]
    }, {
      value: '803',
      label: '家用电器修理',
      children: [{
        value: '8031',
        label: '家用电子产品修理'

      }, {
        value: '8032',
        label: '日用电器修理'

      }]
    }, {
      value: '809',
      label: '其他日用产品修理业',
      children: [{
        value: '8091',
        label: '自行车修理'

      }, {
        value: '8092',
        label: '鞋和皮革修理'

      }, {
        value: '8093',
        label: '家具和相关物品修理'

      }, {
        value: '8099',
        label: '其他未列明日用产品修理业'

      }]
    }]
  }, {
    value: '81',
    label: '其他服务业',
    children: [{
      value: '811',
      label: '清洁服务',
      children: [{
        value: '8111',
        label: '建筑物清洁服务'

      }, {
        value: '8119',
        label: '其他清洁服务'

      }]
    }, {
      value: '819',
      label: '其他未列明服务业',
      children: [{
        value: '8190',
        label: '其他未列明服务业'

      }]
    }]
  }]
}, {
  value: 'P',
  label: '教育',
  children: [{
    value: '82',
    label: '教育',
    children: [{
      value: '821',
      label: '学前教育',
      children: [{
        value: '8210',
        label: '学前教育'

      }]
    }, {
      value: '822',
      label: '初等教育',
      children: [{
        value: '8221',
        label: '普通小学教育'

      }, {
        value: '8222',
        label: '成人小学教育'

      }]
    }, {
      value: '823',
      label: '中等教育',
      children: [{
        value: '8231',
        label: '普通初中教育'

      }, {
        value: '8232',
        label: '职业初中教育'

      }, {
        value: '8233',
        label: '成人初中教育'

      }, {
        value: '8234',
        label: '普通高中教育'

      }, {
        value: '8235',
        label: '成人高中教育'

      }, {
        value: '8236',
        label: '中等职业学校教育'

      }]
    }, {
      value: '824',
      label: '高等教育',
      children: [{
        value: '8241',
        label: '普通高等教育'

      }, {
        value: '8242',
        label: '成人高等教育'

      }]
    }, {
      value: '825',
      label: '特殊教育',
      children: [{
        value: '8250',
        label: '特殊教育'

      }]
    }, {
      value: '829',
      label: '技能培训、教育辅助及其他教育',
      children: [{
        value: '8291',
        label: '职业技能培训'

      }, {
        value: '8292',
        label: '体校及体育培训'

      }, {
        value: '8293',
        label: '文化艺术培训'

      }, {
        value: '8294',
        label: '教育辅助服务'

      }, {
        value: '8299',
        label: '其他未列明教育'

      }]
    }]
  }]
}, {
  value: 'Q',
  label: '卫生和社会工作',
  children: [{
    value: '83',
    label: '卫生',
    children: [{
      value: '831',
      label: '医院',
      children: [{
        value: '8311',
        label: '综合医院'

      }, {
        value: '8312',
        label: '中医医院'

      }, {
        value: '8313',
        label: '中西医结合医院'

      }, {
        value: '8314',
        label: '民族医院'

      }, {
        value: '8315',
        label: '专科医院'

      }, {
        value: '8316',
        label: '疗养院'

      }]
    }, {
      value: '832',
      label: '社区医疗与卫生院',
      children: [{
        value: '8321',
        label: '社区卫生服务中心（站）'

      }, {
        value: '8322',
        label: '街道卫生院'

      }, {
        value: '8323',
        label: '乡镇卫生院'

      }]
    }, {
      value: '833',
      label: '门诊部（所）',
      children: [{
        value: '8330',
        label: '门诊部（所）'

      }]
    }, {
      value: '834',
      label: '计划生育技术服务活动',
      children: [{
        value: '8340',
        label: '计划生育技术服务活动'

      }]
    }, {
      value: '835',
      label: '妇幼保健院（所、站）',
      children: [{
        value: '8350',
        label: '妇幼保健院（所、站）'

      }]
    }, {
      value: '836',
      label: '专科疾病防治院（所、站）',
      children: [{
        value: '8360',
        label: '专科疾病防治院（所、站）'

      }]
    }, {
      value: '837',
      label: '疾病预防控制中心',
      children: [{
        value: '8370',
        label: '疾病预防控制中心'

      }]
    }, {
      value: '839',
      label: '其他卫生活动',
      children: [{
        value: '8390',
        label: '其他卫生活动'

      }]
    }]
  }, {
    value: '84',
    label: '社会工作',
    children: [{
      value: '841',
      label: '提供住宿社会工作',
      children: [{
        value: '8411',
        label: '干部休养所'

      }, {
        value: '8412',
        label: '护理机构服务'

      }, {
        value: '8413',
        label: '精神康复服务'

      }, {
        value: '8414',
        label: '老年人、残疾人养护服务'

      }, {
        value: '8415',
        label: '孤残儿童收养和庇护服务'

      }, {
        value: '8419',
        label: '其他提供住宿社会救助'

      }]
    }, {
      value: '842',
      label: '不提供住宿社会工作',
      children: [{
        value: '8421',
        label: '社会看护与帮助服务'

      }, {
        value: '8429',
        label: '其他不提供住宿社会工作'

      }]
    }]
  }]
}, {
  value: 'R',
  label: '文化、体育和娱乐业',
  children: [{
    value: '85',
    label: '新闻和出版业',
    children: [{
      value: '851',
      label: '新闻业',
      children: [{
        value: '8510',
        label: '新闻业'

      }]
    }, {
      value: '852',
      label: '出版业',
      children: [{
        value: '8521',
        label: '图书出版'

      }, {
        value: '8522',
        label: '报纸出版'

      }, {
        value: '8523',
        label: '期刊出版'

      }, {
        value: '8524',
        label: '音像制品出版'

      }, {
        value: '8525',
        label: '电子出版物出版'

      }, {
        value: '8529',
        label: '其他出版业'

      }]
    }]
  }, {
    value: '86',
    label: '广播、电视、电影和影视录音制作业',
    children: [{
      value: '861',
      label: '广播',
      children: [{
        value: '8610',
        label: '广播'

      }]
    }, {
      value: '862',
      label: '电视',
      children: [{
        value: '8620',
        label: '电视'

      }]
    }, {
      value: '863',
      label: '电影和影视节目制作',
      children: [{
        value: '8630',
        label: '电影和影视节目制作'

      }]
    }, {
      value: '864',
      label: '电影和影视节目发行',
      children: [{
        value: '8640',
        label: '电影和影视节目发行'

      }]
    }, {
      value: '865',
      label: '电影放映',
      children: [{
        value: '8650',
        label: '电影放映'

      }]
    }, {
      value: '866',
      label: '录音制作',
      children: [{
        value: '8660',
        label: '录音制作'

      }]
    }]
  }, {
    value: '87',
    label: '文化艺术业',
    children: [{
      value: '871',
      label: '文艺创作与表演',
      children: [{
        value: '8710',
        label: '文艺创作与表演'

      }]
    }, {
      value: '872',
      label: '艺术表演场馆',
      children: [{
        value: '8720',
        label: '艺术表演场馆'

      }]
    }, {
      value: '873',
      label: '图书馆与档案馆',
      children: [{
        value: '8731',
        label: '图书馆'

      }, {
        value: '8732',
        label: '档案馆'

      }]
    }, {
      value: '874',
      label: '文物及非物质文化遗产保护',
      children: [{
        value: '8740',
        label: '文物及非物质文化遗产保护'

      }]
    }, {
      value: '875',
      label: '博物馆',
      children: [{
        value: '8750',
        label: '博物馆'

      }]
    }, {
      value: '876',
      label: '烈士陵园、纪念馆',
      children: [{
        value: '8760',
        label: '烈士陵园、纪念馆'

      }]
    }, {
      value: '877',
      label: '群众文化活动',
      children: [{
        value: '8770',
        label: '群众文化活动'

      }]
    }, {
      value: '879',
      label: '其他文化艺术业',
      children: [{
        value: '8790',
        label: '其他文化艺术业'

      }]
    }]
  }, {
    value: '88',
    label: '体育',
    children: [{
      value: '881',
      label: '体育组织',
      children: [{
        value: '8810',
        label: '体育组织'

      }]
    }, {
      value: '882',
      label: '体育场馆',
      children: [{
        value: '8820',
        label: '体育场馆'

      }]
    }, {
      value: '883',
      label: '休闲健身活动',
      children: [{
        value: '8830',
        label: '休闲健身活动'

      }]
    }, {
      value: '889',
      label: '其他体育',
      children: [{
        value: '8890',
        label: '其他体育'

      }]
    }]
  }, {
    value: '89',
    label: '娱乐业',
    children: [{
      value: '891',
      label: '室内娱乐活动',
      children: [{
        value: '8911',
        label: '歌舞厅娱乐活动'

      }, {
        value: '8912',
        label: '电子游艺厅娱乐活动'

      }, {
        value: '8913',
        label: '网吧活动'

      }, {
        value: '8919',
        label: '其他室内娱乐活动'

      }]
    }, {
      value: '892',
      label: '游乐园',
      children: [{
        value: '8920',
        label: '游乐园'

      }]
    }, {
      value: '893',
      label: '彩票活动',
      children: [{
        value: '8930',
        label: '彩票活动'

      }]
    }, {
      value: '894',
      label: '文化、娱乐、体育经纪代理',
      children: [{
        value: '8941',
        label: '文化娱乐经纪人'

      }, {
        value: '8942',
        label: '体育经纪人'

      }, {
        value: '8949',
        label: '其他文化艺术经纪代理'

      }]
    }, {
      value: '899',
      label: '其他娱乐业',
      children: [{
        value: '8990',
        label: '其他娱乐业'

      }]
    }]
  }]
}, {
  value: 'S',
  label: '公共管理、社会保障和社会组织',
  children: [{
    value: '90',
    label: '中国共产党机关',
    children: [{
      value: '900',
      label: '中国共产党机关',
      children: [{
        value: '9000',
        label: '中国共产党机关'

      }]
    }]
  }, {
    value: '91',
    label: '国家机构',
    children: [{
      value: '911',
      label: '国家权力机构',
      children: [{
        value: '9110',
        label: '国家权力机构'

      }]
    }, {
      value: '912',
      label: '国家行政机构',
      children: [{
        value: '9121',
        label: '综合事务管理机构'

      }, {
        value: '9122',
        label: '对外事务管理机构'

      }, {
        value: '9123',
        label: '公共安全管理机构'

      }, {
        value: '9124',
        label: '社会事务管理机构'

      }, {
        value: '9125',
        label: '经济事务管理机构'

      }, {
        value: '9126',
        label: '行政监督检查机构'

      }]
    }, {
      value: '913',
      label: '人民法院和人民检察院',
      children: [{
        value: '9131',
        label: '人民法院'

      }, {
        value: '9132',
        label: '人民检察院'

      }]
    }, {
      value: '919',
      label: '其他国家机构',
      children: [{
        value: '9190',
        label: '其他国家机构'

      }]
    }]
  }, {
    value: '92',
    label: '人民政协、民主党派',
    children: [{
      value: '921',
      label: '人民政协',
      children: [{
        value: '9210',
        label: '人民政协'

      }]
    }, {
      value: '922',
      label: '民主党派',
      children: [{
        value: '9220',
        label: '民主党派'

      }]
    }]
  }, {
    value: '93',
    label: '社会保障',
    children: [{
      value: '930',
      label: '社会保障',
      children: [{
        value: '9300',
        label: '社会保障'

      }]
    }]
  }, {
    value: '94',
    label: '群众团体、社会团体和其他成员组织',
    children: [{
      value: '941',
      label: '群众团体',
      children: [{
        value: '9411',
        label: '工会'

      }, {
        value: '9412',
        label: '妇联'

      }, {
        value: '9413',
        label: '共青团'

      }, {
        value: '9419',
        label: '其他群众团体'

      }]
    }, {
      value: '942',
      label: '社会团体',
      children: [{
        value: '9421',
        label: '专业性团体'

      }, {
        value: '9422',
        label: '行业性团体'

      }, {
        value: '9429',
        label: '其他社会团体'

      }]
    }, {
      value: '943',
      label: '基金会',
      children: [{
        value: '9430',
        label: '基金会'

      }]
    }, {
      value: '944',
      label: '宗教组织',
      children: [{
        value: '9440',
        label: '宗教组织'

      }]
    }]
  }, {
    value: '95',
    label: '基层群众自治组织',
    children: [{
      value: '951',
      label: '社区自治组织',
      children: [{
        value: '9510',
        label: '社区自治组织'

      }]
    }, {
      value: '952',
      label: '村民自治组织',
      children: [{
        value: '9520',
        label: '村民自治组织'

      }]
    }]
  }]
}, {
  value: 'T',
  label: '国际组织',
  children: [{
    value: '96',
    label: '国际组织',
    children: [{
      value: '960',
      label: '国际组织',
      children: [{
        value: '9600',
        label: '国际组织'

      }]
    }]
  }]
}];

exports.default = industry;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var city = [{
  value: 110000, label: '北京市', children: [{
    value: 110100, label: '市辖区', children: [{ value: 110101, label: '东城区' }, { value: 110102, label: '西城区' }, { value: 110105, label: '朝阳区' }, { value: 110106, label: '丰台区' }, { value: 110107, label: '石景山区' }, { value: 110108, label: '海淀区' }, { value: 110109, label: '门头沟区' }, { value: 110111, label: '房山区' }, { value: 110112, label: '通州区' }, { value: 110113, label: '顺义区' }, { value: 110114, label: '昌平区' }, { value: 110115, label: '大兴区' }, { value: 110116, label: '怀柔区' }, { value: 110117, label: '平谷区' }, { value: 110118, label: '密云区' }, { value: 110119, label: '延庆区' }]
  }]
}, {
  value: 120000, label: '天津市', children: [{
    value: 120100, label: '市辖区', children: [{ value: 120101, label: '和平区' }, { value: 120102, label: '河东区' }, { value: 120103, label: '河西区' }, { value: 120104, label: '南开区' }, { value: 120105, label: '河北区' }, { value: 120106, label: '红桥区' }, { value: 120110, label: '东丽区' }, { value: 120111, label: '西青区' }, { value: 120112, label: '津南区' }, { value: 120113, label: '北辰区' }, { value: 120114, label: '武清区' }, { value: 120115, label: '宝坻区' }, { value: 120116, label: '滨海新区' }, { value: 120117, label: '宁河区' }, { value: 120118, label: '静海区' }, { value: 120119, label: '蓟州区' }]
  }]
}, {
  value: 130000, label: '河北省', children: [{
    value: 130100, label: '石家庄市', children: [{ value: 130101, label: '市辖区' }, { value: 130102, label: '长安区' }, { value: 130104, label: '桥西区' }, { value: 130105, label: '新华区' }, { value: 130107, label: '井陉矿区' }, { value: 130108, label: '裕华区' }, { value: 130109, label: '藁城区' }, { value: 130110, label: '鹿泉区' }, { value: 130111, label: '栾城区' }, { value: 130121, label: '井陉县' }, { value: 130123, label: '正定县' }, { value: 130125, label: '行唐县' }, { value: 130126, label: '灵寿县' }, { value: 130127, label: '高邑县' }, { value: 130128, label: '深泽县' }, { value: 130129, label: '赞皇县' }, { value: 130130, label: '无极县' }, { value: 130131, label: '平山县' }, { value: 130132, label: '元氏县' }, { value: 130133, label: '赵县' }, { value: 130183, label: '晋州市' }, { value: 130184, label: '新乐市' }]
  }, {
    value: 130200, label: '唐山市', children: [{ value: 130201, label: '市辖区' }, { value: 130202, label: '路南区' }, { value: 130203, label: '路北区' }, { value: 130204, label: '古冶区' }, { value: 130205, label: '开平区' }, { value: 130207, label: '丰南区' }, { value: 130208, label: '丰润区' }, { value: 130209, label: '曹妃甸区' }, { value: 130223, label: '滦县' }, { value: 130224, label: '滦南县' }, { value: 130225, label: '乐亭县' }, { value: 130227, label: '迁西县' }, { value: 130229, label: '玉田县' }, { value: 130281, label: '遵化市' }, { value: 130283, label: '迁安市' }]
  }, {
    value: 130300, label: '秦皇岛市', children: [{ value: 130301, label: '市辖区' }, { value: 130302, label: '海港区' }, { value: 130303, label: '山海关区' }, { value: 130304, label: '北戴河区' }, { value: 130306, label: '抚宁区' }, { value: 130321, label: '青龙满族自治县' }, { value: 130322, label: '昌黎县' }, { value: 130324, label: '卢龙县' }]
  }, {
    value: 130400, label: '邯郸市', children: [{ value: 130401, label: '市辖区' }, { value: 130402, label: '邯山区' }, { value: 130403, label: '丛台区' }, { value: 130404, label: '复兴区' }, { value: 130406, label: '峰峰矿区' }, { value: 130421, label: '邯郸县' }, { value: 130423, label: '临漳县' }, { value: 130424, label: '成安县' }, { value: 130425, label: '大名县' }, { value: 130426, label: '涉县' }, { value: 130427, label: '磁县' }, { value: 130428, label: '肥乡县' }, { value: 130429, label: '永年县' }, { value: 130430, label: '邱县' }, { value: 130431, label: '鸡泽县' }, { value: 130432, label: '广平县' }, { value: 130433, label: '馆陶县' }, { value: 130434, label: '魏县' }, { value: 130435, label: '曲周县' }, { value: 130481, label: '武安市' }]
  }, {
    value: 130500, label: '邢台市', children: [{ value: 130501, label: '市辖区' }, { value: 130502, label: '桥东区' }, { value: 130503, label: '桥西区' }, { value: 130521, label: '邢台县' }, { value: 130522, label: '临城县' }, { value: 130523, label: '内丘县' }, { value: 130524, label: '柏乡县' }, { value: 130525, label: '隆尧县' }, { value: 130526, label: '任县' }, { value: 130527, label: '南和县' }, { value: 130528, label: '宁晋县' }, { value: 130529, label: '巨鹿县' }, { value: 130530, label: '新河县' }, { value: 130531, label: '广宗县' }, { value: 130532, label: '平乡县' }, { value: 130533, label: '威县' }, { value: 130534, label: '清河县' }, { value: 130535, label: '临西县' }, { value: 130581, label: '南宫市' }, { value: 130582, label: '沙河市' }]
  }, {
    value: 130600, label: '保定市', children: [{ value: 130601, label: '市辖区' }, { value: 130602, label: '竞秀区' }, { value: 130606, label: '莲池区' }, { value: 130607, label: '满城区' }, { value: 130608, label: '清苑区' }, { value: 130609, label: '徐水区' }, { value: 130623, label: '涞水县' }, { value: 130624, label: '阜平县' }, { value: 130626, label: '定兴县' }, { value: 130627, label: '唐县' }, { value: 130628, label: '高阳县' }, { value: 130629, label: '容城县' }, { value: 130630, label: '涞源县' }, { value: 130631, label: '望都县' }, { value: 130632, label: '安新县' }, { value: 130633, label: '易县' }, { value: 130634, label: '曲阳县' }, { value: 130635, label: '蠡县' }, { value: 130636, label: '顺平县' }, { value: 130637, label: '博野县' }, { value: 130638, label: '雄县' }, { value: 130681, label: '涿州市' }, { value: 130683, label: '安国市' }, { value: 130684, label: '高碑店市' }]
  }, {
    value: 130700, label: '张家口市', children: [{ value: 130701, label: '市辖区' }, { value: 130702, label: '桥东区' }, { value: 130703, label: '桥西区' }, { value: 130705, label: '宣化区' }, { value: 130706, label: '下花园区' }, { value: 130708, label: '万全区' }, { value: 130709, label: '崇礼区' }, { value: 130722, label: '张北县' }, { value: 130723, label: '康保县' }, { value: 130724, label: '沽源县' }, { value: 130725, label: '尚义县' }, { value: 130726, label: '蔚县' }, { value: 130727, label: '阳原县' }, { value: 130728, label: '怀安县' }, { value: 130730, label: '怀来县' }, { value: 130731, label: '涿鹿县' }, { value: 130732, label: '赤城县' }]
  }, {
    value: 130800, label: '承德市', children: [{ value: 130801, label: '市辖区' }, { value: 130802, label: '双桥区' }, { value: 130803, label: '双滦区' }, { value: 130804, label: '鹰手营子矿区' }, { value: 130821, label: '承德县' }, { value: 130822, label: '兴隆县' }, { value: 130823, label: '平泉县' }, { value: 130824, label: '滦平县' }, { value: 130825, label: '隆化县' }, { value: 130826, label: '丰宁满族自治县' }, { value: 130827, label: '宽城满族自治县' }, { value: 130828, label: '围场满族蒙古族自治县' }]
  }, {
    value: 130900, label: '沧州市', children: [{ value: 130901, label: '市辖区' }, { value: 130902, label: '新华区' }, { value: 130903, label: '运河区' }, { value: 130921, label: '沧县' }, { value: 130922, label: '青县' }, { value: 130923, label: '东光县' }, { value: 130924, label: '海兴县' }, { value: 130925, label: '盐山县' }, { value: 130926, label: '肃宁县' }, { value: 130927, label: '南皮县' }, { value: 130928, label: '吴桥县' }, { value: 130929, label: '献县' }, { value: 130930, label: '孟村回族自治县' }, { value: 130981, label: '泊头市' }, { value: 130982, label: '任丘市' }, { value: 130983, label: '黄骅市' }, { value: 130984, label: '河间市' }]
  }, {
    value: 131000, label: '廊坊市', children: [{ value: 131001, label: '市辖区' }, { value: 131002, label: '安次区' }, { value: 131003, label: '广阳区' }, { value: 131022, label: '固安县' }, { value: 131023, label: '永清县' }, { value: 131024, label: '香河县' }, { value: 131025, label: '大城县' }, { value: 131026, label: '文安县' }, { value: 131028, label: '大厂回族自治县' }, { value: 131081, label: '霸州市' }, { value: 131082, label: '三河市' }]
  }, {
    value: 131100, label: '衡水市', children: [{ value: 131101, label: '市辖区' }, { value: 131102, label: '桃城区' }, { value: 131103, label: '冀州区' }, { value: 131121, label: '枣强县' }, { value: 131122, label: '武邑县' }, { value: 131123, label: '武强县' }, { value: 131124, label: '饶阳县' }, { value: 131125, label: '安平县' }, { value: 131126, label: '故城县' }, { value: 131127, label: '景县' }, { value: 131128, label: '阜城县' }, { value: 131182, label: '深州市' }]
  }, {
    value: 139000, label: '省直辖县级行政区划', children: [{ value: 139001, label: '定州市' }, { value: 139002, label: '辛集市' }]
  }]
}, {
  value: 140000, label: '山西省', children: [{
    value: 140100, label: '太原市', children: [{ value: 140101, label: '市辖区' }, { value: 140105, label: '小店区' }, { value: 140106, label: '迎泽区' }, { value: 140107, label: '杏花岭区' }, { value: 140108, label: '尖草坪区' }, { value: 140109, label: '万柏林区' }, { value: 140110, label: '晋源区' }, { value: 140121, label: '清徐县' }, { value: 140122, label: '阳曲县' }, { value: 140123, label: '娄烦县' }, { value: 140181, label: '古交市' }]
  }, {
    value: 140200, label: '大同市', children: [{ value: 140201, label: '市辖区' }, { value: 140202, label: '城区' }, { value: 140203, label: '矿区' }, { value: 140211, label: '南郊区' }, { value: 140212, label: '新荣区' }, { value: 140221, label: '阳高县' }, { value: 140222, label: '天镇县' }, { value: 140223, label: '广灵县' }, { value: 140224, label: '灵丘县' }, { value: 140225, label: '浑源县' }, { value: 140226, label: '左云县' }, { value: 140227, label: '大同县' }]
  }, {
    value: 140300, label: '阳泉市', children: [{ value: 140301, label: '市辖区' }, { value: 140302, label: '城区' }, { value: 140303, label: '矿区' }, { value: 140311, label: '郊区' }, { value: 140321, label: '平定县' }, { value: 140322, label: '盂县' }]
  }, {
    value: 140400, label: '长治市', children: [{ value: 140401, label: '市辖区' }, { value: 140402, label: '城区' }, { value: 140411, label: '郊区' }, { value: 140421, label: '长治县' }, { value: 140423, label: '襄垣县' }, { value: 140424, label: '屯留县' }, { value: 140425, label: '平顺县' }, { value: 140426, label: '黎城县' }, { value: 140427, label: '壶关县' }, { value: 140428, label: '长子县' }, { value: 140429, label: '武乡县' }, { value: 140430, label: '沁县' }, { value: 140431, label: '沁源县' }, { value: 140481, label: '潞城市' }]
  }, {
    value: 140500, label: '晋城市', children: [{ value: 140501, label: '市辖区' }, { value: 140502, label: '城区' }, { value: 140521, label: '沁水县' }, { value: 140522, label: '阳城县' }, { value: 140524, label: '陵川县' }, { value: 140525, label: '泽州县' }, { value: 140581, label: '高平市' }]
  }, {
    value: 140600, label: '朔州市', children: [{ value: 140601, label: '市辖区' }, { value: 140602, label: '朔城区' }, { value: 140603, label: '平鲁区' }, { value: 140621, label: '山阴县' }, { value: 140622, label: '应县' }, { value: 140623, label: '右玉县' }, { value: 140624, label: '怀仁县' }]
  }, {
    value: 140700, label: '晋中市', children: [{ value: 140701, label: '市辖区' }, { value: 140702, label: '榆次区' }, { value: 140721, label: '榆社县' }, { value: 140722, label: '左权县' }, { value: 140723, label: '和顺县' }, { value: 140724, label: '昔阳县' }, { value: 140725, label: '寿阳县' }, { value: 140726, label: '太谷县' }, { value: 140727, label: '祁县' }, { value: 140728, label: '平遥县' }, { value: 140729, label: '灵石县' }, { value: 140781, label: '介休市' }]
  }, {
    value: 140800, label: '运城市', children: [{ value: 140801, label: '市辖区' }, { value: 140802, label: '盐湖区' }, { value: 140821, label: '临猗县' }, { value: 140822, label: '万荣县' }, { value: 140823, label: '闻喜县' }, { value: 140824, label: '稷山县' }, { value: 140825, label: '新绛县' }, { value: 140826, label: '绛县' }, { value: 140827, label: '垣曲县' }, { value: 140828, label: '夏县' }, { value: 140829, label: '平陆县' }, { value: 140830, label: '芮城县' }, { value: 140881, label: '永济市' }, { value: 140882, label: '河津市' }]
  }, {
    value: 140900, label: '忻州市', children: [{ value: 140901, label: '市辖区' }, { value: 140902, label: '忻府区' }, { value: 140921, label: '定襄县' }, { value: 140922, label: '五台县' }, { value: 140923, label: '代县' }, { value: 140924, label: '繁峙县' }, { value: 140925, label: '宁武县' }, { value: 140926, label: '静乐县' }, { value: 140927, label: '神池县' }, { value: 140928, label: '五寨县' }, { value: 140929, label: '岢岚县' }, { value: 140930, label: '河曲县' }, { value: 140931, label: '保德县' }, { value: 140932, label: '偏关县' }, { value: 140981, label: '原平市' }]
  }, {
    value: 141000, label: '临汾市', children: [{ value: 141001, label: '市辖区' }, { value: 141002, label: '尧都区' }, { value: 141021, label: '曲沃县' }, { value: 141022, label: '翼城县' }, { value: 141023, label: '襄汾县' }, { value: 141024, label: '洪洞县' }, { value: 141025, label: '古县' }, { value: 141026, label: '安泽县' }, { value: 141027, label: '浮山县' }, { value: 141028, label: '吉县' }, { value: 141029, label: '乡宁县' }, { value: 141030, label: '大宁县' }, { value: 141031, label: '隰县' }, { value: 141032, label: '永和县' }, { value: 141033, label: '蒲县' }, { value: 141034, label: '汾西县' }, { value: 141081, label: '侯马市' }, { value: 141082, label: '霍州市' }]
  }, {
    value: 141100, label: '吕梁市', children: [{ value: 141101, label: '市辖区' }, { value: 141102, label: '离石区' }, { value: 141121, label: '文水县' }, { value: 141122, label: '交城县' }, { value: 141123, label: '兴县' }, { value: 141124, label: '临县' }, { value: 141125, label: '柳林县' }, { value: 141126, label: '石楼县' }, { value: 141127, label: '岚县' }, { value: 141128, label: '方山县' }, { value: 141129, label: '中阳县' }, { value: 141130, label: '交口县' }, { value: 141181, label: '孝义市' }, { value: 141182, label: '汾阳市' }]
  }]
}, {
  value: 150000, label: '内蒙', children: [{
    value: 150100, label: '呼和浩特市', children: [{ value: 150101, label: '市辖区' }, { value: 150102, label: '新城区' }, { value: 150103, label: '回民区' }, { value: 150104, label: '玉泉区' }, { value: 150105, label: '赛罕区' }, { value: 150121, label: '土默特左旗' }, { value: 150122, label: '托克托县' }, { value: 150123, label: '和林格尔县' }, { value: 150124, label: '清水河县' }, { value: 150125, label: '武川县' }]
  }, {
    value: 150200, label: '包头市', children: [{ value: 150201, label: '市辖区' }, { value: 150202, label: '东河区' }, { value: 150203, label: '昆都仑区' }, { value: 150204, label: '青山区' }, { value: 150205, label: '石拐区' }, { value: 150206, label: '白云鄂博矿区' }, { value: 150207, label: '九原区' }, { value: 150221, label: '土默特右旗' }, { value: 150222, label: '固阳县' }, { value: 150223, label: '达尔罕茂明安联合旗' }]
  }, {
    value: 150300, label: '乌海市', children: [{ value: 150301, label: '市辖区' }, { value: 150302, label: '海勃湾区' }, { value: 150303, label: '海南区' }, { value: 150304, label: '乌达区' }]
  }, {
    value: 150400, label: '赤峰市', children: [{ value: 150401, label: '市辖区' }, { value: 150402, label: '红山区' }, { value: 150403, label: '元宝山区' }, { value: 150404, label: '松山区' }, { value: 150421, label: '阿鲁科尔沁旗' }, { value: 150422, label: '巴林左旗' }, { value: 150423, label: '巴林右旗' }, { value: 150424, label: '林西县' }, { value: 150425, label: '克什克腾旗' }, { value: 150426, label: '翁牛特旗' }, { value: 150428, label: '喀喇沁旗' }, { value: 150429, label: '宁城县' }, { value: 150430, label: '敖汉旗' }]
  }, {
    value: 150500, label: '通辽市', children: [{ value: 150501, label: '市辖区' }, { value: 150502, label: '科尔沁区' }, { value: 150521, label: '科尔沁左翼中旗' }, { value: 150522, label: '科尔沁左翼后旗' }, { value: 150523, label: '开鲁县' }, { value: 150524, label: '库伦旗' }, { value: 150525, label: '奈曼旗' }, { value: 150526, label: '扎鲁特旗' }, { value: 150581, label: '霍林郭勒市' }]
  }, {
    value: 150600, label: '鄂尔多斯市', children: [{ value: 150601, label: '市辖区' }, { value: 150602, label: '东胜区' }, { value: 150603, label: '康巴什区' }, { value: 150621, label: '达拉特旗' }, { value: 150622, label: '准格尔旗' }, { value: 150623, label: '鄂托克前旗' }, { value: 150624, label: '鄂托克旗' }, { value: 150625, label: '杭锦旗' }, { value: 150626, label: '乌审旗' }, { value: 150627, label: '伊金霍洛旗' }]
  }, {
    value: 150700, label: '呼伦贝尔市', children: [{ value: 150701, label: '市辖区' }, { value: 150702, label: '海拉尔区' }, { value: 150703, label: '扎赉诺尔区' }, { value: 150721, label: '阿荣旗' }, { value: 150722, label: '莫力达瓦达斡尔族自治旗' }, { value: 150723, label: '鄂伦春自治旗' }, { value: 150724, label: '鄂温克族自治旗' }, { value: 150725, label: '陈巴尔虎旗' }, { value: 150726, label: '新巴尔虎左旗' }, { value: 150727, label: '新巴尔虎右旗' }, { value: 150781, label: '满洲里市' }, { value: 150782, label: '牙克石市' }, { value: 150783, label: '扎兰屯市' }, { value: 150784, label: '额尔古纳市' }, { value: 150785, label: '根河市' }]
  }, {
    value: 150800, label: '巴彦淖尔市', children: [{ value: 150801, label: '市辖区' }, { value: 150802, label: '临河区' }, { value: 150821, label: '五原县' }, { value: 150822, label: '磴口县' }, { value: 150823, label: '乌拉特前旗' }, { value: 150824, label: '乌拉特中旗' }, { value: 150825, label: '乌拉特后旗' }, { value: 150826, label: '杭锦后旗' }]
  }, {
    value: 150900, label: '乌兰察布市', children: [{ value: 150901, label: '市辖区' }, { value: 150902, label: '集宁区' }, { value: 150921, label: '卓资县' }, { value: 150922, label: '化德县' }, { value: 150923, label: '商都县' }, { value: 150924, label: '兴和县' }, { value: 150925, label: '凉城县' }, { value: 150926, label: '察哈尔右翼前旗' }, { value: 150927, label: '察哈尔右翼中旗' }, { value: 150928, label: '察哈尔右翼后旗' }, { value: 150929, label: '四子王旗' }, { value: 150981, label: '丰镇市' }]
  }, {
    value: 152200, label: '兴安盟', children: [{ value: 152201, label: '乌兰浩特市' }, { value: 152202, label: '阿尔山市' }, { value: 152221, label: '科尔沁右翼前旗' }, { value: 152222, label: '科尔沁右翼中旗' }, { value: 152223, label: '扎赉特旗' }, { value: 152224, label: '突泉县' }]
  }, {
    value: 152500, label: '锡林郭勒盟', children: [{ value: 152501, label: '二连浩特市' }, { value: 152502, label: '锡林浩特市' }, { value: 152522, label: '阿巴嘎旗' }, { value: 152523, label: '苏尼特左旗' }, { value: 152524, label: '苏尼特右旗' }, { value: 152525, label: '东乌珠穆沁旗' }, { value: 152526, label: '西乌珠穆沁旗' }, { value: 152527, label: '太仆寺旗' }, { value: 152528, label: '镶黄旗' }, { value: 152529, label: '正镶白旗' }, { value: 152530, label: '正蓝旗' }, { value: 152531, label: '多伦县' }]
  }, {
    value: 152900, label: '阿拉善盟', children: [{ value: 152921, label: '阿拉善左旗' }, { value: 152922, label: '阿拉善右旗' }, { value: 152923, label: '额济纳旗' }]
  }]
}, {
  value: 210000, label: '辽宁省', children: [{
    value: 210100, label: '沈阳市', children: [{ value: 210101, label: '市辖区' }, { value: 210102, label: '和平区' }, { value: 210103, label: '沈河区' }, { value: 210104, label: '大东区' }, { value: 210105, label: '皇姑区' }, { value: 210106, label: '铁西区' }, { value: 210111, label: '苏家屯区' }, { value: 210112, label: '浑南区' }, { value: 210113, label: '沈北新区' }, { value: 210114, label: '于洪区' }, { value: 210115, label: '辽中区' }, { value: 210123, label: '康平县' }, { value: 210124, label: '法库县' }, { value: 210181, label: '新民市' }]
  }, {
    value: 210200, label: '大连市', children: [{ value: 210201, label: '市辖区' }, { value: 210202, label: '中山区' }, { value: 210203, label: '西岗区' }, { value: 210204, label: '沙河口区' }, { value: 210211, label: '甘井子区' }, { value: 210212, label: '旅顺口区' }, { value: 210213, label: '金州区' }, { value: 210214, label: '普兰店区' }, { value: 210224, label: '长海县' }, { value: 210281, label: '瓦房店市' }, { value: 210283, label: '庄河市' }]
  }, {
    value: 210300, label: '鞍山市', children: [{ value: 210301, label: '市辖区' }, { value: 210302, label: '铁东区' }, { value: 210303, label: '铁西区' }, { value: 210304, label: '立山区' }, { value: 210311, label: '千山区' }, { value: 210321, label: '台安县' }, { value: 210323, label: '岫岩满族自治县' }, { value: 210381, label: '海城市' }]
  }, {
    value: 210400, label: '抚顺市', children: [{ value: 210401, label: '市辖区' }, { value: 210402, label: '新抚区' }, { value: 210403, label: '东洲区' }, { value: 210404, label: '望花区' }, { value: 210411, label: '顺城区' }, { value: 210421, label: '抚顺县' }, { value: 210422, label: '新宾满族自治县' }, { value: 210423, label: '清原满族自治县' }]
  }, {
    value: 210500, label: '本溪市', children: [{ value: 210501, label: '市辖区' }, { value: 210502, label: '平山区' }, { value: 210503, label: '溪湖区' }, { value: 210504, label: '明山区' }, { value: 210505, label: '南芬区' }, { value: 210521, label: '本溪满族自治县' }, { value: 210522, label: '桓仁满族自治县' }]
  }, {
    value: 210600, label: '丹东市', children: [{ value: 210601, label: '市辖区' }, { value: 210602, label: '元宝区' }, { value: 210603, label: '振兴区' }, { value: 210604, label: '振安区' }, { value: 210624, label: '宽甸满族自治县' }, { value: 210681, label: '东港市' }, { value: 210682, label: '凤城市' }]
  }, {
    value: 210700, label: '锦州市', children: [{ value: 210701, label: '市辖区' }, { value: 210702, label: '古塔区' }, { value: 210703, label: '凌河区' }, { value: 210711, label: '太和区' }, { value: 210726, label: '黑山县' }, { value: 210727, label: '义县' }, { value: 210781, label: '凌海市' }, { value: 210782, label: '北镇市' }]
  }, {
    value: 210800, label: '营口市', children: [{ value: 210801, label: '市辖区' }, { value: 210802, label: '站前区' }, { value: 210803, label: '西市区' }, { value: 210804, label: '鲅鱼圈区' }, { value: 210811, label: '老边区' }, { value: 210881, label: '盖州市' }, { value: 210882, label: '大石桥市' }]
  }, {
    value: 210900, label: '阜新市', children: [{ value: 210901, label: '市辖区' }, { value: 210902, label: '海州区' }, { value: 210903, label: '新邱区' }, { value: 210904, label: '太平区' }, { value: 210905, label: '清河门区' }, { value: 210911, label: '细河区' }, { value: 210921, label: '阜新蒙古族自治县' }, { value: 210922, label: '彰武县' }]
  }, {
    value: 211000, label: '辽阳市', children: [{ value: 211001, label: '市辖区' }, { value: 211002, label: '白塔区' }, { value: 211003, label: '文圣区' }, { value: 211004, label: '宏伟区' }, { value: 211005, label: '弓长岭区' }, { value: 211011, label: '太子河区' }, { value: 211021, label: '辽阳县' }, { value: 211081, label: '灯塔市' }]
  }, {
    value: 211100, label: '盘锦市', children: [{ value: 211101, label: '市辖区' }, { value: 211102, label: '双台子区' }, { value: 211103, label: '兴隆台区' }, { value: 211104, label: '大洼区' }, { value: 211122, label: '盘山县' }]
  }, {
    value: 211200, label: '铁岭市', children: [{ value: 211201, label: '市辖区' }, { value: 211202, label: '银州区' }, { value: 211204, label: '清河区' }, { value: 211221, label: '铁岭县' }, { value: 211223, label: '西丰县' }, { value: 211224, label: '昌图县' }, { value: 211281, label: '调兵山市' }, { value: 211282, label: '开原市' }]
  }, {
    value: 211300, label: '朝阳市', children: [{ value: 211301, label: '市辖区' }, { value: 211302, label: '双塔区' }, { value: 211303, label: '龙城区' }, { value: 211321, label: '朝阳县' }, { value: 211322, label: '建平县' }, { value: 211324, label: '喀喇沁左翼蒙古族自治县' }, { value: 211381, label: '北票市' }, { value: 211382, label: '凌源市' }]
  }, {
    value: 211400, label: '葫芦岛市', children: [{ value: 211401, label: '市辖区' }, { value: 211402, label: '连山区' }, { value: 211403, label: '龙港区' }, { value: 211404, label: '南票区' }, { value: 211421, label: '绥中县' }, { value: 211422, label: '建昌县' }, { value: 211481, label: '兴城市' }]
  }]
}, {
  value: 220000, label: '吉林省', children: [{
    value: 220100, label: '长春市', children: [{ value: 220101, label: '市辖区' }, { value: 220102, label: '南关区' }, { value: 220103, label: '宽城区' }, { value: 220104, label: '朝阳区' }, { value: 220105, label: '二道区' }, { value: 220106, label: '绿园区' }, { value: 220112, label: '双阳区' }, { value: 220113, label: '九台区' }, { value: 220122, label: '农安县' }, { value: 220182, label: '榆树市' }, { value: 220183, label: '德惠市' }]
  }, {
    value: 220200, label: '吉林市', children: [{ value: 220201, label: '市辖区' }, { value: 220202, label: '昌邑区' }, { value: 220203, label: '龙潭区' }, { value: 220204, label: '船营区' }, { value: 220211, label: '丰满区' }, { value: 220221, label: '永吉县' }, { value: 220281, label: '蛟河市' }, { value: 220282, label: '桦甸市' }, { value: 220283, label: '舒兰市' }, { value: 220284, label: '磐石市' }]
  }, {
    value: 220300, label: '四平市', children: [{ value: 220301, label: '市辖区' }, { value: 220302, label: '铁西区' }, { value: 220303, label: '铁东区' }, { value: 220322, label: '梨树县' }, { value: 220323, label: '伊通满族自治县' }, { value: 220381, label: '公主岭市' }, { value: 220382, label: '双辽市' }]
  }, {
    value: 220400, label: '辽源市', children: [{ value: 220401, label: '市辖区' }, { value: 220402, label: '龙山区' }, { value: 220403, label: '西安区' }, { value: 220421, label: '东丰县' }, { value: 220422, label: '东辽县' }]
  }, {
    value: 220500, label: '通化市', children: [{ value: 220501, label: '市辖区' }, { value: 220502, label: '东昌区' }, { value: 220503, label: '二道江区' }, { value: 220521, label: '通化县' }, { value: 220523, label: '辉南县' }, { value: 220524, label: '柳河县' }, { value: 220581, label: '梅河口市' }, { value: 220582, label: '集安市' }]
  }, {
    value: 220600, label: '白山市', children: [{ value: 220601, label: '市辖区' }, { value: 220602, label: '浑江区' }, { value: 220605, label: '江源区' }, { value: 220621, label: '抚松县' }, { value: 220622, label: '靖宇县' }, { value: 220623, label: '长白朝鲜族自治县' }, { value: 220681, label: '临江市' }]
  }, {
    value: 220700, label: '松原市', children: [{ value: 220701, label: '市辖区' }, { value: 220702, label: '宁江区' }, { value: 220721, label: '前郭尔罗斯蒙古族自治县' }, { value: 220722, label: '长岭县' }, { value: 220723, label: '乾安县' }, { value: 220781, label: '扶余市' }]
  }, {
    value: 220800, label: '白城市', children: [{ value: 220801, label: '市辖区' }, { value: 220802, label: '洮北区' }, { value: 220821, label: '镇赉县' }, { value: 220822, label: '通榆县' }, { value: 220881, label: '洮南市' }, { value: 220882, label: '大安市' }]
  }, {
    value: 222400, label: '延边朝鲜族自治州', children: [{ value: 222401, label: '延吉市' }, { value: 222402, label: '图们市' }, { value: 222403, label: '敦化市' }, { value: 222404, label: '珲春市' }, { value: 222405, label: '龙井市' }, { value: 222406, label: '和龙市' }, { value: 222424, label: '汪清县' }, { value: 222426, label: '安图县' }]
  }]
}, {
  value: 230000, label: '黑龙江省', children: [{
    value: 230100, label: '哈尔滨市', children: [{ value: 230101, label: '市辖区' }, { value: 230102, label: '道里区' }, { value: 230103, label: '南岗区' }, { value: 230104, label: '道外区' }, { value: 230108, label: '平房区' }, { value: 230109, label: '松北区' }, { value: 230110, label: '香坊区' }, { value: 230111, label: '呼兰区' }, { value: 230112, label: '阿城区' }, { value: 230113, label: '双城区' }, { value: 230123, label: '依兰县' }, { value: 230124, label: '方正县' }, { value: 230125, label: '宾县' }, { value: 230126, label: '巴彦县' }, { value: 230127, label: '木兰县' }, { value: 230128, label: '通河县' }, { value: 230129, label: '延寿县' }, { value: 230183, label: '尚志市' }, { value: 230184, label: '五常市' }]
  }, {
    value: 230200, label: '齐齐哈尔市', children: [{ value: 230201, label: '市辖区' }, { value: 230202, label: '龙沙区' }, { value: 230203, label: '建华区' }, { value: 230204, label: '铁锋区' }, { value: 230205, label: '昂昂溪区' }, { value: 230206, label: '富拉尔基区' }, { value: 230207, label: '碾子山区' }, { value: 230208, label: '梅里斯达斡尔族区' }, { value: 230221, label: '龙江县' }, { value: 230223, label: '依安县' }, { value: 230224, label: '泰来县' }, { value: 230225, label: '甘南县' }, { value: 230227, label: '富裕县' }, { value: 230229, label: '克山县' }, { value: 230230, label: '克东县' }, { value: 230231, label: '拜泉县' }, { value: 230281, label: '讷河市' }]
  }, {
    value: 230300, label: '鸡西市', children: [{ value: 230301, label: '市辖区' }, { value: 230302, label: '鸡冠区' }, { value: 230303, label: '恒山区' }, { value: 230304, label: '滴道区' }, { value: 230305, label: '梨树区' }, { value: 230306, label: '城子河区' }, { value: 230307, label: '麻山区' }, { value: 230321, label: '鸡东县' }, { value: 230381, label: '虎林市' }, { value: 230382, label: '密山市' }]
  }, {
    value: 230400, label: '鹤岗市', children: [{ value: 230401, label: '市辖区' }, { value: 230402, label: '向阳区' }, { value: 230403, label: '工农区' }, { value: 230404, label: '南山区' }, { value: 230405, label: '兴安区' }, { value: 230406, label: '东山区' }, { value: 230407, label: '兴山区' }, { value: 230421, label: '萝北县' }, { value: 230422, label: '绥滨县' }]
  }, {
    value: 230500, label: '双鸭山市', children: [{ value: 230501, label: '市辖区' }, { value: 230502, label: '尖山区' }, { value: 230503, label: '岭东区' }, { value: 230505, label: '四方台区' }, { value: 230506, label: '宝山区' }, { value: 230521, label: '集贤县' }, { value: 230522, label: '友谊县' }, { value: 230523, label: '宝清县' }, { value: 230524, label: '饶河县' }]
  }, {
    value: 230600, label: '大庆市', children: [{ value: 230601, label: '市辖区' }, { value: 230602, label: '萨尔图区' }, { value: 230603, label: '龙凤区' }, { value: 230604, label: '让胡路区' }, { value: 230605, label: '红岗区' }, { value: 230606, label: '大同区' }, { value: 230621, label: '肇州县' }, { value: 230622, label: '肇源县' }, { value: 230623, label: '林甸县' }, { value: 230624, label: '杜尔伯特蒙古族自治县' }]
  }, {
    value: 230700, label: '伊春市', children: [{ value: 230701, label: '市辖区' }, { value: 230702, label: '伊春区' }, { value: 230703, label: '南岔区' }, { value: 230704, label: '友好区' }, { value: 230705, label: '西林区' }, { value: 230706, label: '翠峦区' }, { value: 230707, label: '新青区' }, { value: 230708, label: '美溪区' }, { value: 230709, label: '金山屯区' }, { value: 230710, label: '五营区' }, { value: 230711, label: '乌马河区' }, { value: 230712, label: '汤旺河区' }, { value: 230713, label: '带岭区' }, { value: 230714, label: '乌伊岭区' }, { value: 230715, label: '红星区' }, { value: 230716, label: '上甘岭区' }, { value: 230722, label: '嘉荫县' }, { value: 230781, label: '铁力市' }]
  }, {
    value: 230800, label: '佳木斯市', children: [{ value: 230801, label: '市辖区' }, { value: 230803, label: '向阳区' }, { value: 230804, label: '前进区' }, { value: 230805, label: '东风区' }, { value: 230811, label: '郊区' }, { value: 230822, label: '桦南县' }, { value: 230826, label: '桦川县' }, { value: 230828, label: '汤原县' }, { value: 230881, label: '同江市' }, { value: 230882, label: '富锦市' }, { value: 230883, label: '抚远市' }]
  }, {
    value: 230900, label: '七台河市', children: [{ value: 230901, label: '市辖区' }, { value: 230902, label: '新兴区' }, { value: 230903, label: '桃山区' }, { value: 230904, label: '茄子河区' }, { value: 230921, label: '勃利县' }]
  }, {
    value: 231000, label: '牡丹江市', children: [{ value: 231001, label: '市辖区' }, { value: 231002, label: '东安区' }, { value: 231003, label: '阳明区' }, { value: 231004, label: '爱民区' }, { value: 231005, label: '西安区' }, { value: 231025, label: '林口县' }, { value: 231081, label: '绥芬河市' }, { value: 231083, label: '海林市' }, { value: 231084, label: '宁安市' }, { value: 231085, label: '穆棱市' }, { value: 231086, label: '东宁市' }]
  }, {
    value: 231100, label: '黑河市', children: [{ value: 231101, label: '市辖区' }, { value: 231102, label: '爱辉区' }, { value: 231121, label: '嫩江县' }, { value: 231123, label: '逊克县' }, { value: 231124, label: '孙吴县' }, { value: 231181, label: '北安市' }, { value: 231182, label: '五大连池市' }]
  }, {
    value: 231200, label: '绥化市', children: [{ value: 231201, label: '市辖区' }, { value: 231202, label: '北林区' }, { value: 231221, label: '望奎县' }, { value: 231222, label: '兰西县' }, { value: 231223, label: '青冈县' }, { value: 231224, label: '庆安县' }, { value: 231225, label: '明水县' }, { value: 231226, label: '绥棱县' }, { value: 231281, label: '安达市' }, { value: 231282, label: '肇东市' }, { value: 231283, label: '海伦市' }]
  }, {
    value: 232700, label: '大兴安岭地区', children: [{ value: 232721, label: '呼玛县' }, { value: 232722, label: '塔河县' }, { value: 232723, label: '漠河县' }]
  }]
}, {
  value: 310000, label: '上海市', children: [{
    value: 310100, label: '市辖区', children: [{ value: 310101, label: '黄浦区' }, { value: 310104, label: '徐汇区' }, { value: 310105, label: '长宁区' }, { value: 310106, label: '静安区' }, { value: 310107, label: '普陀区' }, { value: 310109, label: '虹口区' }, { value: 310110, label: '杨浦区' }, { value: 310112, label: '闵行区' }, { value: 310113, label: '宝山区' }, { value: 310114, label: '嘉定区' }, { value: 310115, label: '浦东新区' }, { value: 310116, label: '金山区' }, { value: 310117, label: '松江区' }, { value: 310118, label: '青浦区' }, { value: 310120, label: '奉贤区' }, { value: 310151, label: '崇明区' }]
  }]
}, {
  value: 320000, label: '江苏省', children: [{
    value: 320100, label: '南京市', children: [{ value: 320101, label: '市辖区' }, { value: 320102, label: '玄武区' }, { value: 320104, label: '秦淮区' }, { value: 320105, label: '建邺区' }, { value: 320106, label: '鼓楼区' }, { value: 320111, label: '浦口区' }, { value: 320113, label: '栖霞区' }, { value: 320114, label: '雨花台区' }, { value: 320115, label: '江宁区' }, { value: 320116, label: '六合区' }, { value: 320117, label: '溧水区' }, { value: 320118, label: '高淳区' }]
  }, {
    value: 320200, label: '无锡市', children: [{ value: 320201, label: '市辖区' }, { value: 320205, label: '锡山区' }, { value: 320206, label: '惠山区' }, { value: 320211, label: '滨湖区' }, { value: 320213, label: '梁溪区' }, { value: 320214, label: '新吴区' }, { value: 320281, label: '江阴市' }, { value: 320282, label: '宜兴市' }]
  }, {
    value: 320300, label: '徐州市', children: [{ value: 320301, label: '市辖区' }, { value: 320302, label: '鼓楼区' }, { value: 320303, label: '云龙区' }, { value: 320305, label: '贾汪区' }, { value: 320311, label: '泉山区' }, { value: 320312, label: '铜山区' }, { value: 320321, label: '丰县' }, { value: 320322, label: '沛县' }, { value: 320324, label: '睢宁县' }, { value: 320381, label: '新沂市' }, { value: 320382, label: '邳州市' }]
  }, {
    value: 320400, label: '常州市', children: [{ value: 320401, label: '市辖区' }, { value: 320402, label: '天宁区' }, { value: 320404, label: '钟楼区' }, { value: 320411, label: '新北区' }, { value: 320412, label: '武进区' }, { value: 320413, label: '金坛区' }, { value: 320481, label: '溧阳市' }]
  }, {
    value: 320500, label: '苏州市', children: [{ value: 320501, label: '市辖区' }, { value: 320505, label: '虎丘区' }, { value: 320506, label: '吴中区' }, { value: 320507, label: '相城区' }, { value: 320508, label: '姑苏区' }, { value: 320509, label: '吴江区' }, { value: 320581, label: '常熟市' }, { value: 320582, label: '张家港市' }, { value: 320583, label: '昆山市' }, { value: 320585, label: '太仓市' }]
  }, {
    value: 320600, label: '南通市', children: [{ value: 320601, label: '市辖区' }, { value: 320602, label: '崇川区' }, { value: 320611, label: '港闸区' }, { value: 320612, label: '通州区' }, { value: 320621, label: '海安县' }, { value: 320623, label: '如东县' }, { value: 320681, label: '启东市' }, { value: 320682, label: '如皋市' }, { value: 320684, label: '海门市' }]
  }, {
    value: 320700, label: '连云港市', children: [{ value: 320701, label: '市辖区' }, { value: 320703, label: '连云区' }, { value: 320706, label: '海州区' }, { value: 320707, label: '赣榆区' }, { value: 320722, label: '东海县' }, { value: 320723, label: '灌云县' }, { value: 320724, label: '灌南县' }]
  }, {
    value: 320800, label: '淮安市', children: [{ value: 320801, label: '市辖区' }, { value: 320803, label: '淮安区' }, { value: 320804, label: '淮阴区' }, { value: 320812, label: '清江浦区' }, { value: 320813, label: '洪泽区' }, { value: 320826, label: '涟水县' }, { value: 320830, label: '盱眙县' }, { value: 320831, label: '金湖县' }]
  }, {
    value: 320900, label: '盐城市', children: [{ value: 320901, label: '市辖区' }, { value: 320902, label: '亭湖区' }, { value: 320903, label: '盐都区' }, { value: 320904, label: '大丰区' }, { value: 320921, label: '响水县' }, { value: 320922, label: '滨海县' }, { value: 320923, label: '阜宁县' }, { value: 320924, label: '射阳县' }, { value: 320925, label: '建湖县' }, { value: 320981, label: '东台市' }]
  }, {
    value: 321000, label: '扬州市', children: [{ value: 321001, label: '市辖区' }, { value: 321002, label: '广陵区' }, { value: 321003, label: '邗江区' }, { value: 321012, label: '江都区' }, { value: 321023, label: '宝应县' }, { value: 321081, label: '仪征市' }, { value: 321084, label: '高邮市' }]
  }, {
    value: 321100, label: '镇江市', children: [{ value: 321101, label: '市辖区' }, { value: 321102, label: '京口区' }, { value: 321111, label: '润州区' }, { value: 321112, label: '丹徒区' }, { value: 321181, label: '丹阳市' }, { value: 321182, label: '扬中市' }, { value: 321183, label: '句容市' }]
  }, {
    value: 321200, label: '泰州市', children: [{ value: 321201, label: '市辖区' }, { value: 321202, label: '海陵区' }, { value: 321203, label: '高港区' }, { value: 321204, label: '姜堰区' }, { value: 321281, label: '兴化市' }, { value: 321282, label: '靖江市' }, { value: 321283, label: '泰兴市' }]
  }, {
    value: 321300, label: '宿迁市', children: [{ value: 321301, label: '市辖区' }, { value: 321302, label: '宿城区' }, { value: 321311, label: '宿豫区' }, { value: 321322, label: '沭阳县' }, { value: 321323, label: '泗阳县' }, { value: 321324, label: '泗洪县' }]
  }]
}, {
  value: 330000, label: '浙江省', children: [{
    value: 330100, label: '杭州市', children: [{ value: 330101, label: '市辖区' }, { value: 330102, label: '上城区' }, { value: 330103, label: '下城区' }, { value: 330104, label: '江干区' }, { value: 330105, label: '拱墅区' }, { value: 330106, label: '西湖区' }, { value: 330108, label: '滨江区' }, { value: 330109, label: '萧山区' }, { value: 330110, label: '余杭区' }, { value: 330111, label: '富阳区' }, { value: 330122, label: '桐庐县' }, { value: 330127, label: '淳安县' }, { value: 330182, label: '建德市' }, { value: 330185, label: '临安市' }]
  }, {
    value: 330200, label: '宁波市', children: [{ value: 330201, label: '市辖区' }, { value: 330203, label: '海曙区' }, { value: 330204, label: '江东区' }, { value: 330205, label: '江北区' }, { value: 330206, label: '北仑区' }, { value: 330211, label: '镇海区' }, { value: 330212, label: '鄞州区' }, { value: 330225, label: '象山县' }, { value: 330226, label: '宁海县' }, { value: 330281, label: '余姚市' }, { value: 330282, label: '慈溪市' }, { value: 330283, label: '奉化市' }]
  }, {
    value: 330300, label: '温州市', children: [{ value: 330301, label: '市辖区' }, { value: 330302, label: '鹿城区' }, { value: 330303, label: '龙湾区' }, { value: 330304, label: '瓯海区' }, { value: 330305, label: '洞头区' }, { value: 330324, label: '永嘉县' }, { value: 330326, label: '平阳县' }, { value: 330327, label: '苍南县' }, { value: 330328, label: '文成县' }, { value: 330329, label: '泰顺县' }, { value: 330381, label: '瑞安市' }, { value: 330382, label: '乐清市' }]
  }, {
    value: 330400, label: '嘉兴市', children: [{ value: 330401, label: '市辖区' }, { value: 330402, label: '南湖区' }, { value: 330411, label: '秀洲区' }, { value: 330421, label: '嘉善县' }, { value: 330424, label: '海盐县' }, { value: 330481, label: '海宁市' }, { value: 330482, label: '平湖市' }, { value: 330483, label: '桐乡市' }]
  }, {
    value: 330500, label: '湖州市', children: [{ value: 330501, label: '市辖区' }, { value: 330502, label: '吴兴区' }, { value: 330503, label: '南浔区' }, { value: 330521, label: '德清县' }, { value: 330522, label: '长兴县' }, { value: 330523, label: '安吉县' }]
  }, {
    value: 330600, label: '绍兴市', children: [{ value: 330601, label: '市辖区' }, { value: 330602, label: '越城区' }, { value: 330603, label: '柯桥区' }, { value: 330604, label: '上虞区' }, { value: 330624, label: '新昌县' }, { value: 330681, label: '诸暨市' }, { value: 330683, label: '嵊州市' }]
  }, {
    value: 330700, label: '金华市', children: [{ value: 330701, label: '市辖区' }, { value: 330702, label: '婺城区' }, { value: 330703, label: '金东区' }, { value: 330723, label: '武义县' }, { value: 330726, label: '浦江县' }, { value: 330727, label: '磐安县' }, { value: 330781, label: '兰溪市' }, { value: 330782, label: '义乌市' }, { value: 330783, label: '东阳市' }, { value: 330784, label: '永康市' }]
  }, {
    value: 330800, label: '衢州市', children: [{ value: 330801, label: '市辖区' }, { value: 330802, label: '柯城区' }, { value: 330803, label: '衢江区' }, { value: 330822, label: '常山县' }, { value: 330824, label: '开化县' }, { value: 330825, label: '龙游县' }, { value: 330881, label: '江山市' }]
  }, {
    value: 330900, label: '舟山市', children: [{ value: 330901, label: '市辖区' }, { value: 330902, label: '定海区' }, { value: 330903, label: '普陀区' }, { value: 330921, label: '岱山县' }, { value: 330922, label: '嵊泗县' }]
  }, {
    value: 331000, label: '台州市', children: [{ value: 331001, label: '市辖区' }, { value: 331002, label: '椒江区' }, { value: 331003, label: '黄岩区' }, { value: 331004, label: '路桥区' }, { value: 331021, label: '玉环县' }, { value: 331022, label: '三门县' }, { value: 331023, label: '天台县' }, { value: 331024, label: '仙居县' }, { value: 331081, label: '温岭市' }, { value: 331082, label: '临海市' }]
  }, {
    value: 331100, label: '丽水市', children: [{ value: 331101, label: '市辖区' }, { value: 331102, label: '莲都区' }, { value: 331121, label: '青田县' }, { value: 331122, label: '缙云县' }, { value: 331123, label: '遂昌县' }, { value: 331124, label: '松阳县' }, { value: 331125, label: '云和县' }, { value: 331126, label: '庆元县' }, { value: 331127, label: '景宁畲族自治县' }, { value: 331181, label: '龙泉市' }]
  }]
}, {
  value: 340000, label: '安徽省', children: [{
    value: 340100, label: '合肥市', children: [{ value: 340101, label: '市辖区' }, { value: 340102, label: '瑶海区' }, { value: 340103, label: '庐阳区' }, { value: 340104, label: '蜀山区' }, { value: 340111, label: '包河区' }, { value: 340121, label: '长丰县' }, { value: 340122, label: '肥东县' }, { value: 340123, label: '肥西县' }, { value: 340124, label: '庐江县' }, { value: 340181, label: '巢湖市' }]
  }, {
    value: 340200, label: '芜湖市', children: [{ value: 340201, label: '市辖区' }, { value: 340202, label: '镜湖区' }, { value: 340203, label: '弋江区' }, { value: 340207, label: '鸠江区' }, { value: 340208, label: '三山区' }, { value: 340221, label: '芜湖县' }, { value: 340222, label: '繁昌县' }, { value: 340223, label: '南陵县' }, { value: 340225, label: '无为县' }]
  }, {
    value: 340300, label: '蚌埠市', children: [{ value: 340301, label: '市辖区' }, { value: 340302, label: '龙子湖区' }, { value: 340303, label: '蚌山区' }, { value: 340304, label: '禹会区' }, { value: 340311, label: '淮上区' }, { value: 340321, label: '怀远县' }, { value: 340322, label: '五河县' }, { value: 340323, label: '固镇县' }]
  }, {
    value: 340400, label: '淮南市', children: [{ value: 340401, label: '市辖区' }, { value: 340402, label: '大通区' }, { value: 340403, label: '田家庵区' }, { value: 340404, label: '谢家集区' }, { value: 340405, label: '八公山区' }, { value: 340406, label: '潘集区' }, { value: 340421, label: '凤台县' }, { value: 340422, label: '寿县' }]
  }, {
    value: 340500, label: '马鞍山市', children: [{ value: 340501, label: '市辖区' }, { value: 340503, label: '花山区' }, { value: 340504, label: '雨山区' }, { value: 340506, label: '博望区' }, { value: 340521, label: '当涂县' }, { value: 340522, label: '含山县' }, { value: 340523, label: '和县' }]
  }, {
    value: 340600, label: '淮北市', children: [{ value: 340601, label: '市辖区' }, { value: 340602, label: '杜集区' }, { value: 340603, label: '相山区' }, { value: 340604, label: '烈山区' }, { value: 340621, label: '濉溪县' }]
  }, {
    value: 340700, label: '铜陵市', children: [{ value: 340701, label: '市辖区' }, { value: 340705, label: '铜官区' }, { value: 340706, label: '义安区' }, { value: 340711, label: '郊区' }, { value: 340722, label: '枞阳县' }]
  }, {
    value: 340800, label: '安庆市', children: [{ value: 340801, label: '市辖区' }, { value: 340802, label: '迎江区' }, { value: 340803, label: '大观区' }, { value: 340811, label: '宜秀区' }, { value: 340822, label: '怀宁县' }, { value: 340824, label: '潜山县' }, { value: 340825, label: '太湖县' }, { value: 340826, label: '宿松县' }, { value: 340827, label: '望江县' }, { value: 340828, label: '岳西县' }, { value: 340881, label: '桐城市' }]
  }, {
    value: 341000, label: '黄山市', children: [{ value: 341001, label: '市辖区' }, { value: 341002, label: '屯溪区' }, { value: 341003, label: '黄山区' }, { value: 341004, label: '徽州区' }, { value: 341021, label: '歙县' }, { value: 341022, label: '休宁县' }, { value: 341023, label: '黟县' }, { value: 341024, label: '祁门县' }]
  }, {
    value: 341100, label: '滁州市', children: [{ value: 341101, label: '市辖区' }, { value: 341102, label: '琅琊区' }, { value: 341103, label: '南谯区' }, { value: 341122, label: '来安县' }, { value: 341124, label: '全椒县' }, { value: 341125, label: '定远县' }, { value: 341126, label: '凤阳县' }, { value: 341181, label: '天长市' }, { value: 341182, label: '明光市' }]
  }, {
    value: 341200, label: '阜阳市', children: [{ value: 341201, label: '市辖区' }, { value: 341202, label: '颍州区' }, { value: 341203, label: '颍东区' }, { value: 341204, label: '颍泉区' }, { value: 341221, label: '临泉县' }, { value: 341222, label: '太和县' }, { value: 341225, label: '阜南县' }, { value: 341226, label: '颍上县' }, { value: 341282, label: '界首市' }]
  }, {
    value: 341300, label: '宿州市', children: [{ value: 341301, label: '市辖区' }, { value: 341302, label: '埇桥区' }, { value: 341321, label: '砀山县' }, { value: 341322, label: '萧县' }, { value: 341323, label: '灵璧县' }, { value: 341324, label: '泗县' }]
  }, {
    value: 341500, label: '六安市', children: [{ value: 341501, label: '市辖区' }, { value: 341502, label: '金安区' }, { value: 341503, label: '裕安区' }, { value: 341504, label: '叶集区' }, { value: 341522, label: '霍邱县' }, { value: 341523, label: '舒城县' }, { value: 341524, label: '金寨县' }, { value: 341525, label: '霍山县' }]
  }, {
    value: 341600, label: '亳州市', children: [{ value: 341601, label: '市辖区' }, { value: 341602, label: '谯城区' }, { value: 341621, label: '涡阳县' }, { value: 341622, label: '蒙城县' }, { value: 341623, label: '利辛县' }]
  }, {
    value: 341700, label: '池州市', children: [{ value: 341701, label: '市辖区' }, { value: 341702, label: '贵池区' }, { value: 341721, label: '东至县' }, { value: 341722, label: '石台县' }, { value: 341723, label: '青阳县' }]
  }, {
    value: 341800, label: '宣城市', children: [{ value: 341801, label: '市辖区' }, { value: 341802, label: '宣州区' }, { value: 341821, label: '郎溪县' }, { value: 341822, label: '广德县' }, { value: 341823, label: '泾县' }, { value: 341824, label: '绩溪县' }, { value: 341825, label: '旌德县' }, { value: 341881, label: '宁国市' }]
  }]
}, {
  value: 350000, label: '福建省', children: [{
    value: 350100, label: '福州市', children: [{ value: 350101, label: '市辖区' }, { value: 350102, label: '鼓楼区' }, { value: 350103, label: '台江区' }, { value: 350104, label: '仓山区' }, { value: 350105, label: '马尾区' }, { value: 350111, label: '晋安区' }, { value: 350121, label: '闽侯县' }, { value: 350122, label: '连江县' }, { value: 350123, label: '罗源县' }, { value: 350124, label: '闽清县' }, { value: 350125, label: '永泰县' }, { value: 350128, label: '平潭县' }, { value: 350181, label: '福清市' }, { value: 350182, label: '长乐市' }]
  }, {
    value: 350200, label: '厦门市', children: [{ value: 350201, label: '市辖区' }, { value: 350203, label: '思明区' }, { value: 350205, label: '海沧区' }, { value: 350206, label: '湖里区' }, { value: 350211, label: '集美区' }, { value: 350212, label: '同安区' }, { value: 350213, label: '翔安区' }]
  }, {
    value: 350300, label: '莆田市', children: [{ value: 350301, label: '市辖区' }, { value: 350302, label: '城厢区' }, { value: 350303, label: '涵江区' }, { value: 350304, label: '荔城区' }, { value: 350305, label: '秀屿区' }, { value: 350322, label: '仙游县' }]
  }, {
    value: 350400, label: '三明市', children: [{ value: 350401, label: '市辖区' }, { value: 350402, label: '梅列区' }, { value: 350403, label: '三元区' }, { value: 350421, label: '明溪县' }, { value: 350423, label: '清流县' }, { value: 350424, label: '宁化县' }, { value: 350425, label: '大田县' }, { value: 350426, label: '尤溪县' }, { value: 350427, label: '沙县' }, { value: 350428, label: '将乐县' }, { value: 350429, label: '泰宁县' }, { value: 350430, label: '建宁县' }, { value: 350481, label: '永安市' }]
  }, {
    value: 350500, label: '泉州市', children: [{ value: 350501, label: '市辖区' }, { value: 350502, label: '鲤城区' }, { value: 350503, label: '丰泽区' }, { value: 350504, label: '洛江区' }, { value: 350505, label: '泉港区' }, { value: 350521, label: '惠安县' }, { value: 350524, label: '安溪县' }, { value: 350525, label: '永春县' }, { value: 350526, label: '德化县' }, { value: 350527, label: '金门县' }, { value: 350581, label: '石狮市' }, { value: 350582, label: '晋江市' }, { value: 350583, label: '南安市' }]
  }, {
    value: 350600, label: '漳州市', children: [{ value: 350601, label: '市辖区' }, { value: 350602, label: '芗城区' }, { value: 350603, label: '龙文区' }, { value: 350622, label: '云霄县' }, { value: 350623, label: '漳浦县' }, { value: 350624, label: '诏安县' }, { value: 350625, label: '长泰县' }, { value: 350626, label: '东山县' }, { value: 350627, label: '南靖县' }, { value: 350628, label: '平和县' }, { value: 350629, label: '华安县' }, { value: 350681, label: '龙海市' }]
  }, {
    value: 350700, label: '南平市', children: [{ value: 350701, label: '市辖区' }, { value: 350702, label: '延平区' }, { value: 350703, label: '建阳区' }, { value: 350721, label: '顺昌县' }, { value: 350722, label: '浦城县' }, { value: 350723, label: '光泽县' }, { value: 350724, label: '松溪县' }, { value: 350725, label: '政和县' }, { value: 350781, label: '邵武市' }, { value: 350782, label: '武夷山市' }, { value: 350783, label: '建瓯市' }]
  }, {
    value: 350800, label: '龙岩市', children: [{ value: 350801, label: '市辖区' }, { value: 350802, label: '新罗区' }, { value: 350803, label: '永定区' }, { value: 350821, label: '长汀县' }, { value: 350823, label: '上杭县' }, { value: 350824, label: '武平县' }, { value: 350825, label: '连城县' }, { value: 350881, label: '漳平市' }]
  }, {
    value: 350900, label: '宁德市', children: [{ value: 350901, label: '市辖区' }, { value: 350902, label: '蕉城区' }, { value: 350921, label: '霞浦县' }, { value: 350922, label: '古田县' }, { value: 350923, label: '屏南县' }, { value: 350924, label: '寿宁县' }, { value: 350925, label: '周宁县' }, { value: 350926, label: '柘荣县' }, { value: 350981, label: '福安市' }, { value: 350982, label: '福鼎市' }]
  }]
}, {
  value: 360000, label: '江西省', children: [{
    value: 360100, label: '南昌市', children: [{ value: 360101, label: '市辖区' }, { value: 360102, label: '东湖区' }, { value: 360103, label: '西湖区' }, { value: 360104, label: '青云谱区' }, { value: 360105, label: '湾里区' }, { value: 360111, label: '青山湖区' }, { value: 360112, label: '新建区' }, { value: 360121, label: '南昌县' }, { value: 360123, label: '安义县' }, { value: 360124, label: '进贤县' }]
  }, {
    value: 360200, label: '景德镇市', children: [{ value: 360201, label: '市辖区' }, { value: 360202, label: '昌江区' }, { value: 360203, label: '珠山区' }, { value: 360222, label: '浮梁县' }, { value: 360281, label: '乐平市' }]
  }, {
    value: 360300, label: '萍乡市', children: [{ value: 360301, label: '市辖区' }, { value: 360302, label: '安源区' }, { value: 360313, label: '湘东区' }, { value: 360321, label: '莲花县' }, { value: 360322, label: '上栗县' }, { value: 360323, label: '芦溪县' }]
  }, {
    value: 360400, label: '九江市', children: [{ value: 360401, label: '市辖区' }, { value: 360402, label: '濂溪区' }, { value: 360403, label: '浔阳区' }, { value: 360421, label: '九江县' }, { value: 360423, label: '武宁县' }, { value: 360424, label: '修水县' }, { value: 360425, label: '永修县' }, { value: 360426, label: '德安县' }, { value: 360428, label: '都昌县' }, { value: 360429, label: '湖口县' }, { value: 360430, label: '彭泽县' }, { value: 360481, label: '瑞昌市' }, { value: 360482, label: '共青城市' }, { value: 360483, label: '庐山市' }]
  }, {
    value: 360500, label: '新余市', children: [{ value: 360501, label: '市辖区' }, { value: 360502, label: '渝水区' }, { value: 360521, label: '分宜县' }]
  }, {
    value: 360600, label: '鹰潭市', children: [{ value: 360601, label: '市辖区' }, { value: 360602, label: '月湖区' }, { value: 360622, label: '余江县' }, { value: 360681, label: '贵溪市' }]
  }, {
    value: 360700, label: '赣州市', children: [{ value: 360701, label: '市辖区' }, { value: 360702, label: '章贡区' }, { value: 360703, label: '南康区' }, { value: 360721, label: '赣县' }, { value: 360722, label: '信丰县' }, { value: 360723, label: '大余县' }, { value: 360724, label: '上犹县' }, { value: 360725, label: '崇义县' }, { value: 360726, label: '安远县' }, { value: 360727, label: '龙南县' }, { value: 360728, label: '定南县' }, { value: 360729, label: '全南县' }, { value: 360730, label: '宁都县' }, { value: 360731, label: '于都县' }, { value: 360732, label: '兴国县' }, { value: 360733, label: '会昌县' }, { value: 360734, label: '寻乌县' }, { value: 360735, label: '石城县' }, { value: 360781, label: '瑞金市' }]
  }, {
    value: 360800, label: '吉安市', children: [{ value: 360801, label: '市辖区' }, { value: 360802, label: '吉州区' }, { value: 360803, label: '青原区' }, { value: 360821, label: '吉安县' }, { value: 360822, label: '吉水县' }, { value: 360823, label: '峡江县' }, { value: 360824, label: '新干县' }, { value: 360825, label: '永丰县' }, { value: 360826, label: '泰和县' }, { value: 360827, label: '遂川县' }, { value: 360828, label: '万安县' }, { value: 360829, label: '安福县' }, { value: 360830, label: '永新县' }, { value: 360881, label: '井冈山市' }]
  }, {
    value: 360900, label: '宜春市', children: [{ value: 360901, label: '市辖区' }, { value: 360902, label: '袁州区' }, { value: 360921, label: '奉新县' }, { value: 360922, label: '万载县' }, { value: 360923, label: '上高县' }, { value: 360924, label: '宜丰县' }, { value: 360925, label: '靖安县' }, { value: 360926, label: '铜鼓县' }, { value: 360981, label: '丰城市' }, { value: 360982, label: '樟树市' }, { value: 360983, label: '高安市' }]
  }, {
    value: 361000, label: '抚州市', children: [{ value: 361001, label: '市辖区' }, { value: 361002, label: '临川区' }, { value: 361021, label: '南城县' }, { value: 361022, label: '黎川县' }, { value: 361023, label: '南丰县' }, { value: 361024, label: '崇仁县' }, { value: 361025, label: '乐安县' }, { value: 361026, label: '宜黄县' }, { value: 361027, label: '金溪县' }, { value: 361028, label: '资溪县' }, { value: 361029, label: '东乡县' }, { value: 361030, label: '广昌县' }]
  }, {
    value: 361100, label: '上饶市', children: [{ value: 361101, label: '市辖区' }, { value: 361102, label: '信州区' }, { value: 361103, label: '广丰区' }, { value: 361121, label: '上饶县' }, { value: 361123, label: '玉山县' }, { value: 361124, label: '铅山县' }, { value: 361125, label: '横峰县' }, { value: 361126, label: '弋阳县' }, { value: 361127, label: '余干县' }, { value: 361128, label: '鄱阳县' }, { value: 361129, label: '万年县' }, { value: 361130, label: '婺源县' }, { value: 361181, label: '德兴市' }]
  }]
}, {
  value: 370000, label: '山东省', children: [{
    value: 370100, label: '济南市', children: [{ value: 370101, label: '市辖区' }, { value: 370102, label: '历下区' }, { value: 370103, label: '市中区' }, { value: 370104, label: '槐荫区' }, { value: 370105, label: '天桥区' }, { value: 370112, label: '历城区' }, { value: 370113, label: '长清区' }, { value: 370124, label: '平阴县' }, { value: 370125, label: '济阳县' }, { value: 370126, label: '商河县' }, { value: 370181, label: '章丘市' }]
  }, {
    value: 370200, label: '青岛市', children: [{ value: 370201, label: '市辖区' }, { value: 370202, label: '市南区' }, { value: 370203, label: '市北区' }, { value: 370211, label: '黄岛区' }, { value: 370212, label: '崂山区' }, { value: 370213, label: '李沧区' }, { value: 370214, label: '城阳区' }, { value: 370281, label: '胶州市' }, { value: 370282, label: '即墨市' }, { value: 370283, label: '平度市' }, { value: 370285, label: '莱西市' }]
  }, {
    value: 370300, label: '淄博市', children: [{ value: 370301, label: '市辖区' }, { value: 370302, label: '淄川区' }, { value: 370303, label: '张店区' }, { value: 370304, label: '博山区' }, { value: 370305, label: '临淄区' }, { value: 370306, label: '周村区' }, { value: 370321, label: '桓台县' }, { value: 370322, label: '高青县' }, { value: 370323, label: '沂源县' }]
  }, {
    value: 370400, label: '枣庄市', children: [{ value: 370401, label: '市辖区' }, { value: 370402, label: '市中区' }, { value: 370403, label: '薛城区' }, { value: 370404, label: '峄城区' }, { value: 370405, label: '台儿庄区' }, { value: 370406, label: '山亭区' }, { value: 370481, label: '滕州市' }]
  }, {
    value: 370500, label: '东营市', children: [{ value: 370501, label: '市辖区' }, { value: 370502, label: '东营区' }, { value: 370503, label: '河口区' }, { value: 370505, label: '垦利区' }, { value: 370522, label: '利津县' }, { value: 370523, label: '广饶县' }]
  }, {
    value: 370600, label: '烟台市', children: [{ value: 370601, label: '市辖区' }, { value: 370602, label: '芝罘区' }, { value: 370611, label: '福山区' }, { value: 370612, label: '牟平区' }, { value: 370613, label: '莱山区' }, { value: 370634, label: '长岛县' }, { value: 370681, label: '龙口市' }, { value: 370682, label: '莱阳市' }, { value: 370683, label: '莱州市' }, { value: 370684, label: '蓬莱市' }, { value: 370685, label: '招远市' }, { value: 370686, label: '栖霞市' }, { value: 370687, label: '海阳市' }]
  }, {
    value: 370700, label: '潍坊市', children: [{ value: 370701, label: '市辖区' }, { value: 370702, label: '潍城区' }, { value: 370703, label: '寒亭区' }, { value: 370704, label: '坊子区' }, { value: 370705, label: '奎文区' }, { value: 370724, label: '临朐县' }, { value: 370725, label: '昌乐县' }, { value: 370781, label: '青州市' }, { value: 370782, label: '诸城市' }, { value: 370783, label: '寿光市' }, { value: 370784, label: '安丘市' }, { value: 370785, label: '高密市' }, { value: 370786, label: '昌邑市' }]
  }, {
    value: 370800, label: '济宁市', children: [{ value: 370801, label: '市辖区' }, { value: 370811, label: '任城区' }, { value: 370812, label: '兖州区' }, { value: 370826, label: '微山县' }, { value: 370827, label: '鱼台县' }, { value: 370828, label: '金乡县' }, { value: 370829, label: '嘉祥县' }, { value: 370830, label: '汶上县' }, { value: 370831, label: '泗水县' }, { value: 370832, label: '梁山县' }, { value: 370881, label: '曲阜市' }, { value: 370883, label: '邹城市' }]
  }, {
    value: 370900, label: '泰安市', children: [{ value: 370901, label: '市辖区' }, { value: 370902, label: '泰山区' }, { value: 370911, label: '岱岳区' }, { value: 370921, label: '宁阳县' }, { value: 370923, label: '东平县' }, { value: 370982, label: '新泰市' }, { value: 370983, label: '肥城市' }]
  }, {
    value: 371000, label: '威海市', children: [{ value: 371001, label: '市辖区' }, { value: 371002, label: '环翠区' }, { value: 371003, label: '文登区' }, { value: 371082, label: '荣成市' }, { value: 371083, label: '乳山市' }]
  }, {
    value: 371100, label: '日照市', children: [{ value: 371101, label: '市辖区' }, { value: 371102, label: '东港区' }, { value: 371103, label: '岚山区' }, { value: 371121, label: '五莲县' }, { value: 371122, label: '莒县' }]
  }, {
    value: 371200, label: '莱芜市', children: [{ value: 371201, label: '市辖区' }, { value: 371202, label: '莱城区' }, { value: 371203, label: '钢城区' }]
  }, {
    value: 371300, label: '临沂市', children: [{ value: 371301, label: '市辖区' }, { value: 371302, label: '兰山区' }, { value: 371311, label: '罗庄区' }, { value: 371312, label: '河东区' }, { value: 371321, label: '沂南县' }, { value: 371322, label: '郯城县' }, { value: 371323, label: '沂水县' }, { value: 371324, label: '兰陵县' }, { value: 371325, label: '费县' }, { value: 371326, label: '平邑县' }, { value: 371327, label: '莒南县' }, { value: 371328, label: '蒙阴县' }, { value: 371329, label: '临沭县' }]
  }, {
    value: 371400, label: '德州市', children: [{ value: 371401, label: '市辖区' }, { value: 371402, label: '德城区' }, { value: 371403, label: '陵城区' }, { value: 371422, label: '宁津县' }, { value: 371423, label: '庆云县' }, { value: 371424, label: '临邑县' }, { value: 371425, label: '齐河县' }, { value: 371426, label: '平原县' }, { value: 371427, label: '夏津县' }, { value: 371428, label: '武城县' }, { value: 371481, label: '乐陵市' }, { value: 371482, label: '禹城市' }]
  }, {
    value: 371500, label: '聊城市', children: [{ value: 371501, label: '市辖区' }, { value: 371502, label: '东昌府区' }, { value: 371521, label: '阳谷县' }, { value: 371522, label: '莘县' }, { value: 371523, label: '茌平县' }, { value: 371524, label: '东阿县' }, { value: 371525, label: '冠县' }, { value: 371526, label: '高唐县' }, { value: 371581, label: '临清市' }]
  }, {
    value: 371600, label: '滨州市', children: [{ value: 371601, label: '市辖区' }, { value: 371602, label: '滨城区' }, { value: 371603, label: '沾化区' }, { value: 371621, label: '惠民县' }, { value: 371622, label: '阳信县' }, { value: 371623, label: '无棣县' }, { value: 371625, label: '博兴县' }, { value: 371626, label: '邹平县' }]
  }, {
    value: 371700, label: '菏泽市', children: [{ value: 371701, label: '市辖区' }, { value: 371702, label: '牡丹区' }, { value: 371703, label: '定陶区' }, { value: 371721, label: '曹县' }, { value: 371722, label: '单县' }, { value: 371723, label: '成武县' }, { value: 371724, label: '巨野县' }, { value: 371725, label: '郓城县' }, { value: 371726, label: '鄄城县' }, { value: 371728, label: '东明县' }]
  }]
}, {
  value: 410000, label: '河南省', children: [{
    value: 410100, label: '郑州市', children: [{ value: 410101, label: '市辖区' }, { value: 410102, label: '中原区' }, { value: 410103, label: '二七区' }, { value: 410104, label: '管城回族区' }, { value: 410105, label: '金水区' }, { value: 410106, label: '上街区' }, { value: 410108, label: '惠济区' }, { value: 410122, label: '中牟县' }, { value: 410181, label: '巩义市' }, { value: 410182, label: '荥阳市' }, { value: 410183, label: '新密市' }, { value: 410184, label: '新郑市' }, { value: 410185, label: '登封市' }]
  }, {
    value: 410200, label: '开封市', children: [{ value: 410201, label: '市辖区' }, { value: 410202, label: '龙亭区' }, { value: 410203, label: '顺河回族区' }, { value: 410204, label: '鼓楼区' }, { value: 410205, label: '禹王台区' }, { value: 410211, label: '金明区' }, { value: 410212, label: '祥符区' }, { value: 410221, label: '杞县' }, { value: 410222, label: '通许县' }, { value: 410223, label: '尉氏县' }, { value: 410225, label: '兰考县' }]
  }, {
    value: 410300, label: '洛阳市', children: [{ value: 410301, label: '市辖区' }, { value: 410302, label: '老城区' }, { value: 410303, label: '西工区' }, { value: 410304, label: '瀍河回族区' }, { value: 410305, label: '涧西区' }, { value: 410306, label: '吉利区' }, { value: 410311, label: '洛龙区' }, { value: 410322, label: '孟津县' }, { value: 410323, label: '新安县' }, { value: 410324, label: '栾川县' }, { value: 410325, label: '嵩县' }, { value: 410326, label: '汝阳县' }, { value: 410327, label: '宜阳县' }, { value: 410328, label: '洛宁县' }, { value: 410329, label: '伊川县' }, { value: 410381, label: '偃师市' }]
  }, {
    value: 410400, label: '平顶山市', children: [{ value: 410401, label: '市辖区' }, { value: 410402, label: '新华区' }, { value: 410403, label: '卫东区' }, { value: 410404, label: '石龙区' }, { value: 410411, label: '湛河区' }, { value: 410421, label: '宝丰县' }, { value: 410422, label: '叶县' }, { value: 410423, label: '鲁山县' }, { value: 410425, label: '郏县' }, { value: 410481, label: '舞钢市' }, { value: 410482, label: '汝州市' }]
  }, {
    value: 410500, label: '安阳市', children: [{ value: 410501, label: '市辖区' }, { value: 410502, label: '文峰区' }, { value: 410503, label: '北关区' }, { value: 410505, label: '殷都区' }, { value: 410506, label: '龙安区' }, { value: 410522, label: '安阳县' }, { value: 410523, label: '汤阴县' }, { value: 410526, label: '滑县' }, { value: 410527, label: '内黄县' }, { value: 410581, label: '林州市' }]
  }, {
    value: 410600, label: '鹤壁市', children: [{ value: 410601, label: '市辖区' }, { value: 410602, label: '鹤山区' }, { value: 410603, label: '山城区' }, { value: 410611, label: '淇滨区' }, { value: 410621, label: '浚县' }, { value: 410622, label: '淇县' }]
  }, {
    value: 410700, label: '新乡市', children: [{ value: 410701, label: '市辖区' }, { value: 410702, label: '红旗区' }, { value: 410703, label: '卫滨区' }, { value: 410704, label: '凤泉区' }, { value: 410711, label: '牧野区' }, { value: 410721, label: '新乡县' }, { value: 410724, label: '获嘉县' }, { value: 410725, label: '原阳县' }, { value: 410726, label: '延津县' }, { value: 410727, label: '封丘县' }, { value: 410728, label: '长垣县' }, { value: 410781, label: '卫辉市' }, { value: 410782, label: '辉县市' }]
  }, {
    value: 410800, label: '焦作市', children: [{ value: 410801, label: '市辖区' }, { value: 410802, label: '解放区' }, { value: 410803, label: '中站区' }, { value: 410804, label: '马村区' }, { value: 410811, label: '山阳区' }, { value: 410821, label: '修武县' }, { value: 410822, label: '博爱县' }, { value: 410823, label: '武陟县' }, { value: 410825, label: '温县' }, { value: 410882, label: '沁阳市' }, { value: 410883, label: '孟州市' }]
  }, {
    value: 410900, label: '濮阳市', children: [{ value: 410901, label: '市辖区' }, { value: 410902, label: '华龙区' }, { value: 410922, label: '清丰县' }, { value: 410923, label: '南乐县' }, { value: 410926, label: '范县' }, { value: 410927, label: '台前县' }, { value: 410928, label: '濮阳县' }]
  }, {
    value: 411000, label: '许昌市', children: [{ value: 411001, label: '市辖区' }, { value: 411002, label: '魏都区' }, { value: 411023, label: '许昌县' }, { value: 411024, label: '鄢陵县' }, { value: 411025, label: '襄城县' }, { value: 411081, label: '禹州市' }, { value: 411082, label: '长葛市' }]
  }, {
    value: 411100, label: '漯河市', children: [{ value: 411101, label: '市辖区' }, { value: 411102, label: '源汇区' }, { value: 411103, label: '郾城区' }, { value: 411104, label: '召陵区' }, { value: 411121, label: '舞阳县' }, { value: 411122, label: '临颍县' }]
  }, {
    value: 411200, label: '三门峡市', children: [{ value: 411201, label: '市辖区' }, { value: 411202, label: '湖滨区' }, { value: 411203, label: '陕州区' }, { value: 411221, label: '渑池县' }, { value: 411224, label: '卢氏县' }, { value: 411281, label: '义马市' }, { value: 411282, label: '灵宝市' }]
  }, {
    value: 411300, label: '南阳市', children: [{ value: 411301, label: '市辖区' }, { value: 411302, label: '宛城区' }, { value: 411303, label: '卧龙区' }, { value: 411321, label: '南召县' }, { value: 411322, label: '方城县' }, { value: 411323, label: '西峡县' }, { value: 411324, label: '镇平县' }, { value: 411325, label: '内乡县' }, { value: 411326, label: '淅川县' }, { value: 411327, label: '社旗县' }, { value: 411328, label: '唐河县' }, { value: 411329, label: '新野县' }, { value: 411330, label: '桐柏县' }, { value: 411381, label: '邓州市' }]
  }, {
    value: 411400, label: '商丘市', children: [{ value: 411401, label: '市辖区' }, { value: 411402, label: '梁园区' }, { value: 411403, label: '睢阳区' }, { value: 411421, label: '民权县' }, { value: 411422, label: '睢县' }, { value: 411423, label: '宁陵县' }, { value: 411424, label: '柘城县' }, { value: 411425, label: '虞城县' }, { value: 411426, label: '夏邑县' }, { value: 411481, label: '永城市' }]
  }, {
    value: 411500, label: '信阳市', children: [{ value: 411501, label: '市辖区' }, { value: 411502, label: '浉河区' }, { value: 411503, label: '平桥区' }, { value: 411521, label: '罗山县' }, { value: 411522, label: '光山县' }, { value: 411523, label: '新县' }, { value: 411524, label: '商城县' }, { value: 411525, label: '固始县' }, { value: 411526, label: '潢川县' }, { value: 411527, label: '淮滨县' }, { value: 411528, label: '息县' }]
  }, {
    value: 411600, label: '周口市', children: [{ value: 411601, label: '市辖区' }, { value: 411602, label: '川汇区' }, { value: 411621, label: '扶沟县' }, { value: 411622, label: '西华县' }, { value: 411623, label: '商水县' }, { value: 411624, label: '沈丘县' }, { value: 411625, label: '郸城县' }, { value: 411626, label: '淮阳县' }, { value: 411627, label: '太康县' }, { value: 411628, label: '鹿邑县' }, { value: 411681, label: '项城市' }]
  }, {
    value: 411700, label: '驻马店市', children: [{ value: 411701, label: '市辖区' }, { value: 411702, label: '驿城区' }, { value: 411721, label: '西平县' }, { value: 411722, label: '上蔡县' }, { value: 411723, label: '平舆县' }, { value: 411724, label: '正阳县' }, { value: 411725, label: '确山县' }, { value: 411726, label: '泌阳县' }, { value: 411727, label: '汝南县' }, { value: 411728, label: '遂平县' }, { value: 411729, label: '新蔡县' }]
  }, {
    value: 419000, label: '省直辖县级行政区划', children: [{ value: 419001, label: '济源市' }]
  }]
}, {
  value: 420000, label: '湖北省', children: [{
    value: 420100, label: '武汉市', children: [{ value: 420101, label: '市辖区' }, { value: 420102, label: '江岸区' }, { value: 420103, label: '江汉区' }, { value: 420104, label: '硚口区' }, { value: 420105, label: '汉阳区' }, { value: 420106, label: '武昌区' }, { value: 420107, label: '青山区' }, { value: 420111, label: '洪山区' }, { value: 420112, label: '东西湖区' }, { value: 420113, label: '汉南区' }, { value: 420114, label: '蔡甸区' }, { value: 420115, label: '江夏区' }, { value: 420116, label: '黄陂区' }, { value: 420117, label: '新洲区' }]
  }, {
    value: 420200, label: '黄石市', children: [{ value: 420201, label: '市辖区' }, { value: 420202, label: '黄石港区' }, { value: 420203, label: '西塞山区' }, { value: 420204, label: '下陆区' }, { value: 420205, label: '铁山区' }, { value: 420222, label: '阳新县' }, { value: 420281, label: '大冶市' }]
  }, {
    value: 420300, label: '十堰市', children: [{ value: 420301, label: '市辖区' }, { value: 420302, label: '茅箭区' }, { value: 420303, label: '张湾区' }, { value: 420304, label: '郧阳区' }, { value: 420322, label: '郧西县' }, { value: 420323, label: '竹山县' }, { value: 420324, label: '竹溪县' }, { value: 420325, label: '房县' }, { value: 420381, label: '丹江口市' }]
  }, {
    value: 420500, label: '宜昌市', children: [{ value: 420501, label: '市辖区' }, { value: 420502, label: '西陵区' }, { value: 420503, label: '伍家岗区' }, { value: 420504, label: '点军区' }, { value: 420505, label: '猇亭区' }, { value: 420506, label: '夷陵区' }, { value: 420525, label: '远安县' }, { value: 420526, label: '兴山县' }, { value: 420527, label: '秭归县' }, { value: 420528, label: '长阳土家族自治县' }, { value: 420529, label: '五峰土家族自治县' }, { value: 420581, label: '宜都市' }, { value: 420582, label: '当阳市' }, { value: 420583, label: '枝江市' }]
  }, {
    value: 420600, label: '襄阳市', children: [{ value: 420601, label: '市辖区' }, { value: 420602, label: '襄城区' }, { value: 420606, label: '樊城区' }, { value: 420607, label: '襄州区' }, { value: 420624, label: '南漳县' }, { value: 420625, label: '谷城县' }, { value: 420626, label: '保康县' }, { value: 420682, label: '老河口市' }, { value: 420683, label: '枣阳市' }, { value: 420684, label: '宜城市' }]
  }, {
    value: 420700, label: '鄂州市', children: [{ value: 420701, label: '市辖区' }, { value: 420702, label: '梁子湖区' }, { value: 420703, label: '华容区' }, { value: 420704, label: '鄂城区' }]
  }, {
    value: 420800, label: '荆门市', children: [{ value: 420801, label: '市辖区' }, { value: 420802, label: '东宝区' }, { value: 420804, label: '掇刀区' }, { value: 420821, label: '京山县' }, { value: 420822, label: '沙洋县' }, { value: 420881, label: '钟祥市' }]
  }, {
    value: 420900, label: '孝感市', children: [{ value: 420901, label: '市辖区' }, { value: 420902, label: '孝南区' }, { value: 420921, label: '孝昌县' }, { value: 420922, label: '大悟县' }, { value: 420923, label: '云梦县' }, { value: 420981, label: '应城市' }, { value: 420982, label: '安陆市' }, { value: 420984, label: '汉川市' }]
  }, {
    value: 421000, label: '荆州市', children: [{ value: 421001, label: '市辖区' }, { value: 421002, label: '沙市区' }, { value: 421003, label: '荆州区' }, { value: 421022, label: '公安县' }, { value: 421023, label: '监利县' }, { value: 421024, label: '江陵县' }, { value: 421081, label: '石首市' }, { value: 421083, label: '洪湖市' }, { value: 421087, label: '松滋市' }]
  }, {
    value: 421100, label: '黄冈市', children: [{ value: 421101, label: '市辖区' }, { value: 421102, label: '黄州区' }, { value: 421121, label: '团风县' }, { value: 421122, label: '红安县' }, { value: 421123, label: '罗田县' }, { value: 421124, label: '英山县' }, { value: 421125, label: '浠水县' }, { value: 421126, label: '蕲春县' }, { value: 421127, label: '黄梅县' }, { value: 421181, label: '麻城市' }, { value: 421182, label: '武穴市' }]
  }, {
    value: 421200, label: '咸宁市', children: [{ value: 421201, label: '市辖区' }, { value: 421202, label: '咸安区' }, { value: 421221, label: '嘉鱼县' }, { value: 421222, label: '通城县' }, { value: 421223, label: '崇阳县' }, { value: 421224, label: '通山县' }, { value: 421281, label: '赤壁市' }]
  }, {
    value: 421300, label: '随州市', children: [{ value: 421301, label: '市辖区' }, { value: 421303, label: '曾都区' }, { value: 421321, label: '随县' }, { value: 421381, label: '广水市' }]
  }, {
    value: 422800, label: '恩施土家族苗族自治州', children: [{ value: 422801, label: '恩施市' }, { value: 422802, label: '利川市' }, { value: 422822, label: '建始县' }, { value: 422823, label: '巴东县' }, { value: 422825, label: '宣恩县' }, { value: 422826, label: '咸丰县' }, { value: 422827, label: '来凤县' }, { value: 422828, label: '鹤峰县' }]
  }, {
    value: 429000, label: '省直辖县级行政区划', children: [{ value: 429004, label: '仙桃市' }, { value: 429005, label: '潜江市' }, { value: 429006, label: '天门市' }, { value: 429021, label: '神农架林区' }]
  }]
}, {
  value: 430000, label: '湖南省', children: [{
    value: 430100, label: '长沙市', children: [{ value: 430101, label: '市辖区' }, { value: 430102, label: '芙蓉区' }, { value: 430103, label: '天心区' }, { value: 430104, label: '岳麓区' }, { value: 430105, label: '开福区' }, { value: 430111, label: '雨花区' }, { value: 430112, label: '望城区' }, { value: 430121, label: '长沙县' }, { value: 430124, label: '宁乡县' }, { value: 430181, label: '浏阳市' }]
  }, {
    value: 430200, label: '株洲市', children: [{ value: 430201, label: '市辖区' }, { value: 430202, label: '荷塘区' }, { value: 430203, label: '芦淞区' }, { value: 430204, label: '石峰区' }, { value: 430211, label: '天元区' }, { value: 430221, label: '株洲县' }, { value: 430223, label: '攸县' }, { value: 430224, label: '茶陵县' }, { value: 430225, label: '炎陵县' }, { value: 430281, label: '醴陵市' }]
  }, {
    value: 430300, label: '湘潭市', children: [{ value: 430301, label: '市辖区' }, { value: 430302, label: '雨湖区' }, { value: 430304, label: '岳塘区' }, { value: 430321, label: '湘潭县' }, { value: 430381, label: '湘乡市' }, { value: 430382, label: '韶山市' }]
  }, {
    value: 430400, label: '衡阳市', children: [{ value: 430401, label: '市辖区' }, { value: 430405, label: '珠晖区' }, { value: 430406, label: '雁峰区' }, { value: 430407, label: '石鼓区' }, { value: 430408, label: '蒸湘区' }, { value: 430412, label: '南岳区' }, { value: 430421, label: '衡阳县' }, { value: 430422, label: '衡南县' }, { value: 430423, label: '衡山县' }, { value: 430424, label: '衡东县' }, { value: 430426, label: '祁东县' }, { value: 430481, label: '耒阳市' }, { value: 430482, label: '常宁市' }]
  }, {
    value: 430500, label: '邵阳市', children: [{ value: 430501, label: '市辖区' }, { value: 430502, label: '双清区' }, { value: 430503, label: '大祥区' }, { value: 430511, label: '北塔区' }, { value: 430521, label: '邵东县' }, { value: 430522, label: '新邵县' }, { value: 430523, label: '邵阳县' }, { value: 430524, label: '隆回县' }, { value: 430525, label: '洞口县' }, { value: 430527, label: '绥宁县' }, { value: 430528, label: '新宁县' }, { value: 430529, label: '城步苗族自治县' }, { value: 430581, label: '武冈市' }]
  }, {
    value: 430600, label: '岳阳市', children: [{ value: 430601, label: '市辖区' }, { value: 430602, label: '岳阳楼区' }, { value: 430603, label: '云溪区' }, { value: 430611, label: '君山区' }, { value: 430621, label: '岳阳县' }, { value: 430623, label: '华容县' }, { value: 430624, label: '湘阴县' }, { value: 430626, label: '平江县' }, { value: 430681, label: '汨罗市' }, { value: 430682, label: '临湘市' }]
  }, {
    value: 430700, label: '常德市', children: [{ value: 430701, label: '市辖区' }, { value: 430702, label: '武陵区' }, { value: 430703, label: '鼎城区' }, { value: 430721, label: '安乡县' }, { value: 430722, label: '汉寿县' }, { value: 430723, label: '澧县' }, { value: 430724, label: '临澧县' }, { value: 430725, label: '桃源县' }, { value: 430726, label: '石门县' }, { value: 430781, label: '津市市' }]
  }, {
    value: 430800, label: '张家界市', children: [{ value: 430801, label: '市辖区' }, { value: 430802, label: '永定区' }, { value: 430811, label: '武陵源区' }, { value: 430821, label: '慈利县' }, { value: 430822, label: '桑植县' }]
  }, {
    value: 430900, label: '益阳市', children: [{ value: 430901, label: '市辖区' }, { value: 430902, label: '资阳区' }, { value: 430903, label: '赫山区' }, { value: 430921, label: '南县' }, { value: 430922, label: '桃江县' }, { value: 430923, label: '安化县' }, { value: 430981, label: '沅江市' }]
  }, {
    value: 431000, label: '郴州市', children: [{ value: 431001, label: '市辖区' }, { value: 431002, label: '北湖区' }, { value: 431003, label: '苏仙区' }, { value: 431021, label: '桂阳县' }, { value: 431022, label: '宜章县' }, { value: 431023, label: '永兴县' }, { value: 431024, label: '嘉禾县' }, { value: 431025, label: '临武县' }, { value: 431026, label: '汝城县' }, { value: 431027, label: '桂东县' }, { value: 431028, label: '安仁县' }, { value: 431081, label: '资兴市' }]
  }, {
    value: 431100, label: '永州市', children: [{ value: 431101, label: '市辖区' }, { value: 431102, label: '零陵区' }, { value: 431103, label: '冷水滩区' }, { value: 431121, label: '祁阳县' }, { value: 431122, label: '东安县' }, { value: 431123, label: '双牌县' }, { value: 431124, label: '道县' }, { value: 431125, label: '江永县' }, { value: 431126, label: '宁远县' }, { value: 431127, label: '蓝山县' }, { value: 431128, label: '新田县' }, { value: 431129, label: '江华瑶族自治县' }]
  }, {
    value: 431200, label: '怀化市', children: [{ value: 431201, label: '市辖区' }, { value: 431202, label: '鹤城区' }, { value: 431221, label: '中方县' }, { value: 431222, label: '沅陵县' }, { value: 431223, label: '辰溪县' }, { value: 431224, label: '溆浦县' }, { value: 431225, label: '会同县' }, { value: 431226, label: '麻阳苗族自治县' }, { value: 431227, label: '新晃侗族自治县' }, { value: 431228, label: '芷江侗族自治县' }, { value: 431229, label: '靖州苗族侗族自治县' }, { value: 431230, label: '通道侗族自治县' }, { value: 431281, label: '洪江市' }]
  }, {
    value: 431300, label: '娄底市', children: [{ value: 431301, label: '市辖区' }, { value: 431302, label: '娄星区' }, { value: 431321, label: '双峰县' }, { value: 431322, label: '新化县' }, { value: 431381, label: '冷水江市' }, { value: 431382, label: '涟源市' }]
  }, {
    value: 433100, label: '湘西土家族苗族自治州', children: [{ value: 433101, label: '吉首市' }, { value: 433122, label: '泸溪县' }, { value: 433123, label: '凤凰县' }, { value: 433124, label: '花垣县' }, { value: 433125, label: '保靖县' }, { value: 433126, label: '古丈县' }, { value: 433127, label: '永顺县' }, { value: 433130, label: '龙山县' }]
  }]
}, {
  value: 440000, label: '广东省', children: [{
    value: 440100, label: '广州市', children: [{ value: 440101, label: '市辖区' }, { value: 440103, label: '荔湾区' }, { value: 440104, label: '越秀区' }, { value: 440105, label: '海珠区' }, { value: 440106, label: '天河区' }, { value: 440111, label: '白云区' }, { value: 440112, label: '黄埔区' }, { value: 440113, label: '番禺区' }, { value: 440114, label: '花都区' }, { value: 440115, label: '南沙区' }, { value: 440117, label: '从化区' }, { value: 440118, label: '增城区' }]
  }, {
    value: 440200, label: '韶关市', children: [{ value: 440201, label: '市辖区' }, { value: 440203, label: '武江区' }, { value: 440204, label: '浈江区' }, { value: 440205, label: '曲江区' }, { value: 440222, label: '始兴县' }, { value: 440224, label: '仁化县' }, { value: 440229, label: '翁源县' }, { value: 440232, label: '乳源瑶族自治县' }, { value: 440233, label: '新丰县' }, { value: 440281, label: '乐昌市' }, { value: 440282, label: '南雄市' }]
  }, {
    value: 440300, label: '深圳市', children: [{ value: 440301, label: '市辖区' }, { value: 440303, label: '罗湖区' }, { value: 440304, label: '福田区' }, { value: 440305, label: '南山区' }, { value: 440306, label: '宝安区' }, { value: 440307, label: '龙岗区' }, { value: 440308, label: '盐田区' }]
  }, {
    value: 440400, label: '珠海市', children: [{ value: 440401, label: '市辖区' }, { value: 440402, label: '香洲区' }, { value: 440403, label: '斗门区' }, { value: 440404, label: '金湾区' }]
  }, {
    value: 440500, label: '汕头市', children: [{ value: 440501, label: '市辖区' }, { value: 440507, label: '龙湖区' }, { value: 440511, label: '金平区' }, { value: 440512, label: '濠江区' }, { value: 440513, label: '潮阳区' }, { value: 440514, label: '潮南区' }, { value: 440515, label: '澄海区' }, { value: 440523, label: '南澳县' }]
  }, {
    value: 440600, label: '佛山市', children: [{ value: 440601, label: '市辖区' }, { value: 440604, label: '禅城区' }, { value: 440605, label: '南海区' }, { value: 440606, label: '顺德区' }, { value: 440607, label: '三水区' }, { value: 440608, label: '高明区' }]
  }, {
    value: 440700, label: '江门市', children: [{ value: 440701, label: '市辖区' }, { value: 440703, label: '蓬江区' }, { value: 440704, label: '江海区' }, { value: 440705, label: '新会区' }, { value: 440781, label: '台山市' }, { value: 440783, label: '开平市' }, { value: 440784, label: '鹤山市' }, { value: 440785, label: '恩平市' }]
  }, {
    value: 440800, label: '湛江市', children: [{ value: 440801, label: '市辖区' }, { value: 440802, label: '赤坎区' }, { value: 440803, label: '霞山区' }, { value: 440804, label: '坡头区' }, { value: 440811, label: '麻章区' }, { value: 440823, label: '遂溪县' }, { value: 440825, label: '徐闻县' }, { value: 440881, label: '廉江市' }, { value: 440882, label: '雷州市' }, { value: 440883, label: '吴川市' }]
  }, {
    value: 440900, label: '茂名市', children: [{ value: 440901, label: '市辖区' }, { value: 440902, label: '茂南区' }, { value: 440904, label: '电白区' }, { value: 440981, label: '高州市' }, { value: 440982, label: '化州市' }, { value: 440983, label: '信宜市' }]
  }, {
    value: 441200, label: '肇庆市', children: [{ value: 441201, label: '市辖区' }, { value: 441202, label: '端州区' }, { value: 441203, label: '鼎湖区' }, { value: 441204, label: '高要区' }, { value: 441223, label: '广宁县' }, { value: 441224, label: '怀集县' }, { value: 441225, label: '封开县' }, { value: 441226, label: '德庆县' }, { value: 441284, label: '四会市' }]
  }, {
    value: 441300, label: '惠州市', children: [{ value: 441301, label: '市辖区' }, { value: 441302, label: '惠城区' }, { value: 441303, label: '惠阳区' }, { value: 441322, label: '博罗县' }, { value: 441323, label: '惠东县' }, { value: 441324, label: '龙门县' }]
  }, {
    value: 441400, label: '梅州市', children: [{ value: 441401, label: '市辖区' }, { value: 441402, label: '梅江区' }, { value: 441403, label: '梅县区' }, { value: 441422, label: '大埔县' }, { value: 441423, label: '丰顺县' }, { value: 441424, label: '五华县' }, { value: 441426, label: '平远县' }, { value: 441427, label: '蕉岭县' }, { value: 441481, label: '兴宁市' }]
  }, {
    value: 441500, label: '汕尾市', children: [{ value: 441501, label: '市辖区' }, { value: 441502, label: '城区' }, { value: 441521, label: '海丰县' }, { value: 441523, label: '陆河县' }, { value: 441581, label: '陆丰市' }]
  }, {
    value: 441600, label: '河源市', children: [{ value: 441601, label: '市辖区' }, { value: 441602, label: '源城区' }, { value: 441621, label: '紫金县' }, { value: 441622, label: '龙川县' }, { value: 441623, label: '连平县' }, { value: 441624, label: '和平县' }, { value: 441625, label: '东源县' }]
  }, {
    value: 441700, label: '阳江市', children: [{ value: 441701, label: '市辖区' }, { value: 441702, label: '江城区' }, { value: 441704, label: '阳东区' }, { value: 441721, label: '阳西县' }, { value: 441781, label: '阳春市' }]
  }, {
    value: 441800, label: '清远市', children: [{ value: 441801, label: '市辖区' }, { value: 441802, label: '清城区' }, { value: 441803, label: '清新区' }, { value: 441821, label: '佛冈县' }, { value: 441823, label: '阳山县' }, { value: 441825, label: '连山壮族瑶族自治县' }, { value: 441826, label: '连南瑶族自治县' }, { value: 441881, label: '英德市' }, { value: 441882, label: '连州市' }]
  }, {
    value: 441900, label: '东莞市', children: []
  }, {
    value: 442000, label: '中山市', children: []
  }, {
    value: 445100, label: '潮州市', children: [{ value: 445101, label: '市辖区' }, { value: 445102, label: '湘桥区' }, { value: 445103, label: '潮安区' }, { value: 445122, label: '饶平县' }]
  }, {
    value: 445200, label: '揭阳市', children: [{ value: 445201, label: '市辖区' }, { value: 445202, label: '榕城区' }, { value: 445203, label: '揭东区' }, { value: 445222, label: '揭西县' }, { value: 445224, label: '惠来县' }, { value: 445281, label: '普宁市' }]
  }, {
    value: 445300, label: '云浮市', children: [{ value: 445301, label: '市辖区' }, { value: 445302, label: '云城区' }, { value: 445303, label: '云安区' }, { value: 445321, label: '新兴县' }, { value: 445322, label: '郁南县' }, { value: 445381, label: '罗定市' }]
  }]
}, {
  value: 450000, label: '广西', children: [{
    value: 450100, label: '南宁市', children: [{ value: 450101, label: '市辖区' }, { value: 450102, label: '兴宁区' }, { value: 450103, label: '青秀区' }, { value: 450105, label: '江南区' }, { value: 450107, label: '西乡塘区' }, { value: 450108, label: '良庆区' }, { value: 450109, label: '邕宁区' }, { value: 450110, label: '武鸣区' }, { value: 450123, label: '隆安县' }, { value: 450124, label: '马山县' }, { value: 450125, label: '上林县' }, { value: 450126, label: '宾阳县' }, { value: 450127, label: '横县' }]
  }, {
    value: 450200, label: '柳州市', children: [{ value: 450201, label: '市辖区' }, { value: 450202, label: '城中区' }, { value: 450203, label: '鱼峰区' }, { value: 450204, label: '柳南区' }, { value: 450205, label: '柳北区' }, { value: 450206, label: '柳江区' }, { value: 450222, label: '柳城县' }, { value: 450223, label: '鹿寨县' }, { value: 450224, label: '融安县' }, { value: 450225, label: '融水苗族自治县' }, { value: 450226, label: '三江侗族自治县' }]
  }, {
    value: 450300, label: '桂林市', children: [{ value: 450301, label: '市辖区' }, { value: 450302, label: '秀峰区' }, { value: 450303, label: '叠彩区' }, { value: 450304, label: '象山区' }, { value: 450305, label: '七星区' }, { value: 450311, label: '雁山区' }, { value: 450312, label: '临桂区' }, { value: 450321, label: '阳朔县' }, { value: 450323, label: '灵川县' }, { value: 450324, label: '全州县' }, { value: 450325, label: '兴安县' }, { value: 450326, label: '永福县' }, { value: 450327, label: '灌阳县' }, { value: 450328, label: '龙胜各族自治县' }, { value: 450329, label: '资源县' }, { value: 450330, label: '平乐县' }, { value: 450331, label: '荔浦县' }, { value: 450332, label: '恭城瑶族自治县' }]
  }, {
    value: 450400, label: '梧州市', children: [{ value: 450401, label: '市辖区' }, { value: 450403, label: '万秀区' }, { value: 450405, label: '长洲区' }, { value: 450406, label: '龙圩区' }, { value: 450421, label: '苍梧县' }, { value: 450422, label: '藤县' }, { value: 450423, label: '蒙山县' }, { value: 450481, label: '岑溪市' }]
  }, {
    value: 450500, label: '北海市', children: [{ value: 450501, label: '市辖区' }, { value: 450502, label: '海城区' }, { value: 450503, label: '银海区' }, { value: 450512, label: '铁山港区' }, { value: 450521, label: '合浦县' }]
  }, {
    value: 450600, label: '防城港市', children: [{ value: 450601, label: '市辖区' }, { value: 450602, label: '港口区' }, { value: 450603, label: '防城区' }, { value: 450621, label: '上思县' }, { value: 450681, label: '东兴市' }]
  }, {
    value: 450700, label: '钦州市', children: [{ value: 450701, label: '市辖区' }, { value: 450702, label: '钦南区' }, { value: 450703, label: '钦北区' }, { value: 450721, label: '灵山县' }, { value: 450722, label: '浦北县' }]
  }, {
    value: 450800, label: '贵港市', children: [{ value: 450801, label: '市辖区' }, { value: 450802, label: '港北区' }, { value: 450803, label: '港南区' }, { value: 450804, label: '覃塘区' }, { value: 450821, label: '平南县' }, { value: 450881, label: '桂平市' }]
  }, {
    value: 450900, label: '玉林市', children: [{ value: 450901, label: '市辖区' }, { value: 450902, label: '玉州区' }, { value: 450903, label: '福绵区' }, { value: 450921, label: '容县' }, { value: 450922, label: '陆川县' }, { value: 450923, label: '博白县' }, { value: 450924, label: '兴业县' }, { value: 450981, label: '北流市' }]
  }, {
    value: 451000, label: '百色市', children: [{ value: 451001, label: '市辖区' }, { value: 451002, label: '右江区' }, { value: 451021, label: '田阳县' }, { value: 451022, label: '田东县' }, { value: 451023, label: '平果县' }, { value: 451024, label: '德保县' }, { value: 451026, label: '那坡县' }, { value: 451027, label: '凌云县' }, { value: 451028, label: '乐业县' }, { value: 451029, label: '田林县' }, { value: 451030, label: '西林县' }, { value: 451031, label: '隆林各族自治县' }, { value: 451081, label: '靖西市' }]
  }, {
    value: 451100, label: '贺州市', children: [{ value: 451101, label: '市辖区' }, { value: 451102, label: '八步区' }, { value: 451103, label: '平桂区' }, { value: 451121, label: '昭平县' }, { value: 451122, label: '钟山县' }, { value: 451123, label: '富川瑶族自治县' }]
  }, {
    value: 451200, label: '河池市', children: [{ value: 451201, label: '市辖区' }, { value: 451202, label: '金城江区' }, { value: 451221, label: '南丹县' }, { value: 451222, label: '天峨县' }, { value: 451223, label: '凤山县' }, { value: 451224, label: '东兰县' }, { value: 451225, label: '罗城仫佬族自治县' }, { value: 451226, label: '环江毛南族自治县' }, { value: 451227, label: '巴马瑶族自治县' }, { value: 451228, label: '都安瑶族自治县' }, { value: 451229, label: '大化瑶族自治县' }, { value: 451281, label: '宜州市' }]
  }, {
    value: 451300, label: '来宾市', children: [{ value: 451301, label: '市辖区' }, { value: 451302, label: '兴宾区' }, { value: 451321, label: '忻城县' }, { value: 451322, label: '象州县' }, { value: 451323, label: '武宣县' }, { value: 451324, label: '金秀瑶族自治县' }, { value: 451381, label: '合山市' }]
  }, {
    value: 451400, label: '崇左市', children: [{ value: 451401, label: '市辖区' }, { value: 451402, label: '江州区' }, { value: 451421, label: '扶绥县' }, { value: 451422, label: '宁明县' }, { value: 451423, label: '龙州县' }, { value: 451424, label: '大新县' }, { value: 451425, label: '天等县' }, { value: 451481, label: '凭祥市' }]
  }]
}, {
  value: 460000, label: '海南省', children: [{
    value: 460100, label: '海口市', children: [{ value: 460101, label: '市辖区' }, { value: 460105, label: '秀英区' }, { value: 460106, label: '龙华区' }, { value: 460107, label: '琼山区' }, { value: 460108, label: '美兰区' }]
  }, {
    value: 460200, label: '三亚市', children: [{ value: 460201, label: '市辖区' }, { value: 460202, label: '海棠区' }, { value: 460203, label: '吉阳区' }, { value: 460204, label: '天涯区' }, { value: 460205, label: '崖州区' }]
  }, {
    value: 460300, label: '三沙市', children: []
  }, {
    value: 460400, label: '儋州市', children: []
  }, {
    value: 469000, label: '省直辖县级行政区划', children: [{ value: 469001, label: '五指山市' }, { value: 469002, label: '琼海市' }, { value: 469005, label: '文昌市' }, { value: 469006, label: '万宁市' }, { value: 469007, label: '东方市' }, { value: 469021, label: '定安县' }, { value: 469022, label: '屯昌县' }, { value: 469023, label: '澄迈县' }, { value: 469024, label: '临高县' }, { value: 469025, label: '白沙黎族自治县' }, { value: 469026, label: '昌江黎族自治县' }, { value: 469027, label: '乐东黎族自治县' }, { value: 469028, label: '陵水黎族自治县' }, { value: 469029, label: '保亭黎族苗族自治县' }, { value: 469030, label: '琼中黎族苗族自治县' }]
  }]
}, {
  value: 500000, label: '重庆市', children: [{
    value: 500100, label: '市辖区', children: [{ value: 500101, label: '万州区' }, { value: 500102, label: '涪陵区' }, { value: 500103, label: '渝中区' }, { value: 500104, label: '大渡口区' }, { value: 500105, label: '江北区' }, { value: 500106, label: '沙坪坝区' }, { value: 500107, label: '九龙坡区' }, { value: 500108, label: '南岸区' }, { value: 500109, label: '北碚区' }, { value: 500110, label: '綦江区' }, { value: 500111, label: '大足区' }, { value: 500112, label: '渝北区' }, { value: 500113, label: '巴南区' }, { value: 500114, label: '黔江区' }, { value: 500115, label: '长寿区' }, { value: 500116, label: '江津区' }, { value: 500117, label: '合川区' }, { value: 500118, label: '永川区' }, { value: 500119, label: '南川区' }, { value: 500120, label: '璧山区' }, { value: 500151, label: '铜梁区' }, { value: 500152, label: '潼南区' }, { value: 500153, label: '荣昌区' }, { value: 500154, label: '开州区' }]
  }, {
    value: 500200, label: '县', children: [{ value: 500228, label: '梁平县' }, { value: 500229, label: '城口县' }, { value: 500230, label: '丰都县' }, { value: 500231, label: '垫江县' }, { value: 500232, label: '武隆县' }, { value: 500233, label: '忠县' }, { value: 500235, label: '云阳县' }, { value: 500236, label: '奉节县' }, { value: 500237, label: '巫山县' }, { value: 500238, label: '巫溪县' }, { value: 500240, label: '石柱土家族自治县' }, { value: 500241, label: '秀山土家族苗族自治县' }, { value: 500242, label: '酉阳土家族苗族自治县' }, { value: 500243, label: '彭水苗族土家族自治县' }]
  }]
}, {
  value: 510000, label: '四川省', children: [{
    value: 510100, label: '成都市', children: [{ value: 510101, label: '市辖区' }, { value: 510104, label: '锦江区' }, { value: 510105, label: '青羊区' }, { value: 510106, label: '金牛区' }, { value: 510107, label: '武侯区' }, { value: 510108, label: '成华区' }, { value: 510112, label: '龙泉驿区' }, { value: 510113, label: '青白江区' }, { value: 510114, label: '新都区' }, { value: 510115, label: '温江区' }, { value: 510116, label: '双流区' }, { value: 510121, label: '金堂县' }, { value: 510124, label: '郫县' }, { value: 510129, label: '大邑县' }, { value: 510131, label: '蒲江县' }, { value: 510132, label: '新津县' }, { value: 510181, label: '都江堰市' }, { value: 510182, label: '彭州市' }, { value: 510183, label: '邛崃市' }, { value: 510184, label: '崇州市' }, { value: 510185, label: '简阳市' }]
  }, {
    value: 510300, label: '自贡市', children: [{ value: 510301, label: '市辖区' }, { value: 510302, label: '自流井区' }, { value: 510303, label: '贡井区' }, { value: 510304, label: '大安区' }, { value: 510311, label: '沿滩区' }, { value: 510321, label: '荣县' }, { value: 510322, label: '富顺县' }]
  }, {
    value: 510400, label: '攀枝花市', children: [{ value: 510401, label: '市辖区' }, { value: 510402, label: '东区' }, { value: 510403, label: '西区' }, { value: 510411, label: '仁和区' }, { value: 510421, label: '米易县' }, { value: 510422, label: '盐边县' }]
  }, {
    value: 510500, label: '泸州市', children: [{ value: 510501, label: '市辖区' }, { value: 510502, label: '江阳区' }, { value: 510503, label: '纳溪区' }, { value: 510504, label: '龙马潭区' }, { value: 510521, label: '泸县' }, { value: 510522, label: '合江县' }, { value: 510524, label: '叙永县' }, { value: 510525, label: '古蔺县' }]
  }, {
    value: 510600, label: '德阳市', children: [{ value: 510601, label: '市辖区' }, { value: 510603, label: '旌阳区' }, { value: 510623, label: '中江县' }, { value: 510626, label: '罗江县' }, { value: 510681, label: '广汉市' }, { value: 510682, label: '什邡市' }, { value: 510683, label: '绵竹市' }]
  }, {
    value: 510700, label: '绵阳市', children: [{ value: 510701, label: '市辖区' }, { value: 510703, label: '涪城区' }, { value: 510704, label: '游仙区' }, { value: 510705, label: '安州区' }, { value: 510722, label: '三台县' }, { value: 510723, label: '盐亭县' }, { value: 510725, label: '梓潼县' }, { value: 510726, label: '北川羌族自治县' }, { value: 510727, label: '平武县' }, { value: 510781, label: '江油市' }]
  }, {
    value: 510800, label: '广元市', children: [{ value: 510801, label: '市辖区' }, { value: 510802, label: '利州区' }, { value: 510811, label: '昭化区' }, { value: 510812, label: '朝天区' }, { value: 510821, label: '旺苍县' }, { value: 510822, label: '青川县' }, { value: 510823, label: '剑阁县' }, { value: 510824, label: '苍溪县' }]
  }, {
    value: 510900, label: '遂宁市', children: [{ value: 510901, label: '市辖区' }, { value: 510903, label: '船山区' }, { value: 510904, label: '安居区' }, { value: 510921, label: '蓬溪县' }, { value: 510922, label: '射洪县' }, { value: 510923, label: '大英县' }]
  }, {
    value: 511000, label: '内江市', children: [{ value: 511001, label: '市辖区' }, { value: 511002, label: '市中区' }, { value: 511011, label: '东兴区' }, { value: 511024, label: '威远县' }, { value: 511025, label: '资中县' }, { value: 511028, label: '隆昌县' }]
  }, {
    value: 511100, label: '乐山市', children: [{ value: 511101, label: '市辖区' }, { value: 511102, label: '市中区' }, { value: 511111, label: '沙湾区' }, { value: 511112, label: '五通桥区' }, { value: 511113, label: '金口河区' }, { value: 511123, label: '犍为县' }, { value: 511124, label: '井研县' }, { value: 511126, label: '夹江县' }, { value: 511129, label: '沐川县' }, { value: 511132, label: '峨边彝族自治县' }, { value: 511133, label: '马边彝族自治县' }, { value: 511181, label: '峨眉山市' }]
  }, {
    value: 511300, label: '南充市', children: [{ value: 511301, label: '市辖区' }, { value: 511302, label: '顺庆区' }, { value: 511303, label: '高坪区' }, { value: 511304, label: '嘉陵区' }, { value: 511321, label: '南部县' }, { value: 511322, label: '营山县' }, { value: 511323, label: '蓬安县' }, { value: 511324, label: '仪陇县' }, { value: 511325, label: '西充县' }, { value: 511381, label: '阆中市' }]
  }, {
    value: 511400, label: '眉山市', children: [{ value: 511401, label: '市辖区' }, { value: 511402, label: '东坡区' }, { value: 511403, label: '彭山区' }, { value: 511421, label: '仁寿县' }, { value: 511423, label: '洪雅县' }, { value: 511424, label: '丹棱县' }, { value: 511425, label: '青神县' }]
  }, {
    value: 511500, label: '宜宾市', children: [{ value: 511501, label: '市辖区' }, { value: 511502, label: '翠屏区' }, { value: 511503, label: '南溪区' }, { value: 511521, label: '宜宾县' }, { value: 511523, label: '江安县' }, { value: 511524, label: '长宁县' }, { value: 511525, label: '高县' }, { value: 511526, label: '珙县' }, { value: 511527, label: '筠连县' }, { value: 511528, label: '兴文县' }, { value: 511529, label: '屏山县' }]
  }, {
    value: 511600, label: '广安市', children: [{ value: 511601, label: '市辖区' }, { value: 511602, label: '广安区' }, { value: 511603, label: '前锋区' }, { value: 511621, label: '岳池县' }, { value: 511622, label: '武胜县' }, { value: 511623, label: '邻水县' }, { value: 511681, label: '华蓥市' }]
  }, {
    value: 511700, label: '达州市', children: [{ value: 511701, label: '市辖区' }, { value: 511702, label: '通川区' }, { value: 511703, label: '达川区' }, { value: 511722, label: '宣汉县' }, { value: 511723, label: '开江县' }, { value: 511724, label: '大竹县' }, { value: 511725, label: '渠县' }, { value: 511781, label: '万源市' }]
  }, {
    value: 511800, label: '雅安市', children: [{ value: 511801, label: '市辖区' }, { value: 511802, label: '雨城区' }, { value: 511803, label: '名山区' }, { value: 511822, label: '荥经县' }, { value: 511823, label: '汉源县' }, { value: 511824, label: '石棉县' }, { value: 511825, label: '天全县' }, { value: 511826, label: '芦山县' }, { value: 511827, label: '宝兴县' }]
  }, {
    value: 511900, label: '巴中市', children: [{ value: 511901, label: '市辖区' }, { value: 511902, label: '巴州区' }, { value: 511903, label: '恩阳区' }, { value: 511921, label: '通江县' }, { value: 511922, label: '南江县' }, { value: 511923, label: '平昌县' }]
  }, {
    value: 512000, label: '资阳市', children: [{ value: 512001, label: '市辖区' }, { value: 512002, label: '雁江区' }, { value: 512021, label: '安岳县' }, { value: 512022, label: '乐至县' }]
  }, {
    value: 513200, label: '阿坝藏族羌族自治州', children: [{ value: 513201, label: '马尔康市' }, { value: 513221, label: '汶川县' }, { value: 513222, label: '理县' }, { value: 513223, label: '茂县' }, { value: 513224, label: '松潘县' }, { value: 513225, label: '九寨沟县' }, { value: 513226, label: '金川县' }, { value: 513227, label: '小金县' }, { value: 513228, label: '黑水县' }, { value: 513230, label: '壤塘县' }, { value: 513231, label: '阿坝县' }, { value: 513232, label: '若尔盖县' }, { value: 513233, label: '红原县' }]
  }, {
    value: 513300, label: '甘孜藏族自治州', children: [{ value: 513301, label: '康定市' }, { value: 513322, label: '泸定县' }, { value: 513323, label: '丹巴县' }, { value: 513324, label: '九龙县' }, { value: 513325, label: '雅江县' }, { value: 513326, label: '道孚县' }, { value: 513327, label: '炉霍县' }, { value: 513328, label: '甘孜县' }, { value: 513329, label: '新龙县' }, { value: 513330, label: '德格县' }, { value: 513331, label: '白玉县' }, { value: 513332, label: '石渠县' }, { value: 513333, label: '色达县' }, { value: 513334, label: '理塘县' }, { value: 513335, label: '巴塘县' }, { value: 513336, label: '乡城县' }, { value: 513337, label: '稻城县' }, { value: 513338, label: '得荣县' }]
  }, {
    value: 513400, label: '凉山彝族自治州', children: [{ value: 513401, label: '西昌市' }, { value: 513422, label: '木里藏族自治县' }, { value: 513423, label: '盐源县' }, { value: 513424, label: '德昌县' }, { value: 513425, label: '会理县' }, { value: 513426, label: '会东县' }, { value: 513427, label: '宁南县' }, { value: 513428, label: '普格县' }, { value: 513429, label: '布拖县' }, { value: 513430, label: '金阳县' }, { value: 513431, label: '昭觉县' }, { value: 513432, label: '喜德县' }, { value: 513433, label: '冕宁县' }, { value: 513434, label: '越西县' }, { value: 513435, label: '甘洛县' }, { value: 513436, label: '美姑县' }, { value: 513437, label: '雷波县' }]
  }]
}, {
  value: 520000, label: '贵州省', children: [{
    value: 520100, label: '贵阳市', children: [{ value: 520101, label: '市辖区' }, { value: 520102, label: '南明区' }, { value: 520103, label: '云岩区' }, { value: 520111, label: '花溪区' }, { value: 520112, label: '乌当区' }, { value: 520113, label: '白云区' }, { value: 520115, label: '观山湖区' }, { value: 520121, label: '开阳县' }, { value: 520122, label: '息烽县' }, { value: 520123, label: '修文县' }, { value: 520181, label: '清镇市' }]
  }, {
    value: 520200, label: '六盘水市', children: [{ value: 520201, label: '钟山区' }, { value: 520203, label: '六枝特区' }, { value: 520221, label: '水城县' }, { value: 520222, label: '盘县' }]
  }, {
    value: 520300, label: '遵义市', children: [{ value: 520301, label: '市辖区' }, { value: 520302, label: '红花岗区' }, { value: 520303, label: '汇川区' }, { value: 520304, label: '播州区' }, { value: 520322, label: '桐梓县' }, { value: 520323, label: '绥阳县' }, { value: 520324, label: '正安县' }, { value: 520325, label: '道真仡佬族苗族自治县' }, { value: 520326, label: '务川仡佬族苗族自治县' }, { value: 520327, label: '凤冈县' }, { value: 520328, label: '湄潭县' }, { value: 520329, label: '余庆县' }, { value: 520330, label: '习水县' }, { value: 520381, label: '赤水市' }, { value: 520382, label: '仁怀市' }]
  }, {
    value: 520400, label: '安顺市', children: [{ value: 520401, label: '市辖区' }, { value: 520402, label: '西秀区' }, { value: 520403, label: '平坝区' }, { value: 520422, label: '普定县' }, { value: 520423, label: '镇宁布依族苗族自治县' }, { value: 520424, label: '关岭布依族苗族自治县' }, { value: 520425, label: '紫云苗族布依族自治县' }]
  }, {
    value: 520500, label: '毕节市', children: [{ value: 520501, label: '市辖区' }, { value: 520502, label: '七星关区' }, { value: 520521, label: '大方县' }, { value: 520522, label: '黔西县' }, { value: 520523, label: '金沙县' }, { value: 520524, label: '织金县' }, { value: 520525, label: '纳雍县' }, { value: 520526, label: '威宁彝族回族苗族自治县' }, { value: 520527, label: '赫章县' }]
  }, {
    value: 520600, label: '铜仁市', children: [{ value: 520601, label: '市辖区' }, { value: 520602, label: '碧江区' }, { value: 520603, label: '万山区' }, { value: 520621, label: '江口县' }, { value: 520622, label: '玉屏侗族自治县' }, { value: 520623, label: '石阡县' }, { value: 520624, label: '思南县' }, { value: 520625, label: '印江土家族苗族自治县' }, { value: 520626, label: '德江县' }, { value: 520627, label: '沿河土家族自治县' }, { value: 520628, label: '松桃苗族自治县' }]
  }, {
    value: 522300, label: '黔西南布依族苗族自治州', children: [{ value: 522301, label: '兴义市' }, { value: 522322, label: '兴仁县' }, { value: 522323, label: '普安县' }, { value: 522324, label: '晴隆县' }, { value: 522325, label: '贞丰县' }, { value: 522326, label: '望谟县' }, { value: 522327, label: '册亨县' }, { value: 522328, label: '安龙县' }]
  }, {
    value: 522600, label: '黔东南苗族侗族自治州', children: [{ value: 522601, label: '凯里市' }, { value: 522622, label: '黄平县' }, { value: 522623, label: '施秉县' }, { value: 522624, label: '三穗县' }, { value: 522625, label: '镇远县' }, { value: 522626, label: '岑巩县' }, { value: 522627, label: '天柱县' }, { value: 522628, label: '锦屏县' }, { value: 522629, label: '剑河县' }, { value: 522630, label: '台江县' }, { value: 522631, label: '黎平县' }, { value: 522632, label: '榕江县' }, { value: 522633, label: '从江县' }, { value: 522634, label: '雷山县' }, { value: 522635, label: '麻江县' }, { value: 522636, label: '丹寨县' }]
  }, {
    value: 522700, label: '黔南布依族苗族自治州', children: [{ value: 522701, label: '都匀市' }, { value: 522702, label: '福泉市' }, { value: 522722, label: '荔波县' }, { value: 522723, label: '贵定县' }, { value: 522725, label: '瓮安县' }, { value: 522726, label: '独山县' }, { value: 522727, label: '平塘县' }, { value: 522728, label: '罗甸县' }, { value: 522729, label: '长顺县' }, { value: 522730, label: '龙里县' }, { value: 522731, label: '惠水县' }, { value: 522732, label: '三都水族自治县' }]
  }]
}, {
  value: 530000, label: '云南省', children: [{
    value: 530100, label: '昆明市', children: [{ value: 530101, label: '市辖区' }, { value: 530102, label: '五华区' }, { value: 530103, label: '盘龙区' }, { value: 530111, label: '官渡区' }, { value: 530112, label: '西山区' }, { value: 530113, label: '东川区' }, { value: 530114, label: '呈贡区' }, { value: 530122, label: '晋宁县' }, { value: 530124, label: '富民县' }, { value: 530125, label: '宜良县' }, { value: 530126, label: '石林彝族自治县' }, { value: 530127, label: '嵩明县' }, { value: 530128, label: '禄劝彝族苗族自治县' }, { value: 530129, label: '寻甸回族彝族自治县' }, { value: 530181, label: '安宁市' }]
  }, {
    value: 530300, label: '曲靖市', children: [{ value: 530301, label: '市辖区' }, { value: 530302, label: '麒麟区' }, { value: 530303, label: '沾益区' }, { value: 530321, label: '马龙县' }, { value: 530322, label: '陆良县' }, { value: 530323, label: '师宗县' }, { value: 530324, label: '罗平县' }, { value: 530325, label: '富源县' }, { value: 530326, label: '会泽县' }, { value: 530381, label: '宣威市' }]
  }, {
    value: 530400, label: '玉溪市', children: [{ value: 530401, label: '市辖区' }, { value: 530402, label: '红塔区' }, { value: 530403, label: '江川区' }, { value: 530422, label: '澄江县' }, { value: 530423, label: '通海县' }, { value: 530424, label: '华宁县' }, { value: 530425, label: '易门县' }, { value: 530426, label: '峨山彝族自治县' }, { value: 530427, label: '新平彝族傣族自治县' }, { value: 530428, label: '元江哈尼族彝族傣族自治县' }]
  }, {
    value: 530500, label: '保山市', children: [{ value: 530501, label: '市辖区' }, { value: 530502, label: '隆阳区' }, { value: 530521, label: '施甸县' }, { value: 530523, label: '龙陵县' }, { value: 530524, label: '昌宁县' }, { value: 530581, label: '腾冲市' }]
  }, {
    value: 530600, label: '昭通市', children: [{ value: 530601, label: '市辖区' }, { value: 530602, label: '昭阳区' }, { value: 530621, label: '鲁甸县' }, { value: 530622, label: '巧家县' }, { value: 530623, label: '盐津县' }, { value: 530624, label: '大关县' }, { value: 530625, label: '永善县' }, { value: 530626, label: '绥江县' }, { value: 530627, label: '镇雄县' }, { value: 530628, label: '彝良县' }, { value: 530629, label: '威信县' }, { value: 530630, label: '水富县' }]
  }, {
    value: 530700, label: '丽江市', children: [{ value: 530701, label: '市辖区' }, { value: 530702, label: '古城区' }, { value: 530721, label: '玉龙纳西族自治县' }, { value: 530722, label: '永胜县' }, { value: 530723, label: '华坪县' }, { value: 530724, label: '宁蒗彝族自治县' }]
  }, {
    value: 530800, label: '普洱市', children: [{ value: 530801, label: '市辖区' }, { value: 530802, label: '思茅区' }, { value: 530821, label: '宁洱哈尼族彝族自治县' }, { value: 530822, label: '墨江哈尼族自治县' }, { value: 530823, label: '景东彝族自治县' }, { value: 530824, label: '景谷傣族彝族自治县' }, { value: 530825, label: '镇沅彝族哈尼族拉祜族自治县' }, { value: 530826, label: '江城哈尼族彝族自治县' }, { value: 530827, label: '孟连傣族拉祜族佤族自治县' }, { value: 530828, label: '澜沧拉祜族自治县' }, { value: 530829, label: '西盟佤族自治县' }]
  }, {
    value: 530900, label: '临沧市', children: [{ value: 530901, label: '市辖区' }, { value: 530902, label: '临翔区' }, { value: 530921, label: '凤庆县' }, { value: 530922, label: '云县' }, { value: 530923, label: '永德县' }, { value: 530924, label: '镇康县' }, { value: 530925, label: '双江拉祜族佤族布朗族傣族自治县' }, { value: 530926, label: '耿马傣族佤族自治县' }, { value: 530927, label: '沧源佤族自治县' }]
  }, {
    value: 532300, label: '楚雄彝族自治州', children: [{ value: 532301, label: '楚雄市' }, { value: 532322, label: '双柏县' }, { value: 532323, label: '牟定县' }, { value: 532324, label: '南华县' }, { value: 532325, label: '姚安县' }, { value: 532326, label: '大姚县' }, { value: 532327, label: '永仁县' }, { value: 532328, label: '元谋县' }, { value: 532329, label: '武定县' }, { value: 532331, label: '禄丰县' }]
  }, {
    value: 532500, label: '红河哈尼族彝族自治州', children: [{ value: 532501, label: '个旧市' }, { value: 532502, label: '开远市' }, { value: 532503, label: '蒙自市' }, { value: 532504, label: '弥勒市' }, { value: 532523, label: '屏边苗族自治县' }, { value: 532524, label: '建水县' }, { value: 532525, label: '石屏县' }, { value: 532527, label: '泸西县' }, { value: 532528, label: '元阳县' }, { value: 532529, label: '红河县' }, { value: 532530, label: '金平苗族瑶族傣族自治县' }, { value: 532531, label: '绿春县' }, { value: 532532, label: '河口瑶族自治县' }]
  }, {
    value: 532600, label: '文山壮族苗族自治州', children: [{ value: 532601, label: '文山市' }, { value: 532622, label: '砚山县' }, { value: 532623, label: '西畴县' }, { value: 532624, label: '麻栗坡县' }, { value: 532625, label: '马关县' }, { value: 532626, label: '丘北县' }, { value: 532627, label: '广南县' }, { value: 532628, label: '富宁县' }]
  }, {
    value: 532800, label: '西双版纳傣族自治州', children: [{ value: 532801, label: '景洪市' }, { value: 532822, label: '勐海县' }, { value: 532823, label: '勐腊县' }]
  }, {
    value: 532900, label: '大理白族自治州', children: [{ value: 532901, label: '大理市' }, { value: 532922, label: '漾濞彝族自治县' }, { value: 532923, label: '祥云县' }, { value: 532924, label: '宾川县' }, { value: 532925, label: '弥渡县' }, { value: 532926, label: '南涧彝族自治县' }, { value: 532927, label: '巍山彝族回族自治县' }, { value: 532928, label: '永平县' }, { value: 532929, label: '云龙县' }, { value: 532930, label: '洱源县' }, { value: 532931, label: '剑川县' }, { value: 532932, label: '鹤庆县' }]
  }, {
    value: 533100, label: '德宏傣族景颇族自治州', children: [{ value: 533102, label: '瑞丽市' }, { value: 533103, label: '芒市' }, { value: 533122, label: '梁河县' }, { value: 533123, label: '盈江县' }, { value: 533124, label: '陇川县' }]
  }, {
    value: 533300, label: '怒江傈僳族自治州', children: [{ value: 533301, label: '泸水市' }, { value: 533323, label: '福贡县' }, { value: 533324, label: '贡山独龙族怒族自治县' }, { value: 533325, label: '兰坪白族普米族自治县' }]
  }, {
    value: 533400, label: '迪庆藏族自治州', children: [{ value: 533401, label: '香格里拉市' }, { value: 533422, label: '德钦县' }, { value: 533423, label: '维西傈僳族自治县' }]
  }]
}, {
  value: 540000, label: '西藏自治区', children: [{
    value: 540100, label: '拉萨市', children: [{ value: 540101, label: '市辖区' }, { value: 540102, label: '城关区' }, { value: 540103, label: '堆龙德庆区' }, { value: 540121, label: '林周县' }, { value: 540122, label: '当雄县' }, { value: 540123, label: '尼木县' }, { value: 540124, label: '曲水县' }, { value: 540126, label: '达孜县' }, { value: 540127, label: '墨竹工卡县' }]
  }, {
    value: 540200, label: '日喀则市', children: [{ value: 540202, label: '桑珠孜区' }, { value: 540221, label: '南木林县' }, { value: 540222, label: '江孜县' }, { value: 540223, label: '定日县' }, { value: 540224, label: '萨迦县' }, { value: 540225, label: '拉孜县' }, { value: 540226, label: '昂仁县' }, { value: 540227, label: '谢通门县' }, { value: 540228, label: '白朗县' }, { value: 540229, label: '仁布县' }, { value: 540230, label: '康马县' }, { value: 540231, label: '定结县' }, { value: 540232, label: '仲巴县' }, { value: 540233, label: '亚东县' }, { value: 540234, label: '吉隆县' }, { value: 540235, label: '聂拉木县' }, { value: 540236, label: '萨嘎县' }, { value: 540237, label: '岗巴县' }]
  }, {
    value: 540300, label: '昌都市', children: [{ value: 540302, label: '卡若区' }, { value: 540321, label: '江达县' }, { value: 540322, label: '贡觉县' }, { value: 540323, label: '类乌齐县' }, { value: 540324, label: '丁青县' }, { value: 540325, label: '察雅县' }, { value: 540326, label: '八宿县' }, { value: 540327, label: '左贡县' }, { value: 540328, label: '芒康县' }, { value: 540329, label: '洛隆县' }, { value: 540330, label: '边坝县' }]
  }, {
    value: 540400, label: '林芝市', children: [{ value: 540402, label: '巴宜区' }, { value: 540421, label: '工布江达县' }, { value: 540422, label: '米林县' }, { value: 540423, label: '墨脱县' }, { value: 540424, label: '波密县' }, { value: 540425, label: '察隅县' }, { value: 540426, label: '朗县' }]
  }, {
    value: 540500, label: '山南市', children: [{ value: 540501, label: '市辖区' }, { value: 540502, label: '乃东区' }, { value: 540521, label: '扎囊县' }, { value: 540522, label: '贡嘎县' }, { value: 540523, label: '桑日县' }, { value: 540524, label: '琼结县' }, { value: 540525, label: '曲松县' }, { value: 540526, label: '措美县' }, { value: 540527, label: '洛扎县' }, { value: 540528, label: '加查县' }, { value: 540529, label: '隆子县' }, { value: 540530, label: '错那县' }, { value: 540531, label: '浪卡子县' }]
  }, {
    value: 542400, label: '那曲地区', children: [{ value: 542421, label: '那曲县' }, { value: 542422, label: '嘉黎县' }, { value: 542423, label: '比如县' }, { value: 542424, label: '聂荣县' }, { value: 542425, label: '安多县' }, { value: 542426, label: '申扎县' }, { value: 542427, label: '索县' }, { value: 542428, label: '班戈县' }, { value: 542429, label: '巴青县' }, { value: 542430, label: '尼玛县' }, { value: 542431, label: '双湖县' }]
  }, {
    value: 542500, label: '阿里地区', children: [{ value: 542521, label: '普兰县' }, { value: 542522, label: '札达县' }, { value: 542523, label: '噶尔县' }, { value: 542524, label: '日土县' }, { value: 542525, label: '革吉县' }, { value: 542526, label: '改则县' }, { value: 542527, label: '措勤县' }]
  }]
}, {
  value: 610000, label: '陕西省', children: [{
    value: 610100, label: '西安市', children: [{ value: 610101, label: '市辖区' }, { value: 610102, label: '新城区' }, { value: 610103, label: '碑林区' }, { value: 610104, label: '莲湖区' }, { value: 610111, label: '灞桥区' }, { value: 610112, label: '未央区' }, { value: 610113, label: '雁塔区' }, { value: 610114, label: '阎良区' }, { value: 610115, label: '临潼区' }, { value: 610116, label: '长安区' }, { value: 610117, label: '高陵区' }, { value: 610122, label: '蓝田县' }, { value: 610124, label: '周至县' }, { value: 610125, label: '户县' }]
  }, {
    value: 610200, label: '铜川市', children: [{ value: 610201, label: '市辖区' }, { value: 610202, label: '王益区' }, { value: 610203, label: '印台区' }, { value: 610204, label: '耀州区' }, { value: 610222, label: '宜君县' }]
  }, {
    value: 610300, label: '宝鸡市', children: [{ value: 610301, label: '市辖区' }, { value: 610302, label: '渭滨区' }, { value: 610303, label: '金台区' }, { value: 610304, label: '陈仓区' }, { value: 610322, label: '凤翔县' }, { value: 610323, label: '岐山县' }, { value: 610324, label: '扶风县' }, { value: 610326, label: '眉县' }, { value: 610327, label: '陇县' }, { value: 610328, label: '千阳县' }, { value: 610329, label: '麟游县' }, { value: 610330, label: '凤县' }, { value: 610331, label: '太白县' }]
  }, {
    value: 610400, label: '咸阳市', children: [{ value: 610401, label: '市辖区' }, { value: 610402, label: '秦都区' }, { value: 610403, label: '杨陵区' }, { value: 610404, label: '渭城区' }, { value: 610422, label: '三原县' }, { value: 610423, label: '泾阳县' }, { value: 610424, label: '乾县' }, { value: 610425, label: '礼泉县' }, { value: 610426, label: '永寿县' }, { value: 610427, label: '彬县' }, { value: 610428, label: '长武县' }, { value: 610429, label: '旬邑县' }, { value: 610430, label: '淳化县' }, { value: 610431, label: '武功县' }, { value: 610481, label: '兴平市' }]
  }, {
    value: 610500, label: '渭南市', children: [{ value: 610501, label: '市辖区' }, { value: 610502, label: '临渭区' }, { value: 610503, label: '华州区' }, { value: 610522, label: '潼关县' }, { value: 610523, label: '大荔县' }, { value: 610524, label: '合阳县' }, { value: 610525, label: '澄城县' }, { value: 610526, label: '蒲城县' }, { value: 610527, label: '白水县' }, { value: 610528, label: '富平县' }, { value: 610581, label: '韩城市' }, { value: 610582, label: '华阴市' }]
  }, {
    value: 610600, label: '延安市', children: [{ value: 610601, label: '市辖区' }, { value: 610602, label: '宝塔区' }, { value: 610603, label: '安塞区' }, { value: 610621, label: '延长县' }, { value: 610622, label: '延川县' }, { value: 610623, label: '子长县' }, { value: 610625, label: '志丹县' }, { value: 610626, label: '吴起县' }, { value: 610627, label: '甘泉县' }, { value: 610628, label: '富县' }, { value: 610629, label: '洛川县' }, { value: 610630, label: '宜川县' }, { value: 610631, label: '黄龙县' }, { value: 610632, label: '黄陵县' }]
  }, {
    value: 610700, label: '汉中市', children: [{ value: 610701, label: '市辖区' }, { value: 610702, label: '汉台区' }, { value: 610721, label: '南郑县' }, { value: 610722, label: '城固县' }, { value: 610723, label: '洋县' }, { value: 610724, label: '西乡县' }, { value: 610725, label: '勉县' }, { value: 610726, label: '宁强县' }, { value: 610727, label: '略阳县' }, { value: 610728, label: '镇巴县' }, { value: 610729, label: '留坝县' }, { value: 610730, label: '佛坪县' }]
  }, {
    value: 610800, label: '榆林市', children: [{ value: 610801, label: '市辖区' }, { value: 610802, label: '榆阳区' }, { value: 610803, label: '横山区' }, { value: 610821, label: '神木县' }, { value: 610822, label: '府谷县' }, { value: 610824, label: '靖边县' }, { value: 610825, label: '定边县' }, { value: 610826, label: '绥德县' }, { value: 610827, label: '米脂县' }, { value: 610828, label: '佳县' }, { value: 610829, label: '吴堡县' }, { value: 610830, label: '清涧县' }, { value: 610831, label: '子洲县' }]
  }, {
    value: 610900, label: '安康市', children: [{ value: 610901, label: '市辖区' }, { value: 610902, label: '汉滨区' }, { value: 610921, label: '汉阴县' }, { value: 610922, label: '石泉县' }, { value: 610923, label: '宁陕县' }, { value: 610924, label: '紫阳县' }, { value: 610925, label: '岚皋县' }, { value: 610926, label: '平利县' }, { value: 610927, label: '镇坪县' }, { value: 610928, label: '旬阳县' }, { value: 610929, label: '白河县' }]
  }, {
    value: 611000, label: '商洛市', children: [{ value: 611001, label: '市辖区' }, { value: 611002, label: '商州区' }, { value: 611021, label: '洛南县' }, { value: 611022, label: '丹凤县' }, { value: 611023, label: '商南县' }, { value: 611024, label: '山阳县' }, { value: 611025, label: '镇安县' }, { value: 611026, label: '柞水县' }]
  }]
}, {
  value: 620000, label: '甘肃省', children: [{
    value: 620100, label: '兰州市', children: [{ value: 620101, label: '市辖区' }, { value: 620102, label: '城关区' }, { value: 620103, label: '七里河区' }, { value: 620104, label: '西固区' }, { value: 620105, label: '安宁区' }, { value: 620111, label: '红古区' }, { value: 620121, label: '永登县' }, { value: 620122, label: '皋兰县' }, { value: 620123, label: '榆中县' }]
  }, {
    value: 620200, label: '嘉峪关市', children: [{ value: 620201, label: '市辖区' }]
  }, {
    value: 620300, label: '金昌市', children: [{ value: 620301, label: '市辖区' }, { value: 620302, label: '金川区' }, { value: 620321, label: '永昌县' }]
  }, {
    value: 620400, label: '白银市', children: [{ value: 620401, label: '市辖区' }, { value: 620402, label: '白银区' }, { value: 620403, label: '平川区' }, { value: 620421, label: '靖远县' }, { value: 620422, label: '会宁县' }, { value: 620423, label: '景泰县' }]
  }, {
    value: 620500, label: '天水市', children: [{ value: 620501, label: '市辖区' }, { value: 620502, label: '秦州区' }, { value: 620503, label: '麦积区' }, { value: 620521, label: '清水县' }, { value: 620522, label: '秦安县' }, { value: 620523, label: '甘谷县' }, { value: 620524, label: '武山县' }, { value: 620525, label: '张家川回族自治县' }]
  }, {
    value: 620600, label: '武威市', children: [{ value: 620601, label: '市辖区' }, { value: 620602, label: '凉州区' }, { value: 620621, label: '民勤县' }, { value: 620622, label: '古浪县' }, { value: 620623, label: '天祝藏族自治县' }]
  }, {
    value: 620700, label: '张掖市', children: [{ value: 620701, label: '市辖区' }, { value: 620702, label: '甘州区' }, { value: 620721, label: '肃南裕固族自治县' }, { value: 620722, label: '民乐县' }, { value: 620723, label: '临泽县' }, { value: 620724, label: '高台县' }, { value: 620725, label: '山丹县' }]
  }, {
    value: 620800, label: '平凉市', children: [{ value: 620801, label: '市辖区' }, { value: 620802, label: '崆峒区' }, { value: 620821, label: '泾川县' }, { value: 620822, label: '灵台县' }, { value: 620823, label: '崇信县' }, { value: 620824, label: '华亭县' }, { value: 620825, label: '庄浪县' }, { value: 620826, label: '静宁县' }]
  }, {
    value: 620900, label: '酒泉市', children: [{ value: 620901, label: '市辖区' }, { value: 620902, label: '肃州区' }, { value: 620921, label: '金塔县' }, { value: 620922, label: '瓜州县' }, { value: 620923, label: '肃北蒙古族自治县' }, { value: 620924, label: '阿克塞哈萨克族自治县' }, { value: 620981, label: '玉门市' }, { value: 620982, label: '敦煌市' }]
  }, {
    value: 621000, label: '庆阳市', children: [{ value: 621001, label: '市辖区' }, { value: 621002, label: '西峰区' }, { value: 621021, label: '庆城县' }, { value: 621022, label: '环县' }, { value: 621023, label: '华池县' }, { value: 621024, label: '合水县' }, { value: 621025, label: '正宁县' }, { value: 621026, label: '宁县' }, { value: 621027, label: '镇原县' }]
  }, {
    value: 621100, label: '定西市', children: [{ value: 621101, label: '市辖区' }, { value: 621102, label: '安定区' }, { value: 621121, label: '通渭县' }, { value: 621122, label: '陇西县' }, { value: 621123, label: '渭源县' }, { value: 621124, label: '临洮县' }, { value: 621125, label: '漳县' }, { value: 621126, label: '岷县' }]
  }, {
    value: 621200, label: '陇南市', children: [{ value: 621201, label: '市辖区' }, { value: 621202, label: '武都区' }, { value: 621221, label: '成县' }, { value: 621222, label: '文县' }, { value: 621223, label: '宕昌县' }, { value: 621224, label: '康县' }, { value: 621225, label: '西和县' }, { value: 621226, label: '礼县' }, { value: 621227, label: '徽县' }, { value: 621228, label: '两当县' }]
  }, {
    value: 622900, label: '临夏回族自治州', children: [{ value: 622901, label: '临夏市' }, { value: 622921, label: '临夏县' }, { value: 622922, label: '康乐县' }, { value: 622923, label: '永靖县' }, { value: 622924, label: '广河县' }, { value: 622925, label: '和政县' }, { value: 622926, label: '东乡族自治县' }, { value: 622927, label: '积石山保安族东乡族撒拉族自治县' }]
  }, {
    value: 623000, label: '甘南藏族自治州', children: [{ value: 623001, label: '合作市' }, { value: 623021, label: '临潭县' }, { value: 623022, label: '卓尼县' }, { value: 623023, label: '舟曲县' }, { value: 623024, label: '迭部县' }, { value: 623025, label: '玛曲县' }, { value: 623026, label: '碌曲县' }, { value: 623027, label: '夏河县' }]
  }]
}, {
  value: 630000, label: '青海省', children: [{
    value: 630100, label: '西宁市', children: [{ value: 630101, label: '市辖区' }, { value: 630102, label: '城东区' }, { value: 630103, label: '城中区' }, { value: 630104, label: '城西区' }, { value: 630105, label: '城北区' }, { value: 630121, label: '大通回族土族自治县' }, { value: 630122, label: '湟中县' }, { value: 630123, label: '湟源县' }]
  }, {
    value: 630200, label: '海东市', children: [{ value: 630202, label: '乐都区' }, { value: 630203, label: '平安区' }, { value: 630222, label: '民和回族土族自治县' }, { value: 630223, label: '互助土族自治县' }, { value: 630224, label: '化隆回族自治县' }, { value: 630225, label: '循化撒拉族自治县' }]
  }, {
    value: 632200, label: '海北藏族自治州', children: [{ value: 632221, label: '门源回族自治县' }, { value: 632222, label: '祁连县' }, { value: 632223, label: '海晏县' }, { value: 632224, label: '刚察县' }]
  }, {
    value: 632300, label: '黄南藏族自治州', children: [{ value: 632321, label: '同仁县' }, { value: 632322, label: '尖扎县' }, { value: 632323, label: '泽库县' }, { value: 632324, label: '河南蒙古族自治县' }]
  }, {
    value: 632500, label: '海南藏族自治州', children: [{ value: 632521, label: '共和县' }, { value: 632522, label: '同德县' }, { value: 632523, label: '贵德县' }, { value: 632524, label: '兴海县' }, { value: 632525, label: '贵南县' }]
  }, {
    value: 632600, label: '果洛藏族自治州', children: [{ value: 632621, label: '玛沁县' }, { value: 632622, label: '班玛县' }, { value: 632623, label: '甘德县' }, { value: 632624, label: '达日县' }, { value: 632625, label: '久治县' }, { value: 632626, label: '玛多县' }]
  }, {
    value: 632700, label: '玉树藏族自治州', children: [{ value: 632701, label: '玉树市' }, { value: 632722, label: '杂多县' }, { value: 632723, label: '称多县' }, { value: 632724, label: '治多县' }, { value: 632725, label: '囊谦县' }, { value: 632726, label: '曲麻莱县' }]
  }, {
    value: 632800, label: '海西蒙古族藏族自治州', children: [{ value: 632801, label: '格尔木市' }, { value: 632802, label: '德令哈市' }, { value: 632821, label: '乌兰县' }, { value: 632822, label: '都兰县' }, { value: 632823, label: '天峻县' }]
  }]
}, {
  value: 640000, label: '宁夏回族自治区', children: [{
    value: 640100, label: '银川市', children: [{ value: 640101, label: '市辖区' }, { value: 640104, label: '兴庆区' }, { value: 640105, label: '西夏区' }, { value: 640106, label: '金凤区' }, { value: 640121, label: '永宁县' }, { value: 640122, label: '贺兰县' }, { value: 640181, label: '灵武市' }]
  }, {
    value: 640200, label: '石嘴山市', children: [{ value: 640201, label: '市辖区' }, { value: 640202, label: '大武口区' }, { value: 640205, label: '惠农区' }, { value: 640221, label: '平罗县' }]
  }, {
    value: 640300, label: '吴忠市', children: [{ value: 640301, label: '市辖区' }, { value: 640302, label: '利通区' }, { value: 640303, label: '红寺堡区' }, { value: 640323, label: '盐池县' }, { value: 640324, label: '同心县' }, { value: 640381, label: '青铜峡市' }]
  }, {
    value: 640400, label: '固原市', children: [{ value: 640401, label: '市辖区' }, { value: 640402, label: '原州区' }, { value: 640422, label: '西吉县' }, { value: 640423, label: '隆德县' }, { value: 640424, label: '泾源县' }, { value: 640425, label: '彭阳县' }]
  }, {
    value: 640500, label: '中卫市', children: [{ value: 640501, label: '市辖区' }, { value: 640502, label: '沙坡头区' }, { value: 640521, label: '中宁县' }, { value: 640522, label: '海原县' }]
  }]
}, {
  value: 650000, label: '新疆维吾尔自治区', children: [{
    value: 650100, label: '乌鲁木齐市', children: [{ value: 650101, label: '市辖区' }, { value: 650102, label: '天山区' }, { value: 650103, label: '沙依巴克区' }, { value: 650104, label: '新市区' }, { value: 650105, label: '水磨沟区' }, { value: 650106, label: '头屯河区' }, { value: 650107, label: '达坂城区' }, { value: 650109, label: '米东区' }, { value: 650121, label: '乌鲁木齐县' }]
  }, {
    value: 650200, label: '克拉玛依市', children: [{ value: 650201, label: '市辖区' }, { value: 650202, label: '独山子区' }, { value: 650203, label: '克拉玛依区' }, { value: 650204, label: '白碱滩区' }, { value: 650205, label: '乌尔禾区' }]
  }, {
    value: 650400, label: '吐鲁番市', children: [{ value: 650402, label: '高昌区' }, { value: 650421, label: '鄯善县' }, { value: 650422, label: '托克逊县' }]
  }, {
    value: 650500, label: '哈密市', children: [{ value: 650502, label: '伊州区' }, { value: 650521, label: '巴里坤哈萨克自治县' }, { value: 650522, label: '伊吾县' }]
  }, {
    value: 652300, label: '昌吉回族自治州', children: [{ value: 652301, label: '昌吉市' }, { value: 652302, label: '阜康市' }, { value: 652323, label: '呼图壁县' }, { value: 652324, label: '玛纳斯县' }, { value: 652325, label: '奇台县' }, { value: 652327, label: '吉木萨尔县' }, { value: 652328, label: '木垒哈萨克自治县' }]
  }, {
    value: 652700, label: '博尔塔拉蒙古自治州', children: [{ value: 652701, label: '博乐市' }, { value: 652702, label: '阿拉山口市' }, { value: 652722, label: '精河县' }, { value: 652723, label: '温泉县' }]
  }, {
    value: 652800, label: '巴音郭楞蒙古自治州', children: [{ value: 652801, label: '库尔勒市' }, { value: 652822, label: '轮台县' }, { value: 652823, label: '尉犁县' }, { value: 652824, label: '若羌县' }, { value: 652825, label: '且末县' }, { value: 652826, label: '焉耆回族自治县' }, { value: 652827, label: '和静县' }, { value: 652828, label: '和硕县' }, { value: 652829, label: '博湖县' }]
  }, {
    value: 652900, label: '阿克苏地区', children: [{ value: 652901, label: '阿克苏市' }, { value: 652922, label: '温宿县' }, { value: 652923, label: '库车县' }, { value: 652924, label: '沙雅县' }, { value: 652925, label: '新和县' }, { value: 652926, label: '拜城县' }, { value: 652927, label: '乌什县' }, { value: 652928, label: '阿瓦提县' }, { value: 652929, label: '柯坪县' }]
  }, {
    value: 653000, label: '克孜勒苏柯尔克孜自治州', children: [{ value: 653001, label: '阿图什市' }, { value: 653022, label: '阿克陶县' }, { value: 653023, label: '阿合奇县' }, { value: 653024, label: '乌恰县' }]
  }, {
    value: 653100, label: '喀什地区', children: [{ value: 653101, label: '喀什市' }, { value: 653121, label: '疏附县' }, { value: 653122, label: '疏勒县' }, { value: 653123, label: '英吉沙县' }, { value: 653124, label: '泽普县' }, { value: 653125, label: '莎车县' }, { value: 653126, label: '叶城县' }, { value: 653127, label: '麦盖提县' }, { value: 653128, label: '岳普湖县' }, { value: 653129, label: '伽师县' }, { value: 653130, label: '巴楚县' }, { value: 653131, label: '塔什库尔干塔吉克自治县' }]
  }, {
    value: 653200, label: '和田地区', children: [{ value: 653201, label: '和田市' }, { value: 653221, label: '和田县' }, { value: 653222, label: '墨玉县' }, { value: 653223, label: '皮山县' }, { value: 653224, label: '洛浦县' }, { value: 653225, label: '策勒县' }, { value: 653226, label: '于田县' }, { value: 653227, label: '民丰县' }]
  }, {
    value: 654000, label: '伊犁哈萨克自治州', children: [{ value: 654002, label: '伊宁市' }, { value: 654003, label: '奎屯市' }, { value: 654004, label: '霍尔果斯市' }, { value: 654021, label: '伊宁县' }, { value: 654022, label: '察布查尔锡伯自治县' }, { value: 654023, label: '霍城县' }, { value: 654024, label: '巩留县' }, { value: 654025, label: '新源县' }, { value: 654026, label: '昭苏县' }, { value: 654027, label: '特克斯县' }, { value: 654028, label: '尼勒克县' }]
  }, {
    value: 654200, label: '塔城地区', children: [{ value: 654201, label: '塔城市' }, { value: 654202, label: '乌苏市' }, { value: 654221, label: '额敏县' }, { value: 654223, label: '沙湾县' }, { value: 654224, label: '托里县' }, { value: 654225, label: '裕民县' }, { value: 654226, label: '和布克赛尔蒙古自治县' }]
  }, {
    value: 654300, label: '阿勒泰地区', children: [{ value: 654301, label: '阿勒泰市' }, { value: 654321, label: '布尔津县' }, { value: 654322, label: '富蕴县' }, { value: 654323, label: '福海县' }, { value: 654324, label: '哈巴河县' }, { value: 654325, label: '青河县' }, { value: 654326, label: '吉木乃县' }]
  }, {
    value: 659000, label: '自治区直辖县级行政区划', children: [{ value: 659001, label: '石河子市' }, { value: 659002, label: '阿拉尔市' }, { value: 659003, label: '图木舒克市' }, { value: 659004, label: '五家渠市' }, { value: 659006, label: '铁门关市' }]
  }]
}, {
  value: 710000, label: '台湾省'
}, {
  value: 810000, label: '香港'
}, {
  value: 820000, label: '澳门'
}];

var cities = city.sort(function (a, b) {
  return a.label.localeCompare(b.label, 'zh-Hans-CN', { sensitivity: 'accent' });
});
exports.default = cities;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.4';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
      rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = object[key],
          srcValue = source[key],
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(args) {
      args.push(undefined, customDefaultsAssignIn);
      return apply(assignInWith, undefined, args);
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(6)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
});