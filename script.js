let darkMode = false;
function changeDarkMode() {
  if (darkMode){
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "linear-gradient(to bottom, #fcb69f, #ffecd2)");
    document.getElementById("dark-light-mode").innerHTML = `<span class="material-symbols-outlined">
    dark_mode
    </span>`;  
  }
  else{
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "#092635");
    document.getElementById("dark-light-mode").innerHTML = `<span class="material-symbols-outlined">
    light_mode
    </span>`;
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  // Get all anchor elements on the page
  const allLinks = document.querySelectorAll('a');

  // Set target="_blank" for each anchor element
  allLinks.forEach(link => {
    link.setAttribute('target', '_blank');
  });
});