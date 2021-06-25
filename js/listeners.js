
let selColumn = document.getElementById('select_id');
let selAscDesc = document.getElementById('asc_desc_id');
let searchField = document.getElementById('search_id');
let selSearchCol = document.getElementById('search_select_id');

// функция обработчик
const changeListener = () =>{
    let colSortVal      = document.getElementById('select_id').value;
    let ascDescSortVal  = document.getElementById('asc_desc_id').value;
    let srchText = document.getElementById('search_id').value;
    let srchCol = document.getElementById('search_select_id').value;

    console.log(colSortVal, ascDescSortVal, srchText, srchCol);
    Launcher(colSortVal, ascDescSortVal, srchCol, srchText);
}

// добавляем listener
selColumn.addEventListener('change', changeListener);
selAscDesc.addEventListener('change', changeListener);
searchField.addEventListener('change', changeListener);
selSearchCol.addEventListener('change', changeListener);
