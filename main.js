import fs from "fs/promises";
import fsn from 'fs'
import console from "console";
import path from 'path'
const basePath = 'E:\\javascript\\ex-15 clear the clutter'
console.log(fs);

let file = await fs.readdir(basePath);
console.log(file);

for (const element of file) {
    let ext = element.split('.')[element.split('.').length - 1]
    console.log(ext)
    console.log(path.join(basePath, ext))
    console.log(element)
    if(fsn.existsSync(path.join(basePath, ext)) && ext!='js' && ext!='json'){
        fs.rename(path.join(basePath, element), path.join(basePath, ext, element))
    }
    
    else{
        fs.mkdir(ext)
       
    }
}

