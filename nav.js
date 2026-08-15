// Weather Witch — shared nav behavior
// Link this from every page: <script src="nav.js" defer></script>

document.addEventListener('DOMContentLoaded', function () {
  var groups = document.querySelectorAll('.nav-group');
  var toggle = document.getElementById('nav-toggle');

  // Only one dropdown open at a time
  groups.forEach(function (group) {
    group.addEventListener('toggle', function () {
      if (group.open) {
        groups.forEach(function (other) {
          if (other !== group) other.open = false;
        });
      }
    });
  });

  // Click outside an open dropdown closes it
  document.addEventListener('click', function (e) {
    groups.forEach(function (group) {
      if (group.open && !group.contains(e.target)) {
        group.open = false;
      }
    });
  });

  // Escape closes dropdowns and the mobile menu
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      groups.forEach(function (group) { group.open = false; });
      if (toggle) toggle.checked = false;
    }
  });

  // Picking a link closes the dropdown / mobile menu behind it
  document.querySelectorAll('.site-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      groups.forEach(function (group) { group.open = false; });
      if (toggle) toggle.checked = false;
    });
  });
});
