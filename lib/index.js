var Fs = require("fs")
  , Ul = require("ul")
  , Event = require("./event");
  ;

function Tenth() {
    this.path = Ul.USER_DIR + "/.tenth.json";
}

Tenth.Event = Event;

Tenth.prototype.getData = function (options, callback) {

    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    var data = {
            events: []
          , total: 0
        }
      , ev = null
      ;

    this.read(function (err, content) {
        if (err) { return callback(err); }
        content.forEach(function (c, id) {
            ev = new Tenth.Event(c, id);
            if (ev.paid && !options.paid) { return; }
            data.events.push(ev);
            data.total += ev.value;
        });
        callback(null, data);
    });
};

Tenth.prototype.read = function (callback) {
    Fs.readFile(this.path, "utf-8", function (err, content) {
        if (err.code === "ENOENT") {
            err = null;
            content = "[]";
        }
        if (err) { return callback(err); }
        try {
            content = JSON.parse(content);
        } catch (e) {
            return callback(e);
        }
        callback(null, content);
    });
};

Tenth.prototype.write = function (content, callback) {
    Fs.writeFile(this.path, JSON.stringify(content), function (err) {
        callback(err, content);
    });
};

Tenth.prototype.insert = function (data, callback) {

    var self = this;

    self.read(function (err, content) {
        if (err) { return callback(err); }
        content.push(data);
        self.write(content, callback);
    });
};

Tenth.prototype.pay = function (callback) {
    var self = this;
    self.read(function (err, content) {
        if (err) { return callback(err); }
        content.forEach(function (c) {
            c.paid = true;
        });
        self.write(content, callback);
    });
};

module.exports = new Tenth();
