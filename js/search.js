
let br = document.createElement('br');

// функция создания в sorting
let labelSearchCol = createSpan('Где ищем:');
let labelSearchText = createSpan('Что ищем:');


function makeSearchForm() {
    let searchDiv = document.getElementById('search');

    // колонка поиска
    let searchColSel = document.createElement('select');
    searchColSel.setAttribute('id','search_select_id');
    searchColSel.setAttribute('class','btn btn-outline-primary');
    arrHead.forEach((item, index)=> {
        let opt = document.createElement('option');
        opt.setAttribute('value', item);
        opt.textContent = item;
        searchColSel.appendChild(opt);
    })
    searchDiv.append(labelSearchCol);
    searchDiv.append(searchColSel);

    // поле поиска
    let search = document.getElementById('search');
    let searchInput = document.createElement('input');
    searchInput.setAttribute('id','search_id');
    searchInput.setAttribute('class','form-control');
    // 
    searchDiv.append(labelSearchText);
    searchDiv.append(searchInput);
}

makeSearchForm()
