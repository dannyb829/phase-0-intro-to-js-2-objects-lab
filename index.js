// Write your solution in this file!
const employee = {}

function updateEmployeeWithKeyAndValue(obj, k, v) {
    return {...obj,[k] : v}
} 

function destructivelyUpdateEmployeeWithKeyAndValue(obj, k, v) {
    obj[k] = v;
    return obj;
}

function deleteFromEmployeeByKey(obj, k) {
    const newObj = {...obj}
    delete newObj[k]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj, k) {
    delete obj[k]
    return obj
}