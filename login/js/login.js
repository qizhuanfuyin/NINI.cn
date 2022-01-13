let userName = document.getElementById("userName");
let userPwd = document.getElementById("userPwd");
let userTips = document.getElementById("userTips");
let pwdTips = document.getElementById("pwdTips");

// document.getElementsByName("myForm").onsubmit = function(e){
//     alert("111")
// }
const userID = "poi123"
const userPwds = "12345678poi"

let str = /^[^\u4e00-\u9fa5]*$/

userName.oninput = ()=>{
	if(userName.value.length < 4){
		if(userName.value.length == 0){
			userTips.innerText = ""
		}else{
			// userTips.innerText = ""
			userTips.innerText = "用户名长度不得小于4位数"
		}
	}
	else if(!str.test(userName.value)){
		userTips.innerText = ""
		userTips.innerText = "用户名不能包含中文字符"
	}
	else if(userName.value == ''){
		userTips.innerText = ""
		userTips.innerText = "用户名不得为空"
	}
	else{
		userTips.innerText = ""
	}
}

userPwd.oninput = ()=>{
	if(userPwd.value.length < 8){
		if(userPwd.value.length == 0){
			pwdTips.innerText = ""
		}else{
			pwdTips.innerText = "密码长度不得小于8位数"
		}
	}
	else{
		pwdTips.innerText = ""
	}
}

function loginYz() {
	if(userName.value == ''){
		userTips.innerText = "用户名不得为空"
		return false
	}
	else if (userName.value.length < 4 ) {
		userTips.innerText = "用户名长度不得小于4位数"
		return false
	} else if (userPwd.value.length < 8) {
		pwdTips.innerText = "密码长度不得小于8位数"
		return false
	}else if(userName.value != userID && userPwd.value != userPwds){
		pwdTips.innerText = "用户名或密码有误"
		return false
	}else {
		alert("登陆成功");
		return true;
	}
}
