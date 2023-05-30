// 获取ul标签
const myList = document.querySelector(".myList");

const textContents =
    "我们坚持“游戏是科学的”的产品理念，不担心也不惧怕成为行业另类。我们认为游戏是科学与艺术的融合，但并非简单地理解为技术和美术的主观嫁接。科学地研究游戏，不仅要深入理解当今的文化现象与流行趋势，更重要的是要研究那令人无比愉悦、令人持续着迷并能产生简单快乐的科学机理。在研究的过程中运用到的分析方法涉及到生物、数学、物理、计算机科学、美学、心理学等等。";
// 将字符串中的中文、英文、数字字符提取出来，去除符号和标点符号
const regex = /[\u4e00-\u9fa5a-zA-Z0-9]+/g;
// 通过正则表达式生成数组
const textParsing = textContents.match(regex);
// console.log("--->", textParsing);

for (let i = 0; i < textParsing.length; i++) {
    // 生成li标签
    const li = document.createElement("li");
    // 标签内容
    li.textContent = textParsing[i];
    // 标签样式
    li.classList.add("Light");
    myList.append(li);
}

// 获取li标签
const lis = myList.querySelectorAll("li");
// 标识
let isScrolling = false;
// 滚动事件
window.addEventListener("wheel", (event) => {
    // 判断标识
    if (isScrolling) return;
    isScrolling = true;

    // 判断滚动方向
    if (event.deltaY > 0) {
        // console.log("向下滚动");
        for (let i = 0; i < lis.length; i++) {
            if (!lis[i].classList.contains("Dark")) {
                lis[i].classList.add("Dark");
                lis[i].classList.remove("Light");
                break;
            }
        }
    } else if (event.deltaY < 0) {
        // 从最后一个开始判断
        for (let i = lis.length - 1; i >= 0; i--) {
            if (!lis[i].classList.contains("Light")) {
                lis[i].classList.add("Light");
                lis[i].classList.remove("Dark");
                break;
            }
        }
    }

    let sameClass = true;

    for (let i = 1; i < lis.length; i++) {
        if (lis[i].className !== lis[0].className) {
            sameClass = false;
            break;
        }
    }

    if (sameClass) {
        console.log("这些 <li> 标签都有相同的类名！");
    } else {
        console.log("这些 <li> 标签没有相同的类名。");
    }

    // 在指定时间内将修改标识状态
    setTimeout(() => {
        isScrolling = false;
    }, 500);
});
