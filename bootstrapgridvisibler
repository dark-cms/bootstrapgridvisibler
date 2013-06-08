var bootstrapgridvisibler = {
    sheets: document.styleSheets,
    spans: {1: false,2: false,3: false,4: false,5: false,6: false,7: false,8: false,9: false,10: false,11: false,12: false},
    gridsize: 0
}
bootstrapgridvisibler.recreate = function () {
for (si=0; si<bootstrapgridvisibler.sheets.length; si++){
    var mysheet=sheets[si];
    var myrules=mysheet.cssRules? mysheet.cssRules: mysheet.rules
    if(myrules != null) {
        for (i=0; i<myrules.length; i++){
            var crule = myrules[i].selectorText;
            if(crule != null && crule != 'undefined') { 
                if(crule.toLowerCase()==".span1"){ 
                    bootstrapgridvisibler.spans[1] = true;
                } else if(crule.toLowerCase()==".span2"){ 
                    bootstrapgridvisibler.spans[2] = true;
                } else if(crule.toLowerCase()==".span3"){ 
                    bootstrapgridvisibler.spans[3] = true;
                } else if(crule.toLowerCase()==".span4"){ 
                    bootstrapgridvisibler.spans[4] = true;
                } else if(crule.toLowerCase()==".span5"){ 
                    bootstrapgridvisibler.spans[5] = true;
                } else if(crule.toLowerCase()==".span6"){ 
                    bootstrapgridvisibler.spans[6] = true;
                } else if(crule.toLowerCase()==".span7"){ 
                    bootstrapgridvisibler.spans[7] = true;
                } else if(crule.toLowerCase()==".span8"){ 
                    bootstrapgridvisibler.spans[8] = true;
                } else if(crule.toLowerCase()==".span9"){ 
                    bootstrapgridvisibler.spans[9] = true;
                } else if(crule.toLowerCase()==".span10"){ 
                    bootstrapgridvisibler.spans[10] = true;
                } else if(crule.toLowerCase()==".span11"){ 
                    bootstrapgridvisibler.spans[11] = true;
                } else if(crule.toLowerCase()==".span12"){ 
                    bootstrapgridvisibler.spans[12] = true;
                }
            }
        }
    }
}
for (var k in bootstrapgridvisibler.spans){
    if (bootstrapgridvisibler.spans.hasOwnProperty(k)) {
         if(bootstrapgridvisibler.spans[k] === true && parseInt(k) > bootstrapgridvisibler.gridsize) {
              bootstrapgridvisibler.gridsize = parseInt(k);
         }
    }
}
}
bootstrapgridvisibler.removebyid = function(id) {
    if(elem=document.getElementById(id)) {
        elem.parentNode.removeChild(elem);
    }   
}
bootstrapgridvisibler.closegrid = function(id) {
    bootstrapgridvisibler.removeold();
    var setter=document.createElement("div");
    setter.id ="bootstrapgridsetup";
    document.body.appendChild(setter);
    var setupbutton = document.createElement("button");
    setupbutton.innerHTML = 'grid anzeigen';
    setupbutton.onclick=function(e){
        bootstrapgridvisibler.recreate();
        bootstrapgridvisibler.creategrid();
    };
    setter.appendChild(setupbutton);
    
    var css = '#bootstrapgridsetup { position:fixed;top:0;left:0;width: 150px;background-color:rgba(230,232,250,0.4);z-index:5001; }';
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.id = 'bootstrapgridwrappercss';
    style.type = 'text/css';
    if (style.styleSheet){
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}
bootstrapgridvisibler.removeold = function(id) {
    bootstrapgridvisibler.removebyid('bootstrapgridwrapper');
    bootstrapgridvisibler.removebyid('bootstrapgridwrappercss');
    bootstrapgridvisibler.removebyid('bootstrapgridsetup');
}
bootstrapgridvisibler.creategrid = function(id) {
    bootstrapgridvisibler.removeold();
    var setter=document.createElement("div");
    setter.id ="bootstrapgridsetup";
    document.body.appendChild(setter);
    var setupbutton = document.createElement("button");
    setupbutton.innerHTML = 'Grid Ausblenden';
    setupbutton.onclick=function(e){
        bootstrapgridvisibler.closegrid();
    };
    setter.appendChild(setupbutton);
    var wrapper=document.createElement("div");
    wrapper.id ="bootstrapgridwrapper";
    var container = document.createElement("div");
    document.body.appendChild(wrapper);
    container.className='container';
    wrapper.appendChild(container);
    var first = true;
    for (var k in bootstrapgridvisibler.spans){
        if (bootstrapgridvisibler.spans.hasOwnProperty(k)) {
         if(bootstrapgridvisibler.spans[k] === true) {
                var row = document.createElement("div");
                row.className = 'row';
                var setupbutton = document.createElement("button");
                setupbutton.innerHTML = 'begin with span'+k;
                setupbutton.className = 'with'+k;
                setupbutton.onclick=function(e){
                    document.getElementsByClassName('active')[0].className = "row";
                    document.getElementById(this.className).className = "row active";
                };
                setter.appendChild(setupbutton);
                if(first) {
                    row.className += ' active';
                    first = false;
                }
                row.id = 'with'+k;
                var tempgridsize = bootstrapgridvisibler.gridsize;
                while (tempgridsize - k >= 0) {
                    var rowspan = document.createElement("div");
                    rowspan.className = 'span'+k;
                    row.appendChild(rowspan);
                    tempgridsize = tempgridsize - k;
                }
                while (tempgridsize > 0) {
                    var rowspan = document.createElement("div");
                    rowspan.className = 'span1';
                    row.appendChild(rowspan);
                    tempgridsize--;
                }
                container.appendChild(row);
         }
    }
}
var css = '#bootstrapgridwrapper { position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(230,232,250,0.4);z-index:5000; }';
css += '#bootstrapgridsetup { position:fixed;top:0;left:0;width: 150px;background-color:rgba(230,232,250,0.4);z-index:5001; }';
css += '#bootstrapgridwrapper > .container { height:100%}';
css += '#bootstrapgridwrapper > .container > .row { height:100%;display: none; background-color: rgba(255,255,255,0.4)}';
css += '#bootstrapgridwrapper > .container > .active { display: block !important }';
css += '#bootstrapgridwrapper > .container > .row > div { height:100%;background-color: rgba(255,0,0,0.4);}';
var head = document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.id = 'bootstrapgridwrappercss';
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
}
