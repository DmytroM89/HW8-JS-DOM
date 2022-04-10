const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('#myInput');
const list = document.querySelector('.list');

wrapper.addEventListener('click', (e) => {
   let what = e.target.dataset.what;

   switch (what) {
       case 'add':
           const liItem = document.createElement('li');
           liItem.dataset.what = 'list-item';
           if (input.value) {
               liItem.innerHTML = `${input.value} <button class="btn btn-danger btn-sm btn-remove" data-what="remove" title="Remove">-</button>`;
           } else {
               alert('Input is empty');
           }

           list.append(liItem);
           input.value = '';
           break;
       case 'remove':
           if (confirm('Are you sure?')) {
               e.target.closest('li').remove();
           }

           break;
       case 'list-item':
           e.target.classList.toggle('done');
           break;
   }
});
