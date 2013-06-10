bootstrapgridvisibler
=====================

Display the Grid for Bootstrap CSS Framework.

> The bootstrapgridvisibler scans hardcoded for span1 upto span12, so this script can display lower spans too.

Ok, today i have changed this, now he scans for .span## and you cann use it with 12+grids

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


New bootstrapgridvisibler.add();
---------------------------------
To add own Buttons with Rowsetup
```javascript
     $(document).ready(function(){
        mygrid = {
            'Startseite Content': [9,3],
            'Startseite unsere...': [4,4,4],
            'Footer': [3,3,3,3]
            };
        bootstrapgridvisibler.add(mygrid);
        bootstrapgridvisibler.closegrid();    
    });
```



bootstrapgridvisibler is fully alpha
==========================================

i have written the script without any speeduptests or clean code because i dont think to use it more than needed.


