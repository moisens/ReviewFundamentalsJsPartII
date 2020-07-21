const sideBarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar')

sideBarToggle.addEventListener('click', showNavToggle);
function showNavToggle(){
     if(sidebar.classList.contains('show-sidebar')){
         sidebar.classList.remove('show-sidebar');
     }else{
         sidebar.classList.add('show-sidebar')
     }
    //sidebar.classList.toggle('show-sidebar');
    
}

closeBtn.addEventListener('click', closeSideNav);
function closeSideNav(){
    sidebar.classList.remove('show-sidebar');
}