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
const seats = document.querySelectorAll('.seat:not(.reserved)');


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
    const selectedSeats = container.querySelectorAll('.seat.selected');
    const selectedSeatsArr = [];
    const seatsArr = [];
    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat)

    
    });
    seats.forEach(function(seat)
{
    seatsArr.push(seat);
});
     let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
     });
     console.log(selectedSeatIndexs);


    let selectedSeatCount = selectedSeats.length;
        
    
       count.innerText = selectedSeatCount;
       amount.innerText = selectedSeatCount * select.value;
       saveTolocalStorge(selectedSeatIndexs);
}
function saveTolocalStorge(indexs){
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}
