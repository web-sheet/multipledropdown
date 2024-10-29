
function onEdit(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

//dddd
  var datass = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  var activeCell = ss.getActiveCell();
  if(ss.getActiveCell().getColumn() == 4 && ss.getActiveCell().getRow() > 1) {    
    activeCell.offset(0, 1).clearContent().clearDataValidations();
    var makes = datass.getRange(1, 1, 1, datass.getLastColumn()).getValues();
        var makeIndex = makes[0].indexOf(activeCell.getValue())+ 1;    
    if(makeIndex != 0){
        var validationRange = datass.getRange(3,makeIndex, datass.getLastRow());
        var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
        activeCell.offset(0, 1).setDataValidation(validationRule);
    }
  
  }
  
}

