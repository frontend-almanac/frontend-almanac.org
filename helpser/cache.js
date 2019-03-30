
export default function cache(fetch) {
  return function(url, options = {}) {
    if (!process.browser) { // cache
      return new Promise(async (resolve, reject) => {
        try {
          const fs = require('fs');
          const md5 = require('md5');
          const hash = md5(url);
          const path = `./cache/${hash}`;

          if (fs.existsSync(path)) {
            const res = fs.readFileSync(path);
            resolve(res.toString());
          } else {
            const res = await fetch(url, options).then(data => data.text()).catch(e => reject(e))
            fs.writeFile(path, res, () => { });
            resolve(res);
          }
        } catch (error) {
          reject(error);
        }
      })
    }
    return new Promise(async (resolve, reject) => {
      const res = await fetch(url, options).then(data => data.text()).catch(e => reject(e))
      resolve(res);
    })
  }  
}
