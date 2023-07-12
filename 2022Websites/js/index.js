// 你查看源代码是想干什么小伙子？
// 一言接口
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn?c=i');	// 仅接收诗词类短句 
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let data = JSON.parse(xhr.responseText);
        let hitokoto = document.getElementsByTagName("header")[0].querySelector("p");
        hitokoto.innerText = data["hitokoto"]
    }
}
xhr.send();
// 最小宽度1084px
function start() {
    let winWidth = document.body.clientWidth
    let iframe = document.getElementById("video").querySelector("div").querySelector("iframe")
    iframe.style.width = winWidth * 0.9 + "px"
    iframe.style.height = winWidth * 0.9 / 16 * 9 + "px"
    if (document.documentElement.clientWidth > 1083) {
        for (let i = 0; i < tags.length; i += 2) {
            tags[i].querySelector("p").innerHTML = "鼠标移动到卡片上以预览"
            if (tags[i].classList.contains("fullscreen")) {
                document.getElementById("back").style.display = "block"
                tags[i].querySelector("div").querySelector("button").innerHTML = "收起"
            } else {
                document.getElementById("back").style.display = "none"
                tags[i].querySelector("div").querySelector("button").innerHTML = "查看入部要求"
            }
            tags[i].onmouseenter = () => { tags[i].querySelector("p").innerHTML = "" }
            tags[i].onmouseleave = () => {
                if (tags[i].classList.contains("fullscreen") == false) {
                    tags[i].querySelector("p").innerHTML = "鼠标移动到卡片上以预览"
                }
            }
        }
    } else {
        document.getElementById("back").style.display = "none"
        for (let i = 0; i < tags.length; i += 2) {
            tags[i].querySelector("p").innerHTML = "点击以展开"
            tags[i].querySelector("div").querySelector("button").innerHTML = "关闭"
            tags[i].onmouseenter = () => { }
            tags[i].onmouseleave = () => { }
        }
    }
}
// 窗口校准
window.onload = start
window.onresize = start

var tagisFull = [1, 1, 1]
let tags = document.getElementById("department").querySelector("div").getElementsByTagName("div")
for (let i = 0; i < tags.length; i += 2) {
    tags[i].onclick = () => {
        if (document.documentElement.clientWidth <= 1083) {
            tagisFull[i / 2] += 1
            if (tagisFull[i / 2] >= 2) {
                tags[i].classList.add("fullscreen")
                tags[i].querySelector("p").innerHTML = ""
                tagisFull[i / 2] = 0
            }
        }
    }
    let temp = tags[i].querySelector("div").querySelector("button")
    temp.onclick = () => {
        if (document.documentElement.clientWidth <= 1083) {
            tags[i].querySelector("p").innerHTML = "点击以展开"
            tags[i].classList.remove("fullscreen")
            tagisFull[i / 2] = 0
        } else {
            tagisFull[i / 2] += 1
            if (tagisFull[i / 2] >= 2) {
                tags[i].classList.add("fullscreen")
                tags[i].querySelector("p").innerHTML = ""
                temp.innerHTML = "收起"
                document.getElementById("back").style.display = "block"
                tagisFull[i / 2] = 0
            } else {
                tags[i].classList.remove("fullscreen")
                tags[i].querySelector("p").innerHTML = "鼠标移动到卡片上以预览"
                temp.innerHTML = "查看详细"
                document.getElementById("back").style.display = "none"
                tagisFull[i / 2] = 1
            }
        }
    }
}
// document.getElementById("header").querySelectorAll("a")[1].onclick = ()=>{alert("暂不提供下载")}
// document.querySelector('header').style.background = "rgba(0,0,0,0.25) url(https://www.yangshangzhen.com/bing/wallpaper) cover no-repeat center"