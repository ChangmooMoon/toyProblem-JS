/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */
 var longestRun = function(string) {
   let arr = [1];
   for (let i = 1; i < string.length; i++) {
     if (string[i] === string[i - 1]) arr.push(arr[i - 1] + 1);
     else arr.push(1);
   }
   let max = arr.slice().sort((a, b) => b - a)[0];
   return [arr.indexOf(max) - max + 1, arr.indexOf(max)];
 };


 var longestRun2 = function(string){ /// 0a 1b 2b 3b 4a
   let arr = [1];
   for(let i =1; i<string.length; i++){
     if(string[i] === string[i-1])  arr.push(arr[i-1] +1); // string[1] === string[0]이면 string[0]+1을 푸쉬
     else arr.push(1); // 아니면 1을 푸쉬 // 1.b랑 a는 다름. 그래서 [1,1],[1,1,2],[1,1,2,3],[1,1,2,3,1]
   }
   console.log(arr);
   let max = arr.slice().sort((a,b) => b -a)[0]; //[3,2,1,1,1]
   console.log(max);
   return [arr.indexOf(max) - max +1, arr.indexOf(max)];
   // [0-3+1,]
 };

 // If you need a random string generator, use this!
 // (you wont need this function for your solution but it may help with testing)
 var randomString = function(len) {
   var text = "";
   var possible = "abcdefghijklmnopqrstuvwxyz";

   for (var i = 0; i < len; i++) {
     text += possible.charAt(Math.floor(Math.random() * possible.length));
   }

   return text;
 };
console.log(longestRun2('abbbcc'))
