class Processor{

  static Process(data){
    var rows = data.split('\r\n');
    var rowsArray = [];

    rows.forEach(row => {
      var arr = row.split(',');
      rowsArray.push(arr);
    });

    return rowsArray;
  }

}

module.exports = Processor;