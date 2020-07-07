$('.upload-btn').on('click',function(){
    $('#upload-file').click();
  })
$('#upload-file').on('change',function(){
  var files=$(this).get(0).files;
 var result= document.createElement('p');
  $('#result').html('your file size is: '+files[0].size/1000+' kbytes('+files[0].size+' bytes)');
  
})