import { useLanguage } from '../context/LanguageContext';

function isMostlyEnglish(s) {
  const letters = s.replace(/[^A-Za-z]/g, '');
  if (!letters.length) return false;
  const latin = (s.match(/[A-Za-z]/g) || []).length;
  return latin / letters.length > 0.6;
}

function parseIndonesianEnglish(text) {
  const nodes = [];
  let last = 0;
  const re = /\(([^)]+)\)|\b(?:LPG Mixed|Propane \+ Butane|Pentane\+|Natural Gas Liquids|Liquified Petroleum Gas|Liquid Petroleum Gas|Good Corporate Governance|Good Governance|Achieve Profit|Satisfied Customer|Safety|E1-Corporation|Extraction Plant|Fractionation Plant|NGL Pipeline|Distribution Hub)\b/gi;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const chunk = m[0];
    const inner = m[1];
    const italic =
      inner != null ? isMostlyEnglish(inner) : /^[A-Za-z0-9+.\s-]+$/.test(chunk);
    if (italic) {
      nodes.push(
        <em key={`${m.index}-${chunk}`} className="italic">
          {chunk}
        </em>,
      );
    } else {
      nodes.push(chunk);
    }
    last = m.index + chunk.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes.length ? nodes : [text];
}

/** Italicise English fragments when locale is Indonesian. */
export default function IdRichText({ text, className = '', as: Tag = 'span' }) {
  const { lang } = useLanguage();
  if (text == null || text === '') return null;
  if (lang !== 'id') {
    return <Tag className={className}>{text}</Tag>;
  }
  return <Tag className={className}>{parseIndonesianEnglish(String(text))}</Tag>;
}
