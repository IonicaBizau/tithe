![](http://i.imgur.com/AYoWvql.png)

# `$ tithe`
Organize and track the tithe payments.

*«Bring the whole tithe into the storehouse, that there may be food
in my house. Test me in this,” says the Lord Almighty, “and see if
I  will not throw  open the floodgates  of heaven and  pour out so
much blessing  that there will  not be room  enough to  store it.»*
*(Malachi 3:10)*


## Installation

```sh
$ npm install -g tithe
```

### CLI Usage

Run `tithe -h` to see the help content.

```sh
$ tithe -h
Usage: tithe [options]

Options:
  -i, --insert                     Inserts a new event.
  -d, --description <description>  The event description.
  -p, --value, --price <value>     The tithe or brute income. When using the brute
                                   income, pass the -t (or --tithe) option.
  -t, --tithe                      This will take a tithe of the brute value.
  -a, --all                        Display all events.
  -c, --currency <currency>        Sets the currency.
  -y, --pay                        Mark everything as paid.
  -h, --help                       Displays this help.
  -v, --version                    Displays version information.

Examples:
  tithe -i -p 100 -d 'Some work for someone'
  tithe -a # displays all the payments
  tithe -i -p 500 -t -d 'GitHub Bounty reward.'
  tithe -c '$' # sets the USD currency

«Bring the whole tithe into the storehouse, that there may be food
in my house. Test me in this,” says the Lord Almighty, “and see if
I  will not throw  open the floodgates  of heaven and  pour out so
much blessing  that there will  not be room  enough to  store it.»
                                                    (Malachi 3:10)

Documentation can be found at https://github.com/IonicaBizau/tithe
```

## Documentation

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

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
