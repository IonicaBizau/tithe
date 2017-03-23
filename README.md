
# `$ tithe`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/tithe.svg)](https://travis-ci.org/IonicaBizau/tithe/) [![Version](https://img.shields.io/npm/v/tithe.svg)](https://www.npmjs.com/package/tithe) [![Downloads](https://img.shields.io/npm/dt/tithe.svg)](https://www.npmjs.com/package/tithe)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
