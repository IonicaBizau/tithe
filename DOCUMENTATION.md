## Documentation

You can see below the API reference of this module.

### `Tithe(conf_path)`
Creates a new `Tithe` instance.

#### Params
- **String** `conf_path`: The configuration path (default: `~/.tithe.json`).

#### Return
- **Tithe** The `Tithe` instance.

### `getData(options, callback)`
Fetches tithe data.

#### Params
- **Object** `options`: An object containing:
 - `paid` (Boolean): If `true`, all events will be fetched.
- **Function** `callback`: The callback function.

#### Return
- **Tithe** The `Tithe` instance.

### `read(callback)`
Reads the JSON file.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Tithe** The `Tithe` instance.

### `write(content, callback)`
Writes the JSON information in the file.

#### Params
- **Object** `content`: The content as object.
- **Function** `callback`: The callback function.

#### Return
- **Tithe** The `Tithe` instance.

### `insert(data, callback)`
Inserts a new event.

#### Params
- **Object** `data`: An object which will be passed to the `Tithe.Event` constructor.
- **Function** `callback`: The callback function.

#### Return
- **Tithe** The `Tithe` instance.

### `pay(callback)`
Marks all events as paid.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Tithe** The `Tithe` instance.

### `setCurrency(newCurrency, callback)`
Sets the currency.

#### Params
- **String** `newCurrency`: The new currency.
- **Function** `callback`: The callback function.

#### Return
- **Tithe** The `Tithe` instance.

### `Event(options, id)`
Creates an event instance.

#### Params
- **Object** `options`: An object containing:
 - `desc` (String): The event description.
 - `val` (Number): The event value.
 - `date` (Date|String): The event date as date or parsable string.
 - `paid` (Boolean): A flag representing if the value is paid or not.
- **String** `id`: An optional id.

#### Return
- **Tithe.Event** The `Event` instance.

