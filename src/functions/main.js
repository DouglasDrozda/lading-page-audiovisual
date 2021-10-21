export default function Active_Scroll() {
  window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active_header', window.scrollY > 0);
  });
}
