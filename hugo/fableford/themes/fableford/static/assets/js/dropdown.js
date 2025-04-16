document.addEventListener('DOMContentLoaded', function () {
  // Enable multi-level dropdowns
  document.querySelectorAll('.dropdown-submenu > .dropdown-toggle').forEach(function(element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      let submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains('dropdown-menu')) {
        submenu.classList.toggle('show');
      }
      // Close other open submenus at this level
      let parentMenu = this.closest('.dropdown-menu');
      if (parentMenu) {
        parentMenu.querySelectorAll('.dropdown-menu.show').forEach(function(openMenu) {
          if (openMenu !== submenu) {
            openMenu.classList.remove('show');
          }
        });
      }
    });
  });

  // Close all submenus when clicking outside
  document.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown-menu.show').forEach(function(menu) {
      if (!menu.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
  });
});
