function buat_login(){
	var hide = document.getElementById("X");
	hide.parentElement.removeChild(hide);

	var jdl = document.createElement("p");
	jdl.className = "tulisan_login";
	jdl.innerHTML = "silahkan mendaftar";
	var element = document.getElementsByTagName("div")[0];
	element.appendChild(jdl);

	var form = document.createElement("form");
	element.appendChild(form);

	var lblNamaUser = document.createElement("label");
	lblNamaUser.innerHTML = "Nama User";
	form.appendChild(lblNamaUser);

	var inputNama = document.createElement("input");
	inputNama.type ="text";
	inputNama.name = "nama";
	inputNama.className = "form_login";
	inputNama.placeholder = "Nama User.."
	form.appendChild(inputNama);

	var lblNoHP = document.createElement("label");
	lblNoHP.innerHTML = "Nomor Handphone";
	form.appendChild(lblNoHP);

	var inputHP = document.createElement("input");
	inputHP.type ="text";
	inputHP.name = "nomorhp";
	inputHP.className = "form_login";
	inputHP.placeholder = "Nomor Handphone."
	form.appendChild(inputHP);

	var lblUsername = document.createElement("label");
	lblUsername.innerHTML = "Username";
	form.appendChild(lblUsername);

	var inputUser = document.createElement("input");
	inputUser.type ="text";
	inputUser.name = "username";
	inputUser.className = "form_login";
	inputUser.placeholder = "Username atau Email .."
	form.appendChild(inputUser);

	var lblPass = document.createElement("label");
	lblPass.innerHTML = "Password";
	form.appendChild(lblPass);

	var inputPass = document.createElement("input");
	inputPass.type ="text";
	inputPass.name = "password";
	inputPass.className = "form_login";
	inputPass.placeholder = "Password .."
	form.appendChild(inputPass);

	var tombol = document.createElement("input");
	tombol.type = "submit";
	tombol.value = "DAFTAR SEKARANG";
	tombol.className = "tombol_login";
	form.appendChild(tombol);
}