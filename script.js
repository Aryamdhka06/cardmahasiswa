const swiper = new Swiper('.slider-wrapper', {
  loop: false, // Mengatur agar slider tidak melingkar
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Menyembunyikan tombol navigasi jika berada di kartu terakhir
swiper.on('slideChange', () => {
  if (swiper.isEnd) {
    swiper.navigation.nextEl.style.display = 'none'; // Sembunyikan tombol selanjutnya
  } else {
    swiper.navigation.nextEl.style.display = ''; // Tampilkan tombol jika tidak di kartu terakhir
  }

  if (swiper.isBeginning) {
    swiper.navigation.prevEl.style.display = 'none'; // Sembunyikan tombol sebelumnya jika di kartu pertama
  } else {
    swiper.navigation.prevEl.style.display = ''; // Tampilkan tombol jika tidak di kartu pertama
  }
});
