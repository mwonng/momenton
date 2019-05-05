const printIndent = require('./src/lib/lib');
const config      = require('./config/config');
const Employee    = require('./src/model/employee');
const employee    = new Employee();

// print valid employees
printEmployeeTree(employee, config.valid_manager_root_key, config.valid_tree_start_level, config.valid_key_triggle);

// print invalid employees
printEmployeeTree(employee, config.invalid_manager_root_key, config.invalid_tree_start_leve, config.invalid_key_trigger);


/**
 * @param {Instance} employee   employ instance
 * @param {String} root_key     root key name
 * @param {Int} start_deep      print indent start from, default is 0
 * @param {Bool} is_key_shown   if need to print root key name as top, default as false
 *
 */
function printEmployeeTree(employee, root_key, start_deep = 0, is_key_shown = false) {
    let roots = employee.index[root_key];
    let indent = printIndent(start_deep);

    if (roots.length > 0) {
        if (is_key_shown) {
            console.log("%s%s", indent, root_key);
        }
        employee.dfsFromNodes(root_key, is_key_shown ? start_deep + 1 : start_deep);
    }
}