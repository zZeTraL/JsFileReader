let string = '';
let squareSize = 0;

document.querySelectorAll(".drop-input").forEach(element => {
    const dropZoneElement = element.closest(".drop-area");

    dropZoneElement.addEventListener("click", e => {
        element.click();
    });

    element.addEventListener("change", e => {
        readFile(element.files);
        
    });

    dropZoneElement.addEventListener("dragover", e => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-area-over");
    });

    ["dragleave", "dragend"].forEach(type => {
        dropZoneElement.addEventListener(type, e => {
            dropZoneElement.classList.remove("drop-area-over");
        })
    });

    dropZoneElement.addEventListener("drop", e => {
        e.preventDefault();
        
        //DEBUG
        //console.log(e.dataTransfer.files);
        
        if(e.dataTransfer.files.length) {
            element.files = e.dataTransfer.files;
        }

        dropZoneElement.classList.remove("drop-area-over");
        readFile(element.files);
    });

});

/**
 * getFileFormat allows to get the file format of any file
 * 
 * @param {files.name} fileName name of the file
 * @return {String} return a string who contain the file format 
 * 
 */
function getFileFormat(fileName){
    var parts = fileName.split(".");
    return parts[parts.length - 1];
}




/**
 * checkFileFormat allows to get the file format of any file
 * 
 * @param {files.name} fileName name of the file
 * @param {String} format string who contain the format that you want
 * @return {Boolean} return true -> success
 * 
 */
function checkFileFormat(fileName, format){
    var tmp = getFileFormat(fileName);
    if(tmp.toLowerCase() == format){
        return true;
    }
    return false;
}


/**
 * readFile allows to read any .txt or yml file and convert it to an array
 * 
 * @param {files} file
 * @return {void}
 * 
 */
function readFile(file) {
    // clear the string
    string = "";
    
    let output = document.getElementById("file-content");
    var bool = checkFileFormat(file[0].name, "txt")
    if(!bool){
        if(!checkFileFormat(file[0].name, "yml")){
            alert("Make sure your file format is a .txt or .yaml");
            return;
        }
    }
    
    //DEBUG
    //console.log("File is not a .txt -> return value: " + bool);

    // create an instance of fileReader
   var reader = new FileReader();
    // load the whole content of the .txt file 
    reader.onload = function(event) {
        // convert string to an array (remove all enter symbol from a string)
        string = event.target.result.replace(/(\r\n|\n|\r)/gm, "").split("");
    };
    reader.onloadend = function() {
        if(getSquareSize() == -1){
            this.abort();
        } else {
            // show the result in a <pre></pre> tag
            output.innerHTML = this.result;
        }
    };

    reader.readAsText(file[0])
}

/**
* getSquareSize return the size of the square
*
* @return {Number} return the size of the square
* 
*/
function getSquareSize() {
    let size = string.length;

    //DEBUG
    //console.log(string.length);

    let sqrt = Math.sqrt(size);

    // check if the sqrt is an integer
    if(sqrt % 1 == 0){
        //DEBUG
        //console.log("Square size: " + sqrt);
        return sqrt;
    } else {
        alert("Pattern in file must be a square !");
        return -1;
    }
}