   // LiveCode Like exercise code
   const likePod = document.createElement('button');
   likePod.style.marginLeft = '5px';
   likePod.innerHTML = 'Like!';
   // creating button (has not been added to podCard yet)
   const likes = document.createElement('p');
   likes.innerHTML = 0
   podCard.appendChild(likes);
   // creating likes

   likePod.addEventListener('click', function() {
       likes.innerHTML = parseInt(likes.innerHTML) + 1;
       // converting to integer and adding a like 
   })
   podCard.appendChild(likePod);