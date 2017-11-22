// initialize
const
  ApiBuilder = require('claudia-api-builder'),
  fs = require('./fs-promise'),
  api = new ApiBuilder();

module.exports = api;


api.post('/generate-pdf', (request) => {
  'use strict';
  let jsonData = JSON.parse(request.rawBody);
  const {base64, text, x, y} = jsonData;

  const HummusRecipe = require('hummus-recipe'),
        initialTempFile = `/tmp/${request.lambdaContext.awsRequestId}.pdf`,
        finishedTempFile = `/tmp/${(Date.now()).toString()}.pdf`,
        data = new Buffer(base64);
  let result;


  // create initialTempFile by reading buffer sent from POST method
  return fs.writeFilePromise(initialTempFile, data)
    .then( () => {

      // edit initialTempFile and save changed data to finishedTempFile
      const pdfDoc = new HummusRecipe(initialTempFile, finishedTempFile);

      return pdfDoc
        // edit detail
        .editPage(1)
        .text(text, x, y)
        .endPage()
        .endPDF();
    })
    .then( () => fs.readFilePromise(finishedTempFile))  //read buffer from finishedTempFile
    .then( (fileContent) => result = fileContent)  // pass data to variable result
    .then( () => fs.unlinkPromise(finishedTempFile)) // delete temp file
    .then( () => fs.unlinkPromise(initialTempFile)) // delete temp file
    .then( () => new Buffer(result).toString('base64')); // convert to base64 and return the data
}, {
  // if success, convert to binary data and send back as pdf file
  success: {
    contentType: 'application/pdf',
    contentHandling: 'CONVERT_TO_BINARY'
  }
});
