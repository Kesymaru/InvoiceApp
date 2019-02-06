(function(){
    const inputSave = document.querySelector('.save');
    const reset = document.querySelector('.reset');
    const inputName = document.querySelector('#input_name');
    const inputAmoutn = document.querySelector('#input_amount');
    const inputdate = document.querySelector('#input_date');
    const inputType = document.querySelector('#input_type');
    const data = [];
    //
    function set(){
        inputName.value ='';
        inputAmoutn.value='';
        inputdate.value='';
    }
    //
    let object ;
    function PrintElement(){
        const opction = inputType.options[inputType.selectedIndex];
        object = new CreateItens ( inputName.value  , opction.value  ,  inputdate.value  ,  inputAmoutn.value );
        data.push(object);
        const table = document.querySelector('.tablet');
        const tr = document.createElement('tr');
        for( const item in object){
            const td = document.createElement('td');
            td.innerText = object[item];
            tr.append(td);
            table.appendChild(tr)
        }
        set()
        summation();
    }

    //
    function CreateItens (name , type , date , amont ){
        this.name = name;
        this.type = type;
        this.date = date;
        this.amont = amont;
    }
    //
    const contentSumarA = document.querySelector('.typeA');
    const sumarTypeA = document.createElement('p');
    const contentSumarB = document.querySelector('.typeB');
    const sumarTypeB = document.createElement('p');
    const contentSumarC = document.querySelector('.typeC');
    const sumarTypeC = document.createElement('p');
    let num = parseInt(sumarTypeA.innerHTML = 0);
    let numB = parseInt(sumarTypeB.innerHTML = 0);
    let numC = parseInt(sumarTypeC.innerHTML = 0);
    //
    function summation(){
        if(object.type == 'A'){
            num += parseInt(object.amont);
            console.log(num)
            sumarTypeA.innerHTML = num
        }else if(object.type == 'B'){
            numB += parseInt(object.amont);
            console.log(numB)
            sumarTypeB.innerHTML = numB
        }else if(object.type == 'C'){
            numC += parseInt(object.amont);
            console.log(numC)
            sumarTypeC.innerHTML = numC
        }
    }
    //
    contentSumarA.appendChild(sumarTypeA);
    contentSumarB.appendChild(sumarTypeB);
    contentSumarC.appendChild(sumarTypeC);
    let thName = document.querySelector('.th_name');
    let thType = document.querySelector('.th_type');
    let thAmount = document.querySelector('.th_amount');
    //
    function SortName (){
        alert('hola');
        const sortName = data.sort( (a,b) =>{
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            if (a > b) {return 1;} 
            else if (a < b) {return -1;}
            else if (a === b) { return 0;}
        });
        return sortName;
    }
    function SortType (){
        const sortType = data.sort( (a,b) =>{
            a = a.type.toLowerCase();
            b = b.type.toLowerCase();
            if (a > b) {return 1;} 
            else if (a < b) {return -1;}
            else if (a === b) { return 0;}
        });
        console.log(data)
        return sortType;
    }
    function SortcAmount() {
        const sortcAmount = data.sort( (a,b) => {return a.amont - b.amont;});
        console.log(data)
        return sortcAmount;
    }
    //
    thAmount.addEventListener('click', SortcAmount)
    thType.addEventListener('click', SortType)
    thName.addEventListener('click', SortName)
    inputSave.addEventListener('click', PrintElement);
    reset.addEventListener( 'click', set)
}());