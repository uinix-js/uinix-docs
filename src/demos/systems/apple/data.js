// Yeah, the source images don't have transparent backgrounds.  why apple why!
import macbookAirImageSrc from './assets/images/macbook-air.jpg';
import macbookAirImageSrc2 from './assets/images/macbook-air-2.jpg';
import macbookPro13ImageSrc from './assets/images/macbook-pro-13.jpg';
import macbookPro13ImageSrc2 from './assets/images/macbook-pro-13-2.jpg';
import macbookPro16ImageSrc from './assets/images/macbook-pro-16.jpg';
import macbookPro16ImageSrc2 from './assets/images/macbook-pro-16-2.jpg';

export const footnotes = [
  'Screen size is measured diagonally.',
  'Actual diagonal screen measure is 23.5 inches.',
  '1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual formatted capacity less.',
  'Size and weight vary by configuration and manufacturing process.',
  'Battery life varies by use and configuration; see apple.com/batteries for more information.',
  'Requires camera (sold separately).',
  'Requires microphone (sold separately).',
];

const model1 = {
  name: 'MacBook Air (M1, 2020)',
  imageSrc: macbookAirImageSrc,
  imageSrc2: macbookAirImageSrc2,
  learnMoreUrl: 'https://www.apple.com/macbook-air/',
  techSpecsUrl: 'https://www.apple.com/macbook-air/specs/',
  colors: ['silver', 'spacegray', 'gold'],
  startingPrice: 999,
  stats: {
    display: {
      value: '13.3”',
      isExact: true,
      description: 'Retina display',
      footnote: 1,
    },
    chip: {
      value: '8-core',
      isExact: true,
      description: 'Apple M1 chip',
    },
    memory: {
      value: '16GB',
      description: 'unified memory',
    },
    storage: {
      value: '2TB',
      description: 'storage',
      footnote: 3,
    },
    battery: {
      value: '18 hrs',
      description: 'battery life',
      footnote: 5,
    },
    features: {
      description: 'Touch ID',
      value: 'touchId',
    },
  },
  specs: {
    compute: {
      chip: {
        title: 'System on Chip (SoC)',
        details: [
          'Apple M1 chip',
          '8-core CPU with 4 performance cores and 4 efficiency cores',
          'Up to 8-core GPU',
          '16-core Neural Engine',
        ],
      },
    },
    memory: {
      ram: ['8GB', '16GB'],
    },
    storage: {
      capacity: ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
    },
    display: {
      size: ['13.3-inch (diagonal) LED-backlit display with IPS technology'],
      type: ['Retina display'],
      resolution: ['2560 by 1600 pixels'],
      brightness: ['400 nits brightness'],
      color: ['Wide color (P3)'],
      technology: ['True Tone technology'],
    },
    dimensions: {
      height: {
        title: 'Height',
        details: ['0.16–0.63 inch (0.41–1.61 cm)'],
      },
      width: {
        title: 'Width',
        details: ['11.97 inches (30.41 cm)'],
      },
      depth: {
        title: 'Depth',
        details: ['8.36 inches (21.24 cm)'],
      },
      weight: {
        title: 'Weight',
        details: ['2.8 pounds (1.29 kg)'],
      },
    },
    camera: {
      type: ['720p FaceTime HD camera'],
    },
    audio: {
      speakers: [
        'Stereo speakers',
        'Wide stereo sound',
        'Support for Dolby Atmos playback',
      ],
      microphone: ['Three-mic array with directional beamforming'],
      jack: ['3.5 mm headphone jack'],
    },
    input: {
      keyboard: ['Backlit Magic Keyboard with:'],
      keys: [
        '78 (U.S.) or 79 (ISO) keys including 12 function keys and 4 arrow keys in an inverted-T arrangement',
      ],
      touchSensors: ['Touch ID sensor'],
      lightSensors: ['Ambient light sensor'],
      trackpad: [
        'Force Touch trackpad for precise cursor control and pressure-sensing capabilities; enables Force clicks, accelerators, pressure-sensitive drawing, and Multi-Touch gestures',
      ],
    },
    wireless: {
      wifi: ['802.11ax Wi-Fi 6'],
      bluetooth: ['Bluetooth 5.0 wireless technology'],
    },
    ports: {
      ports: ['Two Thunderbolt / USB 4 ports'],
    },
    authentication: {
      method: ['Touch ID sensor'],
    },
    applePay: {
      method: ['Pay with your Mac on the web'],
    },
    videoCalling: {
      type: ['FaceTime video'],
      wifi: ['Initiate video calls over Wi-Fi to any FaceTime-enabled device'],
    },
    audioCalling: {
      type: ['FaceTime audio'],
      wifi: ['Initiate audio calls over Wi-Fi to any FaceTime-enabled device'],
      wifiCalling: ['Wi-Fi calling'],
    },
    siri: {
      voice: ['Use your voice to send messages, set reminders, and more'],
      handsfree: ['Activate hands-free with only your voice using “Hey Siri”'],
    },
    power: {
      web: ['Up to 15 hours wireless web'],
      playback: ['Up to 18 hours Apple TV app movie playback'],
      battery: ['Integrated 49.9-watt-hour lithium-polymer battery'],
      adapter: ['30W USB-C Power Adapter'],
    },
  },
};

