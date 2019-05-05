const data = require('../../datasource/employees.json');
const config = require('../../config/config');
const printIndent = require('../lib/lib');

class Employee {
    constructor() {
        this.data = data;
        this.index = this.generateIndex(config.valid_manager_root_key, config.invalid_manager_root_key);
    }

    findEmployee(id){
        return this.data.find( element => element.id === id);
    }

    generateIndex(valid_key, invalid_key){
        let index = {};
        this.data.forEach( elem =>
            {
                let primary;
                if (elem.manager_id === undefined) {
                    primary = valid_key;
                } else {
                    primary = this.findEmployee(elem.manager_id, this.data) ? elem.manager_id : invalid_key;
                }

                let value = elem.id;
                if (index[primary] === undefined) {
                    index[primary] = [value]
                } else {
                    index[primary].push(value);
                }
            }
        )
        return index;
    }

    getRootEmployees(key, start_deep = 0) {
        let result = [];
        result = this.index[key].map( memberIndex => {
            return {
                id: this.findEmployee(memberIndex, this.data).id,
                deep: start_deep
            }
        });
        return result;
    }

    dfsFromNodes(root_key, start_deep = 0) {

        let current_stack = this.getRootEmployees(root_key, start_deep);

        while (current_stack.length > 0) {
            let vertex = current_stack.pop();
            let parent_deep = vertex.deep;
            var indent = printIndent(vertex.deep);
            let employee_name = this.findEmployee(vertex.id).employee_name;

            console.log("%s%s", indent, employee_name);

            let vertexChildren = this.index[vertex.id];
            if (vertexChildren !== undefined) {
                // deep = parent_deep + 1;
                vertexChildren.forEach( child => {
                    current_stack.push({
                        id: child,
                        deep: parent_deep + 1
                    });
                })
            }
        }
    }
}

module.exports = Employee;