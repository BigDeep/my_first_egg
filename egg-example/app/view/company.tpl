<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<form>
		<input class="companyName" type="text" placeholder="公司名称"/>
		<textarea class="companyInfo" placeholder="公司简介"></textarea>
		<input class="companyPhone" type="text" placeholder="公司电话"/>
		<input class="companyAddress" type="text" placeholder="公司地址"/>
		<input class="companyCulture" type="text" placeholder='公司文化'/>
		<input class="companyMail" type="text" placeholder='公司邮箱'/>
		<input class="update" type="button" value='提交'/>

	</form>

	<script type="text/javascript" src ="/public/js/jquery.min.js">
		

	</script>
	<script type="text/javascript">
		$('.update').on('click',function(){
			alert(10000);
			var company = {};
			company.CompanyName = $('.companyName').val();
			company.CompanyInfo = $('.companyInfo').val();
			company.CompanyPhone = $('.companyPhone').val();
			company.CompanyAddress = $('.companyAddress').val();
			company.CompanyCulture = $('.companyCulture').val();
			company.CompanyMail = $('.companyMail').val();
			$.ajax({
	            type : 'post' ,
	            url : '/company/updateCompany',
	            data:{          
	               	company : JSON.stringify(company)
	            },
	            dataType: 'json',
	            success : function(data) {
	              alert(data);
            }
          })

		})
	</script>
</body>
</html>