
function createSpan(name) {
    let l = document.createElement('span');
    l.textContent=name;
    return l
}

let labelColSel = createSpan('Колонка сортировки');
let labelAscDesc = createSpan('Порядок сортировки');

function drawSelect() {
    let divSorting = document.getElementById('sorting-div');

    // выборк колонки сортировки
    let colSel = document.createElement('select');
    colSel.setAttribute('id','select_id');
    colSel.setAttribute('class','btn btn-outline-primary');
    arrHead.forEach((item)=> {
        let opt = document.createElement('option');
        opt.setAttribute('value', item);
        opt.textContent = item;
        colSel.appendChild(opt);
    });
    divSorting.append(labelColSel);
    divSorting.append(colSel);
    
    // выбор asc-desc
    let ascDescSel = document.createElement('select');
    ascDescSel.setAttribute('id','asc_desc_id');
    ascDescSel.setAttribute('class','btn btn-outline-primary');
    let ascDescVals = ['asc','desc'];
    ascDescVals.forEach((item)=> {
        let opt = document.createElement('option');
        opt.setAttribute('value', item);
        opt.textContent = item;
        ascDescSel.appendChild(opt);        
    });
    divSorting.append(labelAscDesc);
    divSorting.append(ascDescSel);
}
// отрисовка секции controls
drawSelect();







