/** Metadata-only Romanian copy (not visible on page). Title excludes brand suffix. */

export type PageSeoCopy = {
  title: string;
  description?: string;
};

export const PAGE_SEO_COPY: Record<string, PageSeoCopy> = {
  "/": {
    title: "Consultanță EUDR România – Conformitate pentru companii",
    description:
      "Consultanță și conformitate EUDR pentru companii din România: implementare, audit, trasabilitate și due diligence, cu sprijin pentru întregul lanț de aprovizionare.",
  },
  "/about": {
    title: "Regulament EUDR – Obligații și conformitate pentru firme",
    description:
      "Explicații despre regulamentul EUDR, obligațiile firmelor, cerințele de conformitate și pașii de implementare pentru operatori și comercianți din România.",
  },
  "/services": {
    title: "Servicii EUDR – Consultanță, implementare și audit",
    description:
      "Descoperiți serviciile noastre EUDR: consultanță pentru conformitate, implementare, evaluarea riscurilor și trasabilitate pentru companiile din România.",
  },
  "/industry": {
    title: "EUDR industria lemnului – Consultanță pentru sectoare reglementate",
    description:
      "Consultanță EUDR pentru industria lemnului, mobilier, importatori și exportatori: obligații, riscuri, conformitate și implementare adaptate activității firmei.",
  },
  "/faq": {
    title: "Întrebări frecvente EUDR – Conformitate și implementare",
    description:
      "Răspunsuri la întrebări despre conformitatea EUDR, implementare, audit, trasabilitate și obligații pentru companii din România.",
  },
  "/contact": {
    title: "Contact consultanță EUDR România – Evaluare și audit",
    description:
      "Contactați echipa noastră pentru consultanță EUDR în România: evaluare de conformitate, audit sau întrebări despre serviciile EUDR. Răspundem prompt.",
  },
  "/privacy-policy": {
    title: "Politica de confidențialitate",
  },
  "/terms-and-services": {
    title: "Termeni și condiții",
  },
};