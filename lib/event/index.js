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
function Event(options, id) {
    this.id = id;
    this.desc = options.desc || "No description";
    this.val = options.val;
    this.date = options.date ? new Date(options.date) : new Date();
    this.paid = options.paid;
}

module.exports = Event;
