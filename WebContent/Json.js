
var data,vals = String(str);
var str = "";
var xhr = new XMLHttpRequest();
function adduser(){	
	var div1 = document.createElement("div");
	div1.id = "block";
	var sno = document.createElement("input");
	sno.setAttribute("id","sno");
	sno.setAttribute("type","number");
	sno.name="ip";
	sno.setAttribute("placeholder","User Id");
	div1.appendChild(sno);
	var name = document.createElement("input");
	name.setAttribute("id","name");
	name.setAttribute("type","text");
	name.name="ip";
	div1.appendChild(name);
	var mail = document.createElement("input");
	mail.setAttribute("id","mail");
	mail.setAttribute("text","email");
	mail.name="ip";
	div1.appendChild(mail);
	var submit = document.createElement("button");
	submit.setAttribute("id","submit");
	
	submit.innerHTML = "Adduser";
	submit.setAttribute("onclick","postJson()");
	var res = document.createElement("div");
	res.setAttribute("id","res");
	div1.appendChild(submit);
	document.getElementById("test").appendChild(div1);
}


function postJson(){	
	var id = document.getElementById("sno").value;
	var name = document.getElementById("name").value;
	var mail = document.getElementById("mail").value;
	var dd = {"id" : id, "name": name, "mail": mail};
	
	data = JSON.stringify(dd);
	var jsonstr = JSON.parse(data);
	console.log(data);
	console.log(jsonstr);
	
	if((id != null) && (name != null) && (mail != null)){
		var url = "http://localhost:8080/Json/JsonServlet";
		xhr.open('POST',url,true);
		xhr.send(data);
	}
}

function getJson(){		
		xhr.onreadystatechange = function() {
			console.log(xhr.readyState);
			if ((xhr.readyState == 4) && (xhr.status == 200)) {
					display(xhr.responseText);
				}
			}
		var url = "http://localhost:8080/Json/JsonServlet?ele=" + xhr.responseText;
		console.log(url);
		xhr.open('GET',url,true);
		xhr.send();
	}

function display(resp){
	var list = document.getElementById("test");
	var getdata = JSON.parse(resp);
	var coloumn_names = Object.keys(getdata);
	for(let col of coloumn_names){
		var div2 = document.createElement("div");
		var cols = Object.keys(getdata[col]);
		for(let d of cols){			
			var value = getdata[col][d];
			div2.innerHTML += value;
					
		}
		list.appendChild(div2);		
	}	
}

function updateUser(){	
	var div2 = document.createElement("div");
	div2.id = "update";
	var sno1 = document.createElement("input");
	sno1.id = "sno1";
	sno1.type = "number";
	sno1.placeholder = "User_Id";
	div2.appendChild(sno1);
	var name1 = document.createElement("input");
	name1.id = "name1";
	name1.type = "text";
	div2.appendChild(name1);
	var mail1 = document.createElement("input");
	mail1.id = "mail1";
	mail1.text = "email";
	div2.appendChild(mail1);
	var submit1 = document.createElement("button");
	submit1.id = "submit";
	submit1.innerHTML = "Update User";
	submit1.setAttribute("onclick","putJson()");
	var res1 = document.createElement("div");
	res1.id = "res1";
	div2.appendChild(submit1);
	document.getElementById("test").appendChild(div2);
}

function putJson(){	
	var id2 = document.getElementById("sno1").value;
	var name2 = document.getElementById("name1").value;
	var mail2 = document.getElementById("mail1").value;
	var dd1 = {"id" : id2, "name": name2, "mail": mail2};
	
	data1 = JSON.stringify(dd1);
	var jsonstr1 = JSON.parse(data1);
	console.log(data1);
	console.log(jsonstr1);
	
	if((id2 != null) && (name2 != null) && (mail2 != null)){
		var url1 = "http://localhost:8080/Json/JsonServlet";
		xhr.open('PUT',url1,true);
		xhr.send(data1);
	}
}
	function deleteUser(){	
		var div3 = document.createElement("div");
		div3.id = "delete";
		var sno2 = document.createElement("input");
		sno2.id = "sno2";
		sno2.type = "number";
		sno2.placeholder = "User_Id";
		div3.appendChild(sno2);
		
		var submit2 = document.createElement("button");
		submit2.id = "submit";
		submit2.innerHTML = "Delete User";
		submit2.setAttribute("onclick","deleteJson()");
		var res2 = document.createElement("div");
		res2.id = "res2";
		div3.appendChild(submit2);
		document.getElementById("test").appendChild(div3);
	}

	function deleteJson(){	
		var id3 = document.getElementById("sno2").value;
		var dd2 = {"id" : id3};
		
		data2 = JSON.stringify(dd2);
		var jsonstr2 = JSON.parse(data2);
		console.log(data2);
		console.log(jsonstr2);
		
		if(id3 != null){
			var url2 = "http://localhost:8080/Json/JsonServlet";
			xhr.open('DELETE',url2,true);
			xhr.send(data2);
	}
}

	

