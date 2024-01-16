const os=require('os')
// os.setPriority=2
const user=os.userInfo()
console.log(user);
console.log(os.uptime());

const currentOS={
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem()
}
console.log(currentOS);