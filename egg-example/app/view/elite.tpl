<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
			
	</style>
</head>
<body>
	<form>
		<input type="file" name="pic" class="pic"/>
		<input type="text" name='name' class="name"/>
		<input type="text" name='position' class="position"/>
		<input type="text" name='personalInfo' class="personalInfo"/>
		<input type="text" name='contact' class="contact"/>

		<button type='button' class="btn">btnbtn</button>
	</form>
<script type="text/javascript" src='public/js/jquery.min.js'>
</script>
<script type="text/javascript">
	$('.btn').on('click',function(){
		var fd = new FormData();
		fd.append('name',$('.name').val());
		fd.append('position',$('.position').val());
		fd.append('personalInfo',$('.personalInfo').val());
		fd.append('contact',$('.contact').val());
		fd.append('image',$('.pic')[0].files[0]);
		
		$.ajax({
			type:'POST',
			beforeSend: function(xhr){xhr.setRequestHeader('x-csrf-token', "XeRoyZA_lbvGUfvoAgFiQQ-i")},
	        dataType:'text',
	        processData: false,  // 告诉JSLite不要去处理发送的数据
	        contentType: false,   // 告诉JSLite不要去设置Content-Type请求头
	        data:fd,
	        url:'/elite/addElite',
	        
	        success:function(data){
	           console.log('success:',data)
	        },
	        error:function(d){
	           console.log('error:',d)
	        }
		})
	})
</script>
</body>
</html>