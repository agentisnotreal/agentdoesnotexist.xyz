function copyTag(element) {
    var r = document.createRange();
    r.selectNode(document.getElementById(element));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}