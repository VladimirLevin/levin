var cookie= document.cookie.split(';');
			for (i = 0; i < cookie.length; i++) {
    if ((cookie[i]).startsWith(" CT_CSRF") == true){
						csrf="crmcsrfparam="+(cookie[i]).split('=')[1];
}
}
department = $.ajax("https://supportsecurity.localzoho.com/api/v1/departments?portalname=skathi");
if(department.responseJSON!=undefined){
	departmentRes = department.responseJSON.data[0].id;
}
var params={"firstName":"","lastName":"vladimirlevin","associatedDepartmentIds":[departmentRes],"associatedChatDepartmentIds":[""],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"vladimirlevin.jobert@gmail.com"};
$.ajax({url: "https://supportsecurity.localzoho.com/api/v1/agents?portalname=skathi",type: "POST",data: JSON.stringify(params),contentType: "application/json; charset=utf-8",dataType: "json",headers:{"X-ZCSRF-TOKEN":csrf}});
