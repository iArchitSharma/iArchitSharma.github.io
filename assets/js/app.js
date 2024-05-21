function checkScreenWidth() {
    const div = document.getElementById('main');
    if (window.innerWidth >= 768) {
      div.classList.add('hidden'); 
    } else {
      div.classList.remove('hidden'); 
    }
  }

  window.addEventListener('resize', checkScreenWidth);

  document.addEventListener('DOMContentLoaded', checkScreenWidth);

  // dISPLAY MENU
  function showMenu() {
    const existingMenu = document.getElementById("menu-overlay");
    if (existingMenu) {
      return; // Don't add if it already exists
    }
    document.getElementById('full').classList.add('hidden'); 

    document.body.insertAdjacentHTML("beforeend", `
    <div id="menu-overlay"
  class="fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center rounded-md bg-zinc-800">
  <button type="button" class="absolute left-7 top-7 p-3 transition-colors hover:text-zinc-200"
      onclick="hideMenu()"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-x ">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
      </svg></button>
      <a href="/" class="flex items-center py-1.5 text-xl transition-colors hover:text-zinc-200">About</a>
      <a href="/work" class="flex items-center py-1.5 text-xl transition-colors hover:text-zinc-200">Work</a>
      <a href="/projects" class="flex items-center py-1.5 text-xl transition-colors hover:text-zinc-200">Projects</a>
      <a href="https://dev.to/iarchitsharma" class="flex items-center py-1.5 text-xl transition-colors hover:text-zinc-200">Blogs</a></div>
    `);

  }

  // Function to hide the menu
  function hideMenu() {
    const menu = document.getElementById("menu-overlay");
    if (menu) {
      menu.remove(); // Remove the menu when called
      document.getElementById('full').classList.remove('hidden');
    }
  }

//function to unhide timeline

function unhide(id){
  const element = document.getElementById(id);
  const buttonText = document.getElementById('buttonText');
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
    buttonText.textContent = 'Hide Timeline';
  } else {
    element.classList.add('hidden');
    buttonText.textContent = 'Show Timeline';
  }
}

//function to hide timeline
function hide(id){
  document.getElementById(id).classList.add('hidden');
}