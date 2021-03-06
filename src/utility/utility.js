// Initial state for Approvals Reducer
const createInitialState = () => {
  let requestNum = 1;
  let count = 100;
  let result = [];

  while (count) {
    let newEntry = {};
    newEntry.id = uniqueId("_");
    newEntry.request = "Rick Sanchez #" + requestNum.toString();
    newEntry.workFlow = "Rick Sanchez";
    newEntry.requestor = "Rick Sanchez";
    newEntry.status = requestNum % 2 === 0 ? "open" : "closed";
    if (requestNum % 7 === 0) {
      newEntry.approval = "pending";
    } else if (requestNum % 3 === 0) {
      newEntry.approval = "approved";
    } else {
      newEntry.approval = "rejected";
    }
    newEntry.approvalStatuses =
      requestNum % 2 === 0
        ? ["underReview", "approved"]
        : ["approved", "underReview"];
    newEntry.days = 8;
    newEntry.priority = "normal";
    newEntry.listType = requestNum % 4 === 0 ? "myRequests" : "myApprovals";
    requestNum++;
    count--;
    result.push(newEntry);
  }

  return result;
};

const uniqueId = (function () {
  let num = 0;
  return function (prefix) {
    prefix = String(prefix) || "";
    num += 1;
    return prefix + num;
  };
})();

module.exports = { createInitialState, uniqueId };
