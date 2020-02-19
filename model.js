// defines a class that is immediately exported
// classes are always uppercase on the first letter

module.exports = class Mouse {
    constructor(name){
        this.name = name
    }
     
    face = '🐭'
    color = 'grey'
    tailColor = 'pink'

    goSqueek(){
        return 'mouse went squeek'
    }
}