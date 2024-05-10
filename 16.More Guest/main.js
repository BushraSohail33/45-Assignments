var guest_list = ["Ali", "Laiba", "Usama", "Ayaz", "Sultan"];
//for (let i=0; i<guest_list.length; i++) {console.log("Respected Sir" + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThankyou')}
var notPresent = "Laiba";
var new_guest = "Shahmeer";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir" + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThankyou');
}
console.log("Mrs, ".concat(notPresent, " will not coming tommorrow dinner."));
guest_list.unshift('Shaheen', 'Sarafaraz', 'Rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir" + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThankyou');
}
