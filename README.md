# Gronber Time

This implements a web application to display the current local time in
Gronber time.

[Demo](https://abw.github.io/gronber-time/)

## What is Gronber Time?

Blame Reddit user Verbal-Gerbil who
[wrote this in a comment](https://www.reddit.com/r/AskUK/comments/15g2fcz/when_you_see_a_24_hour_time_format_do_you/jugpicg/):

```
We’re just lucky the Americans don’t use their own wild time system.
Imagine if they split the day into quadrants and each quadrant was made
up of 5 blurgs comprising of 9 equal gronbers...
```

This is the kind of silliness I can really get behind.  This was
[my reply](https://www.reddit.com/r/AskUK/comments/15g2fcz/when_you_see_a_24_hour_time_format_do_you/juh6lbv/):

```
So a quadrant would be 6 hours or 360 minutes.
That means a blurg would be 360 minutes / 5 = 72 minutes
And a gronber would be 72 / 9 = 8 minutes or 480 seconds
They would probably need a smaller unit as well. Let's say a gronber
is split into 120 nibblums at 4 seconds each.
```

It turns out to be quite tiresome trying to convert the current time to
Gronber time on paper.  So I some code to do it for me and created this
website to display the current time in Gronber time.

## Installation

If you want to play with the code then you'll need to have
[git](https://git-scm.com/) installed to clone the repository and
[Node.js](https://nodejs.org/) to run the website or build it for
production.

These examples use `npm` (provided with Node.js) but you can use
[pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/) if you prefer.

First check out the repository.

```
$ git clone https://github.com/abw/gronber-time.git
$ cd gronber-time
```

Install the dependencies.

```
$ npm install
```

Run the development server:

```
$ npm dev
```

To build for production

```
$ npm build
```

Enjoy Gronber time!

## Author

Andy Wardley, August 2023