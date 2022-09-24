var likes = [9, 12, 9];
var paras = [document.querySelector("#p1"),
document.querySelector("#p2"),
document.querySelector("#p3")
];
function like(id){
    likes[id]++;
    paras[id].innerHTML = likes[id] + " like(s)";
}