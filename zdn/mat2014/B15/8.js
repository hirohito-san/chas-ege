(function(){'use strict';

var a=sluchch(2,90);

var fn=fn_zadan({
	slag:[[a.pow(2).frac('x'),'x'],[[a.pow(2),'x^2'].slag().frac('x')]].iz(),
	minx:a,
	maxx:-a,
	nech:1,
});

window.vopr.txt=fn.txt;
window.vopr.ver=[fn.ver];

window.vopr.kat['log']=0;
window.vopr.kat['prz']=1;
window.vopr.kat['drs']=0;
window.vopr.kat['tri']=1;
})();

//Обзад 26694 26695 26696 26697
//Николай Авдеев
