import { uniqueId } from "../utility/utility";

export const getListTypeTotalCountForDonutChart = (approvals, type) => {
  let count = approvals.reduce((count, { listType }) => {
    if (listType === type) count += 1;
    return count;
  }, 0);

  return count;
};

export const getListTypeApprovalStatusCountForDonutChart = (
  approvals,
  type
) => {
  let count = approvals.reduce((countObj, { listType, approval }) => {
    if (listType === type) {
      countObj[approval] = countObj[approval] + 1 || 1;
    }
    return countObj;
  }, {});

  return count;
};

// let data = [
//   { id: 100, label: "Approved", count: 25, color: "green" },
//   { id: 101, label: "Pending", count: 26, color: "orange" },
//   { id: 102, label: "Rejected", count: 26, color: "red" },
// ];
export const getListTypeApprovalStatusCountForPanel = (approvals, type) => {
  let countObj = getListTypeApprovalStatusCountForDonutChart(approvals, type);
  let panelArr = [];

  for (let status in countObj) {
    let newObj = {
      id: uniqueId(status),
      count: countObj[status],
      label: status,
    };

    if (status === "approved") {
      newObj.label = "Approved";
      newObj.color = "teal";
    } else if (status === "pending") {
      newObj.label = "Pending";
      newObj.color = "orange";
    } else if (status === "rejected") {
      newObj.label = "Rejected";
      newObj.color = "red";
    }
    panelArr.push(newObj);
  }

  return panelArr;
};

export const getDataForTable = (approvals, type) => {
  return approvals.reduce((acc, approval) => {
    if (approval.listType === type) {
      acc.push(approval);
    }
    return acc;
  }, []);
};
