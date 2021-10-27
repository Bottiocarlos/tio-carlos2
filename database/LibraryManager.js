const fs = require('fs');

class LibraryManager {
    
    constructor(){
        this.libraryPath=__dirname+'/library.json'
        if(fs.existsSync(this.libraryPath)) this.library = require("./library.json")
        else this.library=[]
    }

    getLibrary() {
        return this.library
    }

    getSongsByUser(userId){
        let filteredLib= this.library.filter(song=>song.user == userId)
        return filteredLib.map(song=>song.songURL)
    }

    getAllSongs(){
        return this.library.map(song=>song.songURL)
    }

    addToLibrary(userId,newSongURL){
        if (this.library.filter(song=>song.songURL == newSongURL).length>0) return
        
        this.library.push({
            "user":userId,
            "songURL":newSongURL
        });
        fs.writeFile(this.libraryPath, JSON.stringify(this.library), err => {
            if (err) {
              console.error(err)
              return
            }
        })
    }


}
module.exports = LibraryManager
