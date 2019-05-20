//JavaScript Document

$(document).ready(function  (e){
	document.addEventListener("deviceready", onDeviceReady, false);

});
		
		function onDEviceReady(){
			
		$('#posicion').on('click',function(){
			getPosition ();
		});
	   }
	   
	   function getPosition(){
		   var options = {
			   enableHighAccuarcy :true,
			   maximumAge: 3600000
		   }
		   
		   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
		   
		 function onSucces(position){
			 
			 alert('Latitude: '    +position.coords.latitude     +'\n'+
			   'Longitude:  '     +positions.coords.longitude     +'\n');
		 };
		 
		 function onError(error){
			 alert('code: '   +error.code   +'\n'+ 'message:' +error.message +'\n');
		 }
	   }