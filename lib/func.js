'use strict';
function okrugldo(a,b){
/**Округлить a с точностью до b*/
	if(!b)
		b=1;
	a=Math.round(a/b)*b;
	return a;
}
function sluchch(n,k,s){
/**Случайное число от n до k с шагом s.
Если s опущено - с шагом 1.
Если k опущено - от 0 до n*/
	if(!s)
		s=1;
	if(k==undefined)
		return sluchch(0,n,1);

	return okrugldo(Math.random() * (k-n),s) + n;
}

function slKrome(a,p1,p2,p3){
/**Случайное число, кроме a:
если a - массив, то не содержащееся в нём;
если a - число или строка, то не равное ему;
если a - функция, принимающая параметр - то не удовлетворяющее ей (т. е. чтобы функция вернула 0).*/
	var b;

	if(a.isNumber || a.isString)
		do{
			b=sl(p1,p2,p3);
		}while(b==a);
	else if(a.isArray)
		if(a.length)
			do{
				b=sl(p1,p2,p3);
			}while(a.hasElem(b));
		else
			return sl(p1,p2,p3);
	else if(a.isFunction)
		do{
			b=sl(p1,p2,p3);
		}while(a(b));
	else
		console.error('Первый параметр функции slKrome должен быть числом, строкой, массивом или функцией.');
	return b;
}

function sluchDel(a){
/**Случайный делитель числа a*/
	return a.sluchDel();
}

function sluchiz(a,n){
/**Массив n случайных неповторяющихся элементов массива a*/
	if(!(n>=1))
		n=1;
	var b=a.slice();
	b.shuffle();
	b.length=n;
	return b;
}

function chislit(a,s1,s2,s5){
/**Вспомогательная процедура*/
	a=a%100;
	if((a>=5)&&(a<=20))
		return s5;

	a=a%10;
	if(a==1)
		return s1;

	if((a<=4)&&(a>=2))
		return s2;

	return s5;
}

function s3ug(Ax,Ay,Bx,By,Cx,Cy){
/**Площадь треугольника по координатам трёх вершин.*/
	return 0.5*(Ax*By+Ay*Cx+Bx*Cy-By*Cx-Cy*Ax-Ay*Bx).abs();
}

function chislitM(p1,p2,p3,p4){
	return p1.ts()+' '+chislit(p1,p2,p3,p4);
}

