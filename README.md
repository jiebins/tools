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
