const { execSync } = require('child_process');
const cmd = prompt("> ")
const result = execSync(cmd).toString();
console.log("\n")
consol.log(result)
