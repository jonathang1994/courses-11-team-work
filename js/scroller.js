var div= $('.content-row');
var hasVerticalScrollbar= div[0].scrollHeight > div[0].clientHeight;
var hasHorizontalScrollbar= div[0].scrollWidth > div[0].clientWidth;

console.log(hasHorizontalScrollbar);
console.log(hasVerticalScrollbar);

