var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Seeing the World: Think of at least five places in the world you’d like to visit.
var places = ['Islamaad', 'Multan', 'Karachi', 'Muree'];
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//console.log('original:' + places)
//• Print your array in alphabetical order without modifying the actual list.
//console.log('copy: '+[...places].sort());
//• Show that your array is still in its original order by printing it.
//console.log('original:' + places)
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy: ' + __spreadArray([], places, true).sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log('copy: ' + __spreadArray([], places, true).sort().reverse());
