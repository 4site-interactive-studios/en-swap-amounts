/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/app/utils/en-swap-amounts.js
class enSwapAmounts {
  constructor() {
    if (this.shouldRun()) {
      if (document.readyState !== "loading") {
        this.init();
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          this.init();
        });
      }

      return;
    }
  }

  init() {
    console.log("enSwapAmounts init");
    document.addEventListener("change", e => {
      const element = e.target;

      if (element && element.name == "transaction.recurrpay") {
        const recurring = element.value;
        this.swapAmounts(recurring.toUpperCase());
      }
    }); // Current Frequency Swap

    const currentFrequency = document.querySelector('[name="transaction.recurrpay"]:checked');

    if (currentFrequency) {
      window.setTimeout(() => {
        this.swapAmounts(currentFrequency.value.toUpperCase());
      }, 300);
    }
  }

  shouldRun() {
    // Only run if there's a donation form and the recurrency elements
    const donationForm = document.querySelector("form.en__component");
    const recurrpay = document.getElementsByName("transaction.recurrpay");

    if (donationForm && recurrpay.length) {
      return true;
    }

    return false;
  }

  getUrlParameter(name) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(name);
  }

  getFieldValue(name) {
    return new FormData(document.querySelector("form.en__component")).getAll(name).join(",");
  }

  swapAmounts(recurring) {
    const recurringOptions = {
      N: "single",
      Y: "monthly"
    };
    let newValues,
        defaultValue = "";

    if (window.hasOwnProperty("enSwapAmountsOptions") && window.enSwapAmountsOptions.hasOwnProperty(recurringOptions[recurring])) {
      newValues = this.getFieldValue(window.enSwapAmountsOptions[recurringOptions[recurring]]);
      defaultValue = this.getFieldValue(window.enSwapAmountsOptions[recurringOptions[recurring] + "-default"]);
    }

    newValues = newValues || this.getUrlParameter(recurringOptions[recurring]);
    defaultValue = defaultValue || this.getUrlParameter(recurringOptions[recurring] + "-default");

    if (newValues) {
      const loadEnAmounts = (amountArray, amountDefault) => {
        let ret = [];
        amountArray.forEach(amount => {
          ret.push({
            selected: amount === amountDefault,
            label: "$" + amount,
            value: amount.toString()
          });
        });
        ret.push({
          selected: false,
          label: "Other",
          value: "Other"
        });
        console.log("loadEnAmounts", ret);
        return ret;
      };

      const amountArray = newValues.split(",");

      window.EngagingNetworks.require._defined.enjs.swapList("donationAmt", loadEnAmounts(amountArray, defaultValue || amountArray[0]), {
        ignoreCurrentValue: !window.EngagingNetworks.require._defined.enjs.checkSubmissionFailed()
      });

      console.log("Amounts Swapped To", amountArray, defaultValue);
    }
  }

}
;// CONCATENATED MODULE: ./src/app/app.js

/* harmony default export */ var app = (enSwapAmounts);
;// CONCATENATED MODULE: ./src/index.js

new app();
/******/ })()
;