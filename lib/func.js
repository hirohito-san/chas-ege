function okrugldo(a,b){
	if(!b){b=1;}
	a=Math.round(a/b)*b;
	return a;
}
function sluchch(n,k,s){
	if(!s){s=1;}
	if(k==undefined){return sluchch(0,n,1)};
    var a=okrugldo(okrugldo(Math.random() * (k-n),s) + n,s);	
    return a;
}

function sluchDel(a){
	return a.sluchDel();
}

function sluchiz(a,n){
	if(!(n>=1)){n=1;}
	var b=a.slice();
	b.shuffle();
	b.length=n;
	return b;
}

function chislit(a,s1,s2,s5){
	a=a%100;
	if((a>=5)&&(a<=20)){
		return s5;
	}
	a=a%10;
	if(a==1){
		return s1;
	}
	if((a<=4)&&(a>=2)){
		return s2;
	}
	return s5;
}

function s3ug(Ax,Ay,Bx,By,Cx,Cy){
	return 0.5*(Ax*By+Ay*Cx+Bx*Cy-By*Cx-Cy*Ax-Ay*Bx).abs();
}

function chislitM(p1,p2,p3,p4){
	return p1.ts()+' '+chislit(p1,p2,p3,p4);
}

function chislitlx(p1,p2,p3){
	switch(p3){
		case 'i': return chislitM(p1,	lx[p2].ie,	(lx[p2].r2?lx[p2].r2:lx[p2].re),	lx[p2].rm);
		case 'r': return chislitM(p1,	lx[p2].re,	 lx[p2].rm,							lx[p2].rm);
		case 'd': return chislitM(p1,	lx[p2].de,	 lx[p2].dm,							lx[p2].dm);
		case 'v': return chislitM(p1,	lx[p2].ve,	(lx[p2].r2?lx[p2].r2:lx[p2].ve),	lx[p2].vm);
		case 't': return chislitM(p1,	lx[p2].te,	 lx[p2].tm,							lx[p2].tm);
		case 'p': return chislitM(p1,	lx[p2].pe,	 lx[p2].pm,							lx[p2].pm);
	}
	return chislitM(p1,lx[p2].ie,(lx[p2].r2?lx[p2].r2:lx[p2].re),lx[p2].rm);
}

var Drob={};

Drob.prov=function(p1){
	p1=Drob.fixN(p1);
	return !!p1.ch&&!!p1.zn;
}

Drob.fixN=function(p1){
	if(p1.isNumber)
		p1={ch:p1,zn:1};
	return p1;
}

Drob.sokr=function(p1){
	p1=Drob.fixN(p1);
	if(!Drob.prov(p1))return null;
	if(p1.zn<0){
		p1.ch*=-1;
		p1.zn*=-1;
	}
	var a1=p1.ch.nod(p1.zn);
	p1.ch/=a1;
	p1.zn/=a1;
	return p1;
}

function clone(obj)
{
    if(obj == null || typeof(obj) != 'object')
    {
        return obj;
    }
    var temp = {};
    for(var key in obj)
    {
        temp[key] = clone(obj[key]);
    }
    return temp;
}

function sl1(){
	return Math.random().round();
}

sl=sluchch;

function sp(a){//Я просто оставлю это здесь
	for(var i=0,c=a.split('\''),b=[];i<c.length;i++)
		b=b.concat(i%2?c[i]:c[i].split(' '));
	for(var i=0;i<b.length;b.splice(i,!b[i++]));
	return b;
}

function cvet(a){
	return '#'+a.r.toString(16).dopdo('0',2)+a.g.toString(16).dopdo('0',2)+a.b.toString(16).dopdo('0',2);
}

function proporMezhdu(a,b,pr){
	return a.proporMezhdu(b,pr);
}

function cvetMezhdu(a,b,pr){
	return cvet({
		r:proporMezhdu(a.r,b.r,pr).round(),
		g:proporMezhdu(a.g,b.g,pr).round(),
		b:proporMezhdu(a.b,b.b,pr).round(),
	});
}