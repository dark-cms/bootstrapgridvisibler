bootstrapgridvisibler
=====================

Display the Grid for Bootstrap CSS Framework.

The bootstrapgridvisibler scans hardcoded for span1 upto span12, so this script can display lower spans too.

It is tested in Chrome 27.0.1453.110 m and written in pure Javascript.


To start call
```javascript
bootstrapgridvisibler.closegrid();
```
or
```javascript
bootstrapgridvisibler.recreate();
bootstrapgridvisibler.creategrid();
```
with your Developer Tools - Javascript console



bootstrapgridvisibler.closegrid();
---------------------------------
Calls bootstrapgridvisibler.recreate(); and will display a box on top left with a button to show the grid

bootstrapgridvisibler.recreate();
---------------------------------
Will check your stylesheets for your .span##-Styles (with dynamic stylesheets you need to call this function, 
but closegrid() will do this by itself)


bootstrapgridvisibler.creategrid();
---------------------------------
will display the grid and shows a basic Buttonbox on top left;

on ButtonClick you can see some Span-Combinations.


bootstrapgridvisibler is fully alpha
==========================================

i have written the script without any speeduptests or clean code because i dont think to use it more than needed.


