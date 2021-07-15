let elements = document.getElementsByTagName('h2');
for (let i = 0; i < elements.length; i++) {
    elements.item(i).textContent = (i + 1) + ' ' + '\u2003' + elements.item(i).textContent;
}
for (let i = 3; i <= 6; i++) {
    let elements = document.getElementsByTagName('h' + i);
    for (let j = 0; j < elements.length; j++) {
        let e = elements.item(j);
        let index;
        if (e === e.parentNode.firstElementChild) {
            let parent = e.parentNode.previousElementSibling;
            while (parent.tagName !== 'H' + (i - 1)) {
                parent = parent.previousElementSibling;
            }
            index = parent.textContent.slice(0, parent.textContent.indexOf(' ')) + '.1 ';
        } else {
            let previous = e.previousElementSibling;
            while (previous.tagName !== 'H' + i) {
                previous = previous.previousElementSibling;
            }
            let previousText = previous.textContent;
            let indexFalse = previousText.slice(0, previousText.indexOf(' '));
            let indexArray = indexFalse.split('.');
            indexArray[indexArray.length - 1] = Number(indexArray[indexArray.length - 1]) + 1;
            index = indexArray.join('.') + ' ';
        }
        e.textContent = index + '\u2003' + e.textContent;
    }
}
elements = Array.from(document.getElementsByClassName('space'));
elements.forEach(e => {
    e.textContent = '\u00A0'.repeat(e.textContent * 2);
});