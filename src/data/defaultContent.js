export const defaultContent = {
  /* ── Pengaturan Global ── */
  settings: {
    siteName: 'PT Perta-Samtan Gas',
    siteTagline: 'Perusahaan LPG & Gas Terkemuka Indonesia',
    showScrollToTop: true,
  },

  /* ── Navbar ── */
  navbar: {
    logoUrl: '/logo.png',
    logoMarkUrl: '/logo-web.png',
    brandName: 'Perta-Samtan',
    brandSub: 'GAS',
    topStrip: 'PT Perta-Samtan Gas — Harmony World Class',
    showTopStrip: true,
    ctaLabel: 'Hubungi Kami',
    ctaLink: '#kontak',
    menuItems: [
      { label: 'Beranda', link: '#beranda' },
      { label: 'Tentang Perusahaan', link: '#tentang' },
      { label: 'Proses', link: '#proses' },
      { label: 'Fasilitas', link: '#fasilitas' },
      { label: 'Produk', link: '#produk' },
      { label: 'Kontribusi', link: '#contribute' },
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
    contribute: { visible: true, label: 'Kontribusi Kami' },
    news: { visible: false, label: 'Berita' },
    clients: { visible: true, label: 'Penghargaan' },
  },

  hero: {
    eyebrow: 'PT Perta-Samtan Gas · Sumatera Selatan · Est. 2008',
    headline1: 'Memproses Gas Alam',
    headline2: 'Menjadi LPG',
    headline3: 'untuk Indonesia',
    description:
      'Perusahaan pengolahan gas bumi dengan dua kilang terintegrasi di Prabumulih dan Banyuasin — mendukung ketahanan energi dan program konversi BBM nasional.',
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
    heroImage: '/Kilang_Fraksinasi_Sungai_Gerong.JPG',
    intro:
      'PT Perta-Samtan Gas memproduksi LPG dan mengolah gas bumi melalui dua kilang terintegrasi di Prabumulih dan Banyuasin, Sumatera Selatan, untuk mendukung ketahanan energi nasional.',
    heading: 'PT Perta-Samtan Gas',
    body1:
      'PT Perta-Samtan Gas didirikan pada 7 Mei 2008 dengan tujuan memproduksi LPG (Liquified Petroleum Gas) guna mendukung program Pemerintah dalam rangka konversi minyak tanah ke LPG serta penyediaan energi bagi masyarakat, sekaligus mengurangi beban Pemerintah dalam subsidi BBM.',
    body2:
      'Perseroan bergerak dalam bisnis pengolahan gas serta menyediakan layanan jasa dan infrastruktur terkait Pemrosesan Gas dengan dua kilang terintegrasi di Prabumulih dan Banyuasin, Sumatera Selatan.',
    vision: 'Menjadi Perseroan Terkemuka di Dunia dalam Industri LPG & Gas',
    mission:
      'Memberikan nilai tambah bagi Pemegang Saham, Karyawan, dan Masyarakat Indonesia melalui efisiensi kerja dan daya saing yang tinggi.',
    objectives: [
      'Ekstraksi dan pemrosesan gas alam menjadi LPG dan produk gas lainnya',
      'Niaga dan distribusi LPG untuk memenuhi kebutuhan energi domestik nasional',
      'Optimalisasi sumber daya dan fasilitas pemrosesan gas untuk layanan terbaik',
      'Penyediaan infrastruktur terkait sektor pemrosesan gas secara berkelanjutan',
    ],
    founded: '7 Mei 2008',
    capacity: '250 MMSCFD',
    plants: '2 Kilang',
    hq: 'Banyuasin',
  },

  process: [
    {
      no: '01',
      icon: '⛽',
      title: 'Feed Gas Masuk',
      desc: 'Gas alam dari PT Pertamina Hulu Rokan Regional 1 Zona 4.',
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
      desc: 'NGL dialirkan melalui pipa berdiameter 8 inci sepanjang ±90 km dari Kilang Prabumulih menuju Kilang Fraksinasi Banyuasin.',
      meta: '8" · ±90 KM',
    },
    {
      no: '04',
      icon: '⚗️',
      title: 'Kilang Fraksinasi Banyuasin',
      desc: 'NGL difraksinasi menghasilkan LPG Mixed (Propane + Butane) 710 MT/hari dan Kondensat (Pentane+) 2.200 bbl/hari.',
      meta: '710 MT/Hari',
    },
    {
      no: '05',
      icon: '🚢',
      title: 'Distribusi Produk',
      desc: 'LPG disalurkan ke Depot Pulau Layang & Jetty 01 RU III menuju Pontianak, Bangka, dan Belitung melalui armada vessel.',
      meta: 'Domestik',
    },
  ],

  facilities: [
    {
      title: 'Kilang Ekstraksi',
      label: 'Extraction Plant',
      location: 'Prabumulih, Sumatera Selatan',
      desc: 'Berfungsi mengekstrak komponen NGL dari gas alam. Feed gas diperoleh dari PT Pertamina Hulu Rokan Regional 1 Zona 4.',
      image: '/KilangEkstraksi.png',
      spec1k: 'Feed Gas', spec1v: '±200 mmscfd',
      spec2k: 'Output', spec2v: 'NGL',
      spec3k: 'Sumber', spec3v: 'PHR Zona 4',
    },
    {
      title: 'Kilang Fraksinasi',
      label: 'Fractionation Plant',
      location: 'Banyuasin, Sumatera Selatan',
      desc: 'Memproses NGL dari Prabumulih menjadi LPG Mixed (710 MT/hari) dan Kondensat (2.200 bbl/hari) untuk distribusi domestik nasional.',
      image: '/Kilang_Fraksinasi_Sungai_Gerong.JPG',
      spec1k: 'LPG', spec1v: '710 MT/Hari',
      spec2k: 'Kondensat', spec2v: '2.200 bbl/hari',
    },
  ],

  products: [
    {
      no: '01', icon: '🔥', title: 'LPG Mixed', sub: 'Propane + Butane',
      desc: 'Produk utama berupa LPG campuran dengan kapasitas produksi 710 MT/hari, disalurkan ke PT Pertamina Patra Niaga.',
      stat: '710 MT/Hari', color: 'psg-red',
    },
    {
      no: '02', icon: '💧', title: 'Kondensat', sub: 'Pentane+',
      desc: 'Kondensat (Pentane+) sebagai produk sampingan fraksinasi 2.200 bbl/hari, dikembalikan ke PT Pertamina Hulu Rokan.',
      stat: '2.200 bbl/Hari', color: 'psg-blue',
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
      content: `PT Perta-Samtan Gas kembali meraih penghargaan bergengsi Proper Hijau dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK) Republik Indonesia. Penghargaan ini merupakan bukti nyata komitmen Perseroan dalam menerapkan standar pengelolaan lingkungan hidup tertinggi di seluruh area operasional, baik di Kilang Ekstraksi Prabumulih maupun Kilang Fraksinasi Banyuasin.

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
      title: 'Optimalisasi Kilang Fraksinasi Banyuasin Memasuki Fase Uji Coba',
      excerpt: 'Proyek peningkatan efisiensi kilang fraksinasi untuk meningkatkan kapasitas produksi LPG mulai memasuki fase uji coba operasional penuh.',
      img: 'https://images.unsplash.com/photo-1612174188395-0f75e7d40c68?auto=format&fit=crop&w=1200&q=80',
      content: `PT Perta-Samtan Gas resmi memulai fase uji coba (commissioning) proyek optimalisasi Kilang Fraksinasi Banyuasin. Proyek strategis ini bertujuan untuk meningkatkan efisiensi proses fraksinasi NGL (Natural Gas Liquids) menjadi LPG Mixed dan Kondensat, sekaligus memperkuat keandalan operasional jangka panjang.

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
      content: `PT Perta-Samtan Gas menyelenggarakan HSSE Day 2026 dengan tema "Satu Langkah Lebih Selamat: Menuju Zero Accident". Kegiatan ini diikuti oleh seluruh karyawan, mitra kerja, dan kontraktor yang beroperasi di lingkungan Kilang Prabumulih dan Kilang Banyuasin.

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

Program yang dilaksanakan kali ini meliputi penyaluran bantuan paket sembako bagi keluarga kurang mampu, pelatihan keterampilan vokasi (menjahit, pengolahan makanan, dan kerajinan tangan) bagi ibu rumah tangga, serta beasiswa pendidikan bagi pelajar berprestasi dari keluarga kurang mampu di sekitar Kilang Banyuasin.

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

  /* ── Mitra / Partners ── */
  partners: [
    { name: 'PT Pertamina Gas Negara',  logo: '/partners/pertamina_gas_negara.PNG' },
    { name: 'PT Pertamina Patra Niaga', logo: '/partners/pertamina_patra_niaga.PNG' },
    { name: 'PT Pertamina Gas',         logo: '/partners/pertagas.png' },
    { name: 'ST International Ltd',     logo: '/partners/st_internasional.png' },
    { name: 'Pertamina RU III',         logo: '/partners/pertamina_ru_iii.png' },
  ],

  /* ── Penghargaan / Awards (gambar: public/sertifikat) ── */
  awards: [
    {
      title: 'Program Kampung Iklim Sumatera Selatan',
      org: 'Provinsi Sumatera Selatan',
      desc: 'Penghargaan Program Kampung Iklim sebagai pengakuan kontribusi pengelolaan lingkungan dan iklim.',
      img: '/sertifikat/Penghargaan_Program_Kampung_Iklim_Provinsi_Sumatra_Selatan.jpeg',
    },
    {
      title: 'Bantuan Angkutan Sampah',
      org: 'PT Perta-Samtan Gas',
      desc: 'Sertifikat penghargaan atas program bantuan angkutan sampah di sekitar area operasional.',
      img: '/sertifikat/Sertifikat%20Bantuan%20Angkutan%20Sampah.jpeg',
    },
    {
      title: 'Community Development',
      org: 'PT Perta-Samtan Gas',
      desc: 'Sertifikat pengakuan kegiatan pengembangan masyarakat dan tanggung jawab sosial perusahaan.',
      img: '/sertifikat/Sertifikat%20Comunity%20Development.jpeg',
    },
    {
      title: 'Ecosystem Protection',
      org: 'PT Perta-Samtan Gas',
      desc: 'Sertifikat atas komitmen perlindungan ekosistem dan lingkungan di wilayah operasi.',
      img: '/sertifikat/Sertifikat%20Ecosystem%20Protection.jpeg',
    },
    {
      title: 'Hari Peduli Sampah',
      org: 'PT Perta-Samtan Gas',
      desc: 'Sertifikat keikutsertaan dan dukungan program Hari Peduli Sampah Nasional.',
      img: '/sertifikat/Sertifikat%20Hari%20Peduli%20Sampah.jpeg',
    },
    {
      title: 'Keselamatan Minyak dan Gas Bumi',
      org: 'Kementerian ESDM',
      desc: 'Sertifikat keselamatan operasi minyak dan gas bumi di fasilitas pengolahan gas.',
      img: '/sertifikat/Sertifikat%20Keselamatan%20Minyak%20dan%20Gas%20Bumi.jpeg',
    },
    {
      title: 'ISO 9001',
      org: 'Sistem Manajemen Mutu',
      desc: 'Sertifikasi ISO 9001 — sistem manajemen mutu terstandar internasional.',
      img: '/sertifikat/Sertifikat%20ISO9001.jpg',
    },
    {
      title: 'ISO 14001',
      org: 'Sistem Manajemen Lingkungan',
      desc: 'Sertifikasi ISO 14001 — sistem manajemen lingkungan berkelanjutan.',
      img: '/sertifikat/SertifikatISO14001.jpg',
    },
    {
      title: 'ISO 45001',
      org: 'Sistem Manajemen K3',
      desc: 'Sertifikasi sistem manajemen keselamatan dan kesehatan kerja (K3).',
      img: '/sertifikat/SertifikatISO25001.jpeg',
    },
    {
      title: 'Akreditasi',
      org: 'Lembaga Terakreditasi',
      desc: 'Sertifikat akreditasi atas standar operasional dan pengelolaan fasilitas perusahaan.',
      img: '/sertifikat/Sertifikat_Akreditasi.jpeg',
    },
    {
      title: 'Sistem Manajemen Kesehatan Kerja',
      org: 'PT Perta-Samtan Gas',
      desc: 'Sertifikat sistem manajemen dan kesehatan kerja di lingkungan operasional Perseroan.',
      img: '/sertifikat/Sertifikat_Sistem_Manajemen_dan_Kesehatan_Kerja.jpeg',
    },
  ],

  /* ── Roadmap / Milestones ── */
  milestones: [
    {
      year: '2008',
      icon: '🏗️',
      done: true,
      title: 'Pendirian Perseroan',
      desc: 'PT Perta-Samtan Gas resmi didirikan pada 7 Mei 2008, guna mendukung program pemerintah dalam konversi BBM ke LPG.',
    },
    {
      year: '2010',
      icon: '🤝',
      done: true,
      title: 'Alih Kepemilikan & Pembangunan Kilang',
      desc: 'E1-Corporation mengalihkan kepemilikan sahamnya kepada Samtan Co., Ltd. Pembangunan Kilang NGL di Sumatera Selatan dilaksanakan oleh kontraktor EPCC, PT Tripatra Engineers & Constructors pada bulan Juli 2010.',
    },
    {
      year: '2011',
      icon: '📝',
      done: true,
      title: 'Perubahan Nama Perusahaan',
      desc: 'Perubahan nama Perusahaan dari PT E1-Pertagas menjadi PT Perta-Samtan Gas pada tanggal 28 Januari 2011.',
    },
    {
      year: '2012',
      icon: '🎖️',
      done: true,
      title: 'Peresmian Kilang NGL',
      desc: 'Peresmian Kilang NGL di Sumatera Selatan pada 6 Desember 2012 oleh Presiden Republik Indonesia Susilo Bambang Yudhoyono.',
    },
    {
      year: '2013',
      icon: '🚀',
      done: true,
      title: 'Fase Komersial',
      desc: 'Kilang PT Perta-Samtan Gas memasuki fase komersial mulai 1 Mei 2013.',
    },
    {
      year: '2014',
      icon: '📦',
      done: true,
      title: '100.000 Metrik Ton LPG',
      desc: 'Berhasil melakukan pengiriman 100.000 Metrik Ton LPG untuk keperluan gas domestik (Sumatera bagian Selatan) melalui pipa.',
    },
    {
      year: '2016',
      icon: '🏢',
      done: true,
      title: 'Relokasi Kantor Pusat',
      desc: 'Lokasi kantor pusat PT Perta-Samtan Gas yang pada awalnya berada di Jakarta direlokasi ke Kilang Fraksinasi, Banyuasin.',
    },
    {
      year: '2018',
      icon: '🏆',
      done: true,
      title: '1 Juta Ton LPG',
      desc: 'Berhasil memproduksi 1 juta ton LPG sejak masa komersial hingga tahun 2026 — tonggak bersejarah dalam perjalanan perusahaan.',
    },
    {
      year: '2019',
      icon: '🔄',
      done: true,
      title: 'Perubahan Pemegang Saham',
      desc: 'Perubahan nama Samtan Co.Ltd., menjadi ST International Corporation pada tanggal 7 Desember 2019.',
    },
    {
      year: '2023',
      icon: '🔧',
      done: true,
      title: 'Jumper Line 12"',
      desc: 'PT Perta-Samtan Gas berhasil menyelesaikan proyek pembangunan Jumper Line 12" yang berlokasi di SKG 10 dan telah melakukan commissioning pada 26 Agustus 2023.',
    },
    {
      year: '2026',
      icon: '🏆',
      done: true,
      title: '2,5 Juta Metrik Ton LPG',
      desc: 'Pencapaian produksi kumulatif 2,5 juta metrik ton LPG sejak fase komersial 1 Mei 2013 hingga tahun 2026.',
    },
  ],

  contribute: {
    eyebrow: 'Kontribusi & Kegiatan',
    heading: 'Kontribusi Kami',
    subtitle:
      'Dokumentasi kegiatan sosial, lingkungan, dan kontribusi PT Perta-Samtan Gas bagi masyarakat sekitar area operasional.',
    photos: [
      {
        src: '/csr/CSR_MOTOR SAMPAH.png',
        title: 'Program Motor Sampah',
        caption: 'Dukungan pengelolaan sampah dan kebersihan lingkungan di sekitar area operasional.',
      },
      {
        src: '/csr/CSR_PENCEGAHAN BANJIR.png',
        title: 'Program Pencegahan Banjir',
        caption: 'Kegiatan mitigasi banjir dan peningkatan ketahanan masyarakat terdampak.',
      },
      {
        src: '/csr/CSR_RLTH.png',
        title: 'Program RLTH',
        caption: 'Kontribusi rumah layak huni bagi masyarakat di wilayah sekitar perusahaan.',
      },
      {
        src: '/csr/CSR_SANTUNAN ANAK YATIM.png',
        title: 'Santunan Anak Yatim',
        caption: 'Penyaluran bantuan dan pendampingan bagi anak yatim piatu di sekitar operasi.',
      },
      {
        src: '/csr/CSR_SANTUNAN ANAK YATIM2.png',
        title: 'Santunan Anak Yatim',
        caption: 'Kegiatan sosial berkelanjutan sebagai bentuk tanggung jawab perusahaan kepada masyarakat.',
      },
    ],
  },

  contact: {
    offices: [
      {
        label: 'Kantor Pusat / Kilang Fraksinasi',
        address: 'Jl. No. 8 Komperta Banyuasin\nKab. Banyuasin, Sumatera Selatan 30962',
        phone: '+62-711 5740701 s.d. 5740704',
      },
      {
        label: 'Kilang Ekstraksi',
        address: 'Komperta Prabumulih\nKota Prabumulih, Sumatera Selatan',
        phone: '+62-736 521001',
      },
      {
        label: 'Kantor Perwakilan',
        address:
          'The East Building lt.11-07, Jl. Dr. Ide Anak Agung Gde Agung Kav. E.3.2 No. 1\nKuningan Barat, Jakarta Selatan 12950',
        phone: '021-57958218 / 57958219',
      },
    ],
    website: 'www.pertasamtan.com',
    copyright: '© 2026 PT Perta-Samtan Gas. Hak Cipta Dilindungi Undang-Undang.',
    showLiaisonStrip: false,
    socialFacebook: '#',
    socialInstagram: '#',
    socialLinkedin: '#',
    socialYoutube: '#',
  },
};
