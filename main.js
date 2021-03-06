#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const { doesNotThrow } = require("assert");
// let fs = require("fs");
// let path = require("path");
let helpObj = require("./commands/help");
let organizeObj = require("./commands/organize");
let treeObj = require("./commands/tree");
let wcatObj = require("./commands/wcat");

let command = inputArr[0];
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    case "wcat":
        wcatObj.wcatKey(inputArr.slice(1));
        break;
    default:
        console.log("Please Input Right Command ");
        break;
}





