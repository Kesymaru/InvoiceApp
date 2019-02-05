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
    function PrintElement(){
        const opction = inputType.options[inputType.selectedIndex];
        let object = new CreateItens ( inputName.value  , opction.value  ,  inputdate.value  ,  inputAmoutn.value );
        data.push(object);
        //
        const table = document.querySelector('.tablet');
        const tr = document.createElement('tr');
        //
        for( const item in object){
            console.log(object[item])
            const td = document.createElement('td');
            td.innerText = object[item];
            tr.append(td);
            table.appendChild(tr)
        }
        Sumary()
    }
    //
    function CreateItens (name , type , date , amont ){
        this.name = name;
        this.title = type;
        this.date = date;
        this.amont = amont;
    }
    function Sumary(){
        data.forEach(element => {
            const contentSumary = document.querySelector('.count');
            if(element.type = 'A'){
                alert()
            }
            console.log(element.amont);
        });
    }

    inputSave.addEventListener('click' , PrintElement )
    //reset.addEventListener()
}());