/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

function catBuilder(name, color, toys) {
    let cat = {
        name : name ,
        color : color ,
        toys : toys
    // }                 // how would you do this with colon notation? keys will be identical to args, eg name : name
    // cat['name'] = name
    // cat['color'] = color
    // cat['toys'] = toys
    }
    return cat
        // name : name ,
        // color : color ,
        // toys : toys ,
    
}
 console.log(catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = catBuilder;
