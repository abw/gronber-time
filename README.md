# Gronber Time

This implements a web application to display the current local time in
Gronber time.

It started with Reddit user Verbal-Gerbil who
[wrote this in a comment](https://www.reddit.com/r/AskUK/comments/15g2fcz/when_you_see_a_24_hour_time_format_do_you/jugpicg/):

   We’re just lucky the Americans don’t use their own wild time system.
   Imagine if they split the day into quadrants and each quadrant was made
   up of 5 blurgs comprising of 9 equal gronbers,

[My reply](https://www.reddit.com/r/AskUK/comments/15g2fcz/when_you_see_a_24_hour_time_format_do_you/juh6lbv/) was:

   So a quadrant would be 6 hours or 360 minutes.
   That means a blurg would be 360 minutes / 5 = 72 minutes
   And a gronber would be 72 / 9 = 8 minutes or 480 seconds
   They would probably need a smaller unit as well. Let's say a gronber
   is split into 120 nibblums at 4 seconds each.

It turns out to be quite tiresome trying to convert the current time to
Gronber time.  So I created this code to do it for me.

## Installation

Check out the repository

```
$ git checkout
```