(()=>{
  const burger = document.querySelector('.burger');
  const closed = document.querySelector('.closed');
  const mobileMenu = document.querySelector('.mobile-menu');;

  
  closed.addEventListener('click', ()=>{
    mobileMenu.classList.remove('mobile-menu--active')
  })
  burger.addEventListener('click', ()=>{
    mobileMenu.classList.add('mobile-menu--active')
  })

})()