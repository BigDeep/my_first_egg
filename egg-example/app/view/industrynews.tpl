<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<style type="text/css"></style>

</head>
<body>
	<input type="text" class="name">
	<input type="text" class="link">
	<button class='btn1' type="text">提交</button>
	<script src="/public/js/jquery.min.js">
		
	</script>
	<script type="text/javascript">
		$('.btn1').on('click' , function(){
			var newsTitle = $('.name').val();
			var newsLink = $('.link').val();
			$.ajax({
				type:'POST',
				beforeSend: function(xhr){xhr.setRequestHeader('x-csrf-token', "XeRoyZA_lbvGUfvoAgFiQQ-i")},
		        dataType:'text',
		        processData: false,  // 告诉JSLite不要去处理发送的数据
		        contentType: false,   // 告诉JSLite不要去设置Content-Type请求头
		        data:{
		        	newsTitle : newsTitle ,
		        	newsLink : newsLink
		        },
		        url:'/industrynews/addIndustrynews',
		        
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