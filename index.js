function toggleEvenColor() {
    let spanElements = document.querySelectorAll('#numbers span');

    spanElements.forEach(item => {
        if (item.innerHTML % 2 === 0) {
            if (!item.style.backgroundColor || item.style.backgroundColor === "transparent") {
                item.style.backgroundColor = 'yellow';
            } else {
                item.style.backgroundColor = "transparent"
            }

        }
    })
}