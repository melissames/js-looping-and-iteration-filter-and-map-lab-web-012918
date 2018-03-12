function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  const driversWithRevenue = driversWithRevenueOver(drivers, revenue)

  return driversWithRevenue.map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, attribute){
  return drivers.filter(function(driver){
    match = false;

    for(const key in attribute){
      match = driver[key] === attribute[key];
    }
    return match;
  });
}

function exactMatchToList(drivers, attribute){
  const matched = exactMatch(drivers, attribute);
  return matched.map(function(driver){
    return driver.name;
  });
}
