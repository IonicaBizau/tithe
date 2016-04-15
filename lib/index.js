"use strict";

// Dependencies
const Fs = require("fs")
    , Ul = require("ul")
    , Event = require("./event")
    , abs = require("abs")
    , rJson = require("r-json")
    , wJson = require("w-json")
    , noop = require("noop6")
    ;

// Constants
const DEFAULT_CONFIG = {
    events: []
  , currency: "$"
};

class Tithe {

    /**
     * Tithe
     * Creates a new `Tithe` instance.
     *
     * @name Tithe
     * @function
     * @param {String} conf_path The configuration path (default: `~/.tithe.json`).
     * @return {Tithe} The `Tithe` instance.
     */
    constructor (conf_path) {
        this.path = abs(conf_path || "~/.tithe.json");
    }

    /**
     * getData
     * Fetches tithe data.
     *
     * @name getData
     * @function
     * @param {Object} options An object containing:
     *
     *  - `paid` (Boolean): If `true`, all events will be fetched.
     *
     * @param {Function} callback The callback function.
     * @return {Tithe} The `Tithe` instance.
     */
    getData (options, callback) {

        if (typeof options === "function") {
            callback = options;
            options = {};
        }

        let data = {
                events: []
              , total: 0
              , currency: null
            }
          , ev = null
          ;

        this.read((err, content) => {
            if (err) { return callback(err); }
            data.currency = content.currency;
            content.events.forEach((c, id) => {
                ev = new Tithe.Event(c, id);
                if (ev.paid && !options.paid) { return; }
                data.events.push(ev);
                data.total += ev.val;
            });
            callback(null, data);
        });

        return this;
    }

    /**
     * read
     * Reads the JSON file.
     *
     * @name read
     * @function
     * @param {Function} callback The callback function.
     * @return {Tithe} The `Tithe` instance.
     */
    read (callback) {
        rJson(this.path, (err, content) => {
            if (err && err.code === "ENOENT") {
                err = null;
                content = {};
            }
            content = content || {};
            if (err) { return callback(err); }
            callback(null, Ul.merge(content, DEFAULT_CONFIG));
        });
        return this;
    }


    /**
     * write
     * Writes the JSON information in the file.
     *
     * @name write
     * @function
     * @param {Object} content The content as object.
     * @param {Function} callback The callback function.
     * @return {Tithe} The `Tithe` instance.
     */
    write (content, callback) {
        wJson(this.path, content, err => callback(err, content));
        return this;
    }

    /**
     * insert
     * Inserts a new event.
     *
     * @name insert
     * @function
     * @param {Object} data An object which will be passed to the `Tithe.Event` constructor.
     * @param {Function} callback The callback function.
     * @return {Tithe} The `Tithe` instance.
     */
    insert (data, callback) {

        callback = callback || noop;

        if (isNaN(data.val)) {
            return callback(new Error("Invalid income value."));
        }

        if (data.tithe) {
            data.val /= 10;
            delete data.tithe;
        }


        this.read((err, content) => {
            if (err) { return callback(err); }
            content.events.push(new Tithe.Event(data));
            this.write(content, callback);
        });

        return this;
    }

    /**
     * pay
     * Marks all events as paid.
     *
     * @name pay
     * @function
     * @param {Function} callback The callback function.
     * @return {Tithe} The `Tithe` instance.
     */
    pay (callback) {
        callback = callback || noop;

        this.getData((err, tData) => {
            if (err) { return callback(err); }
            this.insert({
                val: -tData.total
              , desc: "Tithe payment: " + (-tData.total).toFixed(2)
            }, (err, content) => {
                if (err) { return callback(err); }
                content.events.forEach(function (c) {
                    c.paid = true;
                });
                this.write(content, callback);
            });
        });

        return this;
    }

    /**
     * setCurrency
     * Sets the currency.
     *
     * @name setCurrency
     * @function
     * @param {String} newCurrency The new currency.
     * @param {Function} callback The callback function.
     * @return {Tithe} The `Tithe` instance.
     */
    setCurrency (newCurrency, callback) {
        callback = callback || noop;

        this.read((err, content) => {
            if (err) { return callback(err); }
            content.currency = newCurrency;
            this.write(content, callback);
        });

        return this;
    }
}

/**
 * Event
 * Creates an event instance.
 *
 * @name Event
 * @function
 * @param {Object} options An object containing:
 *
 *  - `desc` (String): The event description.
 *  - `val` (Number): The event value.
 *  - `date` (Date|String): The event date as date or parsable string.
 *  - `paid` (Boolean): A flag representing if the value is paid or not.
 *
 * @param {String} id An optional id.
 * @return {Tithe.Event} The `Event` instance.
 */
Tithe.Event = Event;

module.exports = Tithe;
