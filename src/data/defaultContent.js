export const defaultContent = {
  /* ── Pengaturan Global ── */
  settings: {
    siteName: 'PT Perta-Samtan Gas',
    siteTagline: 'Perusahaan LPG & Gas Terkemuka Indonesia',
    showScrollToTop: true,
  },

  /* ── Navbar ── */
  navbar: {
    brandName: 'Perta-Samtan',
    brandSub: 'GAS',
    topStrip: 'PT Perta-Samtan Gas — Perusahaan LPG & Gas Terkemuka Indonesia',
    showTopStrip: true,
    ctaLabel: 'Hubungi Kami',
    ctaLink: '#kontak',
    menuItems: [
      { label: 'Beranda', link: '#beranda' },
      { label: 'Tentang', link: '#tentang' },
      { label: 'Proses', link: '#proses' },
      { label: 'Fasilitas', link: '#fasilitas' },
      { label: 'Produk', link: '#produk' },
      { label: 'Berita', link: '#berita' },
    ],
  },

  /* ── Visibilitas Section ── */
  sections: {
    about: { visible: true, label: 'Tentang Perusahaan' },
    process: { visible: true, label: 'Proses Bisnis' },
    facilities: { visible: true, label: 'Fasilitas' },
    products: { visible: true, label: 'Produk' },
    whyus: { visible: true, label: 'Nilai & HSSE' },
    roadmap: { visible: true, label: 'Roadmap / Pencapaian' },
    news: { visible: true, label: 'Berita' },
    clients: { visible: true, label: 'Mitra & Penghargaan' },
  },

  hero: {
    eyebrow: 'PT Perta-Samtan Gas · Sumatera Selatan · Est. 2008',
    headline1: 'Memproses Gas Alam',
    headline2: 'Menjadi LPG',
    headline3: 'untuk Indonesia',
    description:
      'Perusahaan pengolahan gas bumi dengan dua kilang terintegrasi di Prabumulih dan Sungai Gerong — mendukung ketahanan energi dan program konversi BBM nasional.',
    btnPrimary: 'Profil Perusahaan',
    btnPrimaryLink: '#tentang',
    btnPrimaryType: 'scroll',   // 'scroll' | 'external' | 'internal'
    btnSecondary: 'Proses Bisnis',
    btnSecondaryLink: '#proses',
    btnSecondaryType: 'scroll',
    btnSecondaryVisible: true,
    shareholder1Name: 'Pertamina Gas',
    shareholder1Pct: '66%',
    shareholder2Name: 'ST International',
    shareholder2Pct: '34%',
    showShareholders: true,
  },

  stats: [
    { value: 250, suffix: ' MMSCFD', label: 'Kapasitas Desain' },
    { value: 710, suffix: ' MT/Hari', label: 'Produksi LPG' },
    { value: 2200, suffix: ' bbl/Hari', label: 'Kondensat' },
    { value: 90, suffix: ' KM', label: 'Panjang Pipa NGL' },
    { value: 2008, suffix: '', label: 'Tahun Berdiri' },
    { value: 100, suffix: '%', label: 'Untuk Indonesia' },
  ],

  about: {
    heading: 'PT Perta-Samtan Gas',
    body1:
      'PT Perta-Samtan Gas didirikan pada 7 Mei 2008 dengan tujuan memproduksi LPG (Liquified Petroleum Gas) guna mendukung program Pemerintah dalam rangka konversi minyak tanah ke LPG serta penyediaan energi bagi masyarakat, sekaligus mengurangi beban Pemerintah dalam subsidi BBM.',
    body2:
      'Perseroan bergerak dalam bisnis pengolahan gas serta menyediakan layanan jasa dan infrastruktur terkait Pemrosesan Gas dengan dua kilang terintegrasi di Prabumulih dan Sungai Gerong, Sumatera Selatan.',
    vision: 'Menjadi Perseroan Terkemuka di Dunia dalam Industri LPG & Gas',
    mission:
      'Memberikan nilai tambah bagi Pemegang Saham, Karyawan, dan Masyarakat Indonesia melalui efisiensi kerja dan daya saing yang tinggi.',
    objectives: [
      'Ekstraksi dan pemrosesan gas alam menjadi LPG dan produk gas lainnya',
      'Niaga dan distribusi LPG untuk memenuhi program Public Service Obligation (PSO)',
      'Optimalisasi sumber daya dan fasilitas pemrosesan gas untuk layanan terbaik',
      'Penyediaan infrastruktur terkait sektor pemrosesan gas secara berkelanjutan',
    ],
    founded: '7 Mei 2008',
    capacity: '250 MMSCFD',
    plants: '2 Kilang',
    hq: 'Sungai Gerong',
  },

  process: [
    {
      no: '01',
      icon: '⛽',
      title: 'Feed Gas Masuk',
      desc: 'Gas alam dari PT Pertamina Hulu Rokan Regional 1 Zona 4 rata-rata ±200 mmscfd dialirkan melalui pipa Pertamina EP 28" & Pertagas 20".',
      meta: '±200 mmscfd',
    },
    {
      no: '02',
      icon: '🏭',
      title: 'Kilang Ekstraksi Prabumulih',
      desc: 'Gas alam diproses untuk memisahkan komponen NGL (Natural Gas Liquids). Lean gas dan kondensat dikembalikan ke Pertamina Hulu Rokan.',
      meta: 'Prabumulih, Sumsel',
    },
    {
      no: '03',
      icon: '🔩',
      title: 'Pipa NGL ±90 KM',
      desc: 'NGL dialirkan melalui pipa berdiameter 8 inci sepanjang ±90 km dari Kilang Prabumulih menuju Kilang Fraksinasi Sungai Gerong.',
      meta: '8" · ±90 KM',
    },
    {
      no: '04',
      icon: '⚗️',
      title: 'Kilang Fraksinasi Sungai Gerong',
      desc: 'NGL difraksinasi menghasilkan LPG Mixed (Propane + Butane) 710 MT/hari dan Kondensat (Pentane+) 2.200 bbl/hari.',
      meta: '250 MMSCFD',
    },
    {
      no: '05',
      icon: '🚢',
      title: 'Distribusi Produk',
      desc: 'LPG disalurkan ke Depot Pulau Layang & Jetty 01 RU III menuju Pontianak, Bangka, dan Belitung melalui armada vessel.',
      meta: 'Domestik · PSO',
    },
  ],

  facilities: [
    {
      title: 'Kilang Ekstraksi Prabumulih',
      label: 'Extraction Plant',
      location: 'Prabumulih, Sumatera Selatan',
      desc: 'Berfungsi mengekstrak komponen NGL dari gas alam. Feed gas diperoleh dari PT Pertamina Hulu Rokan Regional 1 Zona 4 dengan volume rata-rata ±200 mmscfd.',
      image: '/KilangEkstraksi.png',
      spec1k: 'Feed Gas', spec1v: '±200 mmscfd',
      spec2k: 'Output', spec2v: 'NGL + Lean Gas',
      spec3k: 'Sumber', spec3v: 'PHR Zona 4',
    },
    {
      title: 'Kilang Fraksinasi Sungai Gerong',
      label: 'Fractionation Plant',
      location: 'Sungai Gerong, Banyuasin, Sumatera Selatan',
      desc: 'Memproses NGL dari Prabumulih menjadi LPG Mixed (710 MT/hari) dan Kondensat (2.200 bbl/hari) untuk distribusi domestik nasional.',
      image: '/Kilang_Fraksinasi_Sungai_Gerong.png',
      spec1k: 'Kapasitas', spec1v: '250 MMSCFD',
      spec2k: 'LPG', spec2v: '710 MT/Hari',
      spec3k: 'Kondensat', spec3v: '2.200 bbl/hari',
    },
    {
      title: 'Pipa NGL',
      label: 'NGL Pipeline',
      location: 'Prabumulih → Sungai Gerong',
      desc: 'Pipa berdiameter 8 inci sepanjang ±90 km menghubungkan kedua kilang secara efisien.',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=900&q=80',
      spec1k: 'Panjang', spec1v: '±90 KM',
      spec2k: 'Diameter', spec2v: '8 Inci',
      spec3k: 'Koneksi', spec3v: '2 Kilang',
    },
    {
      title: 'Depot & Jetty Distribusi',
      label: 'Distribution Hub',
      location: 'Pulau Layang & Jetty 01 RU III',
      desc: 'Infrastruktur distribusi LPG ke Pontianak, Bangka, dan Belitung menggunakan armada vessel laut.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80',
      spec1k: 'Depot', spec1v: 'Pulau Layang',
      spec2k: 'Jetty', spec2v: 'RU III',
      spec3k: 'Tujuan', spec3v: 'Pontianak · Bangka',
    },
  ],

  products: [
    {
      no: '01', icon: '🔥', title: 'LPG Mixed', sub: 'Propane + Butane',
      desc: 'Produk utama berupa LPG campuran dengan kapasitas produksi 710 MT/hari, disalurkan ke PT Pertamina Patra Niaga untuk memenuhi kebutuhan domestik nasional (PSO).',
      stat: '710 MT/Hari', color: 'psg-red',
    },
    {
      no: '02', icon: '💧', title: 'Kondensat', sub: 'Pentane+',
      desc: 'Kondensat (Pentane+) sebagai produk sampingan fraksinasi 2.200 bbl/hari, dikembalikan ke PT Pertamina Hulu Rokan.',
      stat: '2.200 bbl/Hari', color: 'psg-blue',
    },
    {
      no: '03', icon: '💨', title: 'Lean Gas', sub: 'Methane + Ethane',
      desc: 'Lean gas residual (Methane dan Ethane) dikembalikan kepada PT Pertamina Hulu Rokan sesuai perjanjian kerjasama operasional.',
      stat: 'Residual Gas', color: '[#6b7a19]',
    },
  ],

  news: [
    {
      id: 1,
      published: true,
      cat: 'Korporat',
      date: '15 Mei 2026',
      read: '3 menit',
      author: 'Tim Redaksi PSG',
      title: 'PT Perta-Samtan Gas Pertahankan Proper Hijau dari Kementerian LHK',
      excerpt: 'Perta-Samtan Gas kembali meraih penghargaan Proper Hijau sebagai bukti konsistensi penerapan standar lingkungan hidup tertinggi dalam setiap kegiatan operasional kilang.',
      img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1200&q=80',
      content: `PT Perta-Samtan Gas kembali meraih penghargaan bergengsi Proper Hijau dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK) Republik Indonesia. Penghargaan ini merupakan bukti nyata komitmen Perseroan dalam menerapkan standar pengelolaan lingkungan hidup tertinggi di seluruh area operasional, baik di Kilang Ekstraksi Prabumulih maupun Kilang Fraksinasi Sungai Gerong.

Program Penilaian Peringkat Kinerja Perusahaan dalam Pengelolaan Lingkungan (Proper) merupakan instrumen kebijakan yang dikembangkan Kementerian LHK untuk mendorong penaatan perusahaan dalam pengelolaan lingkungan hidup. Peringkat Hijau menandakan bahwa perusahaan telah melakukan pengelolaan lingkungan melampaui ketentuan yang dipersyaratkan dalam peraturan.

Direktur Utama PT Perta-Samtan Gas menyatakan, "Pencapaian ini bukan sekadar penghargaan, tetapi cerminan dari budaya kerja kami yang menempatkan keberlanjutan lingkungan sebagai bagian tidak terpisahkan dari setiap proses bisnis." Perseroan terus berkomitmen untuk mempertahankan dan meningkatkan standar pengelolaan lingkungan demi masa depan Indonesia yang lebih berkelanjutan.

Beberapa program unggulan yang mendukung perolehan Proper Hijau ini antara lain: program efisiensi energi di kedua kilang, pengelolaan limbah B3 yang ketat, program penghijauan di area ring 1 operasional, serta inisiatif pengurangan emisi gas rumah kaca secara konsisten setiap tahunnya.`,
    },
    {
      id: 2,
      published: true,
      cat: 'Operasional',
      date: '3 Mei 2026',
      read: '4 menit',
      author: 'Tim Operasional',
      title: 'Optimalisasi Kilang Fraksinasi Sungai Gerong Memasuki Fase Uji Coba',
      excerpt: 'Proyek peningkatan efisiensi kilang fraksinasi untuk meningkatkan kapasitas produksi LPG mulai memasuki fase uji coba operasional penuh.',
      img: 'https://images.unsplash.com/photo-1612174188395-0f75e7d40c68?auto=format&fit=crop&w=1200&q=80',
      content: `PT Perta-Samtan Gas resmi memulai fase uji coba (commissioning) proyek optimalisasi Kilang Fraksinasi Sungai Gerong. Proyek strategis ini bertujuan untuk meningkatkan efisiensi proses fraksinasi NGL (Natural Gas Liquids) menjadi LPG Mixed dan Kondensat, sekaligus memperkuat keandalan operasional jangka panjang.

Proyek optimalisasi ini mencakup pembaruan sistem instrumentasi dan kontrol otomasi, peningkatan kapasitas heat exchanger, serta modernisasi sistem pengamanan kilang (safety shutdown system). Investasi ini diharapkan dapat meningkatkan efisiensi konversi NGL menjadi produk bernilai tambah tinggi.

Kepala Departemen Operasi menyampaikan bahwa fase uji coba berjalan sesuai rencana. "Kami sangat optimis bahwa setelah uji coba selesai, kilang kami akan beroperasi dengan tingkat efisiensi dan keandalan yang jauh lebih tinggi, mendukung target produksi LPG nasional," ujarnya.

Setelah melewati fase uji coba selama 30 hari, kilang direncanakan akan kembali beroperasi penuh dengan kapasitas yang dioptimalkan. Perseroan berkomitmen untuk memastikan seluruh proses berlangsung dengan standar keselamatan tertinggi.`,
    },
    {
      id: 3,
      published: true,
      cat: 'HSSE',
      date: '20 April 2026',
      read: '2 menit',
      author: 'Departemen HSSE',
      title: 'HSSE Day 2026: Komitmen Zero Accident di Seluruh Area Operasional',
      excerpt: 'Perta-Samtan Gas menggelar HSSE Day 2026 sebagai momentum penguatan budaya keselamatan bagi seluruh karyawan, mitra, dan kontraktor.',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      content: `PT Perta-Samtan Gas menyelenggarakan HSSE Day 2026 dengan tema "Satu Langkah Lebih Selamat: Menuju Zero Accident". Kegiatan ini diikuti oleh seluruh karyawan, mitra kerja, dan kontraktor yang beroperasi di lingkungan Kilang Prabumulih dan Kilang Sungai Gerong.

Rangkaian kegiatan HSSE Day 2026 meliputi apel keselamatan, safety talk interaktif, demonstrasi penggunaan Alat Pelindung Diri (APD), simulasi tanggap darurat, serta kompetisi kuis HSSE yang diikuti antusias oleh para peserta. Selain itu, dilaksanakan juga pemeriksaan kesehatan gratis bagi seluruh karyawan dan pekerja kontraktor.

Direktur Operasi & HSSE menegaskan komitmen Perseroan: "HSSE bukan hanya slogan. Ini adalah tanggung jawab kita bersama. Setiap orang yang memasuki area operasional kita memiliki hak untuk pulang ke rumah dalam kondisi selamat." Pesan ini bergema kuat di seluruh fasilitas operasional Perseroan.

PT Perta-Samtan Gas mencatat raihan kumulatif jutaan jam kerja tanpa kecelakaan kerja (Lost Time Injury) sebagai bukti nyata implementasi budaya keselamatan yang konsisten.`,
    },
    {
      id: 4,
      published: true,
      cat: 'CSR',
      date: '8 April 2026',
      read: '3 menit',
      author: 'Tim CSR & Humas',
      title: 'PSG Salurkan Bantuan Sosial kepada Masyarakat Ring 1 Banyuasin',
      excerpt: 'Dalam implementasi program ESG, PT Perta-Samtan Gas menyalurkan bantuan sosial dan pelatihan keterampilan bagi masyarakat sekitar operasional.',
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
      content: `PT Perta-Samtan Gas kembali merealisasikan program Tanggung Jawab Sosial Perusahaan (CSR/ESG) dengan menyalurkan bantuan kepada masyarakat yang tinggal di Ring 1 area operasional Banyuasin, Sumatera Selatan.

Program yang dilaksanakan kali ini meliputi penyaluran bantuan paket sembako bagi keluarga kurang mampu, pelatihan keterampilan vokasi (menjahit, pengolahan makanan, dan kerajinan tangan) bagi ibu rumah tangga, serta beasiswa pendidikan bagi pelajar berprestasi dari keluarga kurang mampu di sekitar Kilang Sungai Gerong.

Koordinator Program CSR PT Perta-Samtan Gas menjelaskan bahwa program ini merupakan bagian dari komitmen jangka panjang Perseroan untuk memberikan nilai tambah bagi masyarakat sekitar. "Kami percaya bahwa keberhasilan bisnis kami harus berbanding lurus dengan peningkatan kesejahteraan masyarakat di sekitar kami beroperasi," tuturnya.

Total penerima manfaat program CSR kali ini mencapai lebih dari 500 kepala keluarga di 5 desa yang berlokasi di sekitar area operasional Perseroan.`,
    },
    {
      id: 5,
      published: true,
      cat: 'Korporat',
      date: '25 Maret 2026',
      read: '3 menit',
      author: 'Tim Redaksi PSG',
      title: 'Perta-Samtan Gas Raih Penghargaan Patra Nirbaya Karya Madya 2025',
      excerpt: 'PT Perta-Samtan Gas menerima penghargaan bergengsi dari Kementerian ESDM atas keberhasilan mempertahankan nihil kecelakaan kerja.',
      img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1200&q=80',
      content: `PT Perta-Samtan Gas menerima Penghargaan Patra Nirbaya Karya Madya dari Kementerian Energi dan Sumber Daya Mineral (ESDM) Republik Indonesia. Penghargaan ini diberikan atas keberhasilan Perseroan dalam mempertahankan rekam jejak nihil kecelakaan kerja (zero accident) selama periode penilaian.

Penghargaan Patra Nirbaya merupakan pengakuan tertinggi di sektor energi dan pertambangan Indonesia bagi perusahaan-perusahaan yang berhasil menerapkan standar Keselamatan dan Kesehatan Kerja (K3) secara konsisten dan berkelanjutan.

"Penghargaan ini adalah milik seluruh tim PSG — karyawan, mitra, dan kontraktor yang setiap harinya berkomitmen menjaga keselamatan sebagai prioritas utama," ujar Direktur Utama dalam sambutannya saat menerima penghargaan. Perseroan menjadikan momentum ini sebagai motivasi untuk terus meningkatkan standar K3 di seluruh lini operasional.`,
    },
    {
      id: 6,
      published: false,
      cat: 'Korporat',
      date: '1 Maret 2026',
      read: '2 menit',
      author: 'Tim Redaksi PSG',
      title: 'Draft: Rencana Ekspansi Bisnis PSG 2026–2030',
      excerpt: 'Artikel ini masih dalam status draft dan tidak ditampilkan ke publik.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      content: 'Konten artikel draft belum diisi.',
    },
  ],

  contact: {
    phone1: '+62-711 5740701 s.d. 5740704',
    phone1Sub: 'Kantor Pusat, Sungai Gerong',
    phone2: '021-57958218 / 57958219',
    phone2Sub: 'Kantor Perwakilan Jakarta',
    website: 'www.pertasamtan.com',
    address: 'Jl. No. 8 Komperta Sungai Gerong',
    addressSub: 'Kab. Banyuasin, Sumsel 30962',
    liaisonAddress:
      'The East Building lt.11-07, Jl. Dr. Ide Anak Agung Gde Agung Kav. E.3.2 No. 1, Kuningan Barat, Jakarta Selatan 12950',
    copyright: '© 2026 PT Perta-Samtan Gas. Hak Cipta Dilindungi Undang-Undang.',
    showLiaisonStrip: true,
    socialFacebook: '#',
    socialInstagram: '#',
    socialLinkedin: '#',
    socialYoutube: '#',
  },
};