function chislitlx(p1,p2,p3){
/***/
	var rez=sklonlxkand(p2,undefined,0);
	switch(p3){
		case 'i': return chislitM(p1,	rez.ie,	(rez.r2?rez.r2:rez.re),	rez.rm);
		case 'r': return chislitM(p1,	rez.re,	 rez.rm,				rez.rm);
		case 'd': return chislitM(p1,	rez.de,	 rez.dm,				rez.dm);
		case 'v': return chislitM(p1,	rez.ve,	(rez.r2?rez.r2:rez.ve),	rez.vm);
		case 't': return chislitM(p1,	rez.te,	 rez.tm,				rez.tm);
		case 'p': return chislitM(p1,	rez.pe,	 rez.pm,				rez.pm);
	}
	return chislitM(p1,rez.ie,(rez.r2?rez.r2:rez.re),rez.rm);
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

function clone(obj){
	if(obj == null || typeof(obj) != 'object')
		return obj;

	var temp = {};
	if (obj instanceof Array)
		temp = [];
	for(var key in obj)
		if(obj[key] === undefined)
			temp[key]=undefined;
		else if(obj[key].isArray)
			temp[key]=obj[key].slice();
		else
			temp[key] = clone(obj[key]);
	return temp;
}

function sl1(){
	return Math.random().round();
}

function sp(a){//Я просто оставлю это здесь
	for(var i=0,c=a.split('\''),b=[];i<c.length;i++)
		b=b.concat(i%2?c[i]:c[i].split(' '));
	for(var i=0;i<b.length;b.splice(i,!b[i++])){};
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

function perevodVelichin(a){
/**Наброски движка про перевод величин*/
	var edIzm=a.iz(2);
	var ishIzm=edIzm[0];
	var rezIzm=edIzm[1];
	var koef=sl(0.1,9.9,0.1)*10 .pow(sl(-1,1));
	var otv=koef*ishIzm[1]/rezIzm[1];
	window.vopr.txt='Выразите '+chislitlx(koef,ishIzm[0])+' в '+lx[rezIzm[0]].pm;
	window.vopr.ver=[otv.ts()];
}

function isZ(n){
/**Является ли n целым числом.*/
	return n.isZ();
}

function isPolnKvadr(n){
/**Является ли n полным квадратом.*/
	return n.isPolnKvadr();
}

function hasErrors(p,bdr){
	if(p==undefined)
		return 'undefined; '
	if(p.isFunction)
		return 0;
	var rez='';
	if(p.isNumber)
		p=''+p;
	if(p.isString){
		if(p.match(/NaN/))
			rez+='NaN; ';
		if(p.match(/undefined/))
			rez+='undefined; ';
		if(p.match(/Infinity/))
			rez+='Infinity; ';
		if(p.match(/[.,][0-9]*00000/))
			rez+='00000; ';
		if(!bdr && p.reverse().match(/[0-9]{6,}[.,](?!0("|sir))/))
			rez+='6 и более цифр после десятичной запятой '+
				'(если так и должно быть, установите vopr.kat.bdr значение 1; ';
	}
	if(p.isArray){
		for(var i=0;i<p.length;i++){
			rez+=hasErrors(p[i]);
		}
	}
	return rez;
}

function rang_mat(A){//Отсюда: http://liloisproj.narod.ru/mat_rang.htm
	var i=A.length;
	var j=A[0].length;
	var q = Math.min(i,j);

	while(q) // проверка: порядок матрицы меньше или равен минимальному из размеров матрицы?
	{ // если да
		var B = []; // создаем новую матрицу размера q
		for(var w=0;w<q;w++)
			B[w]=[];

		for(var a=0;a<(i-(q-1));a++) // тут начинается перебор матриц q-го порядка
		{
			for(var b=0;b<(j-(q-1));b++)
			{
				for(var c=0;c<q;c++)
				{
					for(var d=0;d<q;d++)
					{
						B[c][d] = A[a+c][b+d];
					}
				}

				if(B.det()) // если определитель матрицы отличен от нуля
				{ // то
					return q; // присваиваем рангу значение q
				}
			}
		}
		q--;
	}
	return 0;
}

function getLen(x1, x2, y1, y2){
	return Math.sqrt( Math.pow(x1-x2, 2)+Math.pow(y1-y2, 2) );
}

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeStruct(strNames){
	var names = strNames.split(' ');
	var count = names.length;
	function constructor(){
		for (var i = 0; i < count; i++){
			this[names[i]] = arguments[i];
		}
	}
	return constructor;
}

function make2Array(ch,k) {
/**из числа делает массив 0 и 1 с количеством элементов k*/
	var x=[];
	for (var i=0; i<k; i++) {
		var t=ch % 2;
		ch = Math.floor(ch / 2);
		x.push(t);
	}
	return x;
}

function slLetter(b) {
/**генерирует случайную букву английского алфавита*/
	var a = '';
	if (!b)
		a = String.fromCharCode('a'.charCodeAt(0)+sluchch(25));
	else {
		if (b.isString) {
			var temp = b.charCodeAt(0)-'a'.charCodeAt(0);
			a = String.fromCharCode('a'.charCodeAt(0)+slKrome(temp,25));
		}
		else if (b.isArray) {
			var temp=[];
			for (var i=0; i<b.length; i++)
				temp[i] = b[i].charCodeAt(0)-'a'.charCodeAt(0);
			a = String.fromCharCode('a'.charCodeAt(0)+slKrome(temp,25));
		}
	}
	return a;
}

function genPifag(){
	return objUmn([[sl(1,5)]],[om.pifagtr.iz().slice()])[0];
}

function mapRecursive(obj,fun){
	if(obj===undefined || obj.isNumber || obj.isString){
		return fun(obj);
	}
	if(obj.isFunction){
		return obj;
	}
	if(obj.isArray){
		var len=obj.length;
		var rez=[];
		for(var i=0;i<len;i++){
			rez[i]=mapRecursive(obj[i],fun);
		}
		return rez;
	}
	if(obj.isObject){
		var rez={};
		for(var chto in obj){
			rez[chto]=mapRecursive(obj[chto],fun);
		}
		return rez;
	}
	return obj;
}

function compareObjects(a,b,propList){
	var len=propList.length;
	for(var i=0;i<len;i++){
		if(a[propList[i]]<b[propList[i]])
			return -1;
		else if (a[propList[i]]>b[propList[i]])
			return 1;
	}
	return 0;
}

function safeinc(obj,prop){
	if(!obj[prop])
		obj[prop]=1;
	else
		obj[prop]++;
}

function setProps(obj,props){
	for(var chto in props){
		obj[chto]=props[chto];
	}
}

function isCppCode(code){
	return /int\s+main\s*\(.*\)/.test(code);
}

function generateSuperincSequence(length, start, mingap, maxgap) {
	if (start === undefined) {
		start = 1;
	}
	if (mingap === undefined) {
		mingap = 1;
	}
	if (maxgap === undefined) {
		maxgap = 16; // От балды
	}
	var seq = [start];
	while (seq.length < length) {
		seq.push(seq.sum()+sl(mingap,maxgap));
	}
	return seq;
}

try{
	global. okrugldo = module.exports. okrugldo = okrugldo ;
	global. sl = module.exports. sl =
	global. sluchch = module.exports. sluchch = sluchch ;
	global. slKrome = module.exports. slKrome = slKrome ;
	global. sluchDel = module.exports. sluchDel = sluchDel ;
	global. sluchiz = module.exports. sluchiz = sluchiz ;
	global. chislit = module.exports. chislit = chislit ;
	global. s3ug = module.exports. s3ug = s3ug ;
	global. chislitM = module.exports. chislitM = chislitM ;
	global. chislitlx = module.exports. chislitlx = chislitlx ;
	global. clone = module.exports. clone = clone ;
	global. sl1 = module.exports. sl1 = sl1 ;
	global. sp = module.exports. sp = sp ;
	global. cvet = module.exports. cvet = cvet ;
	global. proporMezhdu = module.exports. proporMezhdu = proporMezhdu ;
	global. cvetMezhdu = module.exports. cvetMezhdu = cvetMezhdu ;
	global. perevodVelichin = module.exports. perevodVelichin = perevodVelichin ;
	global. isZ = module.exports. isZ = isZ ;
	global. isPolnKvadr = module.exports. isPolnKvadr = isPolnKvadr ;
	global. hasErrors = module.exports. hasErrors = hasErrors ;
	global. rang_mat = module.exports. rang_mat = rang_mat ;
	global. getLen = module.exports. getLen = getLen ;
	global. getRandomInt = module.exports. getRandomInt = getRandomInt ;
	global. makeStruct = module.exports. makeStruct = makeStruct ;
	global. make2Array = module.exports. make2Array = make2Array ;
	global. slLetter = module.exports. slLetter = slLetter ;
	global. genPifag = module.exports. genPifag = genPifag ;
	global. mapRecursive = module.exports. mapRecursive = mapRecursive ;
	global. compareObjects = module.exports. compareObjects = compareObjects ;
	global. safeinc = module.exports. safeinc = safeinc ;
	global. setProps = module.exports. setProps = setProps ;
	global. isCppCode = module.exports. isCppCode = isCppCode ;
	global. generateSuperincSequence = module.exports. generateSuperincSequence = generateSuperincSequence ;
} catch (e) {
}
