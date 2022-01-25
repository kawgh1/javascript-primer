function a() {
    console.log(this);
}

let b = function () {
    console.log(this);
};

// both of these will log the Window object for `this` inside a browser or the global Object in Node

a();
b();

// here we use = {..}, this is how to explicitly create an object

/* 

let c = {
    name: "the c object",
    log: function () {
        this.name = "Updated c object";
        console.log(this);

        // function inside a function inside an object -- here `this` will actually point back to the global object!
        let setName = function (newName) {
            this.name = newName;
        };
        setName("Updated again! the c object");
        console.log(this);
    },
};

c.log(); 

// prints
// {name: 'Updated c object', log: ƒ}
// {name: 'Updated c object', log: ƒ} - notice no "updated again! the c object"


*/

// The way to fix the above is using the self keyword

let c = {
    name: "the c object",
    log: function () {
        let self = this; //

        self.name = "Updated c object";
        console.log(self);

        // function inside a function inside an object -- now `self` always points to the c object
        let setName = function (newName) {
            self.name = newName;
        };
        setName("Updated again! the c object");
        console.log(self);
    },
};

c.log();

// prints
// {name: 'Updated c object', log: ƒ}
// {name: 'Updated again! the c object', log: ƒ}
