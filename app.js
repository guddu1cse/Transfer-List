
const leftList = document.getElementById('left');
const rightList = document.getElementById('right');

function makeLeftList() {
    for (let y = 0; y < 6; y++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <input type="checkbox" onchange="btn()">
            <label>Item ${y + 1}</label>
        `;
        leftList.appendChild(item);
    }

    for (let y = 0; y < 4; y++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <input type="checkbox" onchange="btn()">
            <label>Item 1${y + 1}</label>
        `;
        rightList.appendChild(item);
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

    btn();
}

function transferAllFromLeft(){
    Array.from(leftList.getElementsByTagName('input')).forEach((checkbox) => {
        checkbox.checked=false;
        rightList.appendChild(checkbox.parentElement);
    });

    btn();
}

function transferCheckedListRightToLeft(){
    Array.from(rightList.getElementsByTagName('input')).forEach((item)=>{
        if(item.checked){
            item.checked = false;
            leftList.appendChild(item.parentElement);
        }
    });

    btn();
}

function transferAllFromRight(){
    Array.from(rightList.getElementsByTagName('input')).forEach((checkbox) => {
        checkbox.checked=false;
        leftList.appendChild(checkbox.parentElement);
    });

    btn();
}

function btn(){

    if(Array.from(leftList.getElementsByTagName('input')).find((item)=>item.checked)){
        document.getElementById('slected-right').disabled = false;
    }else{
        document.getElementById('slected-right').disabled = true;
    }

    if(Array.from(rightList.getElementsByTagName('input')).find((item)=>item.checked)){
        document.getElementById('slected-left').disabled = false;
    }else{
        document.getElementById('slected-left').disabled = true;
    }

    if(Array.from(leftList.getElementsByClassName('item')).length == 0){
        document.getElementById('all-right').disabled = true;
    }else{
        document.getElementById('all-right').disabled = false;
    }

    if(Array.from(rightList.getElementsByClassName('item')).length == 0){
        document.getElementById('all-left').disabled = true;
    }else{
        document.getElementById('all-left').disabled = false;
    }
    console.log("changes trigger ");

}

btn();