const model2 = {
  name: 'MacBook Pro 13-in.\n(M1, 2020)',
  imageSrc: macbookPro13ImageSrc,
  imageSrc2: macbookPro13ImageSrc2,
  learnMoreUrl: 'https://www.apple.com/macbook-pro-13/',
  techSpecsUrl: 'https://www.apple.com/macbook-pro-13/specs/',
  colors: ['silver', 'spacegray'],
  startingPrice: 1299,
  stats: {
    display: {
      value: '13.3”',
      isExact: true,
      description: 'Retina display',
      footnote: 1,
    },
    chip: {
      value: '8-core',
      isExact: true,
      description: 'Apple M1 chip',
    },
    memory: {
      value: '16GB',
      description: 'unified memory',
    },
    storage: {
      value: '2TB',
      description: 'storage',
      footnote: 3,
    },
    battery: {
      value: '20 hrs',
      description: 'battery life',
      footnote: 5,
    },
    features: {
      description: 'Touch ID',
      value: 'touchBarAndTouchId',
    },
  },
  specs: {
    compute: {
      chip: {
        title: 'System on Chip (SoC)',
        details: [
          'Apple M1 chip',
          '8-core CPU with 4 performance cores and 4 efficiency cores',
          'Up to 8-core GPU',
          '16-core Neural Engine',
        ],
      },
    },
    memory: {
      ram: ['8GB', '16GB'],
    },
    storage: {
      capacity: ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
    },
    display: {
      size: ['13.3-inch (diagonal) LED-backlit display with IPS technology'],
      type: ['Retina display'],
      resolution: ['2560 by 1600 pixels'],
      brightness: ['500 nits brightness'],
      color: ['Wide color (P3)'],
      technology: ['True Tone technology'],
    },
    dimensions: {
      height: {
        title: 'Height',
        details: ['0.61 inch (1.56cm)'],
      },
      width: {
        title: 'Width',
        details: ['11.97 inches (30.41 cm)'],
      },
      depth: {
        title: 'Depth',
        details: ['8.36 inches (21.24 cm)'],
      },
      weight: {
        title: 'Weight',
        details: ['3.0 pounds (1.4 kg)'],
      },
    },
    camera: {
      type: ['720p FaceTime HD camera'],
    },
    audio: {
      speakers: [
        'Stereo speakers',
        'Wide stereo sound',
        'Support for Dolby Atmos playback',
      ],
      microphone: [
        'Studio-quality three-mic array with high signal-to-noise ratio and directional beamforming',
      ],
      jack: ['3.5 mm headphone jack'],
    },
    input: {
      keyboard: ['Backlit Magic Keyboard with:'],
      keys: [
        '65 (U.S.) or 66 (ISO) keys including 4 arrow keys in an inverted-T arrangement',
      ],
      touchSensors: ['Touch Bar', 'Touch ID sensor'],
      lightSensors: ['Ambient light sensor'],
      trackpad: [
        'Force Touch trackpad for precise cursor control and pressure-sensing capabilities; enables Force clicks, accelerators, pressure-sensitive drawing, and Multi-Touch gestures',
      ],
    },
    wireless: {
      wifi: ['802.11ax Wi-Fi 6'],
      bluetooth: ['Bluetooth 5.0 wireless technology'],
    },
    ports: {
      ports: ['Two Thunderbolt / USB 4 ports'],
    },
    authentication: {
      method: ['Touch Bar and Touch ID sensor'],
    },
    applePay: {
      method: ['Pay with your Mac on the web'],
    },
    videoCalling: {
      type: ['FaceTime video'],
      wifi: ['Initiate video calls over Wi-Fi to any FaceTime-enabled device'],
    },
    audioCalling: {
      type: ['FaceTime audio'],
      wifi: ['Initiate audio calls over Wi-Fi to any FaceTime-enabled device'],
      wifiCalling: ['Wi-Fi calling'],
    },
    siri: {
      voice: ['Use your voice to send messages, set reminders, and more'],
      handsfree: ['Activate hands-free with only your voice using “Hey Siri”'],
    },
    power: {
      web: ['Up to 17 hours wireless web'],
      playback: ['Up to 20 hours Apple TV app movie playback'],
      battery: ['Integrated 58.2-watt-hour lithium-polymer battery'],
      adapter: ['61W USB-C Power Adapter'],
    },
  },
};

