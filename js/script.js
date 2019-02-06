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
    function elementsType(a,b,c){
        this.a =a;
        this.b = b;
        this.c
    }

    const contentSumaryA = document.querySelector('.typeA');
    const sumaryTypeA = document.createElement('p');
    const contentSumaryB = document.querySelector('.typeB');
    const sumaryTypeB = document.createElement('p');
    const contentSumaryC = document.querySelector('.typeC');
    const sumaryTypeC = document.createElement('p');
    let num = parseInt(sumaryTypeA.innerHTML = 0);
    let numB = parseInt(sumaryTypeB.innerHTML = 0);
    let numC = parseInt(sumaryTypeC.innerHTML = 0);
    //
    function Sumary(){
        if(object.type == 'A'){
            num += parseInt(object.amont);
            console.log(num)
            sumaryTypeA.innerHTML = num
        }else if(object.type == 'B'){
            numB += parseInt(object.amont);
            console.log(numB)
            sumaryTypeB.innerHTML = numB
        }else if(object.type == 'C'){
            numC += parseInt(object.amont);
            console.log(numC)
            sumaryTypeC.innerHTML = numC
        }
    }

    contentSumaryA.appendChild(sumaryTypeA);
    contentSumaryB.appendChild(sumaryTypeB)
    contentSumaryC.appendChild(sumaryTypeC)
    inputSave.addEventListener('click' , PrintElement )
    reset.addEventListener( 'click', set)
}());