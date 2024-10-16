//store can be defined similar to the composition API setup, but it doesn't work as expected.
import { defineStore } from "pinia";
import { MUTATE, QUERY } from "../api/index.js";
import { logout } from "@/api/api";

// const defaultState = {
//   name: "Eazipay",
//   count: 0,
//   isLoggedIn: false,
//   loading: false,
//   allowance: {},
//   listEmployees: {},
//   listStaffLevel: {},
// };

export const useDataStore = defineStore("main", {
  state: () => ({
    name: "Eazipay",
    count: 0,
    isLoggedIn: false,
    fromApp: false,
    tourLevel: null,
    loading: false,
    currentPageIndex: 0,
    listKyc: {},
    successfullyAdded: [],
    companyKyc: {},
    pageIndex: 0,
    viewFromArchived: false,
    allowance: {},
    complianceItem: "",
    listEmployees: {},
    listTaxFiling: {},
    previewCompliance: {},
    listCompliance: {},
    listEmployeeCompliance: {},
    listBonusAndDeduction: [],
    bonusOrDeductionHistory: {},
    bonuses: [],
    deductions: [],
    listArchivedEmployees: {},
    listDepartments: {},
    listBranches: {},
    listStaffLevel: {},
    subscriptionCharge: {},
    salaryArray: [],
    tempStoreBen: [],
    tempBonusIds: [],
    tempDeductionIds: [],
    tempAllowanceData: [],
    profileArr: [],
    userName: "",
    payrollData: [],
    payrollDate: "",
    allowanceNames: [],
    payrollForMonth: null,
    bonusorDed: "Bonus",
    uploadTemplate: "",

    allSecurityQuestions: [],
    userSecurityQuestions: [],

    suggestedPayroll: {},
    suggestedEmployees: {},
    suggestedBonus: [],

    previewPayroll: [],
    listPayrollHistory: {},
    totalPayroll: {},
    walletBalance: 0,
    transactionHistory: [],

    bookkeepingInventory: null,
    bookkeepingInventoryStats: null,
    bookkeepingCategories: null,
    bookkeepingClients: {},
    bookkeepingInvoices: {},
    bookkeepingReceipts: {},
    companyAdmin: {},
    companyDetails: [],
    companyAccountDetails: [],
    founders: [],
    directors: [],
    referralCode: [],

    allBanks: [],
    roles: {},
    privileges: {},
    payStackResponse: {},
    walletReport: [],
    payrollReport: [],
    payrollDetailReport: [],
    payrollAnalysis: [],
    payrollAutomations: [],
    activities: [],

    salaryAdvanceEmployees: null,

    loans: [],
    loanContract: {},
    employeeArrayForPayroll: [],
    statutoryDeductions: [
      {
        label: "paye",
        value: "PAYE",
      },
      { label: "pension", value: "Pension" },
      { label: "nhf", value: "NHF" },
      { label: "nsitf", value: "NSITF" },
      { label: "itf", value: "ITF" },
      { label: "wht", value: "WHT" },
      // { label: "lifeInsurance", value: "Group_Life_Insurance" },
      { label: "life Assurance", value: "Employee_Life_Assurance" },
      { label: "hmo", value: "HMO" },
      // { label: "businessExpense", value: "Business_Expense" },

      // { label: "gratuity", value: "Gratuity" },
    ],
    eligibleLoanAmount: {},
    repaymentType: "",
    createLoanArgs: {
      input: {
        type: "",
        termsAndConditionsAccepted: true,
        purpose: "",
        termsAndConditions: "",
        loanAmount: "",
        employeeIds: [],
        durationPeriod: "MONTH",
        duration: 0,
      },
      businessInformation: {
        yearsInLocation: "",
        totalEmployees: "0",
        title: "",
        sixMonthsRevenueUrl: "",
        sixMonthsProjectedRevenueUrl: "",
        sixMonthsExpensesUrl: "",
        residentialAddress: "",
        receivedLoansInNGbefore: false,
        ongoingLoanFacility: false,
        monthAndYearOppCommenced: "",
        loanAmountReceived: "0",
        lastMonthRevenue: "0",

        lastMonthExpenses: "0",

        evidenceOfRevAndExpUrl: "",
        endDate: "",
        evidenceOfOwnershipUrl: "",
        dateReceived: "",
        companyRegisteredName: "",
        businessType: "",
        businessOwnership: false,
      },
      paymentDetails: {
        repaymentType: "",
        bankName: "",
        bankCode: "",
        bankBranch: "",
        accountType: "",
        accountNumber: "",
        accountName: "",
      },

      guarantorInformation: [
        {
          relationship: "",
          phoneNumber: "",
          fullName: "",
          email: "",
          bvn: "",
        },
        {
          relationship: "",
          phoneNumber: "",
          fullName: "",
          email: "",
          bvn: "",
        },
      ],
      loanDocuments: {
        sixMonthsBankStatement: "",

        proofOfResidentialAddress: "",

        proofOfOfficeAddress: "",

        loanApplicationLetter: "",

        financialAudit: "",

        constitutionalDocuments: [],

        collateral: "",

        cacRegisteredDocuments: [],

        cacDocument: "",

        boardOfDirectorsResolution: [],
      },
      assetInformation: {
        totalPurchasePrice: "",
        pricePerUnit: "",
        modelNo: "",
        intendedUseOfAsset: "",
        inflow: "",
        description: "",
        brand: "",
        assetQuantity: "",
      },
    },

    //New Loan
    currentLoan: null,

    // API
    apiContribution: null,
    apiProducts: null,
    apiCalls: [],
    apiKeys: null,
    apiTeams: [],
    apiProfile: null,
    singleComplianceTransactionDetails: {},
    singleComplianceSummary: {},
    listComplianceRegistration: [],
    listComplianceTransaction: {},
    reasonForFailure: {},
  }),

  getters: {
    getReasonForFailure: (state) => state.reasonForFailure,
    getIsLoggedIn: (state) => state.isLoggedIn,
    checkFromApp: (state) => state.fromApp,
    doubleCount: (state) => state.count * 2,
    getsingleComplianceTransactionDetails: (state) => state.singleComplianceTransactionDetails,
    getSingleComplianceSummary: (state) => state.singleComplianceSummary,
    getSingleComplianceTransaction: (state) =>
      state.listComplianceTransaction && state.listComplianceTransaction.data
        ? state.listComplianceTransaction.data
        : [],
    getSingleComplianceReg: (state) =>
      state.listComplianceRegistration && state.listComplianceRegistration.data
        ? state.listComplianceRegistration.data
        : [],
    getStatutoryDeductions: (state) => state.statutoryDeductions,
    getSubscriptionCharge: (state) =>
      state.subscriptionCharge && state.subscriptionCharge.data ? state.subscriptionCharge.data : {},
    getKyc: (state) => state.listKyc,
    getCompanyKyc: (state) => state.companyKyc,
    getLoanArgs: (state) => state.createLoanArgs,
    getEligibleLoanAmount: (state) => state.eligibleLoanAmount,
    getRepaymentType: (state) => state.repaymentType,

    ///// New Loan ////
    getCurrentLoan: (state) => state.currentLoan,

    getPageIndex: (state) => state.pageIndex,
    getSuccessNumber: (state) => state.successfullyAdded,

    getSalaryAdvanceEmployee: (state) => state.salaryAdvanceEmployees,

    getAllBonuses: (state) => (state.bonuses && state.bonuses.data ? state.bonuses.data : []),
    getAllDeductions: (state) => (state.deductions && state.deductions.data ? state.deductions.data : []),
    getTourLevel: (state) => state.tourLevel,
    salaryData: (state) => state.salaryArray,
    tempBenData: (state) => state.tempStoreBen,
    tempBonusData: (state) => state.tempBonusIds,
    tempDeductionData: (state) => state.tempDeductionIds,
    tempAllowData: (state) => state.tempAllowanceData,
    profileData: (state) => state.profileArr,
    listAllowance: (state) => state.allowance,
    getAllBranches: (state) => state.listBranches,
    getAllDepartments: (state) => state.listDepartments,
    getAllTaxFiling: (state) => state.listTaxFiling,
    getAllEmployees: (state) => {
      const month = new Date().getMonth();
      const year = new Date().getFullYear();

      if (state.listEmployees && state.listEmployees.data && state.listEmployees.data.length > 0) {
        const data = state.listEmployees.data.map((el) => {
          if (el.prorate && Array.isArray(el.prorate) && el.prorate.length > 0) {
            const prorate = el.prorate.filter((ol) => month == ol.month && year === ol.year);
            el.prorate = prorate.length > 0 ? prorate[0] : {};
          }
          if (el.prorate && el.prorate.staffLevel) {
            el["originalSL"] = el.staffLevel; //keep the original one
            //use prorated staffleve if it exists
            el.staffLevel = el.prorate.staffLevel;
          }
          return el;
        });

        return {
          data,
          count: state.listEmployees.count,
        };
      } else {
        return {
          data: [],
          count: 0,
        };
      }
    },
    getBonusAndDeduction: (state) =>
      state.listBonusAndDeduction && state.listBonusAndDeduction.data ? state.listBonusAndDeduction.data : [],
    getMostRecentBonusOrDeduction: (state) =>
      state.bonusOrDeductionHistory && state.bonusOrDeductionHistory.data ? state.bonusOrDeductionHistory.data : {},
    getCompliance: (state) => state.listCompliance,
    getEmployeeCompliance: (state) => (state.listEmployeeCompliance ? state.listEmployeeCompliance.data : []),
    getCompliancePreview: (state) => state.previewCompliance,
    viewComplianceItem: (state) => state.complianceItem,
    getPayrollData: (state) => state.payrollData,
    getPayrollDate: (state) => state.payrollDate,
    getPayrollPreview: (state) => state.previewPayroll,
    getTotalPayroll: (state) => state.totalPayroll,
    getAllowanceNames: (state) => state.allowanceNames,
    getCompanyAdmin: (state) => state.companyAdmin,

    getBookingInventory: (state) => state.bookkeepingInventory,
    getInventoryItemById: (state) => (id) => {
      if (!state.bookkeepingInventory) return null;
      const inventory = state.bookkeepingInventory.docs;
      return inventory.find((el) => el._id === id);
    },
    getBookingInventoryStats: (state) => state.bookkeepingInventoryStats,
    getBookingCategories: (state) => state.bookkeepingCategories,
    getCategoryById: (state) => (id) => {
      if (!state.bookkeepingCategories) return null;
      const categories = state.bookkeepingCategories;
      return categories.find((el) => el._id === id);
    },
    getBookkeepingClients: (state) => state.bookkeepingClients && state.bookkeepingClients,
    getBookkeepingInvoices: (state) => state.bookkeepingInvoices && state.bookkeepingInvoices,
    getBookkeepingReceipts: (state) => state.bookkeepingReceipts && state.bookkeepingReceipts,

    getCompanyDetails: (state) => {
      const company = state.companyDetails && state.companyDetails.find((el) => el.selectedCompany);
      return company;
    },
    allCompanyDetails: (state) => state.companyDetails,
    getReferralCode: (state) => state.referralCode,
    getAllBanks: (state) => state.allBanks,
    getFounders: (state) => state.founders,
    getDirectors: (state) => state.directors,
    getRoles: (state) => state.roles,
    getPrivileges: (state) => state.privileges,
    hasPrivilege: (state) => (privilegeArr) => {
      // return state.privileges.some(privilege => privilege.title === privilegeArr);
      return state.privileges.data.some((element) => privilegeArr.includes(element.title.toLowerCase())) || false;
    },
    getUserName: (state) => state.userName,
    getBonusorDed: (state) => state.bonusorDed,
    getViewFromArchived: (state) => state.viewFromArchived,
    getWalletBalance: (state) => state.walletBalance,
    getCompanyAccountDetails: (state) => state.companyAccountDetails,
    getTransactionHistory: (state) => state.transactionHistory,
    getPayrollHistory: (state) => state.listPayrollHistory,
    getPayrollHistoryForMonth: (state) => state.payrollForMonth,
    getRecentActivities: (state) => state.activities,
    getArchivedEmployeeById: (state) => (id) => {
      return state.listArchivedEmployees.data.find((el) => el._id === id);
    },

    getEmployeeById: (state) => (id) => {
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      const empData =
        state.listEmployees && state.listEmployees.data && state.listEmployees.data.filter((el) => el._id === id);
      const data = empData.map((el) => {
        if (el.prorate && Array.isArray(el.prorate) && el.prorate.length > 0) {
          const prorate = el.prorate.filter((ol) => month == ol.month && year === ol.year);
          el.prorate = prorate.length > 0 ? prorate[0] : {};
        }
        if (el.prorate && el.prorate.staffLevel) {
          el["originalSL"] = el.staffLevel; //keep the original one
          //use prorated staffleve if it exists
          el.staffLevel = el.prorate.staffLevel;
        }
        return el;
      });
      return data[0];
    },
    getBonusOrDedById: (state) => (id) => {
      return state.listBonusAndDeduction && state.listBonusAndDeduction.data.find((el) => el._id === id);
    },
    checkLoading: (state) => state.loading,
    getPayStackResponse: (state) => state.payStackResponse,
    getWalletReport: (state) => state.walletReport,
    getPayrollReport: (state) => state.payrollReport,
    getPayrollDetailReport: (state) => state.payrollDetailReport,
    getPayrollAnalysis: (state) => state.payrollAnalysis,
    getPayrollAutomation: (state) =>
      state.payrollAutomations && state.payrollAutomations.data ? state.payrollAutomations.data : [],
    getUserSecurityQuestions: (state) => state.userSecurityQuestions.data,
    getAllSecurityQuestions: (state) => state.allSecurityQuestions.data,
    getSecurityQuestions: (state) => state.securityQuestions.data,

    getActiveSecurityQuestion: (state) => (state.userSecurityQuestions ? state.userSecurityQuestions.data : []),
    getAllLoans: (state) => state.loans,
    getLoanById: (state) => (id) => {
      return state.loans.data.find((el) => el._id === id);
    },
    getLoanContract: (state) => state.loanContract,
    getEmployeeArrayForPayroll: (state) => state.employeeArrayForPayroll,

    //API
    getContribution: (state) => state.apiContribution,
    getAllproducts: (state) => state.apiProducts,
    getAllApiCalls: (state) => state.apiCalls,
    getAPIKeys: (state) => state.apiKeys,
    getApiTeams: (state) => state.apiTeams,
    getApiProfile: (state) => state.apiProfile,
  },

  actions: {
    increment() {
      this.count++;
    },
    reset() {
      Object.assign(this, defaultState);
    },
    resetVariable(variableName) {
      // Get the initial value based on the variable name
      if (Array.isArray(this[variableName])) {
        this[variableName] = [];
      } else if (typeof this[variableName] === "object") {
        this[variableName] = {};
      } else if (typeof this[variableName] === "string") {
        this[variableName] = "";
      } else if (typeof this[variableName] === "number") {
        this[variableName] = 0;
      }

      // Set the variable to its initial value
    },
    async payClicks({ endpoint, payload, service, storeKey }) {
      try {
        return await QUERY(endpoint, payload, service, storeKey);
      } catch (e) {
        console.log(e);
      }
    },

    async mutate({ endpoint, data, service }) {
      const paymentPoints = [
        "SendPayment",
        "ProcessPayroll",
        "BillPayment",
        "MobileTopup",
        "PayElectricityBill",
        "PayTvBill",
        "PayInternetBill",
        "Withdraw",
        "ProcessPayrollMultiple",
      ];
      try {
        if (paymentPoints.includes(endpoint)) {
          await this.payClicks({
            endpoint: "PayclicksV3",
            payload: { input: { apiName: endpoint, payload: data.input } },
            service: "PAYROLL",
            storeKey: undefined,
          });
        }
        return MUTATE(endpoint, data, service);
      } catch (e) {
        console.log("Error in payment points", e);
      }
    },

    async query({ endpoint, payload, service, storeKey }) {
      try {
        const res = await QUERY(endpoint, payload, service, storeKey);

        if (res) {
          if (storeKey) {
            this[storeKey] = res;
          }
          return res;
        }
        // else if (res == undefined) {
        //   logout("logout");
        // }
      } catch (e) {
        console.log(e);
        return e;
      }
    },

    // query({ endpoint, payload, service, storeKey }) {
    //   return QUERY(endpoint, payload, service, storeKey)
    //     .then((res) => {
    //       console.log(storeKey, "/", res);
    //       this[storeKey] = res;
    //       console.log(this[storeKey], "<<>>");
    //       return res;
    //     })
    //     .catch((e) => console.log(e));
    // },
  },
  persist: true,
});
