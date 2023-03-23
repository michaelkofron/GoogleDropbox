//the name of a folder that you created in your Drive prior to using this script
mainFolderName = "Random Images";

mainFolder = getSubFolder(mainFolderName, DriveApp);
user = mainFolder.getOwner();

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html').setTitle("Google Drive Multi-File Request");
}

//gets a folder by name within a specified parent folder
function getSubFolder(folderName, parentFolder) {      
var folders = parentFolder.getFolders();     
  while (folders.hasNext()) {
    var folder = folders.next();
    if(folderName == folder.getName()) {         
      return folder;
    }
  }
  return null;
}

//checks if a folder by user-entered info exists, or creates one if it doesn't
function createSubFolder(name, email) {
  try {
    const folderName = [name, email].join(" | ");
    //if folder doesn't exist then create it within the mainFolder
    if (!getSubFolder(folderName, mainFolder)){
      mainFolder.createFolder(folderName);
    }
    return {success: true};
  } catch (e) {
    return {success: false, error: e.toString()};
  }
}

function saveFileInFolder(obj, name, email) {
  try {
    const folder = getSubFolder([name, email].join(" | "), mainFolder);
    var blob = Utilities.newBlob(Utilities.base64Decode(obj.data), obj.mimeType, obj.fileName);
    folder.createFile(blob);
    return {success: true};
  } catch (e) {
    return {success: false, error: e.toString()};
  }
}

function gatherInfo() {
  try {
    const storageLeft = DriveApp.getStorageLimit() - DriveApp.getStorageUsed();
    //if the storage left is less than 100MB provide an error, this can be changed to whatever you want
    if (storageLeft > 104857600){
      return {success: true, folderName: mainFolder.getName(), userName: user.getName(), userPhoto: user.getPhotoUrl()};
    } else {
      return {success: false, error: "Not enough storage in the requester's Google Drive"};
    }

  } catch (e) {
    return {success: false, error: e.toString()};
  }
}