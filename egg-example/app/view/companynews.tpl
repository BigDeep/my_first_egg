<!DOCTYPE html>
<html>
<head>
	<title></title>

</head>
<body>
	<input class="title" type="text" name="" placeholder="请输入文章标题">
	<img src="">
	<div id="editor">
        <p>初始化内容</p>
        <p>初始化内容</p>

    </div>
    <button id="btn1">获取html</button>
    <button id="btn2">获取text</button>
    <script src="/public/js/jquery.min.js"></script>
    <script type="text/javascript" src="/public/js/wangEditor.min.js"></script> 
	<script type="text/javascript">
	    var E = window.wangEditor;
        var editor = new E('#editor');
        editor.customConfig.uploadImgShowBase64 = true  ;
        editor.create();
        editor.txt.html('<p>口区</p>');
        
        $('#btn1').on('click',function(){
        	console.log(editor.txt.html());
        	$.ajax({
            type : 'post' ,
            beforeSend: function(xhr){xhr.setRequestHeader('x-csrf-token', "JCeitSQn39ra4kEeyn_MnisL")},
            url : '/companynews/addCompanynews',
            data:{  
            	newsTitle : $('.title').val(),     
                html : editor.txt.html(),
                editor : '李宇峰'
            },
            dataType : 'json',
            success : function(data) {
              alert(data);
            }
          });
        })

        $('#btn2').on('click',function(){
        	
        	$.ajax({
            type : 'post' ,
            beforeSend: function(xhr){xhr.setRequestHeader('x-csrf-token', "XeRoyZA_lbvGUfvoAgFiQQ-i")},
            url : '/companynews/deleteCompanynews',
            data:{  
            	Id : 40               
            },
            dataType : 'json',
            success : function(data) {
              alert(data);
            }
          });
        })
	</script>

</body>
</html>