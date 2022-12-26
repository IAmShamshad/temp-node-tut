const path=require('path');


console.log(path.sep);//will return platform specific seperator


const filepath=path.join('/content','subfolder','test.txt')
console.log(filepath);

const base=path.basename(filepath);
console.log(base);
const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);