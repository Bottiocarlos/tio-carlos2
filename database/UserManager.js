const fs = require('fs');

class UserManager {
    constructor(){
        this.managerPath=__dirname+'/users.json'
        if(fs.existsSync(this.managerPath)) this.manager = require(this.managerPath)
        else this.manager=[]
    }

    getUsers() {
        return this.manager
    }

    getUserID(alias){
        let user=this.manager.filter(user => user.userName == alias || user.userAlias == alias )
        return user.length>0 ? user : false;
    }

    registerNewUser(userId,userName,userAlias=userName){
        if (this.manager.filter(user=>user.userId == userId).length>0) return
        const fs = require('fs');
        const user = {
            "userId":userId,
            "userName":userName,
            "userAlias":userAlias,
        }
        this.manager.push(user)
        fs.writeFile(this.managerPath, JSON.stringify(this.manager), err => {
            if (err) {
              console.error(err)
              return
            }
        })
        return user;
    }
}

module.exports = UserManager
