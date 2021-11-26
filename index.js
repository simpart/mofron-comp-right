/**
 * @file mofron-comp-arrow/index.js
 * @brief arrow component for mofron
 * @attention right.svg must be in the proper position to use this component.
 * @license MIT
 */
const Image = require("mofron-comp-image");
const Frame = require("mofron-comp-frame");
const ConfArg = mofron.class.ConfArg;
const comutl = mofron.util.common;


module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) string: text contents
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Right");
            this.shortForm('type');
            
            /* init config */
	    this.confmng().add("type", { type: "string", init: "right", select: ["right","left","up","down"] });
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    this.style({ "display" : "flex" });
	    this.child([
	        new Frame({
		    size: new ConfArg("0.2rem","0.2rem"),
		    style: { "position": "relative", "top": "0.15rem" },
		    borderWidth: "0rem", baseColor: [75,75,75]
                }),
	        new Image({ 
		    size: new ConfArg("0.5rem","0.5rem"),
		})
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    path (prm) {
        try {
            return this.child()[1].path(prm);
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * direction type setter/getter
     * 
     * @param (string) arrow direction (right,left,up,down)
     * @return (string) arrow direction
     * @type parameter
     */
    type (prm) {
        try {
            return this.confmng("type", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * arrow size
     * 
     * @param (size) horizon size of arrow
     * @param (size) vertical size of arrow
     * @type parameter
     */
    size (x,y) {
        try {
            if (undefined === x) {
                /* getter */
		return;
	    }
	    let frame = this.child()[0];
	    let image = this.child()[1];
	    /* set image size */
	    this.child()[1].size(y,y);
	    let y_siz = comutl.getsize(y);
            /* set frame size */
	    let f_siz = comutl.sizediff(x,y);
	    frame.size(f_siz, y_siz.value()*0.4 + y_siz.type());
            /* set position */
            frame.style({ "top" : y_siz.value()*3/10 + y_siz.type() });
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

}
/* end of file */
