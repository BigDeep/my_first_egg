<html>
  <head>
  <meta charset="utf-8">
    <title>Egg Demo</title>

  </head>
  <body class="container">
    <form>

      <input type="text" class="admin" placeholder='请输入用户名'/>
      <input type='password' class="password" placeholder='请输入密码'/>
     
     
    </form>
       <button>提交</button>
    <div id="editor">
        <p>初始化内容</p>
        <p>初始化内容</p>
    </div>
    <button id="btn1">获取html</button>
    <button id="btn2">获取text</button>
    <script src="/public/js/jquery.min.js"></script>
    <script type="text/javascript" src="/public/js/wangEditor.min.js"></script> 
    <script type="text/javascript" >
        var E = window.wangEditor;
        var editor = new E('#editor');
        editor.customConfig.uploadImgShowBase64 = true  ;
        editor.create();
        editor.txt.html('<p>口区</p>');
         document.getElementById('btn1').addEventListener('click', function () {
        // 读取 html
            alert(editor.txt.html())
        }, false)

        document.getElementById('btn2').addEventListener('click', function () {
            // 读取 text
            alert(editor.txt.text())
        }, false)





      $('button').click(function() {
        alert(100);
        var admin = $('.admin').val();
        var password = $('.password').val();
          $.ajax({
            type : 'get' ,
            url : '/addAdmin',
            data:{          
                admin : admin,
                password : password
            },
            dataType: 'text',
            success : function(data) {
              alert(data);
            }
          })
        
      })
    </script>
  </body>
</html>