const model3 = {
  name: 'MacBook Pro 16-in',
  imageSrc: macbookPro16ImageSrc,
  imageSrc2: macbookPro16ImageSrc2,
  learnMoreUrl: 'https://www.apple.com/macbook-pro-16/',
  techSpecsUrl: 'https://www.apple.com/macbook-air/specs/',
  colors: ['silver', 'spacegray'],
  startingPrice: 999,
  stats: {
    display: {
      value: '16”',
      isExact: true,
      description: 'Retina display',
      footnote: 1,
    },
    chip: {
      value: '8-core',
      description: 'Apple M1 chip',
    },
    memory: {
      value: '64GB',
      description: 'unified memory',
    },
    storage: {
      value: '8TB',
      description: 'storage',
      footnote: 3,
    },
    battery: {
      value: '11 hrs',
      description: 'battery life',
      footnote: 5,
    },
    features: {
      description: 'Touch ID',
      value: 'touchBarAndTouchId',
    },
  },
  specs: {
    compute: {
      chip: {
        title: 'Processor',
        details: [
          '2.6GHz 6-core Intel Core i7',
          '2.3GHz 8-core Intel Core i9',
          '2.4GHz 8-core Intel Core i9',
          'Turbo Boost up to 5.0GHz',
        ],
      },
      graphics: {
        title: 'Graphics',
        details: [
          'Intel UHD Graphics 630 (all configurations)',
          'AMD Radeon Pro 5300M with 4GB of GDDR6 memory',
          'AMD Radeon Pro 5500M with 4GB of GDDR6 memory',
          'AMD Radeon Pro 5500M with 8GB of GDDR6 memory',
          'AMD Radeon Pro 5600M with 8GB of HBM2 memory',
        ],
      },
    },
    memory: {
      ram: ['16GB', '32GB', '64GB'],
    },
    storage: {
      capacity: ['512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD', '8TB SSD'],
    },
    display: {
      size: ['16-inch (diagonal) LED-backlit display with IPS technology'],
      type: ['Retina display'],
      resolution: ['3072 by 1920 pixels'],
      brightness: ['500 nits brightness'],
      color: ['Wide color (P3)'],
      technology: ['True Tone technology'],
    },
    dimensions: {
      height: {
        title: 'Height',
        details: ['0.64 inch (1.62cm)'],
      },
      width: {
        title: 'Width',
        details: ['14.09 inches (35.79 cm)'],
      },
      depth: {
        title: 'Depth',
        details: ['9.68 inches (24.59 cm)'],
      },
      weight: {
        title: 'Weight',
        details: ['4.3 pounds (2.0 kg)'],
      },
    },
    camera: {
      type: ['720p FaceTime HD camera'],
    },
    audio: {
      speakers: [
        'High-fidelity six-speaker system with force-cancelling woofers',
        'Wide stereo sound',
        'Support for Dolby Atmos playback',
      ],
      microphone: [
        'Studio-quality three-mic array with high signal-to-noise ratio and directional beamforming',
      ],
      jack: ['3.5 mm headphone jack'],
    },
    input: {
      keyboard: ['Backlit Magic Keyboard with:'],
      keys: [
        '65 (U.S.) or 66 (ISO) keys including 4 arrow keys in an inverted-T arrangement',
      ],
      touchSensors: ['Touch Bar', 'Touch ID sensor'],
      lightSensors: ['Ambient light sensor'],
      trackpad: [
        'Force Touch trackpad for precise cursor control and pressure-sensing capabilities; enables Force clicks, accelerators, pressure-sensitive drawing, and Multi-Touch gestures',
      ],
    },
    wireless: {
      wifi: ['802.11ax Wi-Fi 6'],
      bluetooth: ['Bluetooth 5.0 wireless technology'],
    },
    ports: {
      ports: ['Four Thunderbolt 3 (USB-C) ports'],
    },
    authentication: {
      method: ['Touch Bar and Touch ID sensor'],
    },
    applePay: {
      method: ['Pay with your Mac on the web'],
    },
    videoCalling: {
      type: ['FaceTime video'],
      wifi: ['Initiate video calls over Wi-Fi to any FaceTime-enabled device'],
    },
    audioCalling: {
      type: ['FaceTime audio'],
      wifi: ['Initiate audio calls over Wi-Fi to any FaceTime-enabled device'],
      wifiCalling: ['Wi-Fi calling'],
    },
    siri: {
      voice: ['Use your voice to send messages, set reminders, and more'],
      handsfree: ['Activate hands-free with only your voice using “Hey Siri”'],
    },
    power: {
      web: ['Up to 11 hours wireless web'],
      playback: ['Up to 11 hours Apple TV app movie playback'],
      battery: ['Integrated 100-watt-hour lithium-polymer battery'],
      adapter: ['96W USB-C Power Adapter'],
    },
  },
};

