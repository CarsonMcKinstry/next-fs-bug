import fs from "fs";

const bar = () => {
  const dir = fs.readdirSync(process.cwd());
  console.log(dir);
};

export default bar;
