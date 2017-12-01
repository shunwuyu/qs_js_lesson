// https://blog.fundebug.com/2017/07/26/master_map_filter_by_hand_written/
var arr = [2,4,6,8,10];
// var filteredArr= [];
// for(var i =0; i < arr.length; i++) {
//   if (arr[i] > 5) {
//     filteredArr.push(arr[i]);
//   }
// }
// console.log(filteredArr);

//step2
// function filterLessThanFive(arr) {
//   var filteredArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }
// var arrFiltered = filterLessThanFive(arr);
// console.log(arrFiltered);

//step3
// function isGreaterThan5(item) {
//   return item > 5;
// }

// function filterLessThanFive(arr) {
//   var filteredArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (isGreaterThan5(arr[i])) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }

// var newArr = filterLessThanFive(originalArr);
// console.log(newArr);

//step4

// function filterBelow(arr, greaterThan) {
//   var filteredArr = [];
//   for(var i = 0; i < arr.length; i++) {
//     if (greaterThan(arr[i])) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }

// function isGreaterThan5(item) {
//     return item > 5;
// }
// var newArr = filterBelow(originalArr, isGreaterThan5);
// console.log(newArr); // -> [6, 8, 10];
//step5

function filter(arr, testFunction) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(testFunction(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var arr = ['abc', 'def', 'ghijkl', 'mnopuv'];
function longerThanThree(str) {
    return str.length > 3;
}
var newArr1 = filter(arr, longerThanThree);
var newArr2 = arr.filter(longerThanThree);
console.log(newArr1); // -> ['ghijkl', 'mnopuv']
console.log(newArr2); // -> ['ghijkl', 'mnopuv']


