function drag(id){
	var obj=document.getElementById(id);
	obj.onmousedown=function(ev){
		var ev=ev||window.event;
		var disX=ev.pageX-obj.offsetLeft;
		var disY=ev.pageY-obj.offsetTop;
		document.onmousemove=function(ev){
			var ev=ev||window.event;
			obj.style.left=ev.pageX-disX+'px';
			obj.style.top=ev.pageY-disY+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=document.onmousedown=null;
		}
	}
}