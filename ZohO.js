var department,departmentRes;
var cookie= document.cookie.split(';');
			for (i = 0; i < cookie.length; i++) {
    if ((cookie[i]).startsWith(" CT_CSRF") == true){
						csrf="crmcsrfparam="+(cookie[i]).split('=')[1];
}
}
$.ajax({url: "https://support.localzoho.com/api/v1/departments?portalname=skathi",type: "GET",success: function(r){  departmentRes= r.data[0].id;alert(departmentRes);var params={"firstName":"","lastName":"vladimirlevin","associatedDepartmentIds":[departmentRes],"associatedChatDepartmentIds":[""],"rolePermissionType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","status":"ACTIVE","emailId":"vladimirlevin.jobert@gmail.com"};
$.ajax({url: "https://support.localzoho.com/api/v1/agents?portalname=skathi",type: "POST",data: JSON.stringify(params),contentType: "application/json; charset=utf-8",dataType: "json",headers:{"X-ZCSRF-TOKEN":csrf}});}});
