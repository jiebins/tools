# tools
Some useful tools for my development.
## xlsx-to-json

To transform the xlsx file to json file, the tool which use "node-xlsx" is developed.

### Usage

To init the file, use

 ```
 npm i
 ```
Use below command to transform the xlsx file, the result will be generated into the output folder.

```
node parse.js filename [sheetName]
```
The param "SheetName" is optional. If the sheetName is not provided, the program will select the first sheet.

The format of the xlsx file is as follows.

|国家|Title1|Title2|Title3|Title4|Other|
|:--:|:--:|:--:|:--:|:--:|:--:|
|英国|English|e|n|g|123|
|法国|Franch|f|r|a|456|
|中国|China|c|h|i|789|

The content of the output named "demo.js" is as follows.

```
 export default {"国家":["英国","法国","中国"],"Title1":["English","Franch","China"],"Title2":["e","f","c"],"Title3":["n","r","h"],"Title4":["g","a","i"],"Other":[123,456,789]}
```
