function sortAllLogs(logs) {
  let countObj = {};
  let result = [];
  logs.forEach(log => {
    let date = new Date(log.posting_at).toDateString().substring(4, 10);
    if (!countObj[date]) {
      countObj[date] = { count: 1, total: log.level };
    } else {
      countObj[date].count++;
      countObj[date].total += log.level;
    }
  });

  for (let date in countObj) {
    result.push({
      date: date,
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
  logs.forEach(log => {
    result[log.level].count++;
  });
  return result;
}

export { sortAllLogs, sortTodayLogs };
