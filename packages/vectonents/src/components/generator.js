const fs = require("fs");
const path = require("path");

const directory = __dirname;
const outputFile = path.join(directory, "index.ts");

// Read files in the current directory
const files = fs.readdirSync(directory)
  .filter(file => file.endsWith(".tsx")) // Only include TSX files
  .filter(file => file !== "index.tsx") // Exclude index file
  .filter(file => fs.statSync(path.join(directory, file)).isFile()) // Ensure it's a file
  .map(file => path.basename(file, path.extname(file))); // Remove extensions

// Generate export statements
const exportStatements = files.map(file => `export { default as ${file} } from "./${file}";`).join("\n");

// Write to index.ts
fs.writeFileSync(outputFile, exportStatements + "\n", "utf8");

console.log("index.ts generated successfully🔥✅");
// console.log(exportStatements);
