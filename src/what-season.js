module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';

  //if (Object.getOwnPropertyNames(date).length!=0) console.log(Object.getOwnPropertyNames(date));

  if (Object.getOwnPropertyNames(date).length!=0) throw new Error();
  
  var month = date.getMonth()+1;
  
  //return month;
  if ([12,1,2].indexOf(month) !=-1)  return 'winter';
  else if ([3,4,5].indexOf(month) !=-1)  return 'spring';
  else if ([6,7,8].indexOf(month) !=-1)  return 'summer';
  else if ([9,10,11].indexOf(month) !=-1) return 'autumn';
  //else throw new Error();

};
