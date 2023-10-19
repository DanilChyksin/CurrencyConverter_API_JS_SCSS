const key = "22b660833766966bb322ddf0";
export default {
  url: `https://v6.exchangerate-api.com/v6/${key}`,
  codes: [],
  pair: {
    from: "",
    to: "",
  },
  amount: "",
  loading: false,
  currentTab: "convert",
  currency: {
    code: "USD",
  },
  currencies: ["USD", "EUR", "BYN"],
  actions: {
    remove: "remove",
    change: "change",
  },
};
