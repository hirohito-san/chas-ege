#!/bin/sh
./make-chas-lib.sh
cat chas-lib.js dvig_fn.js dvig_rz.js osnmas.js menu.js browser.js cache.js ../ext/anyslider/js/jquery.anythingslider.js sovety.js > chas-uijs.js;
date +window.chas.version=\"%Y%m%d%H%M%S\" >>head.js;