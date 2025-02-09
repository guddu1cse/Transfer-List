
const leftList = document.getElementById('left');
const rightList = document.getElementById('right');

function makeLeftList() {
    for (let y = 0; y < 10; y++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <input type="checkbox">
            <label>Item ${y + 1}</label>
        `;
        leftList.appendChild(item);
    }
}

makeLeftList();

function transferCheckedListFromLeftToRight() {
    const checkboxes = Array.from(leftList.getElementsByTagName('input'));
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkbox.checked=false;
            rightList.appendChild(checkbox.parentElement);
        }
    });
}

function transferAllFromLeft(){
    Array.from(leftList.getElementsByTagName('input')).forEach((checkbox) => {
        checkbox.checked=false;
        rightList.appendChild(checkbox.parentElement);
    });
}

function transferCheckedListRightToLeft(){
    Array.from(rightList.getElementsByTagName('input')).forEach((item)=>{
        if(item.checked){
            item.checked = false;
            leftList.appendChild(item.parentElement);
        }
    });
}

function transferAllFromRight(){
    Array.from(rightList.getElementsByTagName('input')).forEach((checkbox) => {
        checkbox.checked=false;
        leftList.appendChild(checkbox.parentElement);
    });
}
