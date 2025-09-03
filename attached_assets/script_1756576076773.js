
const searchInput = document.getElementById('search');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
      const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
      card.style.display = title.includes(q) ? '' : 'none';
    });
  });
}
function filterCategory(cat){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  const btn = document.querySelector(`[data-cat="${cat}"]`);
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card=>{
    card.style.display = (cat==='all' || card.dataset.cat===cat)?'':'none';
  });
}
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar a').forEach(a=>{
  if(a.getAttribute('href')===path) a.classList.add('active');
});
