function init(){
//add your javascrip between these two lines of code
  function myEventFunction(){
    alert(name+text.value);
    result.innerHTML = text.value;
  }
  
  var d1 = document.getElementById('entrybutton');
  var text = document.getElementById('entryinput');
  var result = document.getElementById('textoutput');
  var name = 'Yelim Kang: ';
  d1.addEventListener('click', myEventFunction);
  
}
window.addEventListener('load', init);
