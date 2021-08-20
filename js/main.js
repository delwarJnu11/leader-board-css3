//section title color change
document.getElementById('top-player').style.color = 'rgba(92, 17, 165, 0.75)';
document.getElementById('top-blogs').style.color = 'rgba(92, 17, 165, 0.75)';
document.getElementById('latest-course').style.color = 'rgba(92, 17, 165, 0.75)';
//player class background
const player = document.querySelectorAll('.player');
for (const item of player) {
    item.style.backgroundColor = 'rgba(162, 93, 224, 0.71)';
    item.style.padding = '10px';
    item.style.borderRadius = '10px';
}
//add item in list-items
document.getElementById('add-list-btn').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'List Item - New';
    const listContainer = document.getElementById('list-container');
    listContainer.appendChild(li);

});
//if input value is equal 5 add button should disable
document.getElementById('add-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-number');
    let inputNumber = parseInt(inputField.value);
    inputField.value = inputNumber + 1;
    if (inputField.value == 5) {
        document.getElementById('add-btn').setAttribute('disabled', true);
    }
})