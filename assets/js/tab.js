function changeClass(evt, className) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' tab-link-active', '');
  }

  document.getElementById(className).style.display = 'flex';
  evt.currentTarget.className += ' tab-link-active';
}

document.getElementById('tab-link-default').click();
