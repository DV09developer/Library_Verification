import pocketbase from 'pocketbase';
// import dotenv from 'dotenv'

// dotenv.config()
// import 'dotenv/config
// console.log(process.env);
const url = 'https://svitlib.pockethost.io/'
export default new pocketbase(url)
// export default new pocketbase('http://127.0.0.1:8090')