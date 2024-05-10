var guest_list = ["Ali", "Laiba", "Usama", "Ayaz", "Sultan"];
//for (let i=0; i<guest_list.length; i++) {console.log("Respected Sir" + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThankyou')}
var notPresent = "Laiba";
var new_guest = "Shahmeer";
guest_list[1] = new_guest;
//for (let i=0; i<guest_list.length; i++) {console.log("Respected Sir" + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThankyou')}
//console.log(`Mrs, ${notPresent} will not coming tommorrow dinner.`)
guest_list.unshift('Shaheen', 'Sarafaraz', 'Rizwan');
//for (let i=0; i<guest_list.length; i++) {console.log("Respected Sir" + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThankyou')}
console.log('\nunfortunately we can not arrange big table, Only two people allow');
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry Sir, ".concat(removed_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir" + guest_list[i] + ',\nYes you are still invited on tommorrow dinner.\nThankyou');
}
guest_list.splice(0, 2);
console.log(guest_list);
