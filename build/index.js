document.getElementById('show').addEventListener('click',function(){
document.getElementById('pakita').classList.remove('hidden');
document.getElementById('pakita').classList.add('flex');

});
/*testingi ug reusing*/ 
document.getElementById('cancel').addEventListener('click',function(){
    document.getElementById('pakita').classList.add('hidden');
    });