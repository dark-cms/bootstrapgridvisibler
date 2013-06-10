var bootstrapgridvisibler = {
    sheets: document.styleSheets,
    spans: {},
    gridsize: 0,
    Cellname: '.span',
    Rowname: '.row',
    Containername: '.container',
}
bootstrapgridvisibler.recreate = function () {
    for (si=0; si<this.sheets.length; si++){
        var mysheet=this.sheets.item(si);
        var myrules= mysheet.cssRules? mysheet.cssRules: mysheet.rules;
        console.log(myrules);
        if(myrules) {
            for (i=0; i<mysheet.length; i++){
                var crule = mysheet.item(i).selectorText;
                if(crule != null && crule != 'undefined') {
                    crule = crule.toLowerCase();
                    if(crule.substr(0, this.Cellname.length) == this.Cellname.toLowerCase()) {
                        var toint = parseInt(crule.substr(this.Cellname.length));
                        if(!isNaN(toint)) {
                            this.spans[toint] = true;
                            if(toint > this.gridsize) {
                                this.gridsize = toint;
                            }
                        }
                    }
                }
            }
        }
    }
    for(var i = 1;i<= this.gridsize;i++) {
        if (!this.spans.hasOwnProperty(i)) {
             this.spans[i] = false;
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
var css = '#bootstrapgridwrapper { position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(230,232,250,0.4);z-index:10001; }';
css += '#bootstrapgridsetup { position:fixed;top:0;left:0;width: 150px;background-color:rgba(230,232,250,0.4);z-index:10002; }';
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
