 //Declare the Array
 var all_csv_columns = 
  [
    [
        "Column1",
        "Column2",
    ]
  ];
//Append to array
all_csv_columns.push([
                data1,
                data2,
              ])
              
//Parse the array into a csv content 
var csvContent = '';
for(i=0; i<all_csv_columns.length; i++){
    var value = all_csv_columns[i];
    for (var j = 0; j < value.length; j++) {
        var innerValue = value[j];
        var result= "";
        if(innerValue){
            result = (innerValue.toString()).replace(/"/g, '""');
        }
        if (result.search(/("|,|\n)/g) >= 0){
            result = '"' + result + '"';
        }
        if (j > 0){
            csvContent += ',';
        }
        csvContent += result;
    }
    csvContent += '\n';
};
//Download the file into their local machine 
var filename = "somefile"+".csv";
//\uFFFF to accept French Characters 
var blob = new Blob(["\uFEFF", csvContent], { type: 'text/csv;charset=utf-8;' });
if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, filename);
} else {
    var link = document.createElement("a");
    if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
