import test from 'ava';
import printIndent from '../src/lib/lib';
import Employee from '../src/model/employee';
import config from '../config/config';

test.before( t=>{
    t.context.employee = new Employee();
});

test("findEmployee() should return a employee with valid id", t => {
    let employee = t.context.employee;
    let employeeAlan = employee.findEmployee(100);
    t.deepEqual(employeeAlan,{
        "id": 100,
        "employee_name": "Alan",
        "manager_id": 150
    });
})

test("findEmployee() should return a undefined with valid id", t => {
    let employee = t.context.employee
    let employeeError = employee.findEmployee(0);
    t.deepEqual(employeeError, undefined);
})

test("generateIndex() should return node array", t => {
    let employee = t.context.employee
    let nodeArray = employee.generateIndex("root", "invalid");

    t.deepEqual(nodeArray['150'].length, 2);
    t.deepEqual(nodeArray['100'].length, 2);
    t.deepEqual(nodeArray['400'].length, 1);
    t.deepEqual(nodeArray['root'].length, 1);
    t.deepEqual(nodeArray['invalid'], undefined);
})

test("getRootEmployees() should returen all user without manager_id", t => {
    let employee = t.context.employee
    let root = employee.getRootEmployees(config.valid_manager_root_key);
    t.deepEqual(root, [{id: 150, deep: 0}]);
})