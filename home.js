document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const quickMenu = document.getElementById('quickMenu');
    
    menuToggle.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
  