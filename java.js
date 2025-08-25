// mark as loading immediately
  document.documentElement.classList.add('loading');
  document.body.classList.add('loading');

  const loader = document.getElementById('loader');

  // When everything (images, fonts, etc.) is loaded
  window.addEventListener('load', function () {
    // give the browser a tiny moment so the transition is smooth
    setTimeout(() => {
      loader.classList.add('hidden');           // fade the overlay
      document.documentElement.classList.remove('loading');
      document.body.classList.remove('loading');
      document.body.classList.add('ready');     // reveal main content
    }, 1000);
  });

  // Fallback: if 'load' never fires within 6s (slow/blocked assets), hide anyway
  setTimeout(() => {
    if (!loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
      document.documentElement.classList.remove('loading');
      document.body.classList.remove('loading');
      document.body.classList.add('ready');
    }
  }, 6000);


  // filter search
  
    document.getElementById("searchInput").addEventListener("keyup", function () {
        let filter = this.value.toLowerCase();
        let cards = document.querySelectorAll("#productList .col");

        cards.forEach(card => {
            let title = card.querySelector(".card-title").textContent.toLowerCase();
            if (title.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });