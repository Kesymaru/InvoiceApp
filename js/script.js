(function(){
    const inputSave = document.querySelector('.save');
    const reset = document.querySelector('.reset');
    // inputs
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
        //
        const table = document.querySelector('.tablet');
        const tr = document.createElement('tr');
        //
        for( const item in object){
            const td = document.createElement('td');
            td.innerText = object[item];
            tr.append(td);
            table.appendChild(tr)
        }
        Sumary();
    }
    //
    function CreateItens (name , type , date , amont ){
        this.name = name;
        this.type = type;
        this.date = date;
        this.amont = amont;
    }
    //

    const contentSumary = document.querySelector('.typeA');
    const sumaryTypeA = document.createElement('input');
    sumaryTypeA.type = 'text';

    let numero ;
    function Sumary(){
        if(object.type == 'A')
        console.log(object.amont)
        numero =  parseInt(object.amont) ;
        j()
    }

    function j(){
        console.log(numero)
    }
    inputSave.addEventListener('click' , PrintElement )
    reset.addEventListener( 'click', set)
}());