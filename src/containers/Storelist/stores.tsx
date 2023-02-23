import React from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

export const storelist = () => [
  {
    id: 1,
    name: "N3xt Level Second Hand Shop",
    description: "“Moderni ja siisti kirppis.”",
    categories: [1, 2],
    services: [1, 2, 3],
    clicked: 1,
    sellplaces: {
      all: 50,
      free: 10,
    },
    proposition: [{}],
    pricelist: {
      price: "0,50€ / kpl",
    },
    embedmap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.468967418114!2d23.155050016115347!3d60.387931782041704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c47c18c022b09%3A0xdbdbb766da3b99dc!2sN3xt%20Level%20Second%20Hand%20Shop!5e0!3m2!1sen!2sfi!4v1677060989240!5m2!1sen!2sfi",
    opentimes: "Ma-Pe 10-18, La 10-16",
    contact: {
      phone: "+358 50 432 3800",
      email: "hello@n3xtlevel.fi",
      website: "https://n3xtlevel.fi/",
    },
    location: {
      address: "Tähtelänkatu 4",
      city: "Salo",
      zip: "24100",
      area: "Varsinais-Suomi",
      driveto: "https://goo.gl/maps/dxXKT5HasxEHEWxz7",
    },
    imgs: [
      {
        key: "img1.jpg",
        src: img1,
      },
      {
        key: "img2.jpg",
        src: img2,
      },
    ],
  },
];
