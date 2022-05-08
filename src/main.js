const div = dom.create("<div><span>1</span></div>");
console.log(div);

const nodes = dom.empty(empty);
console.log(nodes);

dom.attr(test, "title", "hello,jiang");

dom.text(test, "你好这是新内容");
console.log(dom.text(test));

dom.style(test, { border: "1px solid red", color: "blue" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid green");

console.log(dom.siblings(dom.find("#s2")[0]));
console.log(dom.next(dom.find("#s2")[0]));

const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));
console.log(dom.index(t2));
dom.style(div, "color", "red");
