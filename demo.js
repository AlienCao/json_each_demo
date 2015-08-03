var data=[{name:"a",age:12},{name:"b",age:11},{name:"c",age:13},{name:"d",age:14}];  
      for(var o in data){  
        alert(o);  
        alert(data[o]);  
        alert("text:"+data[o].name+" value:"+data[o].age );  
      }

<script type="text/javascript">  
function text(){  
  var json = {"options":"[{/"text/":/"王家湾/",/"value/":/"9/"},{/"text/":/"李家湾/",/"value/":/"10/"},{/"text/":/"邵家湾/",/"value/":/"13/"}]"}   
  json = eval(json.options)  
  for(var i=0; i<json.length; i++)  
  {  
     alert(json[i].text+" " + json[i].value)  
  }  
}  
</script>
$.each(object,function(i,item){
  
});