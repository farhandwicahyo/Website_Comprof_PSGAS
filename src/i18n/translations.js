/** @type {Record<'id'|'en', object>} */
export const translations = {

  /* ══════════════════ BAHASA INDONESIA ══════════════════ */
  id: {
    nav: {
      contact: 'Hubungi Kami',
      topStrip: 'PT Perta-Samtan Gas — Perusahaan LPG & Gas Terkemuka Indonesia',
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
        'Perusahaan pengolahan gas bumi dengan dua kilang terintegrasi di Prabumulih dan Sungai Gerong — mendukung ketahanan energi dan program konversi BBM nasional.',
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
      eyebrow: 'Tentang Perusahaan',
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
      visionLabel: 'Visi',
      missionLabel: 'Misi',
      visionMissionHeading: 'Visi & Misi Perseroan',
      objectivesHeading: 'Tujuan & Maksud Perseroan',
      facilityLabel: 'Kilang Fraksinasi Sungai Gerong',
    },

    clients: {
      partnerAriaLabel: 'Mitra strategis',
      prevLabel: 'Sebelumnya',
      nextLabel: 'Berikutnya',
      awardsEyebrow: 'Penghargaan & Pengakuan',
      awardsHeading: 'Penghargaan yang Kami Peroleh',
      awardsSub:
        'Kami senantiasa berkomitmen untuk menjaga standar kualitas dan keselamatan yang tinggi, serta berkontribusi dalam pengembangan industri energi nasional.',
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
        { title: 'Feed Gas Supply',   sub: 'Pasokan Gas Alam',     desc: 'Gas alam dari PHR Zona 4 dialirkan via pipa 28" & 20", rata-rata ±200 mmscfd.', output: '±200 MMSCFD' },
        { title: 'NGL Extraction',    sub: 'Kilang Prabumulih',    desc: 'NGL dipisahkan dari gas alam. Lean gas dikembalikan ke Pertamina Hulu Rokan.', output: 'NGL Liquid' },
        { title: 'Pipeline ±90 KM',   sub: 'Transportasi NGL',    desc: 'NGL dialirkan via pipa 8 inci sepanjang ±90 km ke Kilang Sungai Gerong.', output: '8" · ±90 KM' },
        { title: 'LPG Fractionation', sub: 'Kilang Sungai Gerong', desc: 'NGL difraksinasi menghasilkan LPG 710 MT/hari dan Kondensat 2.200 bbl/hari.', output: '710 MT/Hari' },
        { title: 'Distribution',      sub: 'Distribusi PSO',       desc: 'LPG disalurkan ke Pontianak, Bangka, dan Belitung melalui armada vessel.', output: 'PSO · 3 Destinasi' },
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
        { label: 'Distribusi',       value: 'PSO — Pontianak, Bangka, Belitung' },
      ],
    },

    facilities: {
      eyebrow: 'Area Operasi',
      heading: 'Fasilitas Operasional',
      sub: 'PT Perta-Samtan Gas memiliki dua kilang terintegrasi di Sumatera Selatan, terhubung oleh jaringan pipa NGL sepanjang 90 km.',
      items: [
        {
          title: 'Kilang Ekstraksi Prabumulih',
          label: 'Extraction Plant',
          location: 'Prabumulih, Sumatera Selatan',
          desc: 'Berfungsi mengekstrak komponen NGL dari gas alam. Feed gas diperoleh dari PT Pertamina Hulu Rokan Regional 1 Zona 4 dengan volume rata-rata ±200 mmscfd.',
          spec1k: 'Feed Gas', spec1v: '±200 mmscfd',
          spec2k: 'Output',   spec2v: 'NGL + Lean Gas',
          spec3k: 'Sumber',   spec3v: 'PHR Zona 4',
          image: '/KilangEkstraksi.png',
        },
        {
          title: 'Kilang Fraksinasi Sungai Gerong',
          label: 'Fractionation Plant',
          location: 'Sungai Gerong, Banyuasin, Sumatera Selatan',
          desc: 'Memproses NGL dari Prabumulih menjadi LPG Mixed (710 MT/hari) dan Kondensat (2.200 bbl/hari) untuk distribusi domestik nasional.',
          spec1k: 'Kapasitas', spec1v: '250 MMSCFD',
          spec2k: 'LPG',       spec2v: '710 MT/Hari',
          spec3k: 'Kondensat', spec3v: '2.200 bbl/hari',
          image: '/Kilang_Fraksinasi_Sungai_Gerong.png',
        },
        {
          title: 'Pipa NGL',
          label: 'NGL Pipeline',
          location: 'Prabumulih → Sungai Gerong',
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
      sub: 'Hasil olahan gas alam dari dua kilang terintegrasi yang mendukung program energi dan PSO nasional.',
      excellenceHeading: 'Keunggulan Perseroan',
      excellence: [
        { title: 'Keunggulan Operasional', desc: 'Konsisten mencapai produktivitas, stabilitas, dan efisiensi tinggi dengan rekam jejak keberhasilan sejak fase komersial 1 Mei 2013.' },
        { title: 'Peluang Bisnis Beragam', desc: 'Rekam jejak perusahaan memungkinkan eksplorasi peluang bisnis di seluruh wilayah Indonesia dengan potensi pertumbuhan luas.' },
      ],
      items: [
        { no: '01', icon: '🔥', title: 'LPG Mixed', sub: 'Propane + Butane', color: 'psg-red',
          desc: 'Produk utama berupa LPG campuran dengan kapasitas produksi 710 MT/hari, disalurkan ke PT Pertamina Patra Niaga untuk memenuhi kebutuhan domestik nasional (PSO).',
          stat: '710 MT/Hari' },
        { no: '02', icon: '💧', title: 'Kondensat', sub: 'Pentane+', color: 'psg-blue',
          desc: 'Kondensat (Pentane+) sebagai produk sampingan fraksinasi 2.200 bbl/hari, dikembalikan ke PT Pertamina Hulu Rokan.',
          stat: '2.200 bbl/Hari' },
      ],
    },

    whyus: {
      eyebrow: 'Nilai & Keunggulan',
      heading: 'Tata Nilai Perseroan',
      sub: 'Dengan tata nilai AKHLAK, budaya HSSE, dan rekam jejak operasional yang kuat — PT Perta-Samtan Gas menjadi mitra energi terpercaya bagi Indonesia.',
      hsseEyebrow: 'Budaya Keselamatan',
      hsseHeading: 'HSSE Golden Rules',
      values: [
        { no: '01', title: 'Profesional',           desc: 'Berkomitmen dalam perbaikan diri berkelanjutan dan memiliki profesionalisme tinggi dalam setiap aspek kerja.' },
        { no: '02', title: 'HSSE',                   desc: 'Fokus pada keselamatan kerja, keselamatan proses, kesehatan, keamanan, dan lingkungan dalam setiap aktivitas operasional.' },
        { no: '03', title: 'Tata Kelola Perusahaan', desc: 'Menerapkan prinsip-prinsip Good Corporate Governance (GCG) yang transparan, akuntabel, dan bertanggung jawab.' },
        { no: '04', title: 'Achieve Profit',         desc: 'Menghasilkan nilai ekonomi tinggi demi keberlangsungan Perseroan bagi Pemegang Saham dan Pemangku Kepentingan.' },
        { no: '05', title: 'Kepuasan Pelanggan',     desc: 'Berkomitmen penuh terhadap kepuasan pelanggan melalui layanan prima dan produk berkualitas tinggi.' },
        { no: '06', title: 'Budaya AKHLAK',          desc: 'Menerapkan nilai Amanah, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif dalam setiap interaksi organisasi.' },
      ],
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
      achieved: '✓ Tercapai',
      planned: '→ Rencana',
      ctaHeading: '2.5 Juta Metrik Ton LPG Diproduksi',
      ctaSub: 'Sejak fase komersial 1 Mei 2013 hingga Oktober 2018 — pencapaian bersejarah yang membuktikan kapabilitas operasional PT Perta-Samtan Gas dalam mendukung ketahanan energi nasional.',
      ctaBtn: 'Hubungi Kami',
      milestones: [
        { year: '2008',  title: 'Pendirian Perseroan',         done: true,  icon: '🏗️', desc: 'PT Perta-Samtan Gas resmi didirikan pada 7 Mei 2008. Dimiliki 66% Pertamina Gas & 34% ST International untuk memproduksi LPG mendukung program konversi BBM pemerintah.' },
        { year: '2013',  title: 'Fase Komersial',              done: true,  icon: '🚀', desc: 'Kilang PT Perta-Samtan Gas memasuki fase komersial mulai 1 Mei 2013. Dimulainya produksi penuh LPG dan Kondensat dari kedua kilang terintegrasi.' },
        { year: '2018',  title: '1 Juta Ton LPG',              done: true,  icon: '🏆', desc: 'Berhasil memproduksi 1 juta ton LPG sejak masa komersial hingga Oktober 2018 — tonggak bersejarah dalam perjalanan perusahaan.' },
        { year: '—',     title: 'Proper Hijau',                done: true,  icon: '🌿', desc: 'Meraih penghargaan Proper Hijau dari Kementerian LHK RI atas komitmen pengelolaan lingkungan hidup yang unggul di seluruh area operasional.' },
        { year: '—',     title: 'Patra Nirbaya Karya Madya',   done: true,  icon: '🛡️', desc: 'Meraih Penghargaan Keselamatan Kerja kategori Jam Kerja Aman — bukti nyata implementasi budaya HSSE yang konsisten.' },
        { year: '2026+', title: 'Diversifikasi & Pertumbuhan', done: false, icon: '🌐', desc: 'Eksplorasi peluang bisnis di seluruh Indonesia, penguatan kemitraan strategis dengan Pemerintah, dan pengembangan potensi bisnis yang lebih luas.' },
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
      heading: 'Our Contribute',
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
            { l: 'Tata Nilai (AKHLAK)',   h: '#kenapa'  },
            { l: 'Pencapaian',            h: '#roadmap' },
            { l: 'Karir',                 h: '#'        },
          ],
        },
        Operasional: {
          label: 'Operasional',
          links: [
            { l: 'Proses Bisnis',         h: '#proses'    },
            { l: 'Kilang Prabumulih',     h: '#fasilitas' },
            { l: 'Kilang Sungai Gerong',  h: '#fasilitas' },
            { l: 'Pipa NGL',              h: '#fasilitas' },
            { l: 'Distribusi LPG',        h: '#fasilitas' },
          ],
        },
        Informasi: {
          label: 'Informasi',
          links: [
            { l: 'Produk LPG',      h: '#produk'     },
            { l: 'Our Contribute',  h: '#contribute' },
            { l: 'Penghargaan',     h: '#pelanggan'  },
            { l: 'GCG',             h: '#'           },
            { l: 'Hubungi Kami',    h: '#kontak'     },
          ],
        },
      },
      legal: ['Kebijakan Privasi', 'Syarat & Ketentuan', 'GCG', 'Sitemap'],
    },
  },

  /* ══════════════════ ENGLISH ══════════════════ */
  en: {
    nav: {
      contact: 'Contact Us',
      topStrip: 'PT Perta-Samtan Gas — Leading LPG & Gas Company in Indonesia',
      brandName: 'PT Perta-Samtan Gas',
      menuAria: 'Menu',
      menuItems: [
        { label: 'Home', link: '#beranda' },
        { label: 'About the Company', link: '#tentang' },
        { label: 'Process', link: '#proses' },
        { label: 'Facilities', link: '#fasilitas' },
        { label: 'Products', link: '#produk' },
        { label: 'Our Contribute', link: '#contribute' },
      ],
    },

    hero: {
      eyebrow: 'PT Perta-Samtan Gas · South Sumatra · Est. 2008',
      headline1: 'Processing Natural Gas',
      headline2: 'Into LPG',
      headline3: 'for Indonesia',
      description:
        'A natural gas processing company with two integrated plants in Prabumulih and Sungai Gerong — supporting national energy security and the fuel conversion programme.',
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
      eyebrow: 'About the Company',
      heading: 'PT Perta-Samtan Gas',
      body1:
        'PT Perta-Samtan Gas was established on 7 May 2008 with the objective of producing LPG (Liquefied Petroleum Gas) to support the Government\'s programme for converting kerosene to LPG and providing energy for the community, while reducing the Government\'s fuel subsidy burden.',
      body2:
        'The Company is engaged in gas processing and provides related services and infrastructure for Gas Processing operations, with two integrated plants in Prabumulih and Sungai Gerong, South Sumatra.',
      vision: 'To Become a Leading Company in the World in the LPG & Gas Industry',
      mission:
        'To deliver added value to Shareholders, Employees, and the Indonesian people through high operational efficiency and competitiveness.',
      objectives: [
        'Extraction and processing of natural gas into LPG and other gas products',
        'Trading and distribution of LPG to fulfil the Public Service Obligation (PSO) programme',
        'Optimisation of resources and gas processing facilities for best-in-class service',
        'Sustainable provision of infrastructure related to the gas processing sector',
      ],
      visionLabel: 'Vision',
      missionLabel: 'Mission',
      visionMissionHeading: 'Vision & Mission',
      objectivesHeading: 'Company Objectives',
      facilityLabel: 'Sungai Gerong Fractionation Plant',
    },

    clients: {
      partnerAriaLabel: 'Strategic partners',
      prevLabel: 'Previous',
      nextLabel: 'Next',
      awardsEyebrow: 'Awards & Recognition',
      awardsHeading: 'Awards We Have Received',
      awardsSub:
        'We are consistently committed to maintaining high quality and safety standards, while contributing to the development of the national energy industry.',
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
        { title: 'Feed Gas Supply',   sub: 'Natural Gas Supply',     desc: 'Natural gas from PHR Zone 4 is fed via 28" & 20" pipelines at an average of ±200 mmscfd.', output: '±200 MMSCFD' },
        { title: 'NGL Extraction',    sub: 'Prabumulih Plant',       desc: 'NGL is separated from natural gas. Lean gas is returned to Pertamina Hulu Rokan.', output: 'NGL Liquid' },
        { title: 'Pipeline ±90 KM',   sub: 'NGL Transportation',    desc: 'NGL is transported via an 8-inch pipeline approx. 90 km to Sungai Gerong Plant.', output: '8" · ±90 KM' },
        { title: 'LPG Fractionation', sub: 'Sungai Gerong Plant',    desc: 'NGL is fractionated to yield 710 MT/day of LPG and 2,200 bbl/day of Condensate.', output: '710 MT/Day' },
        { title: 'Distribution',      sub: 'PSO Distribution',       desc: 'LPG is distributed to Pontianak, Bangka, and Belitung via a vessel fleet.', output: 'PSO · 3 Destinations' },
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
        { label: 'Distribution',      value: 'PSO — Pontianak, Bangka, Belitung' },
      ],
    },

    facilities: {
      eyebrow: 'Operational Area',
      heading: 'Operational Facilities',
      sub: 'PT Perta-Samtan Gas operates two integrated plants in South Sumatra, connected by a 90 km NGL pipeline network.',
      items: [
        {
          title: 'Prabumulih Extraction Plant',
          label: 'Extraction Plant',
          location: 'Prabumulih, South Sumatra',
          desc: 'Responsible for extracting NGL components from natural gas. Feed gas is supplied by PT Pertamina Hulu Rokan Regional 1 Zone 4 at an average volume of ±200 mmscfd.',
          spec1k: 'Feed Gas', spec1v: '±200 mmscfd',
          spec2k: 'Output',   spec2v: 'NGL + Lean Gas',
          spec3k: 'Source',   spec3v: 'PHR Zone 4',
          image: '/KilangEkstraksi.png',
        },
        {
          title: 'Sungai Gerong Fractionation Plant',
          label: 'Fractionation Plant',
          location: 'Sungai Gerong, Banyuasin, South Sumatra',
          desc: 'Processes NGL from Prabumulih into LPG Mixed (710 MT/day) and Condensate (2,200 bbl/day) for national domestic distribution.',
          spec1k: 'Capacity',   spec1v: '250 MMSCFD',
          spec2k: 'LPG',        spec2v: '710 MT/Day',
          spec3k: 'Condensate', spec3v: '2,200 bbl/day',
          image: '/Kilang_Fraksinasi_Sungai_Gerong.png',
        },
        {
          title: 'NGL Pipeline',
          label: 'NGL Pipeline',
          location: 'Prabumulih → Sungai Gerong',
          desc: 'An 8-inch diameter pipeline approximately 90 km in length that efficiently connects both plants.',
          spec1k: 'Length',   spec1v: '±90 KM',
          spec2k: 'Diameter', spec2v: '8 Inch',
          spec3k: 'Connects', spec3v: '2 Plants',
          image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: 'Distribution Depot & Jetty',
          label: 'Distribution Hub',
          location: 'Pulau Layang & Jetty 01 RU III',
          desc: 'LPG distribution infrastructure to Pontianak, Bangka, and Belitung using a maritime vessel fleet.',
          spec1k: 'Depot',       spec1v: 'Pulau Layang',
          spec2k: 'Jetty',       spec2v: 'RU III',
          spec3k: 'Destinations', spec3v: 'Pontianak · Bangka',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80',
        },
      ],
    },

    products: {
      eyebrow: 'Production Output',
      heading: 'Main Company Products',
      sub: 'Processed from natural gas at our two integrated plants, supporting national energy and PSO programmes.',
      excellenceHeading: 'Company Excellence',
      excellence: [
        { title: 'Operational Excellence', desc: 'Consistently achieving high productivity, stability, and efficiency with a proven track record since the commercial phase on 1 May 2013.' },
        { title: 'Diverse Business Opportunities', desc: 'The company\'s track record enables exploration of business opportunities across Indonesia with broad growth potential.' },
      ],
      items: [
        { no: '01', icon: '🔥', title: 'LPG Mixed', sub: 'Propane + Butane', color: 'psg-red',
          desc: 'The main product — mixed LPG with a production capacity of 710 MT/day, supplied to PT Pertamina Patra Niaga to meet national domestic demand (PSO).',
          stat: '710 MT/Day' },
        { no: '02', icon: '💧', title: 'Condensate', sub: 'Pentane+', color: 'psg-blue',
          desc: 'Condensate (Pentane+) as a fractionation by-product at 2,200 bbl/day, returned to PT Pertamina Hulu Rokan.',
          stat: '2,200 bbl/Day' },
      ],
    },

    whyus: {
      eyebrow: 'Values & Excellence',
      heading: 'Company Core Values',
      sub: 'With AKHLAK values, HSSE culture, and a strong operational track record — PT Perta-Samtan Gas is a trusted energy partner for Indonesia.',
      hsseEyebrow: 'Safety Culture',
      hsseHeading: 'HSSE Golden Rules',
      values: [
        { no: '01', title: 'Professional',          desc: 'Committed to continuous self-improvement and maintaining high professionalism in every aspect of work.' },
        { no: '02', title: 'HSSE',                  desc: 'Focused on occupational safety, process safety, health, security, and the environment in every operational activity.' },
        { no: '03', title: 'Corporate Governance',  desc: 'Applying principles of transparent, accountable, and responsible Good Corporate Governance (GCG).' },
        { no: '04', title: 'Achieve Profit',        desc: 'Generating high economic value to sustain the Company for Shareholders and Stakeholders.' },
        { no: '05', title: 'Customer Satisfaction', desc: 'Fully committed to customer satisfaction through excellent service and high-quality products.' },
        { no: '06', title: 'AKHLAK Culture',        desc: 'Applying the values of Trustworthy, Competent, Harmonious, Loyal, Adaptive, and Collaborative in every organisational interaction.' },
      ],
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
      ctaSub: 'Since the commercial phase on 1 May 2013 through October 2018 — a historic achievement proving the operational capability of PT Perta-Samtan Gas in supporting national energy security.',
      ctaBtn: 'Contact Us',
      milestones: [
        { year: '2008',  title: 'Company Establishment',      done: true,  icon: '🏗️', desc: 'PT Perta-Samtan Gas was officially established on 7 May 2008. Owned 66% by Pertamina Gas & 34% by ST International to produce LPG supporting the Government\'s fuel conversion programme.' },
        { year: '2013',  title: 'Commercial Phase',           done: true,  icon: '🚀', desc: 'PT Perta-Samtan Gas\'s plant entered the commercial phase on 1 May 2013, beginning full LPG and Condensate production from both integrated plants.' },
        { year: '2018',  title: '1 Million Tonnes of LPG',    done: true,  icon: '🏆', desc: 'Successfully produced 1 million tonnes of LPG from the commercial phase through October 2018 — a historic milestone in the company\'s journey.' },
        { year: '—',     title: 'Proper Hijau Award',         done: true,  icon: '🌿', desc: 'Received the Proper Hijau award from the Ministry of Environment & Forestry for outstanding environmental management across all operational areas.' },
        { year: '—',     title: 'Patra Nirbaya Karya Madya',  done: true,  icon: '🛡️', desc: 'Received the Occupational Safety Award for Safe Man-Hours — a testament to consistent HSSE culture implementation.' },
        { year: '2026+', title: 'Diversification & Growth',   done: false, icon: '🌐', desc: 'Exploring business opportunities across Indonesia, strengthening strategic partnerships with the Government, and developing broader business potential.' },
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
      heading: 'Our Contribute',
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
            { l: 'Core Values (AKHLAK)', h: '#kenapa'  },
            { l: 'Achievements',         h: '#roadmap' },
            { l: 'Careers',              h: '#'        },
          ],
        },
        Operasional: {
          label: 'Operations',
          links: [
            { l: 'Business Process',       h: '#proses'    },
            { l: 'Prabumulih Plant',       h: '#fasilitas' },
            { l: 'Sungai Gerong Plant',    h: '#fasilitas' },
            { l: 'NGL Pipeline',           h: '#fasilitas' },
            { l: 'LPG Distribution',       h: '#fasilitas' },
          ],
        },
        Informasi: {
          label: 'Information',
          links: [
            { l: 'LPG Products',    h: '#produk'     },
            { l: 'Our Contribute',  h: '#contribute' },
            { l: 'Awards',          h: '#pelanggan'  },
            { l: 'GCG',             h: '#'           },
            { l: 'Contact Us',      h: '#kontak'     },
          ],
        },
      },
      legal: ['Privacy Policy', 'Terms & Conditions', 'GCG', 'Sitemap'],
    },
  },
};
