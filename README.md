# `$ tithe` [![Support this project][donate-now]][paypal-donations]

Organize and track the tithe payments.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g tithe
```

Then, run `tithe --help` and see what the CLI tool can do.

```sh
$ tithe --help
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
  -t, --tithe-path <path>          Use a different tithe json file path.          
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

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save tithe
```

```js
var Tithe = require("tithe");
Tithe.insert({
    val: 100,
    tithe: true
});
```

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md