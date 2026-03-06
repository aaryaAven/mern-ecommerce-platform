import iphone15 from "../assets/images/iphone15.jpg";
import s23 from "../assets/images/s23.jpg";
import vivox200 from "../assets/images/vivox200.jpg";

import airm2 from "../assets/images/airm2.jpg";
import dellxps13 from "../assets/images/dellxps13.jpg";
import hpomen16 from "../assets/images/hpomen16.jpg";

import sonywh from "../assets/images/sonywh.jpg";
import applewatch9 from "../assets/images/applewatch9.jpg";
import logitechmastermouse from "../assets/images/logitechmastermouse.jpg";

import razerdeathadderv3 from "../assets/images/razerdeathadderv3.jpg";
import logitechgprox2 from "../assets/images/logitechgprox2.jpg";
import redragonkeyboard from "../assets/images/redragonkeyboard.jpg";
import ps5controller from "../assets/images/ps5controller.jpg";

const products = [

  // ================= Mobiles =================
  {
    _id: "1",
    name: "iPhone 15",
    price: 79999,
    category: "Mobiles",
    image: iphone15,
    brand: "Apple",
    rating: 4.7,
    description: "The iPhone 15 features a powerful A16 Bionic chip, advanced dual-camera system, and a stunning Super Retina XDR display for an ultra-smooth user experience.",
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "Apple A16 Bionic",
      camera: "48MP + 12MP Dual Camera",
      battery: "Up to 20 hours video playback",
      storage: "128GB"
    }
  },
  {
    _id: "2",
    name: "Samsung Galaxy S23",
    price: 74999,
    category: "Mobiles",
    image: s23,
    brand: "Samsung",
    rating: 4.6,
    description: "Samsung Galaxy S23 offers flagship performance with Snapdragon 8 Gen 2, stunning AMOLED display, and a powerful triple-camera system.",
    specs: {
      display: "6.1-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP + 12MP + 10MP",
      battery: "3900mAh",
      storage: "128GB"
    }
  },
  {
    _id: "3",
    name: "Vivo X200",
    price: 59999,
    category: "Mobiles",
    image: vivox200,
    brand: "Vivo",
    rating: 4.5,
    description: "Vivo X200 combines stylish design with powerful performance, featuring advanced camera technology and smooth AMOLED display.",
    specs: {
      display: "6.7-inch AMOLED",
      processor: "MediaTek Dimensity 9300",
      camera: "64MP Triple Camera",
      battery: "5000mAh",
      storage: "256GB"
    }
  },

  // ================= Laptops =================
  {
    _id: "4",
    name: "MacBook Air M2",
    price: 99999,
    category: "Laptops",
    image: airm2,
    brand: "Apple",
    rating: 4.8,
    description: "MacBook Air M2 delivers incredible performance with Apple's M2 chip, ultra-thin design, and all-day battery life.",
    specs: {
      display: "13.6-inch Liquid Retina",
      processor: "Apple M2 Chip",
      ram: "8GB",
      storage: "256GB SSD",
      battery: "Up to 18 hours"
    }
  },
  {
    _id: "5",
    name: "Dell XPS 13",
    price: 88999,
    category: "Laptops",
    image: dellxps13,
    brand: "Dell",
    rating: 4.6,
    description: "Dell XPS 13 is a premium ultrabook featuring an InfinityEdge display, powerful Intel processor, and ultra-portable design.",
    specs: {
      display: "13.4-inch FHD+ InfinityEdge",
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      battery: "Up to 12 hours"
    }
  },
  {
    _id: "6",
    name: "HP Omen 16",
    price: 109999,
    category: "Laptops",
    image: hpomen16,
    brand: "HP",
    rating: 4.7,
    description: "HP Omen 16 is a high-performance gaming laptop built for serious gamers with RTX graphics and a high refresh-rate display.",
    specs: {
      display: "16.1-inch FHD 165Hz",
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
      gpu: "NVIDIA RTX 4060"
    }
  },

  // ================= Accessories =================
  {
    _id: "7",
    name: "Sony WH-1000XM5",
    price: 24999,
    category: "Accessories",
    image: sonywh,
    brand: "Sony",
    rating: 4.8,
    description: "Sony WH-1000XM5 headphones deliver industry-leading noise cancellation with premium sound quality.",
    specs: {
      type: "Wireless Headphones",
      battery: "Up to 30 hours",
      noiseCancellation: "Active Noise Cancellation",
      connectivity: "Bluetooth 5.2",
      weight: "250g"
    }
  },
  {
    _id: "8",
    name: "Apple Watch Series 9",
    price: 41999,
    category: "Accessories",
    image: applewatch9,
    brand: "Apple",
    rating: 4.7,
    description: "Apple Watch Series 9 offers advanced health tracking, powerful S9 chip, and seamless integration with Apple devices.",
    specs: {
      display: "Always-On Retina Display",
      processor: "Apple S9",
      health: "Heart Rate, ECG, Blood Oxygen",
      battery: "Up to 18 hours",
      connectivity: "Bluetooth, Wi-Fi"
    }
  },
  {
    _id: "9",
    name: "Logitech MX Master 3",
    price: 8999,
    category: "Accessories",
    image: logitechmastermouse,
    brand: "Logitech",
    rating: 4.8,
    description: "Logitech MX Master 3 is a premium productivity mouse with ultra-fast scrolling and ergonomic design.",
    specs: {
      type: "Wireless Mouse",
      dpi: "4000 DPI",
      battery: "70 days per charge",
      connectivity: "Bluetooth / USB Receiver",
      compatibility: "Windows, macOS"
    }
  },

  // ================= Gaming Accessories =================
  {
    _id: "10",
    name: "Razer DeathAdder V3",
    price: 5999,
    category: "Gaming Accessories",
    image: razerdeathadderv3,
    brand: "Razer",
    rating: 4.6,
    description: "Razer DeathAdder V3 is an ultra-lightweight esports gaming mouse with precise optical sensor.",
    specs: {
      dpi: "30000 DPI",
      weight: "59g",
      sensor: "Razer Focus Pro Optical",
      connectivity: "Wired",
      buttons: "6 Programmable"
    }
  },
  {
    _id: "11",
    name: "Logitech G Pro X 2 Lightspeed",
    price: 12999,
    category: "Gaming Accessories",
    image: logitechgprox2,
    brand: "Logitech",
    rating: 4.7,
    description: "Logitech G Pro X 2 Lightspeed headset delivers pro-level audio performance for competitive gaming.",
    specs: {
      type: "Wireless Gaming Headset",
      battery: "50 hours",
      connectivity: "Lightspeed Wireless",
      drivers: "Graphene Drivers",
      weight: "345g"
    }
  },
  {
    _id: "12",
    name: "Redragon Mechanical Keyboard",
    price: 4499,
    category: "Gaming Accessories",
    image: redragonkeyboard,
    brand: "Redragon",
    rating: 4.5,
    description: "Redragon Mechanical Keyboard offers RGB lighting, durable switches, and responsive typing for gamers.",
    specs: {
      switches: "Mechanical Red Switches",
      lighting: "RGB Backlit",
      connection: "USB Wired",
      keys: "104 Keys",
      build: "Metal Frame"
    }
  },
  {
    _id: "13",
    name: "PS5 DualSense Controller",
    price: 5999,
    category: "Gaming Accessories",
    image: ps5controller,
    brand: "Sony",
    rating: 4.8,
    description: "PlayStation DualSense controller features adaptive triggers and immersive haptic feedback.",
    specs: {
      connectivity: "Bluetooth",
      battery: "1560mAh",
      features: "Haptic Feedback, Adaptive Triggers",
      compatibility: "PS5, PC",
      weight: "280g"
    }
  }

];
export default products;