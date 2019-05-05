const printIndent = (indentDeep) => {
    let padding = "";
    for (let i = 0; i < indentDeep; i++) {
        padding += '\t';
    }
    return padding;
}

module.exports = printIndent;