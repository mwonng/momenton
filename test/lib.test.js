import test from 'ava';
import printIndent from '../src/lib/lib';

test("indent should works", t => {
    let indent = printIndent(1);
    t.is(indent, '\t');
})

test("2 indent should works", t => {
    let indent = printIndent(2);
    t.is(indent, '\t\t');
})