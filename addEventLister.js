/**
*事件注册器和移除
*sandyz
*/

var UTIL = (function(UTIL){
  var _my = {
    addListener:null,
    removeListener:null
  };
  
  if(typeof window.addListener === 'function'){
    _my.addListener = function(el, type, fn){
      el.addEventListener(type, fn, false);
    }
    
    _my.removeListener = function(el, type){
			el.removeEventListener(type, fn);
		}
  } else if(typeof document.attactEvent !== 'undefined'){
    _my.addListener = function(el, type, fn){
			el.attactEvent('on'+type, fn);
		}
		_my.removeListener = function(el, type, fn){
			el.detachEvent('on'+type, fn);
		}
  } else {
    _my.addListener = function(el, type, fn){
			el['on'+type] = fn;
		}		
		_my.removeListener = function(el, type, fn){
			el['on'+type] = null;
		}
  }
  
  return _my;
})(UTIL || {});
