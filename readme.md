# Summary
Below is employee data of a small company.
It represents the hierarchical relationship among employees. CEO of the company doesn't have a manager.


| Employee Name | id | Manager id |
| ----- | -----| ----|
| Alan | 100 | 150 |
| Martin | 220 | 100 |
| Jamie | 150 | |
| Alex | 275 | 100 |
| Steve | 400 | 150 |
| David | 190 | 400 |

Design a suitable representation of this data. Feel free to choose any database (RDBMS, in- memory database etc), file system or even a data structure like List or Map. Then write code (in any language and framework) that displays the organisation hierarchy as below:

| Jamie | | |
| ----- | ----- | ---- | ---- |
| | Alan | |
| | | Matin |
| | | Alex |
| | Steve | |
| | | David |

The result can be simply displayed on the console, or HTML page or even a file; whatever suits you.
Try to cover all the possible scenarios, for example an employee with no manager, a manager who is not valid employee; etc.
Pay more attention on writing the actual logic of representing the employee tabular data into the hierarchical format.

## Assume
- In this project, i assume every record in employee table should have `id` column and not empty or null (as a primary key)
- Every employee should not have more than one manager
- Employee could have a empty `manager_id`


## Test case

- employee have a manager who is not in this employee table.

- employee have a hierarchy with a valid manager who has a not invalid manager.

# Requirement
This repo are using Node.js with NPM/Yarn as package manager. Please refer link below for installation.

$ node --version  # check node version

this project are develop and test on Node v10.13.0. if you meet any error and please check your node version, please keep node version >= v10.10.0

- [Download Node.js ] (npm will installed within Node.js by default).

# Install Instruction

## Clone repo
to start work with GitHub, you have to had Git installed. I assume you already have git installed, but if you don't know, you can check in terminal

$ git --version  # check git version
if not installed, please redirec to [download Git]

$ git clone https://github.com/mwonng/momenton.git.git
$ cd robot-node-cli

## Install dependencies

Install dependencies via package manager.

$ npm install

or if you using Yarn.

$ yarn

## Test

```bash
$ yarn test  #or npm test
```