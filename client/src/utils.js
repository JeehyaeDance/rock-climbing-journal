function sortAllLogs(logs) {
  let countObj = {};
  let result = [];
  logs.forEach(log => {
    if (!countObj[log.posting_date]) {
      countObj[log.posting_date] = { count: 1, total: log.level };
    } else {
      countObj[log.posting_date].count++;
      countObj[log.posting_date].total += log.level;
    }
  });
  for (let date in countObj) {
    result.push({
      date: `${date.substring(5, 10)}`,
      avgLevel: Math.floor(countObj[date].total / countObj[date].count)
    });
  }
  return result;
}

function sortTodayLogs(logs) {
  let result = [];
  //showing only upto level 4
  while (result.length < 5) {
    result.push({ level: "Lv" + result.length, count: 0 });
  }
  console.log(logs);
  logs.forEach(log => {
    result[log.level].count++;
  });
  return result;
}

export { sortAllLogs, sortTodayLogs };
