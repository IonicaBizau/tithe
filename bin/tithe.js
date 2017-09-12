#!/usr/bin/env node

"use strict";

// Dependencies
const Tithe = require("../lib")
    , Tilda = require("tilda")
    , Logger = require("bug-killer")
    , Table = require("le-table")
    , FlatColors = require("flatcolors")
    , Couleurs = require("couleurs")()
    , isThere = require("is-there")
    ;

/*!
 * log
 *
 * @name log
 * @function
 * @param {Error} err The error.
 * @param {String} data The info message.
 * @return {undefined}
 */
function log(err, data) {
    if (err) { return Logger.log(err.stack || err, "error"); }
    Logger.log(data, "info");
}

// Table defaults
Table.defaults.marks = {
    nw: "┌"
  , n:  "─"
  , ne: "┐"
  , e:  "│"
  , se: "┘"
  , s:  "─"
  , sw: "└"
  , w:  "│"
  , b: " "
  , mt: "┬"
  , ml: "├"
  , mr: "┤"
  , mb: "┴"
  , mm: "┼"
};
// Logger configs
Logger.config.displayDate = false;
Logger.config.logLevel = 4;
let tithe = null;

let initTithe = () => tithe = new Tithe(parser.options.P.value);

let parser = new Tilda(`${__dirname}/../package.json`, {
    options: {
        opts: ["a", "all"]
      , desc:  "Display all events."
    }
  , examples: [
        "tithe insert 'Some work for someone' 100 # The work for someone was $1000"
      , "tithe insert 'Some work for someone' 1000 -t # Compute the tenth part, the work for someone was $1000"
      , "tithe -a # displays all the payments"
      , "tithe currency '$' # sets the USD currency"
    ]
  , notes: "«Bring the whole tithe into the storehouse, that there may be food "
         + "in my house. Test me in this,” says the Lord Almighty, “and see if "
         + "I will not throw open the floodgates of heaven and pour out so "
         + "much blessing that there will not be room enough to store it.» "
         + "(Malachi 3:10)"
}).action([
    {
        desc: "Inserts a new event."
      , name: "insert"
      , args: ["description", "brute-income"]
      , options: [
            {
                opts: ["t", "tithe"]
              , desc:  "Compute the tenth part of the brute value."
            }
        ]
    }
  , {
        name: "currency"
      , args: ["currency"]
      , desc: "Sets the currency."
    }
  , {
        name: "pay"
      , desc: "Mark everything as paid."
    }
]).globalOption({
    opts: ["P", "tithe-path"]
  , desc:  "Use a different tithe json file path."
  , name: "path"
}).on("insert", action => {
    initTithe();
    let bruteVal = parseFloat(action.args["brute-income"]);
    tithe.insert({
        desc: action.args.description
      , date: new Date()
      , paid: false
      , val: bruteVal
      , tithe: action.options.tithe.is_provided
    }, err => log(err, "Inserted successfully."));
}).on("currency", action => {
    initTithe();
    tithe.setCurrency(action.args.currency, err => log(err, "Currency set succesfully."));
}).on("pay", action => {
    initTithe();
    tithe.pay(err => log(err, "Everything was marked as paid."));
}).main(action => {
    initTithe();

    // List the events
    tithe.getData({
        paid: action.options.all.is_provided
    }, (err, data) => {
        if (err) { return log(err); }

        if (!data.events.length) {
            return log(null, "Everything is paid.");
        }

        var titheTable = new Table();
        titheTable.addRow(["#", "Date", "Description", "Paid", "Value (" + data.currency + ")" ]);
        data.events.forEach(function (c, i) {
            titheTable.addRow([
                i + 1
              , c.date.toString().split(" ").slice(0, 3).join(" ")
              , c.desc
              , c.paid ? Couleurs.fg("●", FlatColors(0, 255, 0)) + " Yes"
              : Couleurs.fg("●", FlatColors(255, 0, 0)) + " No"
              , c.val.toFixed(2)
            ]);
        });

        titheTable.addRow([" ", " ", " ", Couleurs.bold("TOTAL:"), Couleurs.bold([data.total.toFixed(2), data.currency].join(" "))]);
        console.log(titheTable.toString());
    });
});
