#! /usr/bin/env node

const {
    spawn
} = require("child_process");
const path = require("path");


spawn(`electron`, [`${path.join(__dirname, "../index.js")}`], {
    detached: true // 脱离主进程
});

process.exit();