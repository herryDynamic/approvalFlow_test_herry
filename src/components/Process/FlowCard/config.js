/*
 * @Author: herry 
 * @Date: 2020-08-24 16:00:28 
 * @Last Modified by: herry
 * @Last Modified time: 2020-08-24 16:11:33
 */
export default {
  start: {
    type: "start",
    content: "所有人",
    properties: { title: '发起人', initiator: 'ALL' }
  },
  approver: {
    type: "approver",
    content: "请设置审批人",
    properties: { title: '审批人' }
  },
  condition: {
    type: "condition",
    content: "请设置条件",
    properties: { title: '条件', conditions: [], initiator: null }
  },
  empty: { type: "empty", content: "", properties: {} }
}


export const approverConf = {
  specified: {
    label: '指定成员',
    value: []
  },
  selfSelection: {
    label: '自选',
    value: [],
  }
}