"use strict";

// Dependencies
const Tithe = require("../lib")
    , tester = require("tester")
    ;

let tithe = new Tithe(__dirname + "/tithe.json");

tester.describe("tithe", test => {

    test.should("write the tithe file", cb => {
        tithe.write({}, (err, data) => {
            test.expect(err).toBe(null);
            test.expect(data).toEqual({});
            cb();
        });
    });

    test.should("read the tithe file", cb => {
        tithe.read(function (err, data) {
            test.expect(err).toBe(null);
            test.expect(data).toEqual({
                events: []
              , currency: "$"
            });
            cb();
        });
    });

    test.should("insert a new object", cb => {
        tithe.insert({
            desc: "test"
          , val: 100
          , date: new Date()
        }, function (err, data) {
            test.expect(err).toBe(null);
            cb();
        });
    });
});