export const footerLinkGroups = {
  shop: {
    name: 'Shop and Learn',
    links: [
      {title: 'Mac', href: 'https://www.apple.com/mac/'},
      {title: 'iPad', href: 'https://www.apple.com/ipad/'},
      {title: 'iPhone', href: 'https://www.apple.com/iphone/'},
      {title: 'Watch', href: 'https://www.apple.com/watch/'},
      {title: 'TV', href: 'https://www.apple.com/tv/'},
      {title: 'Music', href: 'https://www.apple.com/music/'},
      {title: 'AirPods', href: 'https://www.apple.com/airpods/'},
      {title: 'HomePod', href: 'https://www.apple.com/homepod/'},
      {title: 'iPod touch', href: 'https://www.apple.com/ipod-touch/'},
      {
        title: 'Accessories',
        href: 'https://www.apple.com/shop/accessories/all',
      },
      {title: 'Gift Cards', href: 'https://www.apple.com/shop/gift-cards'},
    ],
  },
  services: {
    name: 'Services',
    links: [
      {title: 'Apple Music', href: 'https://www.apple.com/apple-music/'},
      {title: 'Apple TV+', href: 'https://www.apple.com/apple-tv-plus/'},
      {
        title: 'Apple Fitness+',
        href: 'https://www.apple.com/apple-fitness-plus/',
      },
      {title: 'Apple News+', href: 'https://www.apple.com/apple-news/}'},
      {title: 'Apple Arcade', href: 'https://www.apple.com/apple-arcade/'},
      {title: 'iCloud', href: 'https://www.apple.com/icloud/'},
      {title: 'Apple One', href: 'https://www.apple.com/apple-one/'},
      {title: 'Apple Card', href: 'https://www.apple.com/apple-card/'},
      {title: 'Apple Books', href: 'https://www.apple.com/apple-books/'},
      {title: 'App Store', href: 'https://www.apple.com/app-store/'},
    ],
  },
  account: {
    name: 'Account',
    links: [
      {title: 'Manage Your Apple ID', href: 'https://appleid.apple.com/us/'},
      {
        title: 'Apple Store Account',
        href: 'https://secure4.store.apple.com/shop/signIn/account',
      },
      {title: 'iCloud.com', href: 'https://www.icloud.com/'},
    ],
  },
  store: {
    name: 'Apple Store',
    links: [
      {title: 'Find a Store', href: 'https://www.apple.com/retail/'},
      {title: 'Shop Online', href: 'https://www.apple.com/shop'},
      {title: 'Genius Bar', href: 'https://www.apple.com/retail/geniusbar/'},
      {title: 'Today at Apple', href: 'https://www.apple.com/today/'},
      {title: 'Apple Camp', href: 'https://www.apple.com/today/camp/'},
      {
        title: 'Apple Store App',
        href: 'https://apps.apple.com/us/app/apple-store',
      },
      {
        title: 'Refurbished and Clearance',
        href: 'https://www.apple.com/shop/refurbished',
      },
      {
        title: 'Financing',
        href: 'https://www.apple.com/shop/browse/financing',
      },
      {title: 'Apple Trade In', href: 'https://www.apple.com/shop/trade-in'},
      {
        title: 'Order Status',
        href: 'https://secure4.store.apple.com/shop/signIn/orders',
      },
      {title: 'Shopping Help', href: 'https://www.apple.com/shop/help'},
    ],
  },
  business: {
    name: 'For Business',
    links: [
      {title: 'Apple and Business', href: 'https://www.apple.com/business/'},
      {
        title: 'Shop for Business',
        href: 'https://www.apple.com/retail/business/',
      },
    ],
  },
  education: {
    name: 'For Education',
    links: [
      {
        title: 'Apple and Education',
        href: 'https://www.apple.com/education/',
      },
      {
        title: 'Shop for K-12',
        href: 'https://www.apple.com/education/k12/how-to-buy/',
      },
      {title: 'Shop for College', href: 'https://www.apple.com/us-hed/shop'},
    ],
  },
  healthcare: {
    name: 'For Healthcare',
    links: [
      {
        title: 'Apple in Healthcare',
        href: 'https://www.apple.com/healthcare/',
      },
      {
        title: 'Health on Apple Watch',
        href: 'https://www.apple.com/healthcare/apple-watch/',
      },
      {
        title: 'Health Records on iPhone',
        href: 'https://www.apple.com/healthcare/health-records/',
      },
    ],
  },
  government: {
    name: 'For Government',
    links: [
      {
        title: 'Shop for Government',
        href: 'https://www.apple.com/r/store/government/',
      },
      {
        title: 'Shop for Veterans and Military',
        href: 'https://www.apple.com/us-hed/shop/browse/home/veterans_military',
      },
    ],
  },
  values: {
    name: 'Apple Values',
    links: [
      {title: 'Accessibility', href: 'https://www.apple.com/accessibility/'},
      {title: 'Education', href: 'https://www.apple.com/connectED/'},
      {title: 'Environment', href: 'https://www.apple.com/environment/'},
      {
        title: 'Inclusion and Diversity',
        href: 'https://www.apple.com/diversity/',
      },
      {title: 'Privacy', href: 'https://www.apple.com/privacy/'},
      {
        title: 'Racial Equity and Justice',
        href: 'https://www.apple.com/racial-equity-justice-initiative/',
      },
      {
        title: 'Supplier Responsibility',
        href: 'https://www.apple.com/supplier-responsibility/',
      },
    ],
  },
  about: {
    name: 'About Apple',
    links: [
      {title: 'Newsroom', href: 'https://www.apple.com/newsroom/'},
      {title: 'Apple Leadership', href: 'https://www.apple.com/leadership/'},
      {title: 'Job Opportunities', href: 'https://www.apple.com/jobs/us/'},
      {
        title: 'Investors',
        href: 'https://investor.apple.com/investor-relations/default.aspx#tabs_content--2021',
      },
      {
        title: 'Ethics & Compliance',
        href: 'https://www.apple.com/compliance/',
      },
      {title: 'Events', href: 'https://www.apple.com/apple-events/'},
      {title: 'Contact Apple', href: 'https://www.apple.com/contact/'},
    ],
  },
};

export const models = [model1, model2, model3];
