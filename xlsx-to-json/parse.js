// node-xlsx读取xlsx文件
const xlsx = require('node-xlsx');
// fs模块输出文件
const fs = require('fs');

// 读取文件名，命令行参数
const fileName = process.argv[2];

const fileData = xlsx.parse(fileName);
const sheetName = fileData.map(item => item.name);

let sheetData = null;

// sheet名，没有就默认第一个sheet
if (process.argv[3]) {
  sheetData = fileData[sheetName.indexOf(process.argv[3])].data;
} else {
  sheetData = fileData[0].data;
}

// 拿到表头
const headerData = sheetData.splice(0, 1).flat();
const res = {};

// 循环将二维数组转成每个字段对应一列数据
sheetData.forEach(it1 => {
  it1.forEach((it2, idx2) => {
    if (res[headerData[idx2]]) {
      res[headerData[idx2]].push(it2);
    } else {
      res[headerData[idx2]] = [it2];
    }
  })
})

// 输出到output目录下
fs.writeFileSync('./output/demo.js', `export default ${JSON.stringify(res)}`);