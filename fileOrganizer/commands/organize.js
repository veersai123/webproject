// 13 march
const fs=require("fs"); //fs module
const path=require("path"); //path module
let types={
  media:["mp4","mkv","mp3"],
  archives:['zip','7z','rar','tar','gz','ar','iso',"xz"],
  documents:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
  app:['exe','dmg','pkg',"deb"],
  images:['png','jpg','jpeg']
}

function organize(srcPath)
{
    // 1. to check if source path is present
    
    if(srcPath==undefined)
    {
        //the process.cwd() methode returns the current working directory of the Node.
        //js process.
        // console.log(srcPath);
        srcPath=process.cwd();
        console.log("source path is",srcPath);
    }
    // else console.log(srcPath);
    // 2. to create a directory by the name of organized_files
   let organizedFiles=path.join(srcPath,"organized_files");
    // let organizedFiles=srcPath+"/"+"organized_files";
    console.log("organized files folder path is ",organizedFiles);
    if(fs.existsSync(organizedFiles)==false)
    {
        fs.mkdirSync(organizedFiles);
    }   
    else console.log('folder already exists');
    //3.scan th entire sourcepath(download folder in this case)
    // read the content of directory->basically reads the names of the file present in the directory
    let allFiles=fs.readdirSync(srcPath);
    // console.log(allFiles )

    //4. traverse over the files and classify them on the basis of their extension(.pdf,.mp3)
    for(let i=0;i<allFiles.length;i++)
    {
        // let ext=allFiles[i].split(".")[1];
        // let ext=path.extname(allFiles[i]);
        // console.log(ext);
        let fullPathFile=path.join(srcPath,allFiles[i]);
        // console.log(fullPathFile);
        
        //1. check if it is a file or folder
        //lstatsync gives the information regarding the link provided 
        let isFile=fs.lstatSync(fullPathFile).isFile();
        console.log(allFiles[i]+""+isFile);
        if(isFile)
        {
             //1.1 get ext name
             let ext=path.extname(allFiles[i]).split(".")[1];
             console.log(ext);
               //1.2 get folder name from extension
        let folderName=getFolderName(ext);// 
        // console.log(folderName);
        //copy from src folder (srcPath) ans paste in dest folder(folder_name e.g. document,media atc)
                       //copykro kyakro   paste
        copyFileToDest(srcPath,fullPathFile ,folderName);
        }
    }
 }
 function getFolderName(ext)
 {
     for(let key in types)
     {
         for(let i=0;i<types[key].length;i++)
         {
             if(types[key][i]==ext)
             {
                 return key;
             }
         }
     }
 }
 function copyFileToDest(srcPath,fullPathFile,folderName)
 {
        //1. folderName ka path banana hai
        let destFolderPath=path.join(srcPath,"organized_files",folderName)
        if(!fs.existsSync(destFolderPath))
        {
            fs.mkdirSync(destFolderPath);
        }
        // 3. copy file from src to dest folder
        let fileName=path.basename(fullPathFile); //abc.zip
        let destFileName=path.join(destFolderPath,fileName);
                         // src        des
        fs.copyFileSync(fullPathFile,destFileName);
 }
// let srcPath="C:/Users/Hp/Desktop/learnjs/Node/fileOraganizer/downloads";
// organize(srcPath);
module.exports={
    organize:organize
}