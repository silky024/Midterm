const nreq = require('./NReq')
const player = require('./player_data.json')

let payload = { 
    provinceId: 1, 
    districtId: null, 
          year: 2021, 
         month: 2, 
      pageSize: 20, 
     pageIndex: 0
  }

nreq.request('POST','http','localhost',9818,'/hi')
//nreq.request('GET','https','covid19.ddc.moph.go.th',443,'/api/Cases/today-cases-all')
let payload1 = {"player_id":15003}
//nreq.post('http','<ip/localhost>':10002/reward/collect, payload1)
let payload2 = {"player_id":15001}
//nreq.post('http','<ip/localhost>':10002/reward/collect, payload2)