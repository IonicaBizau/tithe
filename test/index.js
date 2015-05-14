// Dependencies
var Tithe = require("../lib")
  , Assert = require("assert")
  , Fs = require("fs")
  ;

// Modify the path
Tithe.path = __dirname + "/tithe.json";

it("should write the tithe file", function (cb) {
    Tithe.write({}, function (err, data) {
        Assert.equal(err, null);
        Assert.deepEqual(data, {});
        cb();
    });
});

it("should read the tithe file", function (cb) {
    Tithe.read(function (err, data) {
        Assert.equal(err, null);
        Assert.deepEqual(data, {
            events: []
          , currency: "$"
        });
        cb();
    });
});

it("should insert a new object", function (cb) {
    Tithe.insert({
        desc: "test"
      , val: 100
      , date: new Date()
    }, function (err, data) {
        Assert.equal(err, null);
        cb();
    });
});
