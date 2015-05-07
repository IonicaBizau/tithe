function Event(options, id) {
    this.id = id;
    this.description = options.description;
    this.value = options.value;
    this.date = options.date;
    this.paid = options.paid;
}

module.exports = Event;
