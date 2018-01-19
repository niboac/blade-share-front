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
exports.cities = exports.industries = exports.companyTypes = exports.bankCodes = exports.taskTypeBtnShow = exports.houseTypes = exports.allOrientations = exports.housingSituations = exports.relationshipType = exports.rwApplicant = exports.businessTypes = exports.periods = exports.maritalStatus = exports.time = exports.applicantRelationshipTypes = exports.relationshipTypes = exports.professionTypes = exports.livingConditions = exports.educations = exports.houseCities = exports.loanPurposes = exports.loanPurposesGuoyu = exports.mortgageSituations = exports.companySizes = exports.officeOwnerTypes = exports.ownerTypes = exports.landGains = exports.planningPurposes = exports.buildingTypes = exports.professionalTitles = exports.titles = exports.propertyTypes = exports.professionCatTypes = exports.genders = exports.addressTypes = exports.commonResidents = exports.flowKey2ImgTasktype = exports.taskType2Submit = exports.orderType2BusinessTypes = exports.businessTypes2OrderType = exports.clientWorkTypes = exports.diyaFailedReasons = exports.diyaRejectReasons = exports.diyaResults = exports.orderDetailDefault = exports.orderDetailLabel = exports.person_bankDefault = exports.person_bankLabel = exports.house_hlMortgageDefault = exports.house_hlMortgageLabel = exports.appointDefault = exports.houseDefault = exports.applicantDefault = exports.childrenDefault = exports.unionBorrowerDefault = exports.hlMortgageDefault = exports.orderDefault = exports.hetongInfoDefault = exports.bankInfoDefault = exports.xiahuAcompanyInfoDefault = exports.diyaInfoDefault = exports.appointLabel = exports.xiahuAcompanyInfoLabel = exports.diyaInfoLabel = exports.hetongInfoLabel = exports.childrenLabel = exports.orderLabel = exports.hlMortgageLabel = exports.unionBorrowerLabel = exports.houseLabel = exports.applicantLabel = exports.bankInfoLabel = exports.blockSetting = exports.blockSettingWeb = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function clone(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return obj;
  } else if (!obj) {
    // null
    return obj;
  } else {
    var newobj = null;
    if (obj instanceof Set) {
      newobj = new Set([].concat(_toConsumableArray(obj)));
    } else if (obj instanceof Map) {
      newobj = new Map();
      obj.forEach(function (i, key) {
        newobj.set(key, clone(i));
      });
    } else {
      newobj = obj instanceof Array ? [] : {};
      for (var i in obj) {
        newobj[i] = _typeof(obj[i]) === 'object' ? clone(obj[i]) : obj[i];
      }
    }
    return newobj;
  }
}

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
  platform: '进件来源'
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
  extra: {},
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

var house_hlMortgageLabel = exports.house_hlMortgageLabel = clone(houseLabel);
house_hlMortgageLabel.hlMortgage = [clone(hlMortgageLabel)];
var house_hlMortgageDefault = exports.house_hlMortgageDefault = clone(houseDefault);
house_hlMortgageDefault.hlMortgage = [clone(hlMortgageDefault)];

var person_bankLabel = exports.person_bankLabel = Object.assign(clone(applicantLabel), clone(bankInfoLabel));
var person_bankDefault = exports.person_bankDefault = Object.assign(clone(applicantDefault), clone(bankInfoDefault));

var orderDetailLabel = exports.orderDetailLabel = Object.assign(clone(applicantLabel), clone(orderLabel));
var orderDetailDefault = exports.orderDetailDefault = Object.assign(clone(applicantDefault), clone(orderDefault));

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
        imgUrls: [{ label: '婚姻证明', group: 'marriage', limit: 10, uploadType: 'multiPic' }, { label: '户口本', group: 'household', limit: 10, uploadType: 'multiPic' }, { label: '房产证', group: '房产证', limit: 10, uploadType: 'multiPic' }, { label: '其他资料', group: 'other', limit: 20, uploadType: 'multiPic' }],
        backRoutePath: '/nd/buchong'
      },
      进件上传图片: {
        iconKey: 'icon-zhaopian',
        imgUrls: [{ label: '婚姻证明', group: 'marriage', limit: 10, uploadType: 'multiPic' }, { label: '户口本', group: 'household', limit: 10, uploadType: 'multiPic' }, { label: '房产证', group: '房产证', limit: 10, uploadType: 'multiPic' }, { label: '其他资料', group: 'other', limit: 10, uploadType: 'multiPic' }],
        backRoutePath: '/nd/index'
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

var cities = city;
exports.default = cities;

/***/ })
/******/ ]);
});