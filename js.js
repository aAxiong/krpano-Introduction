window.onload=function(){
	embedpano({
		swf:"tour.swf", xml:"tour.xml", target:"pano", html5:"prefer", mobilescale:1.0, passQueryParameters:true,onready:caozuo});
}

function caozuo(krpano){
	console.log(krpano);
	krpano.call('showlog(true)');
	setTimeout(function(){
	var a = krpano.get("hotspot[scene_puydesancyh].ath");    
   	console.log(a);
	},1000)
	krpano.call("addhotspot(hs2)");
	krpano.set("hotspot[hs2].style, hs_gallery");
	krpano.set("hotspot[hs2].ath, 50");
	krpano.set("hotspot[hs2].atv, 20");
	krpano.set("hotspot[hs2].galleryname, gallery2");
}

function krpano(){
	return document.getElementById("krpanoSWFObject");
}

function exp(){
	krpano.call("loadpano('tour.xml',null,MERGE,BLEND(1));");   //加载其他场景
}