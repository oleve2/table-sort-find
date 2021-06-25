
// данные

// заголовок таблицы
function addTabHeader() {
    let b = document.getElementById("head_id");
    b.setAttribute('class','thead-light');
    let el = document.createElement('tr');
    b.append(el);
    arrHead.forEach((item)=>{
        let tmpEl = document.createElement('td');
        tmpEl.innerHTML = `${item}`;
        el.append(tmpEl);
    })
}


// отрисовка одной троки
function addRow(data) {
    let b = document.getElementById("body_id");
    let el = document.createElement('tr');
    b.append(el);

    function draw1(elem) {
        let tmpEl = document.createElement('td');
        tmpEl.innerHTML = `${elem}`;
        el.append(tmpEl);
    }

    arrHead.forEach((item)=> {
        draw1(data[item])
    });
}
// отрисовка всех строк
function addNRows(data) {
    data.forEach((item)=> {
        addRow(item);
    });
}

// сортировка масива
const sortedData = (data, SA, AscDesc) => {
    return data.sort((a,b) => {
        if (a[SA] === b[SA]) {
            return 0;
        }
        else {
            if (AscDesc == 'asc') {
                return (a[SA] < b[SA]) ? -1 : 1;
            } else if (AscDesc == 'desc') {
                return (a[SA] < b[SA]) ? 1 : -1;
            } else  {
                return (a[SA] < b[SA]) ? -1 : 1;
            }
        }
    });
}

// фильтрация массива arrData по (номеру колонки) вводя (текст)
function filterData(data, colNum, searchText) {
    if ((searchText == null) || (searchText === '')) {
        return data
    }
    let dataFiltered = [];
    data.forEach((item)=> {
        //console.log(item[colNum], item[colNum].toString().indexOf(searchText));
        if (item[colNum].toString().toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
            dataFiltered.push(item);
        }
    })
    return dataFiltered
}


function makeTheadTbody() {
    let tab = document.getElementById('table_id');
    tab.innerHTML = '';
    let th = document.createElement('thead');
    th.setAttribute('id', 'head_id')
    tab.append(th);
    let tb = document.createElement('tbody');
    tb.setAttribute('id', 'body_id')
    tab.append(tb);
}


function Launcher(numColSort, AscDesc, srchCol, srchText) {
    makeTheadTbody();
    // фильтрация данных
    let dataFilt = filterData(arrData, srchCol, srchText);
    // сортировка данных по столбцу
    let dataSorted = sortedData(dataFilt, numColSort, AscDesc);
    
    // отрисовка таблицы
    addTabHeader();
    addNRows(dataSorted);
}

// запуск отрисовки
Launcher();

