import footer1 from "../public/images/icon-1.svg";
import footer2 from "../public/images/icon-2.svg";
import footer3 from "../public/images/icon-3.svg";
import footer4 from "../public/images/icon-4.svg";
import footer5 from "../public/images/icon-5.svg";

import cat2 from "../public/images/cat-2.png";

import provide1 from "../public/images/icon-1.svg";
import provide2 from "../public/images/icon-2.svg";
import provide3 from "../public/images/icon-3.svg";
import provide4 from "../public/images/icon-4.svg";
import provide5 from "../public/images/icon-5.svg";
import provide6 from "../public/images/icon-6.svg";

import vendor1 from "../public/images/vendor-18.svg";
import vendor2 from "../public/images/vendor-1.png";

import product1 from "../public/images/product-1-1.jpg";
import product1_1 from "../public/images/product-1-2.jpg";

export const subscribeFeature = [
  {
    id: 1,
    title: "Best prices & offers",
    body: "Orders $50 or more",
    img: footer1,
  },
  {
    id: 2,
    title: "Free delivery",
    body: "24/7 amazing services",
    img: footer2,
  },
  {
    id: 3,
    title: "Great daily deal",
    body: "When you sign up",
    img: footer3,
  },
  {
    id: 4,
    title: "Wide assortment",
    body: "Within 30 days",
    img: footer4,
  },
  {
    id: 5,
    title: "Easy returns",
    body: "Within 30 days",
    img: footer5,
  },
];
export const AllCategories = [
  { _id: 1, name: "milk", count: 65, img: cat2 },
  { _id: 2, name: "milk", count: 65, img: cat2 },
  { _id: 3, name: "milk", count: 65, img: cat2 },
  { _id: 4, name: "milk", count: 65, img: cat2 },
  { _id: 5, name: "milk", count: 65, img: cat2 },
  { _id: 6, name: "milk", count: 65, img: cat2 },
  { _id: 7, name: "milk", count: 65, img: cat2 },
  { _id: 8, name: "milk", count: 65, img: cat2 },
  { _id: 9, name: "milk", count: 65, img: cat2 },
  { _id: 10, name: "milk", count: 65, img: cat2 },
];
export const Brands = [
  { _id: 1, name: "Abu Auf", count: 65 },
  { _id: 2, name: "Abu Auf", count: 65 },
  { _id: 3, name: "Abu Auf", count: 65 },
  { _id: 4, name: "Abu Auf", count: 65 },
  { _id: 5, name: "Abu Auf", count: 65 },
  { _id: 6, name: "Abu Auf", count: 65 },
];
export const provides = [
  {
    id: 1,
    title: "Best Prices & Offers",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: provide1,
  },
  {
    id: 2,
    title: "Wide Assortment",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: provide2,
  },
  {
    id: 3,
    title: "Free Delivery",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: provide3,
  },
  {
    id: 4,
    title: "Easy Returns",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: provide4,
  },
  {
    id: 5,
    title: "100% Satisfaction",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: provide5,
  },
  {
    id: 6,
    title: "Great Daily Deal",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    img: provide6,
  },
];

export const Products = [
  {
    _id: 1,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    reviews: 45,
    vendor: {
      _id: 1,
      name: "nest food",
    },
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
    ],
    productQuantity: 100,
    sold: 20,
  },
  {
    _id: 2,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    reviews: 45,
    vendor: "nest food",
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 2, name: "snack" },
      { _id: 3, name: "snack" },
    ],
    vendor: {
      _id: 1,
      name: "nest food",
    },
    productQuantity: 100,
    sold: 20,
  },
  {
    _id: 3,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    reviews: 45,
    vendor: "nest food",
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
    ],
    vendor: {
      _id: 1,
      name: "nest food",
    },
    productQuantity: 100,
    sold: 20,
  },
  {
    _id: 4,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    reviews: 45,
    vendor: "nest food",
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
    ],
    vendor: {
      _id: 1,
      name: "nest food",
    },
    productQuantity: 100,
    sold: 20,
  },
  {
    _id: 5,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    reviews: 45,
    vendor: "nest food",
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
    ],
    vendor: {
      _id: 1,
      name: "nest food",
    },
    productQuantity: 100,
    sold: 20,
  },
  {
    _id: 6,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    reviews: 45,
    vendor: "nest food",
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
    ],
    vendor: {
      _id: 1,
      name: "nest food",
    },
    productQuantity: 100,
    sold: 20,
  },
  {
    _id: 7,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    reviews: 45,
    vendor: "nest food",
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
    ],
    vendor: {
      _id: 1,
      name: "nest food",
    },
    productQuantity: 100,
    sold: 20,
  },
  {
    _id: 8,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    reviews: 45,
    vendor: "nest food",
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
    ],
    vendor: {
      _id: 1,
      name: "nest food",
    },
    productQuantity: 100,
    sold: 20,
  },
  {
    _id: 9,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    reviews: 45,
    vendor: "nest food",
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
    ],
    vendor: {
      _id: 1,
      name: "nest food",
    },
    productQuantity: 100,
    sold: 20,
  },
  {
    _id: 10,
    name: "Seeds of Change Organic",
    rating: 4,
    reviews: 45,
    vendor: "nest food",
    price: 24,
    priceAfterDiscount: 20,
    category: {
      _id: 1,
      name: "snack",
    },
    images: [product1, product1_1],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
    size: [40, 20, 10],
    type: "Organic",
    MFG: "Jun 4.2022",
    life: "70 days",
    stock: 8,
    tags: [
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
      { _id: 1, name: "snack" },
    ],
    vendor: {
      _id: 1,
      name: "nest food",
    },
    productQuantity: 100,
    sold: 20,
  },
];
export const starsRating = [
  {
    _id: 1,
    rating: 5,
  },
  {
    _id: 2,
    rating: 4,
  },
  {
    _id: 3,
    rating: 3,
  },
  {
    _id: 4,
    rating: 2,
  },
  {
    _id: 5,
    rating: 1,
  },
];

export const product = {
  _id: 1,
  name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  rating: 4,
  reviews: 45,
  vendor: {
    _id: 1,
    name: "nest food",
  },
  price: 24,
  priceAfterDiscount: 20,
  category: {
    _id: 1,
    name: "snack",
  },
  images: [product1, product1_1],
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.    ",
  sizes: [40, 20, 10],
  type: "Organic",
  MFG: "Jun 4.2022",
  life: "70 days",
  stock: 8,
  tags: [
    { _id: 1, name: "snack" },
    { _id: 1, name: "snack" },
    { _id: 1, name: "snack" },
  ],
  productQuantity: 100,
  sold: 20,
  sku: "tarek",
};
export const reviews = [
  {
    _id: 1,
    firstName: "tarek",
    lastName: "medhat",
    ratings: 3,
    title: "Good Product",
  },
];

export const vendor = {
  _id: 1,
  image: vendor1,
  name: "Noodles Co.",
  ratings: 4.2,
  reviews: 23,
  address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
  contact: "(+91) - 540-025-553",
  description:
    "Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.  ",
};

export const vendors = [
  {
    _id: 1,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
  {
    _id: 2,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
  {
    _id: 3,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
  {
    _id: 4,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
  {
    _id: 5,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
  {
    _id: 6,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
  {
    _id: 7,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
  {
    _id: 8,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
  {
    _id: 9,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
  {
    _id: 10,
    name: "Nature Food",
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    contact: "(+91) - 540-025-553",
    products: 210,
    image: vendor2,
    date: "2012",
  },
];
