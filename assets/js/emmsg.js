import Cookies from 'js-cookie';

const emmsg = document.getElementById('emmsg');

if (emmsg != null){
  if (Cookies.get('hideemmsg')){
    emmsg.classList.add('hidden');
  } else {
    emmsg.classList.remove('hidden');
  }

  const btn = document.getElementById('emmsg-close');

  btn.addEventListener('click', function(e){
    Cookies.set('hideemmsg', 'true', { expires: 30});
    emmsg.classList.add('hidden');

    e.preventDefault();
  });
}
