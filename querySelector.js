const leftList = document.querySelector('#left');
const rightList = document.querySelector('#right');

function makeLeftList() {
    for (let y = 0; y < 10; y++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <input type="checkbox" onchange="btn()">
            <label>Item ${y + 1}</label>
        `;
        leftList.appendChild(item);
    }
}

makeLeftList();

function transferCheckedListFromLeftToRight() {
    document.querySelectorAll('#left input:checked').forEach((checkbox) => {
        checkbox.checked = false;
        rightList.appendChild(checkbox.parentElement);
    });

    btn();
}

function transferAllFromLeft() {
    document.querySelectorAll('#left .item').forEach((item) => {
        item.querySelector('input').checked = false;
        rightList.appendChild(item);
    });

    btn();
}

function transferCheckedListRightToLeft() {
    document.querySelectorAll('#right input:checked').forEach((checkbox) => {
        checkbox.checked = false;
        leftList.appendChild(checkbox.parentElement);
    });

    btn();
}

function transferAllFromRight() {
    document.querySelectorAll('#right .item').forEach((item) => {
        item.querySelector('input').checked = false;
        leftList.appendChild(item);
    });

    btn();
}

function btn() {
    document.querySelector('#slected-right').disabled = !document.querySelector('#left input:checked');
    document.querySelector('#slected-left').disabled = !document.querySelector('#right input:checked');
    document.querySelector('#all-right').disabled = !document.querySelector('#left .item');
    document.querySelector('#all-left').disabled = !document.querySelector('#right .item');

    console.log("Changes triggered");
}

btn();