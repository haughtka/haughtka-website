function categorize(loc) {
  var y = document.getElementsByClassName("thumb");

  for (i = 0; i < y.length; i++) {
	  
	removeClass(y[i],"hide");
	
	
    if(!hasClass(y[i],loc) )
    {
       addClass(y[i],"hide");
    } 
  }

}

function showAll() {
  var y = document.getElementsByClassName("thumb");

  for (i = 0; i < y.length; i++) {
    removeClass(y[i],"hide");
  }

}


//http://jaketrent.com/post/addremove-classes-raw-javascript/

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
      }

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
      }

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
}