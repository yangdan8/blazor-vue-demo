"use strict";
// tslint:disable-next-line: no-var-requires
const os = require("os");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

module.exports = class CopyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("CopyWebpackPlugin", (compiler) => {
      const from = path.resolve(__dirname, "../dist");
      const to = path.resolve(__dirname, "../../wwwroot");
      new Promise((resolve, reject) => {
        let cmd = "";
        switch (os.type().toLowerCase()) {
          case "windows_nt":
            cmd = `xcopy ${from} ${to} /e /q /y`;
            break;
          case "darwin":
          case "linux":
            cmd = `cp -r ${from} ${path.resolve(to, "../")}`;
            break;
        }
        console.log(`\n开始执行复制\n${cmd}\n`);
        exec(cmd, (error, stdout, stderr) => {
          if (error) {
            console.log(`\n复制到 ${to} 失败!\n`);
            reject(error);
            return;
          }
          console.log(`\n复制到 ${to} 成功!\n`);
          resolve(void 0);
        });
      });
    });
  }
};
