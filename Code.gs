function onEdit(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); // Mendapatkan spreadsheet aktif dan sheet yang sedang aktif

  var datass = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data"); // Mengambil sheet bernama "data"
  var activeCell = ss.getActiveCell(); // Menyimpan sel yang sedang aktif
  if(ss.getActiveCell().getColumn() == 4 && ss.getActiveCell().getRow() > 1) { // Memeriksa apakah kolom aktif adalah kolom 4 dan baris lebih dari 1
    activeCell.offset(0, 1).clearContent().clearDataValidations(); // Menghapus konten dan validasi data dari sel di sebelah kanan sel aktif
    var makes = datass.getRange(1, 1, 1, datass.getLastColumn()).getValues(); // Mengambil nilai dari baris pertama di sheet "data"
    var makeIndex = makes[0].indexOf(activeCell.getValue()) + 1; // Mencari indeks nilai sel aktif dalam array makes
    if(makeIndex != 0){ // Memeriksa apakah indeks tidak sama dengan 0
        var validationRange = datass.getRange(3, makeIndex, datass.getLastRow()); // Mendapatkan rentang validasi berdasarkan indeks
        var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build(); // Membuat aturan validasi data
        activeCell.offset(0, 1).setDataValidation(validationRule); // Menerapkan aturan validasi ke sel di sebelah kanan sel aktif
    }
  }
}
