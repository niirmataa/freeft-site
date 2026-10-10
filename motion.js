'use strict';
(() => {
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const detail = document.getElementById('map-detail');
  const mapButtons = [...document.querySelectorAll('[data-node]')];
  function selectNode(key) {
    const node = PROJECT_NODES[key];
    if (!node) return;
    mapButtons.forEach(button => { const selected = button.dataset.node === key; button.classList.toggle('selected',selected); button.setAttribute('aria-pressed',String(selected)); });
    detail.innerHTML = `<p class="eyebrow">${esc(node.eyebrow)}</p><h3>${esc(node.title)}</h3><p>${esc(node.body)}</p><div class="detail-box"><h4>Co pozostaje?</h4><p>${esc(node.remaining)}</p></div><p class="scope">${esc(node.scope)}</p><a class="text-link" href="${esc(node.url)}">Otwórz zapis źródłowy ↗</a>`;
  }
  mapButtons.forEach(button => button.addEventListener('click',() => selectNode(button.dataset.node)));
  selectNode('keygen');
  let filter = 'all';
  const sort = document.getElementById('timeline-sort');
  const filters = [...document.querySelectorAll('[data-filter]')];
  function renderTimeline() {
    const events = PROJECT_EVENTS.filter(event => filter === 'all' || event.type === filter).sort((a,b) => (sort.value === 'asc' ? 1 : -1) * a.order.localeCompare(b.order));
    document.getElementById('timeline').innerHTML = events.map(event => `<article class="event" id="event-${esc(event.id)}"><div class="event-date">${esc(event.date)}<small>${esc(event.meta)}</small></div><div class="event-content"><div class="event-top"><h3>${esc(event.title)}</h3><span class="status ${esc(event.color)}">${esc(event.status)}</span></div><p>${esc(event.text)}</p><details><summary>Zakres wyniku i źródło</summary><div><p>${esc(event.detail)}</p><a class="source-link" href="${esc(event.url)}">Sprawdź materiał w repozytorium ↗</a></div></details></div></article>`).join('');
    document.getElementById('timeline-count').textContent = `${events.length} z ${PROJECT_EVENTS.length} wybranych punktów historii · snapshot 10.10.2026`;
  }
  filters.forEach(button => button.addEventListener('click',() => { filter = button.dataset.filter; filters.forEach(item => {const active = item === button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});renderTimeline(); }));
  sort.addEventListener('change',renderTimeline);
  renderTimeline();
  document.getElementById('copy-build').addEventListener('click',async () => {
    const status = document.getElementById('copy-status');
    try { await navigator.clipboard.writeText('make FT1536\nmake check-FT1536');status.textContent='Skopiowano oba polecenia.'; }
    catch {status.textContent='Nie udało się skopiować. Zaznacz polecenia w ramce i skopiuj ręcznie.';}
  });
})();
