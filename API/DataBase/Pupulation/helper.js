const pool= require('../../config/dbConection.js')
const path = require("path");
const fs = require('fs');

module.exports ={
  async post(url, data){
    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
    const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody
    })
    return res.json()
  },
  async clearDB(){
    await pool.query('DELETE FROM recipe')
    await pool.query('DELETE FROM user')
    await pool.query('DELETE FROM havefav')
    await pool.query('DELETE FROM belongs')
    await pool.query('DELETE FROM qualify')
    await pool.query('DELETE FROM category')
    
    
  }
}
