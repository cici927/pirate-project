var logger = function(a, b, c, d) {
    console.log(this);
    console.log(a, b, c, d);
};

//logger('One', 'Two', 'Three');

var bound = logger.bind('Four');
bound('One', 'Two', 'Three');

bound = bound.bind(null, 'Five');
bound('One', 'Two', 'Three');

bound = bound.bind(null, 'Six');
bound('One', 'Two', 'Three');

//bound('One', 'Two', 'Three');

var objA = {
    id: 'A',
    logger: function() {
        console.log(this.id);
    }
};

var objB = {
    'id': 'B',
    logger: objA.logger
};

 objA.logger();
 objB.logger();

 var person = {
    id: 'C'
}

objA.logger = objA.logger.bind(person);
objB.logger = objB.logger.bind(objA);

objA.logger();
objB.logger();