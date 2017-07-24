window.onload=function(){
	var krpano = document.getElementById("krpanoSWFObject");
	// krpano.call('showlog(true)');
	
	alert(a);
	
}

function alertWindow(){
	alert("a");
}

function krpano() 
{
	return document.getElementById("krpanoSWFObject");
}

function exp(){
krpano.call("loadpano('tour.xml',null,MERGE,BLEND(1));");   //加载其他场景

}