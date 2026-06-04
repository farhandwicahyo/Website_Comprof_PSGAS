import { translations } from '../i18n/translations';

/** Gabungkan teks CMS/defaultContent ke locale Indonesia (CMS menang). */
export function buildIdLocale(content) {
  const base = translations.id;
  const nav = content?.navbar ?? {};
  const hero = content?.hero ?? {};
  const about = content?.about ?? {};
  const contribute = content?.contribute ?? {};

  return {
    ...base,
    nav: {
      ...base.nav,
      topStrip: nav.topStrip || base.nav.topStrip,
      brandName: nav.brandName
        ? [nav.brandName, nav.brandSub].filter(Boolean).join(' ').trim() || base.nav.brandName
        : base.nav.brandName,
      contact: nav.ctaLabel || base.nav.contact,
      menuItems: Array.isArray(nav.menuItems) && nav.menuItems.length
        ? nav.menuItems
        : base.nav.menuItems,
    },
    hero: {
      ...base.hero,
      eyebrow: hero.eyebrow ?? base.hero.eyebrow,
      headline1: hero.headline1 ?? base.hero.headline1,
      headline2: hero.headline2 ?? base.hero.headline2,
      headline3: hero.headline3 ?? base.hero.headline3,
      description: hero.description ?? base.hero.description,
      btnPrimary: hero.btnPrimary ?? base.hero.btnPrimary,
      btnSecondary: hero.btnSecondary ?? base.hero.btnSecondary,
    },
    about: {
      ...base.about,
      intro: about.intro ?? base.about.intro,
      heroTitle: about.heroTitle ?? base.about.heroTitle,
      heading: about.heading ?? base.about.heading,
      body1: about.body1 ?? base.about.body1,
      body2: about.body2 ?? base.about.body2,
      vision: about.vision ?? base.about.vision,
      mission: about.mission ?? base.about.mission,
      objectives: Array.isArray(about.objectives) && about.objectives.length
        ? about.objectives
        : base.about.objectives,
    },
    process: {
      ...base.process,
      steps: mapProcessSteps(content?.process, base.process.steps),
    },
    facilities: {
      ...base.facilities,
      items: mapFacilities(content?.facilities, base.facilities.items),
    },
    products: {
      ...base.products,
      items: mapProducts(content?.products, base.products.items),
      excellence: base.products.excellence,
    },
    roadmap: {
      ...base.roadmap,
      milestones: Array.isArray(content?.milestones) && content.milestones.length
        ? content.milestones.map((m) => ({
            year: m.year ?? '—',
            title: m.title ?? '',
            desc: m.desc ?? '',
            done: Boolean(m.done),
            icon: m.icon ?? '📌',
          }))
        : base.roadmap.milestones,
    },
    contribute: {
      ...base.contribute,
      eyebrow: contribute.eyebrow ?? base.contribute.eyebrow,
      heading: contribute.heading ?? base.contribute.heading,
      sub: contribute.subtitle ?? contribute.sub ?? base.contribute.sub,
      photos: mergeContributePhotos(contribute.photos, base.contribute.photos),
    },
  };
}

function mapProcessSteps(cmsSteps, fallbackSteps) {
  if (!Array.isArray(cmsSteps) || !cmsSteps.length) return fallbackSteps;
  return cmsSteps.map((s, i) => {
    const fb = fallbackSteps[i] ?? {};
    let output = String(s.meta ?? fb.output ?? '').trim();
    if (/domestik/i.test(output)) output = output.replace(/\s*·\s*PSO.*$/i, '').trim();
    return {
      title: s.title ?? fb.title,
      sub: fb.sub ?? '',
      desc: s.desc ?? fb.desc,
      output,
    };
  });
}

const REMOVED_FACILITY_RE =
  /pipa\s*ngl|ngl\s*pipeline|depot|jetty|distribution\s*hub|distribusi/i;

function operationalFacilitiesOnly(list) {
  if (!Array.isArray(list)) return [];
  return list
    .filter((f) => {
      const text = `${f?.title ?? ''} ${f?.label ?? ''}`;
      if (REMOVED_FACILITY_RE.test(text)) return false;
      return /ekstraksi|extraction|fraksinasi|fractionation/i.test(text);
    })
    .slice(0, 2);
}

function mapFacilities(cmsList, fallbackItems) {
  const plants = operationalFacilitiesOnly(cmsList);
  const source = plants.length ? plants : fallbackItems;
  if (!source.length) return fallbackItems;
  return source.map((f, i) => {
    const fb = fallbackItems[i] ?? {};
    return {
      title: f.title ?? fb.title,
      label: f.label ?? fb.label,
      location: f.location ?? fb.location,
      desc: f.desc ?? fb.desc,
      image: f.image ?? fb.image,
      spec1k: f.spec1k ?? fb.spec1k,
      spec1v: f.spec1v ?? fb.spec1v,
      spec2k: f.spec2k ?? fb.spec2k,
      spec2v: f.spec2v ?? fb.spec2v,
      spec3k: f.spec3k || '',
      spec3v: f.spec3v || '',
    };
  });
}

function mapProducts(cmsList, fallbackItems) {
  if (!Array.isArray(cmsList) || !cmsList.length) return fallbackItems;
  return cmsList.map((p, i) => {
    const fb = fallbackItems[i] ?? {};
    return {
      no: p.no ?? fb.no,
      icon: p.icon ?? fb.icon,
      title: p.title ?? fb.title,
      sub: p.sub ?? fb.sub,
      desc: p.desc ?? fb.desc,
      stat: p.stat ?? fb.stat,
      color: p.color ?? fb.color,
    };
  });
}

function mergeContributePhotos(cmsPhotos, fallbackPhotos) {
  if (!Array.isArray(cmsPhotos) || !cmsPhotos.length) return fallbackPhotos;
  return cmsPhotos.map((p, i) => {
    const fb = fallbackPhotos[i] ?? {};
    return {
      src: p.src ?? fb.src,
      title: p.title ?? fb.title,
      caption: p.caption ?? fb.caption,
    };
  });
}
