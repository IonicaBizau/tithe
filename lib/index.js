// Dependencies
var Fs = require("fs")
  , Ul = require("ul")
  , Event = require("./event");
  ;

// Constants
const DEFAULT_CONFIG = {
    events: []
  , currency: "$"
};

/*!
 * Tenth
 * Creates a new `Tenth` instance.
 *
 * @name Tenth
 * @function
 * @return {Tenth} The `Tenth` instance.
 */
function Tenth() {
    this.path = Ul.USER_DIR + "/.tenth.json";
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
 * @return {Tenth.Event} The `Event` instance.
 */
Tenth.Event = Event;

/**
 * getData
 * Fetches tenth data.
 *
 * @name getData
 * @function
 * @param {Object} options An object containing:
 *
 *  - `paid` (Boolean): If `true`, all events will be fetched.
 *
 * @param {Function} callback The callback function.
 * @return {Tenth} The `Tenth` instance.
 */
Tenth.prototype.getData = function (options, callback) {

    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    var data = {
            events: []
          , total: 0
          , currency: null
        }
      , ev = null
      ;

    this.read(function (err, content) {
        if (err) { return callback(err); }
        data.currency = content.currency;
        content.events.forEach(function (c, id) {
            ev = new Tenth.Event(c, id);
            if (ev.paid && !options.paid) { return; }
            data.events.push(ev);
            data.total += ev.val;
        });
        callback(null, data);
    });

    return this;
};

/**
 * read
 * Reads the JSON file.
 *
 * @name read
 * @function
 * @param {Function} callback The callback function.
 * @return {Tenth} The `Tenth` instance.
 */
Tenth.prototype.read = function (callback) {
    Fs.readFile(this.path, "utf-8", function (err, content) {
        if (err && err.code === "ENOENT") {
            err = null;
            content = "{}";
        }
        content = content || "{}";
        if (err) { return callback(err); }
        try {
            content = JSON.parse(content);
        } catch (e) {
            return callback(e);
        }
        callback(null, Ul.merge(content, DEFAULT_CONFIG));
    });
    return this;
};

/**
 * write
 * Writes the JSON information in the file.
 *
 * @name write
 * @function
 * @param {Object} content The content as object.
 * @param {Function} callback The callback function.
 * @return {Tenth} The `Tenth` instance.
 */
Tenth.prototype.write = function (content, callback) {
    Fs.writeFile(this.path, JSON.stringify(content, null, 2), function (err) {
        callback(err, content);
    });
    return this;
};

/**
 * insert
 * Inserts a new event.
 *
 * @name insert
 * @function
 * @param {Object} data An object which will be passed to the `Tenth.Event` constructor.
 * @param {Function} callback The callback function.
 * @return {Tenth} The `Tenth` instance.
 */
Tenth.prototype.insert = function (data, callback) {

    var self = this;

    callback = callback || function (err) {
        if (err) { throw err; }
    };

    if (data.tenth) {
        data.val /= 10;
        delete data.tenth;
    }

    self.read(function (err, content) {
        if (err) { return callback(err); }
        content.events.push(new Tenth.Event(data));
        self.write(content, callback);
    });

    return this;
};

/**
 * pay
 * Marks all events as paid.
 *
 * @name pay
 * @function
 * @param {Function} callback The callback function.
 * @return {Tenth} The `Tenth` instance.
 */
Tenth.prototype.pay = function (callback) {
    var self = this;

    callback = callback || function (err) {
        throw err;
    };

    self.read(function (err, content) {
        if (err) { return callback(err); }
        content.events.forEach(function (c) {
            c.paid = true;
        });
        self.write(content, callback);
    });

    return this;
};

/**
 * setCurrency
 * Sets the currency.
 *
 * @name setCurrency
 * @function
 * @param {String} newCurrency The new currency.
 * @param {Function} callback The callback function.
 * @return {Tenth} The `Tenth` instance.
 */
Tenth.prototype.setCurrency = function (newCurrency, callback) {
    var self = this;

    callback = callback || function (err) {
        throw err;
    };

    self.read(function (err, content) {
        if (err) { return callback(err); }
        content.currency = newCurrency;
        self.write(content, callback);
    });

    return this;
};

module.exports = new Tenth();
