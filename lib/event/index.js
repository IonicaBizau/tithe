/**
 * Event
 * Creates an event instance.
 *
 * @name Event
 * @function
 * @param {Object} options An object containing:
 *
 *  - `description` (String): The event description.
 *  - `value` (Number): The event value.
 *  - `date` (Date|String): The event date as date or parsable string.
 *  - `paid` (Boolean): A flag representing if the value is paid or not.
 *
 * @param {String} id An optional id.
 * @return {Tenth.Event} The `Event` instance.
 */
function Event(options, id) {
    this.id = id;
    this.desc = options.description;
    this.val = options.value;
    this.date = new Date(options.date)
    this.paid = options.paid;
}

module.exports = Event;
