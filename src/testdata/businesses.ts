import { BusinessShort, Businesses } from "../types/businesses";

export const businessesShort: BusinessShort[] = [
  {
    id: "1",
    name: "Business One",
    description: "Description of Business One",
    categories: ["Retail", "Food", "Services", "Health", "Electronics"],
    image: "https://picsum.photos/320/200?random=1",
    type: {
      id: "1",
      name: "Antique Store",
    },
    openNow: true,
    location: [
      {
        adminName: "Varsinais-Suomi",
        city: "Turku",
      },
    ],
  },
  {
    id: "2",
    name: "Business Two",
    description: "Description of Business Two",
    categories: ["Retail", "Clothing", "Food", "Services", "Health"],
    image: "https://picsum.photos/320/200?random=1",
    type: {
      id: "1",
      name: "Antique Store",
    },
    openNow: true,
    location: [
      {
        adminName: "Uusimaa",
        city: "Helsinki",
      },
    ],
  },
  // ... repeat for more items
  {
    id: "9",
    name: "Business Nine",
    description: "Description of Business Nine",
    categories: ["Food", "Services", "Health", "Electronics"],
    image: "https://picsum.photos/320/200?random=1",
    openNow: true,
    type: {
      id: "2",
      name: "Flea Market",
    },
  },
  {
    id: "10",
    name: "Business Ten",
    description: "Description of Business Ten",
    categories: ["Retail", "Food"],
    image: "https://picsum.photos/320/200?random=1",
    openNow: true,
    type: {
      id: "11",
      name: "Online Store",
    },
  },
];

export const businesses: Businesses[] = [
  {
    id: "1",
    name: "Business One",
    description: "Description of Business One",
    websiteUrl: "https://www.businessone.com",
    logo: "https://picsum.photos/320/200?random=1",
    images: ["https://picsum.photos/320/200?random=1"],
    openHours: {
      openNow: true,
      period: [
        {
          open: {
            day: 1,
            hour: 9,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
          close: {
            day: 1,
            hour: 17,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
        },
        {
          open: {
            day: 2,
            hour: 9,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
          close: {
            day: 2,
            hour: 17,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
        },
        {
          open: {
            day: 3,
            hour: 9,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
          close: {
            day: 3,
            hour: 17,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
        },
        {
          open: {
            day: 4,
            hour: 9,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
          close: {
            day: 4,
            hour: 17,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
        },
        {
          open: {
            day: 5,
            hour: 9,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
          close: {
            day: 5,
            hour: 17,
            minute: 0,
            date: {
              year: 2021,
              month: 1,
              day: 1,
            },
          },
        },
      ],
      specialDays: [
        {
          date: {
            year: 2021,
            month: 1,
            day: 1,
          },
        },
      ],
    },
    contacts: [
      {
        name: "John Doe",
        phone: "1234567890",
        email: "john@mail.com",
      },
    ],
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      youtube: "https://www.youtube.com",
      tiktok: "https://www.tiktok.com",
    },
    locations: [
      {
        name: "Location One",
        driveto: "https://www.google.com/maps",
        iframe: "",
        zipcode: "12345",
        address: "123 Main St",
        city: "Anytown",
        adminName: "Anytown",
        country: "USA",
      },
    ],
    categories: [
      {
        id: "1",
        name: "Category One",
        description: "Description of Category One",
        image: "category-one.jpg",
      },
    ],
    createdAt: "2021-01-01T00:00:00.000Z",
    orderID: null,
    customersID: null,
    notes: null,
    version: 0,
    type: {
      id: "1",
      name: "Business Type One",
    }, // Add the 'businessType' property here
  },
];
