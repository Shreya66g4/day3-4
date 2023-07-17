function getObject(obj) {
    const marksMap = new Map();
  
    for (const key in obj) {
      const entry = obj[key];
      const mark = entry.marks;
  
      if (!marksMap.has(mark) || entry.age < marksMap.get(mark).age) {
        marksMap.set(mark, { key, ...entry });
      }
    }
  
    const result = {};
  
    for (const [mark, entry] of marksMap) {
      result[entry.key] = { age: entry.age, name: entry.name, marks: mark };
    }
  
    return result;
  }
  
  // Example usage:
  const obj1 = {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  };
  console.log(getObject(obj1));
  const obj2 = {
    0: { age: 18, name: 'john', marks: '400' },
    1: { age: 17, name: 'julie', marks: '400' },
    2: { age: 16, name: 'Robin', marks: '200' },
    3: { age: 16, name: 'Bella', marks: '300' },
    4: { age: 16, name: 'john', marks: '250' },
    5: { age: 15, name: 'julie', marks: '250' }
  };
  console.log(getObject(obj2)); 