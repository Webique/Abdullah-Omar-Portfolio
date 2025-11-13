export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/abdullah-omar",
    tiktok: "https://www.tiktok.com/@abdullah-omar",
    whatsapp: "https://wa.me/966588888888",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3554.459151416646!2d49.65972517544313!3d27.015653576585947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDAwJzU2LjQiTiA0OcKwMzknNDQuMyJF!5e0!3m2!1sen!2seg!4v1761585102880!5m2!1sen!2seg",
    googleMap: "https://maps.app.goo.gl/RxmiMqY8CyTvDVNX7"
  },

  support: {
    phone: "+966588888888",
    email: "abdullahOmar@gmail.com",
    whatsapp: "+966588888888"
  },

  photographer: {
    name: "عبدالله عمر",
    nameEn: "Abdullah Omar",
    title: "مصوّر ومنتج محتوى بصري",
    titleEn: "Photographer & Creative Producer"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`,
  twitter: "@abdullahomar"
};

export type SiteConfig = typeof siteConfig;
