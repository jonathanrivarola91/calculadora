let pantalla = document.getElementById('pantalla');

function getData(ref){
    let value = ref.value;
    pantalla.value += value;
}

function clean(){
    pantalla.value = "";
}

function calculate(){
    try{
        pantalla.value = eval(pantalla.value)
    } catch (error){
        pantalla.value = "Error Math";
        setTimeout(()=>{
            clean();
        }, 1000);
    }
}

