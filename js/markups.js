import state from "./state.js";
import { getFullTitle } from "./utils.js";

export const renderResult = ({ code, amount, full }) => {
  return `
  <div class="from-result_item-icon icon">
  <svg
    fill="#000000"
    width="18px"
    height="18px"
    viewBox="0 0 24 24"
    id="down-arrow-circle"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    class="icon flat-line"
  >
    <path
      id="secondary"
      d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm2.83,10.5-2.14,3.12a.82.82,0,0,1-1.38,0L9.17,13.5A1,1,0,0,1,9.86,12h4.28A1,1,0,0,1,14.83,13.5Z"
      style="fill: rgb(44, 169, 188); stroke-width: 2"
    ></path>
    <path
      id="primary"
      d="M12,7v5m.69,4.63,2.14-3.13a1,1,0,0,0-.69-1.5H9.86a1,1,0,0,0-.69,1.5l2.14,3.12A.82.82,0,0,0,12.69,16.63ZM12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Z"
      style="
        fill: none;
        stroke: rgb(0, 0, 0);
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      "
    ></path>
  </svg>
</div>
<div class="form-result_item-titles">
<div class="form-result_item-title">${code}</div>
<div class="form-result_item-full">${full}</div>
</div>
<div class="form-result_item-value">${amount.toFixed(2)}</div>
  `;
};
const getCurrencyItemAction = (isBase) => {
  const {
    actions: { remove, change },
  } = state;
  const actionName = isBase ? change : remove;
  return ` 
  <button class="currency-${actionName} currency-button" data-action="${actionName}">${actionName}</button>`;
};

export const renderCurrencyItem = ({ code, base_code: baseCode, rate = 1 }) => {
  const isBase = code == baseCode;
  const action = getCurrencyItemAction(isBase);
  const full = getFullTitle(state.codes, code);
  return ` 
  <div class="currency-item ${
    isBase ? "currency-current" : ""
  }" data-item="${code}">
  <div class="currency-titles">
    <div class="currency-title">${code}</div>
    <div class="currency-full">${full}</div>
  </div>
  <div class="currency-amount">${rate.toFixed(2)}</div>
  <div class="currency-action">${action}</div>
</div>`;
};
