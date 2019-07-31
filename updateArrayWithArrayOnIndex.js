/**
Map all elements in arra1 into arra1 itself. On the mapping function try to find the correlative item in arra2 and merge the two items with object spread if its found, if not, return the original item. Notice that spreading item2 last is crucial to the merge, so you overwrite with the values from item2 but keep those in item1 that were not overwritten.
*/

arra1 = arra1.map(item => {
  let item2 = arra2.find(i2 => i2.transid === item.transid);
  return item2 ? { ...item, ...item2 } : item;
});
