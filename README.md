# Lambda PDF Editor

#### Koji Nakagawa & Stella Huayhuaca

## Description
* This app accepts your PDF file and call AWS Lambda function and output additional text.
* This function is suited for adding hard-coded text or image


## Prerequisites
You will need the following things properly installed on your computer.

* [AWS Account with access to IAM and Lambda](https://aws.amazon.com/)
* [Node.js 6.10](https://nodejs.org/) (with NPM)

## Installation

Please make sure you have AWS profile with IAM full access, and Lambda full access privileges.
Also make sure you already have the access keys set up for the AWS command line or the Node.js API. ([See detail...](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html))

If you are ready use following command.
* `$npm install claudia -g`
* `$git clone https://github.com/KNaka88/editPDF.git`
* `$cd editPDF`
* `$npm install`
* `$npm start`


After configured successfully, you will see similar to below message in your command line
```
saving configuration
{
  "lambda": {
    "role": "lambdaPdfEditer-executor",
    "name": "lambdaPdfEditer",
    "region": "us-west-2"
  },
  "api": {
    "id": "your-id",
    "module": "app",
    "url": "https://your-id.execute-api.us-west-2.amazonaws.com/latest"
  }
}
```

You are now ready to use!

## How to Use?
From your command line,

```
$ curl --request POST -H "Content-Type: application/pdf" -H "Accept: application/pdf" --data-binary "@your_input_file.pdf" https://your-id.execute-api.us-west-2.amazonaws.com/latest/generate-pdf > your_output_file_name.pdf
```


## Technologies Used
  * AWS Lambda, IAM
  * Node.js
  * Claudia JS
  * Hummus
  * Hummus Recipe

## License
  _Copyright (c) 2017 **Koji Nakagawa and Stella Huayhuaca**_

  _Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:_

  _The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software._

  _THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE._
