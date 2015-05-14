// Dependencies
var Tenth = require("../lib")
  , Assert = require("assert")
  , Fs = require("fs")
  ;

// Modify the path
Tenth.path = __dirname + "/tenth.json";

it("should write the tenth file", function (cb) {
    Tenth.write({}, function (err, data) {
        Assert.equal(err, null);
        Assert.deepEqual(data, {});
        cb();
    });
});

it("should read the tenth file", function (cb) {
    Tenth.read(function (err, data) {
        Assert.equal(err, null);
        Assert.deepEqual(data, {
            events: []
          , currency: "$"
        });
        cb();
    });
});

it("should insert a new object", function (cb) {
    Tenth.insert({
        desc: "test"
      , val: 100
      , date: new Date()
    }, function (err, data) {
        Assert.equal(err, null);
        cb();
    });
});
