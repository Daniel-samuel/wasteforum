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
    roles: [],
    all: [],
  }),

  getters: {
    getRoles: (state) => state.roles,
    getAll: (state) => state.all,
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
