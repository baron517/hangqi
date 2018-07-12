
/*
setInterval(function()
{
	
if((!localStorage.time)||(localStorage.start_time>=localStorage.end_time))
{
	var name=prompt("请用密钥激活软件，此操作需要联网才能激活，谢谢","")
    if (name!=null && name!="")
    {
      
	  $.ajax({
               type: "GET",
               url: "http://project.youzewang.com/keyManage/index.php/Api/CommonApi/verify",
               data: {k_str:name},
			   dataType:"json",
               success: function(data){
                        console.log(data);
						if(data.code="1000")
						{
							alert(data.msg);
							localStorage.start_time=parseInt(data.data.k_time);
							localStorage.end_time=parseInt(data.data.k_time)+parseInt(data.data.k_days)*24*60*60;
						}
						else{
							alert(data.msg);
						}
                  },
			   error:function()
			   {
				   alert("需要联网才能操作！");
			   }
            });
	
    }
	else{
		 alert("激活失败，密钥不能为空");
	}
	
}

else{
	
	if(localStorage.start_time)
	{
		localStorage.start_time=parseInt(localStorage.start_time)+10;
	}
	
	
}

 
	
},30000)

*/


