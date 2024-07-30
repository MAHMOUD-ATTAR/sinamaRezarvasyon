/*const container = document.querySelector('.container');


container.addEventListener('click', function(e) {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('.reserved')) { e.target.classList.toggle('selected'); 
        let selectedSeatCount = container.querySelectorAll('.seat .selected').length;


console.log(selectedSeatCount);

    }
});
*/
// .container sınıfına sahip öğeyi seçer ve container değişkenine atar
const container = document.querySelector('.container');
// Seçilen koltuk sayısını gösterecek olan span öğesini seçer ve count değişkenine atar
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

container.addEventListener('click', function(e) {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) { 
        e.target.classList.toggle('selected'); 

       calculateTotal()
       
    }
});
select.addEventListener('change', function(e){
    calculateTotal();
});
function calculateTotal(){
    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
        let price = select.value;
    
       count.innerText = selectedSeatCount;
       amount.innerText = selectedSeatCount*price;
}
