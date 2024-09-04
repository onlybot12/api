
__path = process.cwd()

var aexm = require('@lolikillers/aexm-api');
var express = require('express');
var db = require(__path + '/database/db');
try {
var lolkill = db.get("lolkill");
} catch (e) {
	console.log('')
}

var creator = 'ZeeoneOfc' // ubah jadi nama lu
const listkey = ["Alphabot","Zeeone","ZeeoneOfc"]; // ubah apikey nya, tambah aja klo mau

var axios = require('axios');
var qs = require('qs');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var { getBuffer } = require(__path + '/lib/function.js');



_ = require('lodash')
__path = process.cwd();

loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    notapikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey anda',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Apriliya-Putri-Fatmawati'+'LOLI--KILLERS';
        
 
 async function cekApiKey(api) {
 	ap = await lolkill.findOne({apikey:api})
 return ap;
 }
 
 router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email;

    if (!apikey) return res.sendFile(__path + '/docs/403.html')
    if (!(apikeyInput && email)) return res.json(loghandler.notAddApiKey)
    if (apikey != `${keyapi}`) return res.json(loghandler.invalidKey)

    try {
        lolkill.insert({
            apikey: apikeyInput,
            email: email
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(__path + '/docs/503.html')
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.sendFile(__path + '/docs/403.html')
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})




         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

module.exports = router
