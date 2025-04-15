const _ = require("lodash") // allowing us to access/module or dependency or package

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
// this is showing us that lodash has the flattenDeep method
//we can access it because we installed it as a dependency 