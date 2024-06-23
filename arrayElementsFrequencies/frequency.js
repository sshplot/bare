const freqCounter = (nlist, n) => {
  const counts = {};
  for (let index = 0; index < n; index++) {
    if (counts[nlist[index]]) {
      counts[nlist[index]] += 1;
    } else {
      counts[nlist[index]] = 1;
    }
  }
  return counts;
};

const leastAndHighest = (map) => {
  const hlfreq = {
    hKey: Object.keys(map)[0],
    hValue: Object.values(map)[0],
    lKey: Object.keys(map)[0],
    lValue: Object.values(map)[0],
  };

  for (const key in map) {
    if (map[key] < hlfreq.lValue) {
      hlfreq.lKey = key;
      hlfreq.lValue = map[key];
    } else if (map[key] > hlfreq.hValue) {
      hlfreq.hKey = key;
      hlfreq.hValue = map[key];
    }
  }
  return {[hlfreq.hKey]: hlfreq.hValue, [hlfreq.lKey]: hlfreq.lValue};
};

const numbers = [2, 3, 6, 7, 3, 2, 7, 6, 3, 4, 8, 4, 2, 8, 7, 6, 8, 2];
let frequencyMap = freqCounter(numbers, numbers.length);
console.log(frequencyMap);
console.log(leastAndHighest(frequencyMap));
