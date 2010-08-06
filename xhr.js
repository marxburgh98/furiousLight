var xhr = new Object();
xhr.READY_STATE_UNINITIALIZED = 0;
xhr.READY_STATE_LOADING=1;
xhr.READY_STATE_LOADED=2;
xhr.READY_STATE_INTERACTIVE=3;
xhr.READY_STATE_COMPLETE=4;
// xhr.status_message = null;	

xhr.GetIt=function(url,onload,onerror){
	this.url=url;  // possibly not needed
	this.xmlGot=null;
	this.onload=onload;
	this.onerror=(onerror) ? onerror: this.defaultError;  // if statement. conditional.  (test? true: false)
	this.getXMLHTTPRequest(url);
}

xhr.GetIt.prototype={
	getXMLHTTPRequest:function(url){
		if (window.XMLHttpRequest){
			this.xmlGot = new XMLHttpRequest();
		} else if (window.ActiveXObject){
			this.xmlGot = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var HttpMethod="GET";
		if (this.xmlGot){
			try{
									//Try catch this.
				var xmlObjectGetter = this;
				this.xmlGot.onreadystatechange= function(){
					xmlObjectGetter.onReadyState.call(xmlObjectGetter);
				};			
				this.xmlGot.open(HttpMethod,url,true);
				this.xmlGot.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				this.xmlGot.send(null);
			}
			catch(err){
				this.onerror.call(this);
			}
		}
	},
	onReadyState:function(){
		var got=this.xmlGot;
		var ready=got.readyState;
		if (ready == xhr.READY_STATE_COMPLETE) {
			var httpStatus = got.status;
			if (httpStatus == 200 || httpStatus == 0) {
				var wegot= this.xmlGot.responseXML.childNodes[0].childNodes[0];
				this.onload.call(this);  // called because 'this.onload' is passed in the parameter of the object constructor.
				//you use 'call' when you want to change 'this'.  //function
			}
			else {
				this.onerror.call(this);
			}
		}
	}, 
	defaultError:function(){
		alert("error fetching data!"
		+"\n\nreadyState:"+this.xmlGot.readyState
		+"\n\nstatus:"+this.xmlGot.status
		+"\n\nheaders:"+this.xmlGot.getAllResponseHeaders());
	}
};



function xmlParser(){
	//	 console.log('got',got)  //No scope.  Got is in prototype.

	var catalog = this.xmlGot.responseXML.childNodes;
	
	var itemsLevel = catalog[0].childNodes;  //fill this guy
	for (var i=0,l=itemsLevel.length ;i<l;i++) {
		var itemNode=itemsLevel[i];
		if(itemNode.nodeType==1){
			var item = new MagicalItem();
			for (var j=0,k=itemNode.childNodes.length ;j<k;j++){
				var attributeNode = itemNode.childNodes[j];
				if(attributeNode.nodeType==1){
				    var myname = attributeNode.tagName;
					var imlike = attributeNode.childNodes[0].nodeValue;
					item[myname] = imlike;  //item.myname = imlike won't work.  
					//item is an array.	
				}
			}
			magicalStoreApp.magicalItems.push(item);
	    }
	 }
	starter();
//	console.log('items',magicalStoreApp.magicalItems)


}

function initStuff(){
	var loader= new xhr.GetIt('catalog.xml',xmlParser);

}