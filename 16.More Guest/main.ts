let guest_list: string [] = ["Ali","Laiba","Usama","Ayaz","Sultan"]

//for (let i=0; i<guest_list.length; i++) {console.log("Respected Sir" + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThankyou')}

 


let notPresent : string = "Laiba";
let new_guest : string = "Shahmeer";
guest_list[1]=new_guest;
for (let i=0; i<guest_list.length; i++) {console.log("Respected Sir" + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThankyou')}
console.log(`Mrs, ${notPresent} will not coming tommorrow dinner.`)




guest_list.unshift('Shaheen','Sarafaraz','Rizwan');
for (let i=0; i<guest_list.length; i++) {console.log("Respected Sir" + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThankyou')}
