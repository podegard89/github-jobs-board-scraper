const { GoogleSpreadsheet } = require('google-spreadsheet');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1gEUDrTByTfiWwhr3WMo7L0EJ20-l3G7DVlMN2l7ryeg');


(async function () {

    // OR load directly from json file if not in secure environment
    await doc.useServiceAccountAuth(require('./credentials.json'));


    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    await doc.updateProperties({ title: 'renamed doc' });

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRows([
        { title: 'Software Engineer', location: 'SF' },
        { title: 'Designer', location: 'NY' },
    ]);
})()
