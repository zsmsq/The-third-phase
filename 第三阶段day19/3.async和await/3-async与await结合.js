let fs = require('fs')
let {promisify} = require('util')
let readF = promisify(fs.readFile)



async function main(){
    let one = await readF('./resource/1.html')
    let two = await readF('./resource/2.html')
    let three = await readF('./resource/3.html')

    console.log(one+two+three)
}
main()