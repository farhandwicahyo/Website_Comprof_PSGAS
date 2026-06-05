/** @type {Record<'id'|'en', object>} */
export const translations = {

  /* ══════════════════ BAHASA INDONESIA ══════════════════ */
  id: {
    nav: {
      contact: 'Hubungi Kami',
      topStrip: 'PT Perta-Samtan Gas — Harmony World Class',
      brandName: 'PT Perta-Samtan Gas',
      menuAria: 'Menu',
      menuItems: [
        { label: 'Beranda', link: '#beranda' },
        { label: 'Tentang Perusahaan', link: '#tentang' },
        { label: 'Proses', link: '#proses' },
        { label: 'Fasilitas', link: '#fasilitas' },
        { label: 'Produk', link: '#produk' },
        { label: 'Kontribusi', link: '#contribute' },
      ],
    },

    hero: {
      eyebrow: 'PT Perta-Samtan Gas · Sumatera Selatan · Est. 2008',
      headline1: 'Memproses Gas Alam',
      headline2: 'Menjadi LPG',
      headline3: 'untuk Indonesia',
      description:
        'Perusahaan pengolahan gas bumi dengan dua kilang terintegrasi di Prabumulih dan Banyuasin — mendukung ketahanan energi dan program konversi BBM nasional.',
      btnPrimary: 'Profil Perusahaan',
      btnSecondary: 'Proses Bisnis',
      stats: [
        { label: 'Kapasitas Desain',  suffix: ' MMSCFD' },
        { label: 'Produksi LPG',      suffix: ' MT/Hari' },
        { label: 'Kondensat',         suffix: ' bbl/Hari' },
        { label: 'Panjang Pipa NGL',  suffix: ' KM' },
        { label: 'Tahun Berdiri',     suffix: '' },
        { label: 'Untuk Indonesia',   suffix: '%' },
      ],
    },

    about: {
      eyebrow: 'Profil Perseroan',
      heroTitle: 'Tentang Kami',
      intro:
        'PT Perta-Samtan Gas memproduksi LPG dan mengolah gas bumi melalui dua kilang terintegrasi di Prabumulih dan Banyuasin, Sumatera Selatan, untuk mendukung ketahanan energi nasional.',
      btnReadMore: 'Baca Selengkapnya',
      btnVision: 'Visi & Misi',
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
      visionLabel: 'Visi',
      missionLabel: 'Misi',
      visionMissionHeading: 'Visi & Misi Perseroan',
      objectivesHeading: 'Tujuan & Maksud Perseroan',
      facilityLabel: 'Kilang Fraksinasi',
    },

    clients: {
      partnerAriaLabel: 'Mitra strategis',
      prevLabel: 'Sebelumnya',
      nextLabel: 'Berikutnya',
      awardsEyebrow: 'Penghargaan & Pengakuan',
      awardsHeading: 'Penghargaan yang Kami Peroleh',
      awardsSub:
        'Kami senantiasa berkomitmen untuk menjaga standar kualitas dan keselamatan yang tinggi, serta berkontribusi dalam pengembangan industri energi nasional.',
      isoCertsHeading: 'Sertifikasi ISO',
      partnersEyebrow: 'Ekosistem & Mitra',
      partnersHeading: 'Bagian dari Ekosistem Pertamina',
      partnersSub:
        'Beroperasi sebagai bagian dari rantai nilai energi nasional, bersinergi dengan Pertamina Group dan pemangku kepentingan strategis.',
      awards: [
        { title: 'Proper Hijau',               org: 'Kementerian LHK RI',     desc: 'Komitmen pengelolaan lingkungan yang unggul dan berkelanjutan di seluruh area operasional.' },
        { title: 'Patra Nirbaya Karya Madya',  org: 'Kementerian ESDM RI',    desc: 'Penghargaan keselamatan kerja atas kinerja jam kerja aman yang konsisten.' },
        { title: 'SMK3 Gold',                  org: 'Kementerian Ketenagakerjaan RI', desc: 'Sertifikasi Sistem Manajemen K3 level Gold — standar keselamatan kerja tertinggi.' },
        { title: 'PROPER Biru',                org: 'Kementerian LHK RI',     desc: 'Penilaian kepatuhan lingkungan berkelanjutan yang diakui pemerintah.' },
        { title: 'Penghargaan Energi',         org: 'Kementerian ESDM RI',    desc: 'Pengakuan atas kontribusi nyata dalam ketahanan dan efisiensi energi nasional.' },
      ],
    },

    process: {
      eyebrow: 'Alur Produksi',
      heading: 'Proses Bisnis Utama',
      sub: 'Dari gas alam hulu hingga LPG siap distribusi.',
      steps: [
        { title: 'Feed Gas Masuk',      sub: '',                    desc: 'Gas alam dari PT Pertamina Hulu Rokan Regional 1 Zona 4.', output: '' },
        { title: 'Kilang Ekstraksi Prabumulih', sub: 'Prabumulih, Sumsel', desc: 'Gas alam diproses untuk memisahkan komponen NGL (Natural Gas Liquids). Lean gas dan kondensat dikembalikan ke Pertamina Hulu Rokan.', output: '' },
        { title: 'Pipa NGL ±90 KM',     sub: 'Transportasi NGL',    desc: 'NGL dialirkan melalui pipa berdiameter 8 inci sepanjang ±90 km dari Kilang Prabumulih menuju Kilang Fraksinasi Banyuasin.', output: '8" · ±90 KM' },
        { title: 'Kilang Fraksinasi Banyuasin', sub: 'Banyuasin, Sumsel', desc: 'NGL difraksinasi menghasilkan LPG Mixed (Propane + Butane) 710 MT/hari dan Kondensat (Pentane+) 2.200 bbl/hari.', output: '710 MT/Hari' },
        { title: 'Distribusi Produk',   sub: '',                    desc: 'LPG disalurkan ke Depot Pulau Layang & Jetty 01 RU III menuju Pontianak, Bangka, dan Belitung melalui armada vessel.', output: '' },
      ],
      stats: [
        { val: '250',   unit: 'MMSCFD',   label: 'Kapasitas Desain',   sub: 'Total kedua kilang', hi: false },
        { val: '710',   unit: 'MT/Hari',  label: 'Produksi LPG',       sub: 'Propane + Butane',   hi: true  },
        { val: '2.200', unit: 'bbl/Hari', label: 'Produksi Kondensat', sub: 'Pentane+',           hi: false },
        { val: '±200',  unit: 'mmscfd',   label: 'Feed Gas Rata-rata', sub: 'Dari PHR Zona 4',    hi: false },
      ],
      detailHeading: 'Spesifikasi Teknis Utama',
      detailItems: [
        { label: 'Feed Gas Inlet',   value: '±200 MMSCFD (rata-rata)' },
        { label: 'Pipa NGL',         value: '8 inci · ±90 km' },
        { label: 'Output LPG',       value: '710 MT/hari (Propane + Butane)' },
        { label: 'Output Kondensat', value: '2.200 bbl/hari (Pentane+)' },
        { label: 'Distribusi',       value: 'Pontianak, Bangka, Belitung' },
      ],
    },

    facilities: {
      eyebrow: 'Area Operasi',
      heading: 'Fasilitas Operasional',
      sub: 'PT Perta-Samtan Gas memiliki dua kilang terintegrasi di Sumatera Selatan, terhubung oleh jaringan pipa NGL sepanjang 90 km.',
      items: [
        {
          title: 'Kilang Ekstraksi',
          label: 'Extraction Plant',
          location: 'Prabumulih, Sumatera Selatan',
          desc: 'Berfungsi mengekstrak komponen NGL dari gas alam. Feed gas diperoleh dari PT Pertamina Hulu Rokan Regional 1 Zona 4 dengan volume rata-rata ±200 mmscfd.',
          spec1k: 'Feed Gas', spec1v: '±200 mmscfd',
          spec2k: 'Output',   spec2v: 'NGL + Lean Gas',
          spec3k: 'Sumber',   spec3v: 'PHR Zona 4',
          image: '/KilangEkstraksi.png',
        },
        {
          title: 'Kilang Fraksinasi',
          label: 'Fractionation Plant',
          location: 'Banyuasin, Sumatera Selatan',
          desc: 'Memproses NGL dari Prabumulih menjadi LPG Mixed (710 MT/hari) dan Kondensat (2.200 bbl/hari) untuk distribusi domestik nasional.',
          spec1k: 'LPG',       spec1v: '710 MT/Hari',
          spec2k: 'Kondensat', spec2v: '2.200 bbl/hari',
          image: '/Kilang_Fraksinasi_Sungai_Gerong.JPG',
        },
        {
          title: 'Pipa NGL',
          label: 'NGL Pipeline',
          location: 'Prabumulih → Banyuasin',
          desc: 'Pipa berdiameter 8 inci sepanjang ±90 km menghubungkan kedua kilang secara efisien.',
          spec1k: 'Panjang',   spec1v: '±90 KM',
          spec2k: 'Diameter',  spec2v: '8 Inci',
          spec3k: 'Koneksi',   spec3v: '2 Kilang',
          image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: 'Depot & Jetty Distribusi',
          label: 'Distribution Hub',
          location: 'Pulau Layang & Jetty 01 RU III',
          desc: 'Infrastruktur distribusi LPG ke Pontianak, Bangka, dan Belitung menggunakan armada vessel laut.',
          spec1k: 'Depot',  spec1v: 'Pulau Layang',
          spec2k: 'Jetty',  spec2v: 'RU III',
          spec3k: 'Tujuan', spec3v: 'Pontianak · Bangka',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80',
        },
      ],
    },

    products: {
      eyebrow: 'Output Produksi',
      heading: 'Produk Utama Perusahaan',
      sub: 'Hasil pengolahan gas alam kedua kilang yang terintegrasi digunakan untuk memenuhi kebutuhan LPG domestik.',
      excellenceHeading: 'Keunggulan Perseroan',
      excellence: [
        { title: 'Keunggulan Operasional', desc: 'Konsisten mencapai produktivitas, stabilitas, dan efisiensi tinggi dengan rekam jejak keberhasilan sejak fase komersial 1 Mei 2013.' },
        { title: 'Peluang Bisnis Beragam', desc: 'Rekam jejak perusahaan memungkinkan eksplorasi peluang bisnis di seluruh wilayah Indonesia dengan potensi pertumbuhan luas.' },
      ],
      items: [
        { no: '01', icon: '🔥', title: 'LPG Mixed', sub: 'Propane + Butane', color: 'psg-red',
          desc: 'Produk utama berupa LPG campuran dengan kapasitas produksi 710 MT/hari, disalurkan ke PT Pertamina Patra Niaga.',
          stat: '710 MT/Hari' },
        { no: '02', icon: '💧', title: 'Kondensat', sub: 'Pentane+', color: 'psg-blue',
          desc: 'Kondensat (Pentane+) sebagai produk sampingan fraksinasi 2.200 bbl/hari, dikembalikan ke PT Pertamina Hulu Rokan.',
          stat: '2.200 bbl/Hari' },
      ],
    },

    whyus: {
      eyebrow: 'Nilai & Keunggulan',
      heading: 'PSGAS',
      sub: 'Lima pilar nilai PSGAS — Profesional, Safety, Good Governance, Achieve Profit, dan Satisfied Customer — menjadi pedoman perilaku dan pengambilan keputusan kami dalam menjalankan operasi kilang, melayani pemangku kepentingan, serta mendukung ketahanan energi nasional.',
      hsseEyebrow: 'Budaya Keselamatan',
      hsseHeading: 'HSSE Golden Rules',
      values: [
        { no: 'P', title: 'Profesional', desc: 'Berkomitmen dalam perbaikan diri berkelanjutan dan memiliki profesionalisme tinggi dalam setiap aspek kerja.' },
        { no: 'S', title: 'Safety', desc: 'Fokus pada keselamatan kerja, keselamatan proses, kesehatan, keamanan, dan lingkungan (HSSE) dalam setiap aktivitas operasional.' },
        { no: 'G', title: 'Good Governance', desc: 'Menerapkan prinsip-prinsip Good Corporate Governance (GCG) yang transparan, akuntabel, dan bertanggung jawab.' },
        { no: 'A', title: 'Achieve Profit', desc: 'Menghasilkan nilai ekonomi tinggi demi keberlangsungan Perseroan bagi Pemegang Saham dan Pemangku Kepentingan.' },
        { no: 'S', title: 'Satisfied Customer', desc: 'Berkomitmen penuh terhadap kepuasan pelanggan melalui layanan prima dan produk berkualitas tinggi.' },
      ],
      onePertamina: {
        title: 'One Pertamina',
        groupLabel: 'Pertamina Group',
        mascotAlt: 'Maskot pekerja Pertamina',
        desc: 'Semangat kesatuan seluruh entitas Pertamina Group untuk sinergi, kolaborasi aktif, dan peningkatan kinerja menyeluruh demi mendukung ketahanan energi nasional.',
        pillars: [
          { title: 'Kolaboratif', desc: 'Membangun kerja sama sinergis dan memberikan nilai tambah bagi perusahaan serta pemangku kepentingan.' },
          { title: 'Disiplin', desc: 'Patuh pada prosedur, peraturan, dan komitmen kerja demi tercapainya target kinerja.' },
          { title: 'Integritas', desc: 'Menjunjung tinggi kejujuran, etika, dan tanggung jawab dalam setiap tindakan.' },
          { title: 'Inovatif', desc: 'Terus berinovasi dan beradaptasi menghadapi perubahan bisnis dan teknologi.' },
          { title: 'Fokus Pelanggan', desc: 'Mengutamakan kepuasan pelanggan melalui layanan dan produk berkualitas.' },
          { title: 'Tanggung Jawab Sosial & Lingkungan', desc: 'Berkontribusi pada pembangunan berkelanjutan dan pengelolaan lingkungan yang bertanggung jawab.' },
        ],
      },
      goldenRules: [
        { title: 'Patuh',       desc: 'Mematuhi seluruh prosedur, peraturan, dan standar keselamatan tanpa kompromi di setiap aktivitas kerja.' },
        { title: 'Peduli',      desc: 'Peduli terhadap keselamatan diri sendiri, rekan kerja, serta lingkungan sekitar area operasional.' },
        { title: 'Intervensi',  desc: 'Berani menghentikan pekerjaan yang tidak aman dan melaporkan kondisi berisiko segera.' },
      ],
    },

    roadmap: {
      eyebrow: 'Perjalanan Kami',
      heading: 'Our Milestones',
      sub: 'Tonggak penting dalam perjalanan PT Perta-Samtan Gas sejak pendirian hingga menjadi perusahaan LPG terkemuka di Indonesia.',
      // achieved: '✓ Tercapai',
      planned: '→ Rencana',
      ctaHeading: '2.5 Juta Metrik Ton LPG Diproduksi',
      ctaSub: 'Sejak fase komersial 1 Mei 2013 hingga tahun 2026 — pencapaian bersejarah yang membuktikan kapabilitas operasional PT Perta-Samtan Gas dalam mendukung ketahanan energi nasional.',
      ctaBtn: 'Hubungi Kami',
      milestones: [
        { year: '2008',  title: 'Pendirian Perseroan',              done: true,  icon: '🏗️', desc: 'PT Perta-Samtan Gas resmi didirikan pada 7 Mei 2008, guna mendukung program pemerintah dalam konversi BBM ke LPG.' },
        { year: '2010',  title: 'Alih Kepemilikan & Pembangunan Kilang', done: true, icon: '🤝', desc: 'E1-Corporation mengalihkan kepemilikan sahamnya kepada Samtan Co., Ltd. Pembangunan Kilang NGL di Sumatera Selatan dilaksanakan oleh kontraktor EPCC, PT Tripatra Engineers & Constructors pada bulan Juli 2010.' },
        { year: '2011',  title: 'Perubahan Nama Perusahaan',        done: true,  icon: '📝', desc: 'Perubahan nama Perusahaan dari PT E1-Pertagas menjadi PT Perta-Samtan Gas pada tanggal 28 Januari 2011.' },
        { year: '2012',  title: 'Peresmian Kilang NGL',             done: true,  icon: '🎖️', desc: 'Peresmian Kilang NGL di Sumatera Selatan pada 6 Desember 2012 oleh Presiden Republik Indonesia Susilo Bambang Yudhoyono.' },
        { year: '2013',  title: 'Fase Komersial',                   done: true,  icon: '🚀', desc: 'Kilang PT Perta-Samtan Gas memasuki fase komersial mulai 1 Mei 2013.' },
        { year: '2014',  title: '100.000 Metrik Ton LPG',           done: true,  icon: '📦', desc: 'Berhasil melakukan pengiriman 100.000 Metrik Ton LPG untuk keperluan gas domestik (Sumatera bagian Selatan) melalui pipa.' },
        { year: '2016',  title: 'Relokasi Kantor Pusat',            done: true,  icon: '🏢', desc: 'Lokasi kantor pusat PT Perta-Samtan Gas yang pada awalnya berada di Jakarta direlokasi ke Kilang Fraksinasi, Banyuasin.' },
        { year: '2018',  title: '1 Juta Ton LPG',                   done: true,  icon: '🏆', desc: 'Berhasil memproduksi 1 juta ton LPG sejak masa komersial hingga tahun 2026 — tonggak bersejarah dalam perjalanan perusahaan.' },
        { year: '2019',  title: 'Perubahan Pemegang Saham',         done: true,  icon: '🔄', desc: 'Perubahan nama Samtan Co.Ltd., menjadi ST International Corporation pada tanggal 7 Desember 2019.' },
        { year: '2023',  title: 'Jumper Line 12"',                  done: true,  icon: '🔧', desc: 'PT Perta-Samtan Gas berhasil menyelesaikan proyek pembangunan Jumper Line 12" yang berlokasi di SKG 10 dan telah melakukan commissioning pada 26 Agustus 2023.' },
        { year: '2026', title: '2,5 Juta Metrik Ton LPG',          done: true,  icon: '🏆', desc: 'Pencapaian produksi kumulatif 2,5 juta metrik ton LPG sejak fase komersial 1 Mei 2013 hingga tahun 2026.' },
      ],
    },

    news: {
      eyebrow: 'Update Terbaru',
      heading: 'Berita Terkini',
      readMore: 'Baca Selengkapnya',
      readUnit: 'baca',
      seeAll: 'Lihat Semua Berita',
    },

    contribute: {
      eyebrow: 'Kontribusi & Kegiatan',
      heading: 'Our Contribution',
      sub: 'Dokumentasi kegiatan sosial, lingkungan, dan kontribusi PT Perta-Samtan Gas bagi masyarakat sekitar area operasional.',
      galleryLabel: 'Galeri Kegiatan',
      prevLabel: 'Foto sebelumnya',
      nextLabel: 'Foto berikutnya',
      photos: [
        { src: '/csr/CSR_MOTOR SAMPAH.png',         title: 'Program Motor Sampah',       caption: 'Dukungan pengelolaan sampah dan kebersihan lingkungan di sekitar area operasional.' },
        { src: '/csr/CSR_PENCEGAHAN BANJIR.png',    title: 'Program Pencegahan Banjir',  caption: 'Kegiatan mitigasi banjir dan peningkatan ketahanan masyarakat terdampak.' },
        { src: '/csr/CSR_RLTH.png',                 title: 'Program RLTH',               caption: 'Kontribusi rumah layak huni bagi masyarakat di wilayah sekitar perusahaan.' },
        { src: '/csr/CSR_SANTUNAN ANAK YATIM.png',  title: 'Santunan Anak Yatim',        caption: 'Penyaluran bantuan dan pendampingan bagi anak yatim piatu di sekitar operasi.' },
        { src: '/csr/CSR_SANTUNAN ANAK YATIM2.png', title: 'Santunan Anak Yatim',        caption: 'Kegiatan sosial berkelanjutan sebagai bentuk tanggung jawab perusahaan kepada masyarakat.' },
      ],
    },

    footer: {
      desc: 'Perusahaan pengolahan gas bumi dengan kapasitas desain 250 MMSCFD, mendukung program konversi energi dan ketahanan energi nasional Indonesia.',
      websiteSub: 'Website Resmi',
      liaisonLabel: 'Kantor Perwakilan Jakarta',
      sections: {
        Perusahaan: {
          label: 'Perusahaan',
          links: [
            { l: 'Tentang Kami',          h: '#tentang' },
            { l: 'Visi & Misi',           h: '#tentang' },
            { l: 'PSGAS',                 h: '#kenapa'  },
            { l: 'Pencapaian',            h: '#roadmap' },
            { l: 'Karir',                 h: '#'        },
          ],
        },
        Operasional: {
          label: 'Operasional',
          links: [
            { l: 'Proses Bisnis',         h: '#proses'    },
            { l: 'Kilang Prabumulih',     h: '#fasilitas' },
            { l: 'Kilang Banyuasin',  h: '#fasilitas' },
            { l: 'Pipa NGL',              h: '#fasilitas' },
            { l: 'Distribusi LPG',        h: '#fasilitas' },
          ],
        },
        Informasi: {
          label: 'Informasi',
          links: [
            { l: 'Produk LPG',      h: '#produk'     },
            { l: 'Our Contribution',  h: '#contribute' },
            { l: 'Penghargaan',     h: '#pelanggan'  },
            { l: 'Hubungi Kami',    h: '#kontak'     },
          ],
        },
      },
      legal: ['Kebijakan Privasi', 'Syarat & Ketentuan', 'Sitemap'],
      contactHeading: 'Hubungi Kami',
      websiteLabel: 'Alamat web resmi',
    },
  },

  /* ══════════════════ ENGLISH ══════════════════ */
  en: {
    nav: {
      contact: 'Contact Us',
      topStrip: 'PT Perta-Samtan Gas — Harmony World Class',
      brandName: 'PT Perta-Samtan Gas',
      menuAria: 'Menu',
      menuItems: [
        { label: 'Home', link: '#beranda' },
        { label: 'About the Company', link: '#tentang' },
        { label: 'Process', link: '#proses' },
        { label: 'Facilities', link: '#fasilitas' },
        { label: 'Products', link: '#produk' },
        { label: 'Our Contribution', link: '#contribute' },
      ],
    },

    hero: {
      eyebrow: 'PT Perta-Samtan Gas · South Sumatra · Est. 2008',
      headline1: 'Processing Natural Gas',
      headline2: 'Into LPG',
      headline3: 'for Indonesia',
      description:
        'A natural gas processing company with two integrated plants in Prabumulih and Banyuasin — supporting national energy security and the fuel conversion programme.',
      btnPrimary: 'Company Profile',
      btnSecondary: 'Business Process',
      stats: [
        { label: 'Design Capacity',    suffix: ' MMSCFD' },
        { label: 'LPG Production',     suffix: ' MT/Day' },
        { label: 'Condensate',         suffix: ' bbl/Day' },
        { label: 'NGL Pipeline Length',suffix: ' KM' },
        { label: 'Year Established',   suffix: '' },
        { label: 'For Indonesia',      suffix: '%' },
      ],
    },

    about: {
      eyebrow: 'Company Profile',
      heroTitle: 'About Us',
      intro:
        'PT Perta-Samtan Gas produces LPG and processes natural gas through two integrated plants in Prabumulih and Banyuasin, South Sumatra, supporting national energy resilience.',
      btnReadMore: 'Read More',
      btnVision: 'Vision & Mission',
      heading: 'PT Perta-Samtan Gas',
      body1:
        'PT Perta-Samtan Gas was established on 7 May 2008 with the objective of producing LPG (Liquefied Petroleum Gas) to support the Government\'s programme for converting kerosene to LPG and providing energy for the community, while reducing the Government\'s fuel subsidy burden.',
      body2:
        'The Company is engaged in gas processing and provides related services and infrastructure for Gas Processing operations, with two integrated plants in Prabumulih and Banyuasin, South Sumatra.',
      vision: 'To Become a Leading Company in the World in the LPG & Gas Industry',
      mission:
        'To deliver added value to Shareholders, Employees, and the Indonesian people through high operational efficiency and competitiveness.',
      objectives: [
        'Extraction and processing of natural gas into LPG and other gas products',
        'Trading and distribution of LPG to meet national domestic energy needs',
        'Optimisation of resources and gas processing facilities for best-in-class service',
        'Sustainable provision of infrastructure related to the gas processing sector',
      ],
      visionLabel: 'Vision',
      missionLabel: 'Mission',
      visionMissionHeading: 'Vision & Mission',
      objectivesHeading: 'Company Objectives',
      facilityLabel: 'Fractionation Plant',
    },

    clients: {
      partnerAriaLabel: 'Strategic partners',
      prevLabel: 'Previous',
      nextLabel: 'Next',
      awardsEyebrow: 'Awards & Recognition',
      awardsHeading: 'Awards We Have Received',
      awardsSub:
        'We are consistently committed to maintaining high quality and safety standards, while contributing to the development of the national energy industry.',
      isoCertsHeading: 'ISO Certification',
      partnersEyebrow: 'Ecosystem & Partners',
      partnersHeading: 'Part of the Pertamina Ecosystem',
      partnersSub:
        'Operating as part of the national energy value chain, synergising with the Pertamina Group and strategic stakeholders.',
      awards: [
        { title: 'Proper Hijau',               org: 'Ministry of Environment & Forestry', desc: 'Outstanding and sustainable environmental management commitment across all operational areas.' },
        { title: 'Patra Nirbaya Karya Madya',  org: 'Ministry of Energy & Mineral Resources', desc: 'Occupational safety award for consistently maintaining safe man-hours.' },
        { title: 'SMK3 Gold',                  org: 'Ministry of Manpower',               desc: 'Gold-level Occupational Health & Safety Management System — the highest safety standard.' },
        { title: 'PROPER Biru',                org: 'Ministry of Environment & Forestry', desc: 'Continuously recognised government environmental compliance assessment.' },
        { title: 'Energy Award',               org: 'Ministry of Energy & Mineral Resources', desc: 'Recognition for tangible contributions to national energy security and efficiency.' },
      ],
    },

    process: {
      eyebrow: 'Production Flow',
      heading: 'Core Business Process',
      sub: 'From upstream natural gas to ready-to-distribute LPG.',
      steps: [
        { title: 'Feed Gas Inlet',      sub: '',                    desc: 'Natural gas from PT Pertamina Hulu Rokan Regional 1 Zone 4.', output: '' },
        { title: 'Prabumulih Extraction Plant', sub: 'Prabumulih, South Sumatra', desc: 'Natural gas is processed to separate NGL (Natural Gas Liquids). Lean gas and condensate are returned to Pertamina Hulu Rokan.', output: '' },
        { title: 'NGL Pipeline ±90 KM', sub: 'NGL Transportation',  desc: 'NGL is conveyed via an 8-inch pipeline approximately 90 km from the Prabumulih plant to the Banyuasin fractionation plant.', output: '8" · ±90 KM' },
        { title: 'Banyuasin Fractionation Plant', sub: 'Banyuasin, South Sumatra', desc: 'NGL is fractionated into LPG Mixed (Propane + Butane) at 710 MT/day and Condensate (Pentane+) at 2,200 bbl/day.', output: '710 MT/Day' },
        { title: 'Product Distribution', sub: '',                   desc: 'LPG is distributed to Pontianak, Bangka, and Belitung via a vessel fleet.', output: '' },
      ],
      stats: [
        { val: '250',   unit: 'MMSCFD',  label: 'Design Capacity',    sub: 'Both plants total', hi: false },
        { val: '710',   unit: 'MT/Day',  label: 'LPG Production',     sub: 'Propane + Butane',  hi: true  },
        { val: '2,200', unit: 'bbl/Day', label: 'Condensate Output',  sub: 'Pentane+',          hi: false },
        { val: '±200',  unit: 'mmscfd',  label: 'Avg Feed Gas',       sub: 'From PHR Zone 4',   hi: false },
      ],
      detailHeading: 'Key Technical Specifications',
      detailItems: [
        { label: 'Feed Gas Inlet',    value: '±200 MMSCFD (average)' },
        { label: 'NGL Pipeline',      value: '8-inch · ±90 km' },
        { label: 'LPG Output',        value: '710 MT/day (Propane + Butane)' },
        { label: 'Condensate Output', value: '2,200 bbl/day (Pentane+)' },
        { label: 'Distribution',      value: 'Pontianak, Bangka, Belitung' },
      ],
    },

    facilities: {
      eyebrow: 'Operational Area',
      heading: 'Operational Facilities',
      sub: 'PT Perta-Samtan Gas operates two integrated plants in South Sumatra, connected by a 90 km NGL pipeline network.',
      items: [
        {
          title: 'Extraction Plant',
          label: 'Extraction Plant',
          location: 'Prabumulih, South Sumatra',
          desc: 'Extracts NGL components from natural gas. Feed gas is supplied by PT Pertamina Hulu Rokan Regional 1 Zone 4 at an average volume of ±200 mmscfd.',
          spec1k: 'Feed Gas', spec1v: '±200 mmscfd',
          spec2k: 'Output', spec2v: 'NGL + Lean Gas',
          spec3k: 'Source', spec3v: 'PHR Zone 4',
          image: '/KilangEkstraksi.png',
        },
        {
          title: 'Fractionation Plant',
          label: 'Fractionation Plant',
          location: 'Banyuasin, South Sumatra',
          desc: 'Processes NGL from Prabumulih into LPG Mixed (710 MT/day) and Condensate (2,200 bbl/day) for national domestic distribution.',
          spec1k: 'LPG', spec1v: '710 MT/Day',
          spec2k: 'Condensate', spec2v: '2,200 bbl/day',
          image: '/Kilang_Fraksinasi_Sungai_Gerong.JPG',
        },
      ],
    },

    products: {
      eyebrow: 'Production Output',
      heading: 'Main Company Products',
      sub: 'Natural gas processed at our two integrated plants is used to meet domestic LPG demand.',
      excellenceHeading: 'Company Excellence',
      excellence: [
        { title: 'Operational Excellence', desc: 'Consistently achieving high productivity, stability, and efficiency with a proven track record since the commercial phase on 1 May 2013.' },
        { title: 'Diverse Business Opportunities', desc: 'The company\'s track record enables exploration of business opportunities across Indonesia with broad growth potential.' },
      ],
      items: [
        { no: '01', icon: '🔥', title: 'LPG Mixed', sub: 'Propane + Butane', color: 'psg-red',
          desc: 'The main product — mixed LPG with a production capacity of 710 MT/day, supplied to PT Pertamina Patra Niaga.',
          stat: '710 MT/Day' },
        { no: '02', icon: '💧', title: 'Condensate', sub: 'Pentane+', color: 'psg-blue',
          desc: 'Condensate (Pentane+) as a fractionation by-product at 2,200 bbl/day, returned to PT Pertamina Hulu Rokan.',
          stat: '2,200 bbl/Day' },
      ],
    },

    whyus: {
      eyebrow: 'Values & Excellence',
      heading: 'PSGAS',
      sub: 'The five PSGAS pillars — Professional, Safety, Good Governance, Achieve Profit, and Satisfied Customer — guide our behaviour and decision-making in plant operations, serving stakeholders, and supporting national energy resilience.',
      hsseEyebrow: 'Safety Culture',
      hsseHeading: 'HSSE Golden Rules',
      values: [
        { no: 'P', title: 'Professional', desc: 'Committed to continuous self-improvement and maintaining high professionalism in every aspect of work.' },
        { no: 'S', title: 'Safety', desc: 'Focused on occupational safety, process safety, health, security, and the environment (HSSE) in every operational activity.' },
        { no: 'G', title: 'Good Governance', desc: 'Applying principles of transparent, accountable, and responsible Good Corporate Governance (GCG).' },
        { no: 'A', title: 'Achieve Profit', desc: 'Generating high economic value to sustain the Company for Shareholders and Stakeholders.' },
        { no: 'S', title: 'Satisfied Customer', desc: 'Fully committed to customer satisfaction through excellent service and high-quality products.' },
      ],
      onePertamina: {
        title: 'One Pertamina',
        groupLabel: 'Pertamina Group',
        mascotAlt: 'Pertamina field worker mascot',
        desc: 'The spirit of unity across the Pertamina Group for synergy, active collaboration, and overall performance improvement in support of national energy resilience.',
        pillars: [
          { title: 'Collaborative', desc: 'Building synergistic cooperation and delivering added value for the company and stakeholders.' },
          { title: 'Discipline', desc: 'Adhering to procedures, regulations, and work commitments to achieve performance targets.' },
          { title: 'Integrity', desc: 'Upholding honesty, ethics, and accountability in every action.' },
          { title: 'Innovative', desc: 'Continuously innovating and adapting to business and technological change.' },
          { title: 'Customer Focus', desc: 'Prioritising customer satisfaction through quality service and products.' },
          { title: 'Social & Environmental Responsibility', desc: 'Contributing to sustainable development and responsible environmental management.' },
        ],
      },
      goldenRules: [
        { title: 'Comply',    desc: 'Follow all procedures, regulations, and safety standards without compromise in every work activity.' },
        { title: 'Care',      desc: 'Care for the safety of yourself, colleagues, and the surrounding environment in operational areas.' },
        { title: 'Intervene', desc: 'Dare to stop unsafe work and immediately report hazardous conditions.' },
      ],
    },

    roadmap: {
      eyebrow: 'Our Journey',
      heading: 'Our Milestones',
      sub: 'Key milestones in PT Perta-Samtan Gas\'s journey from establishment to becoming a leading LPG company in Indonesia.',
      achieved: '✓ Achieved',
      planned: '→ Planned',
      ctaHeading: '2.5 Million Metric Tons of LPG Produced',
      ctaSub: 'Since the commercial phase on 1 May 2013 through 2026 — a historic achievement proving the operational capability of PT Perta-Samtan Gas in supporting national energy security.',
      ctaBtn: 'Contact Us',
      milestones: [
        { year: '2008',  title: 'Company Establishment',           done: true,  icon: '🏗️', desc: 'PT Perta-Samtan Gas was officially established on 7 May 2008. Owned 66% by PT Pertamina Gas and 34% by ST International Ltd. to produce LPG supporting the Government\'s fuel conversion programme.' },
        { year: '2010',  title: 'Share Transfer & Plant Construction', done: true, icon: '🤝', desc: 'E1 Corporation transferred its share ownership to Samtan Co., Ltd. Construction of the South Sumatra NGL Plant was carried out by EPCC contractor PT Tripatra Engineers & Constructors in July 2010.' },
        { year: '2011',  title: 'Company Renamed',                   done: true,  icon: '📝', desc: 'The company was renamed from PT E1-Pertagas to PT Perta-Samtan Gas on 28 January 2011.' },
        { year: '2012',  title: 'NGL Plant Inauguration',            done: true,  icon: '🎖️', desc: 'Inauguration of the South Sumatra NGL Plant on 6 December 2012 by President of the Republic of Indonesia Susilo Bambang Yudhoyono.' },
        { year: '2013',  title: 'Commercial Phase',                  done: true,  icon: '🚀', desc: 'PT Perta-Samtan Gas entered the commercial phase starting 1 May 2013.' },
        { year: '2014',  title: '100,000 Metric Tons of LPG',        done: true,  icon: '📦', desc: 'Successfully delivered 100,000 metric tons of LPG for domestic gas needs (southern Sumatra) via pipeline.' },
        { year: '2016',  title: 'Head Office Relocation',            done: true,  icon: '🏢', desc: 'Relocation of PT Perta-Samtan Gas head office to the Banyuasin Fractionation Plant.' },
        { year: '2018',  title: '1 Million Tonnes of LPG',           done: true,  icon: '🏆', desc: 'Successfully produced 1 million tonnes of LPG from the commercial phase through 2026 — a historic milestone in the company\'s journey.' },
        { year: '2019',  title: 'Shareholder Name Change',           done: true,  icon: '🔄', desc: 'Samtan Co. Ltd. was renamed ST International Corporation on 7 December 2019.' },
        { year: '2023',  title: '12" Jumper Line',                   done: true,  icon: '🔧', desc: 'PT Perta-Samtan Gas completed the 12" Jumper Line construction project at SKG 10, with commissioning on 26 August 2023.' },
        { year: '2026', title: '2.5 Million Metric Tons of LPG',  done: true,  icon: '🏆', desc: 'Cumulative production milestone of 2.5 million metric tons of LPG since the commercial phase on 1 May 2013 through 2026.' },
      ],
    },

    news: {
      eyebrow: 'Latest Updates',
      heading: 'Recent News',
      readMore: 'Read More',
      readUnit: 'read',
      seeAll: 'View All News',
    },

    contribute: {
      eyebrow: 'Contributions & Activities',
      heading: 'Our Contribution',
      sub: 'Documentation of social, environmental, and community contribution activities by PT Perta-Samtan Gas around operational areas.',
      galleryLabel: 'Activity Gallery',
      prevLabel: 'Previous photo',
      nextLabel: 'Next photo',
      photos: [
        { src: '/csr/CSR_MOTOR SAMPAH.png',         title: 'Waste Motorbike Programme', caption: 'Supporting waste management and environmental cleanliness around operational areas.' },
        { src: '/csr/CSR_PENCEGAHAN BANJIR.png',    title: 'Flood Prevention Programme', caption: 'Flood mitigation activities and increasing the resilience of affected communities.' },
        { src: '/csr/CSR_RLTH.png',                 title: 'Decent Housing Programme',   caption: 'Providing decent housing for communities in areas surrounding the company.' },
        { src: '/csr/CSR_SANTUNAN ANAK YATIM.png',  title: 'Orphan Assistance',          caption: 'Distributing aid and support for orphaned children near operational areas.' },
        { src: '/csr/CSR_SANTUNAN ANAK YATIM2.png', title: 'Orphan Assistance',          caption: 'Ongoing social activities as a form of corporate responsibility to the community.' },
      ],
    },

    footer: {
      desc: 'A natural gas processing company with a design capacity of 250 MMSCFD, supporting national energy conversion and security programmes in Indonesia.',
      websiteSub: 'Official Website',
      liaisonLabel: 'Jakarta Representative Office',
      sections: {
        Perusahaan: {
          label: 'Company',
          links: [
            { l: 'About Us',             h: '#tentang' },
            { l: 'Vision & Mission',     h: '#tentang' },
            { l: 'PSGAS',                  h: '#kenapa'  },
            { l: 'Achievements',         h: '#roadmap' },
            { l: 'Careers',              h: '#'        },
          ],
        },
        Operasional: {
          label: 'Operations',
          links: [
            { l: 'Business Process',       h: '#proses'    },
            { l: 'Prabumulih Plant',       h: '#fasilitas' },
            { l: 'Banyuasin Plant',    h: '#fasilitas' },
            { l: 'NGL Pipeline',           h: '#fasilitas' },
            { l: 'LPG Distribution',       h: '#fasilitas' },
          ],
        },
        Informasi: {
          label: 'Information',
          links: [
            { l: 'LPG Products',    h: '#produk'     },
            { l: 'Our Contribution',  h: '#contribute' },
            { l: 'Awards',          h: '#pelanggan'  },
            { l: 'Contact Us',      h: '#kontak'     },
          ],
        },
      },
      legal: ['Privacy Policy', 'Terms & Conditions', 'Sitemap'],
      contactHeading: 'Contact Us',
      websiteLabel: 'Official website',
    },
  },
};
