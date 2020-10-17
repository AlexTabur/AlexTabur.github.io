var createbuttonPlay=(buttontext)=>{
	newEl('button', listofsongs, {'class':'playbtn'}, `<img src="playbtn.svg" class="margin0" width="50px" height="50px">`);
}
var newEl=(tagname,parent, attributes, innerHtml)=>{
	let newel= document.createElement(tagname);
	for (keys in attributes){
		newel.setAttribute(keys, attributes[keys]);
	}
	newel.innerHTML=innerHtml;
	parent.appendChild(newel);
	return newel;
}
var songs={
	
}
for (var i = 0; i < Things.length; i++) {
	Things[i]
}
createbuttonPlay("steins gate OP");