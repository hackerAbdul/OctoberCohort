//arrays
/*methods

.push("itemName") - adds items to the end of the list
.pop() - removes item at the end of the list
.unshift("itemName") - adds an item to the beginning of the list
.shift() - removes an item from the beginning of the list

.indexOf() - shows us the position of the item
.includes() - tells us if item is in the list



*/
/*properties

    length 
*/
const shoppingList = ["bread", "juice", "milk", "cereal","butter",123,123,1,3123,123,123,12,312,321,321,321,312,312,3,213,213,213,25,2345,234,523,653,521,43123,4,1234,2344]
// shoppingList[0]

console.log(shoppingList[shoppingList.length-1])

console.log(shoppingList)
shoppingList[shoppingList.length-1] = "wraps"
console.log(shoppingList)


shoppingList.push("oranges")
shoppingList.push("apples")
shoppingList.push("green apples")
shoppingList.pop()
shoppingList.pop()
shoppingList.pop()
shoppingList.pop()
shoppingList.pop()
shoppingList.pop()
shoppingList.pop()
shoppingList.pop()
shoppingList.pop()
console.log(shoppingList)


shoppingList.shift()
shoppingList.shift()
console.log(shoppingList.join(" "))
