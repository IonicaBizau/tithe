
# `$ tithe` [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/tithe.svg)](https://travis-ci.org/IonicaBizau/tithe/) [![Version](https://img.shields.io/npm/v/tithe.svg)](https://www.npmjs.com/package/tithe) [![Downloads](https://img.shields.io/npm/dt/tithe.svg)](https://www.npmjs.com/package/tithe) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Organize and track the tithe payments.

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g tithe
```


Then, run `tithe --help` and see what the CLI tool can do.


```
$ tithe --help
Usage: tithe <command> [options]

Organize and track the tithe payments.

Commands:
  insert    Inserts a new event.
  currency  Sets the currency.
  pay       Mark everything as paid.

Options:
  -a, --all                Display all events.
  -P, --tithe-path <path>  Use a different tithe json file path.
  -v, --version            Displays version information.
  -h, --help               Displays this help.

Examples:
  $ tithe -i -p 100 -d 'Some work for someone'
  $ tithe -a # displays all the payments
  $ tithe -i -p 500 -t -d 'GitHub Bounty reward.'
  $ tithe -c '$' # sets the USD currency

«Bring the whole tithe into the storehouse, that there may be food in my house.
Test me in this,” says the Lord Almighty, “and see if I will not throw open the
floodgates of heaven and pour out so much blessing that there will not be room
enough to store it.» (Malachi 3:10)

Documentation can be found at https://github.com/IonicaBizau/tithe.
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save tithe
```



```js
const Tithe = require("tithe");

// Create an instance of Tithe
let t = new Tithe();

// And then use it
t.insert({
    val: 100,
    tithe: true
});
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
