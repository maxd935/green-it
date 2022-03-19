

const fs = require('fs')

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        const object = JSON.parse(fileData);
        return cb && cb(null, object);
      } catch (err) {
        return cb && cb(err);
      }
    });
   }

   const moy_reg = [
    { REG: 1, MENAGE_REG: 0.16, P16_POP_REG: 394115 },
    { REG: 2, MENAGE_REG: 0.15, P16_POP_REG: 376479 },
    { REG: 3, MENAGE_REG: 0.06, P16_POP_REG: 269356 },
    { REG: 4, MENAGE_REG: 0.09, P16_POP_REG: 852922 },
    { REG: 11, MENAGE_REG: 0.1, P16_POP_REG: 12117125 },
    { REG: 24, MENAGE_REG: 0.13, P16_POP_REG: 2577874 },
    { REG: 27, MENAGE_REG: 0.14, P16_POP_REG: 2818353 },
    { REG: 28, MENAGE_REG: 0.11, P16_POP_REG: 3335930 },
    { REG: 32, MENAGE_REG: 0.1, P16_POP_REG: 6006815 },
    { REG: 44, MENAGE_REG: 0.12, P16_POP_REG: 5555170 },
    { REG: 52, MENAGE_REG: 0.11, P16_POP_REG: 3737624 },
    { REG: 53, MENAGE_REG: 0.14, P16_POP_REG: 3306524 },
    { REG: 75, MENAGE_REG: 0.13, P16_POP_REG: 5935609 },
    { REG: 76, MENAGE_REG: 0.14, P16_POP_REG: 5808432 },
    { REG: 84, MENAGE_REG: 0.13, P16_POP_REG: 7916877 },
    { REG: 93, MENAGE_REG: 0.15, P16_POP_REG: 5021929 },
    { REG: 94, MENAGE_REG: 0, P16_POP_REG: 330455 }
  ]
  

jsonReader('./json/test.json', (err, p) => {
    if (err) {
      console.log(err);
      return;
    }
    
//      // Calculate the sums and group data (while tracking count)
//  const reduced = p.reduce(function(m, d){
//   if(!m[d.REG]){
//     m[d.REG] = {...d, count: 1};
//     return m;
//   }
//   m[d.REG].REG = d.REG;
//   m[d.REG].MENAGE += d.MENAGE;
//   m[d.REG].P16_POP += d.P16_POP;

//   m[d.REG].count += 1;
//   return m;
// },{});

// // Create new array from grouped data and compute the average
// const result = Object.keys(reduced).map(function(k){
//    const item  = reduced[k];
//    return {
//   REG: item.REG,
//   MENAGE_REG: parseFloat((item.MENAGE/item.count).toFixed(2)),
//   P16_POP_REG: item.P16_POP

//    }
// })

          gg = p.map(el => {
            const f = moy_reg.find(r  => r.REG === el.REG)
            el.MENAGE_REG = f.MENAGE_REG
            el.P16_POP_REG = f.P16_POP_REG
            return el
        })
   const jsonString = JSON.stringify(gg)
  fs.writeFile('./json/test2.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  })
  })