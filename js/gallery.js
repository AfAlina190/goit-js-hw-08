


function listItemClicked(event) {
    
    const srcValue = event.target.getAttribute('src');
     
    const altValue = event.target.getAttribute('alt');
    
    basicLightbox.create(`
    <img style="width: 100vw; height: 100vh;" src='${srcValue}' alt=${altValue}>
        ">
	`).show()
  }
  
  
  const listItems = document.querySelectorAll('.gallery');
 
  
  listItems.forEach((item) => {
    item.addEventListener('click', listItemClicked);
  });

