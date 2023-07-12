// 你查看源代码是想干什么小伙子？
function notjump(){
	let temp = document.createElement("div")
	let p = document.createElement("p")
	p.innerHTML = "若无法跳转搜索该群号：687293883"
	p.style.textAlign = "center"
	temp.style.position = "fixed"
	temp.style.background = "#f0f0f0"
	temp.style.width = "100%"
	temp.style.transform = "translate(0,-50%)"
	temp.style.top = "50%"
	temp.style.background = "white"
	temp.style.zIndex = "1111"
	temp.style.padding = "20px"
	let btn = document.createElement("button")
	btn.className = "button"
	btn.innerText = "确定"
	btn.style.margin = "10px auto"
	btn.onclick = ()=>{
		document.body.removeChild(temp)
		document.getElementById("back").style.display = "none"
	}
	temp.appendChild(p)
	temp.appendChild(btn)
	document.body.appendChild(temp)
	document.getElementById("back").style.display = "block"
}
let temp = document.getElementsByClassName("jump")
for (let i=0;i<temp.length;i++){
	temp[i].addEventListener("click",notjump)
}