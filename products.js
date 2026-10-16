// Shri Computech Product Catalog Database
const PRODUCTS_DATABASE = [
  {
    "id": 1,
    "name": "Logitech C270 HD Webcam",
    "category": "Cameras",
    "brand": "Logitech",
    "price": 2500,
    "mrp": 3195,
    "image": "assets/products/prod_1_webcam_logitech_c270.jpg",
    "badge": "Top Seller",
    "specs": [
      "720p HD 30 FPS",
      "Built-in Noise-Cancelling Mic",
      "Auto Light Correction",
      "Plug & Play USB"
    ],
    "desc": "Crisp 720p HD video calls with built-in noise-reducing microphone."
  },
  {
    "id": 2,
    "name": "TP-Link 5-Port 10/100 Mbps LS1005 Switch",
    "category": "Networking",
    "brand": "TP-Link",
    "price": 800,
    "mrp": 1099,
    "image": "assets/products/prod_2_tplink_switch_ls1005.jpg",
    "badge": "Energy Saving",
    "specs": [
      "5x 10/100 Mbps RJ45 Ports",
      "Green Ethernet Tech",
      "Plug and Play",
      "Fanless Quiet Design"
    ],
    "desc": "Expand your wired network easily with 5 fast ethernet ports."
  },
  {
    "id": 3,
    "name": "TP-Link 300Mbps Wireless N USB Adapter (TL-WN821N)",
    "category": "Networking",
    "brand": "TP-Link",
    "price": 1100,
    "mrp": 1499,
    "image": "assets/products/prod_3_tplink_wireless_adapter_300mbps.jpg",
    "badge": "3 Year Warranty",
    "specs": [
      "300 Mbps Wi-Fi Speed",
      "WPS Security Button",
      "High Gain Internal Antennas",
      "MIMO Technology"
    ],
    "desc": "Up to 300Mbps Wi-Fi speed for lag-free video streaming and online gaming."
  },
  {
    "id": 4,
    "name": "Tenda 5-Port 10/100 Mbps Desktop Switch (S105)",
    "category": "Networking",
    "brand": "Tenda",
    "price": 900,
    "mrp": 1199,
    "image": "assets/products/prod_4_tenda_desktop_switch_5port.jpg",
    "badge": "Compact",
    "specs": [
      "5 Auto-Negotiation Ports",
      "Mini Sleek Design",
      "Wall & Desktop Mount",
      "EcoGreen Low Power"
    ],
    "desc": "Cost-effective, reliable switch for home and small office networks."
  },
  {
    "id": 5,
    "name": "Zebion Florence Loca 2.0 RGB Gaming Speakers",
    "category": "Audio",
    "brand": "Zebion",
    "price": 700,
    "mrp": 999,
    "image": "assets/products/prod_5_zebion_florence_speaker_2_0.jpg",
    "badge": "RGB Lights",
    "specs": [
      "2.0 Stereo Sound",
      "Dynamic RGB Lighting",
      "USB Powered + 3.5mm Aux",
      "Crisp Bass & Treble"
    ],
    "desc": "Vibrant RGB lighting with rich stereo audio for PCs and laptops."
  },
  {
    "id": 6,
    "name": "Lapcare India LAPCAM 720P HD PC Camera",
    "category": "Cameras",
    "brand": "Lapcare",
    "price": 1200,
    "mrp": 1699,
    "image": "assets/products/prod_6_lapcare_lapcam_pc_camera.jpg",
    "badge": "Wide Angle",
    "specs": [
      "720P HD Video",
      "5-Layer Glass Lens",
      "Built-in High Sensitivity Mic",
      "Auto White Balance"
    ],
    "desc": "High definition PC webcam perfect for Zoom meetings and online classes."
  },
  {
    "id": 7,
    "name": "HDMI Splitter 1x2 Ver 1.4 (Full HD 1080P / 3D)",
    "category": "Cables & Adapters",
    "brand": "HDMI",
    "price": 700,
    "mrp": 999,
    "image": "assets/products/prod_7_hdmi_splitter_1080p.jpg",
    "badge": "1 in 2 Out",
    "specs": [
      "1080P 3D & 4K Ready",
      "Signal Amplifier",
      "Heavy Duty Metal Shell",
      "Supports HDCP"
    ],
    "desc": "Duplicate 1 HDMI input signal across 2 separate displays simultaneously."
  },
  {
    "id": 8,
    "name": "Green Tech NEO GT 011 64GB USB 3.0 Flash Drive",
    "category": "Storage",
    "brand": "Green Tech",
    "price": 800,
    "mrp": 1150,
    "image": "assets/products/prod_8_greentech_neo_drive_64gb.jpg",
    "badge": "USB 3.0",
    "specs": [
      "64GB High Capacity",
      "SuperSpeed USB 3.0",
      "Metal Compact Body",
      "Lifetime Tech Support"
    ],
    "desc": "Fast data transfer speeds with durable metal casing."
  },
  {
    "id": 9,
    "name": "Portronics Konnect C7 Type-C to Type-C Cable (60W)",
    "category": "Cables & Adapters",
    "brand": "Portronics",
    "price": 220,
    "mrp": 399,
    "image": "assets/products/prod_9_portronics_konnect_c7_cable.jpg",
    "badge": "60W Fast PD",
    "specs": [
      "60W Power Delivery",
      "Tangle-free Nylon Braiding",
      "High Speed Data Sync",
      "Type-C to Type-C"
    ],
    "desc": "High speed PD fast charging cable for laptops, tablets, and phones."
  },
  {
    "id": 10,
    "name": "ERD USB to Type-C Power Delivery 65W Cable (UC-211 1m)",
    "category": "Cables & Adapters",
    "brand": "ERD",
    "price": 160,
    "mrp": 299,
    "image": "assets/products/prod_10_erd_usb_c_pd_65w_cable.jpg",
    "badge": "65W Speed",
    "specs": [
      "65W Fast Charging",
      "1 Meter Length",
      "Reinforced Strain Relief",
      "Safe & Stable Current"
    ],
    "desc": "Heavy duty fast charge & sync cable with 65W charging support."
  },
  {
    "id": 11,
    "name": "HDMI Extender Over Cat 5e/6 Cable (Full HD 1080P / 4K)",
    "category": "Cables & Adapters",
    "brand": "HDMI",
    "price": 600,
    "mrp": 899,
    "image": "assets/products/prod_11_hdmi_extender_interface_10m.jpg",
    "badge": "Long Distance",
    "specs": [
      "Up to 30m over Cat6",
      "Full HD 1080P & 4K",
      "No Power Adapter Needed",
      "Plug and Play"
    ],
    "desc": "Transmit crystal clear HDMI signal up to 30 meters over single LAN cable."
  },
  {
    "id": 12,
    "name": "SE-13 Dual Port Fast Wall Charger (12W)",
    "category": "Power & Chargers",
    "brand": "SE-13",
    "price": 250,
    "mrp": 450,
    "image": "assets/products/prod_12_se13_dual_port_charger_12w.jpg",
    "badge": "Dual USB",
    "specs": [
      "Dual USB Ports",
      "12W Max Output",
      "BIS Certified Safe",
      "Overheat Protection"
    ],
    "desc": "Simultaneously charge 2 devices safely with BIS certified protection."
  },
  {
    "id": 13,
    "name": "SE-13 2x USB Port Charger (22W Transparent Edition)",
    "category": "Power & Chargers",
    "brand": "SE-13",
    "price": 400,
    "mrp": 699,
    "image": "assets/products/prod_13_se13_2x_usb_charger_22w.jpg",
    "badge": "Transparent 22W",
    "specs": [
      "22W Max Fast Output",
      "Futuristic Transparent Casing",
      "Dual Fast Ports",
      "Smart IC Tech"
    ],
    "desc": "Stunning transparent design with rapid 22W dual charging speed."
  },
  {
    "id": 14,
    "name": "I-TEK USB 2.0 Mini Auto Sharing Switch",
    "category": "Cables & Adapters",
    "brand": "I-TEK",
    "price": 800,
    "mrp": 1200,
    "image": "assets/products/prod_14_itek_usb2_auto_switch.jpg",
    "badge": "Auto Sharing",
    "specs": [
      "2 PCs Share 1 USB Device",
      "Keyboard Hotkey Switch",
      "No External Power Needed",
      "Compact Design"
    ],
    "desc": "Easily share 1 printer or scanner between two computers seamlessly."
  },
  {
    "id": 15,
    "name": "Seagate Expansion Portable External Hard Drive",
    "category": "Storage",
    "brand": "Seagate",
    "price": 4500,
    "mrp": 5499,
    "image": "assets/products/prod_15_seagate_expansion_portable_drive.jpg",
    "badge": "Rescue Data",
    "specs": [
      "High Speed USB 3.0",
      "Rescue Data Recovery Services",
      "Plug & Play for PC & Mac",
      "Sleek Textured Finish"
    ],
    "desc": "Secure portable high-capacity backup drive with Seagate Rescue service."
  },
  {
    "id": 16,
    "name": "18W Dual USB Fast Charger with Micro Cable (DS08)",
    "category": "Power & Chargers",
    "brand": "DS08",
    "price": 180,
    "mrp": 349,
    "image": "assets/products/prod_16_dual_usb_18w_ds08_charger.jpg",
    "badge": "Value Pack",
    "specs": [
      "18W Fast Output",
      "Includes 1m PVC Cable",
      "Dual USB Output",
      "Short Circuit Protection"
    ],
    "desc": "Affordable 18W dual-port wall charger bundled with a durable charging cable."
  },
  {
    "id": 17,
    "name": "Quantum 5.1 Channel USB Sound Adapter",
    "category": "Audio",
    "brand": "Quantum",
    "price": 150,
    "mrp": 299,
    "image": "assets/products/prod_17_quantum_usb_sound_adapter.jpg",
    "badge": "Instant Audio",
    "specs": [
      "Virtual 5.1 Sound Track",
      "3.5mm Mic & Headphone Jacks",
      "USB 2.0 Plug & Play",
      "Fixes Broken Audio Ports"
    ],
    "desc": "Instant USB sound card replacement for faulty laptop or desktop audio jacks."
  },
  {
    "id": 18,
    "name": "Zebronics ZEB-MB10000 S10 Pro Power Bank (22.5W)",
    "category": "Power & Chargers",
    "brand": "Zebronics",
    "price": 1000,
    "mrp": 1799,
    "image": "assets/products/prod_18_zebronics_powerbank_mb10000.jpg",
    "badge": "LED Display",
    "specs": [
      "10000 mAh Capacity",
      "22.5W Max Fast Charging",
      "Digital LED % Display",
      "Dual USB + Type-C PD"
    ],
    "desc": "Sleek 10000mAh battery pack with accurate numeric LED percentage display."
  },
  {
    "id": 19,
    "name": "Portronics Luxcell B 10000mAh Fast Charging Power Bank",
    "category": "Power & Chargers",
    "brand": "Portronics",
    "price": 1200,
    "mrp": 1999,
    "image": "assets/products/prod_19_portronics_luxcell_b_10000mah.jpg",
    "badge": "22.5W Mach",
    "specs": [
      "10000 mAh High Density",
      "22.5W Mach Fast Output",
      "Type-C PD In & Out",
      "Luxury Ribbed Grip Design"
    ],
    "desc": "Pocket-friendly luxury power bank with 22.5W Mach Charging technology."
  },
  {
    "id": 20,
    "name": "Serial ATA 2.5\" SSD/HDD Laptop Caddy (12.7mm)",
    "category": "Storage",
    "brand": "Serial ATA",
    "price": 2200,
    "mrp": 2800,
    "image": "assets/products/prod_20_sata_hdd_caddy.jpg",
    "badge": "Laptop Upgrade",
    "specs": [
      "12.7mm Optical Bay Fit",
      "High Speed SATA III",
      "Aluminum Heat Dissipation",
      "Includes Screwdriver & Screws"
    ],
    "desc": "Replace DVD drive with secondary high-speed SSD or HDD storage."
  },
  {
    "id": 21,
    "name": "Techie M.2 NVMe & SATA 2-in-1 SSD Enclosure",
    "category": "Storage",
    "brand": "Techie",
    "price": 1250,
    "mrp": 1899,
    "image": "assets/products/prod_21_techie_m2_nvme_ssd_enclosure.jpg",
    "badge": "10 Gbps",
    "specs": [
      "10 Gbps SuperSpeed USB 3.1",
      "Supports NVMe & SATA M.2",
      "Premium Aluminum Body",
      "UASP Protocol Enabled"
    ],
    "desc": "Transform internal M.2 SSD into an ultra-fast portable external drive."
  },
  {
    "id": 22,
    "name": "Techie 3-Port High Performance USB 2.0 Hub",
    "category": "Cables & Adapters",
    "brand": "Techie",
    "price": 300,
    "mrp": 499,
    "image": "assets/products/prod_22_techie_3port_usb_hub.jpg",
    "badge": "Compact Hub",
    "specs": [
      "3 USB 2.0 Ports",
      "Rotatable 180\u00b0 USB Connector",
      "Plug & Play No Drivers",
      "Compact Pocket Size"
    ],
    "desc": "Instantly expand 1 USB port into 3 without messy trailing cords."
  },
  {
    "id": 23,
    "name": "Techie 600Mbps Wireless Nano USB Adapter (5GHz + 2.4GHz)",
    "category": "Networking",
    "brand": "Techie",
    "price": 750,
    "mrp": 1199,
    "image": "assets/products/prod_23_techie_600mbps_wifi_nano.jpg",
    "badge": "Dual Band",
    "specs": [
      "600 Mbps Dual Band",
      "Bluetooth 4.2 Built-in",
      "Nano Form Factor",
      "High Sensitivity Antenna"
    ],
    "desc": "Add both high-speed 5GHz Wi-Fi and Bluetooth to your PC in one miniature dongle."
  },
  {
    "id": 24,
    "name": "Multi-function USB 2.0 Hub + Memory Card Reader",
    "category": "Cables & Adapters",
    "brand": "Techie",
    "price": 500,
    "mrp": 799,
    "image": "assets/products/prod_24_hub2_card_reader.jpg",
    "badge": "Combo Hub",
    "specs": [
      "Multi-Port USB Hub",
      "SD & MicroSD Card Slots",
      "LED Activity Indicator",
      "High Compatibility"
    ],
    "desc": "All-in-one desktop hub for flash drives and camera memory cards."
  },
  {
    "id": 25,
    "name": "Digital 20/24 Pin PC Power Supply Tester (Chiya)",
    "category": "Accessories",
    "brand": "Chiya",
    "price": 800,
    "mrp": 1250,
    "image": "assets/products/prod_25_power_supply_tester.jpg",
    "badge": "Diagnostic Tool",
    "specs": [
      "Tests 20 & 24 pin ATX",
      "Checks +12V, +5V, +3.3V, +5VSB",
      "SATA & Molex Testing",
      "Essential Repair Equipment"
    ],
    "desc": "Professional diagnostic tool to instantly detect faulty SMPS power supplies."
  },
  {
    "id": 26,
    "name": "Hikvision M200 64GB USB 2.0 Flash Drive",
    "category": "Storage",
    "brand": "Hikvision",
    "price": 450,
    "mrp": 699,
    "image": "assets/products/prod_26_se13_hikvision_flash_64gb.jpg",
    "badge": "3 Year Warranty",
    "specs": [
      "64GB Solid Storage",
      "Full Metal Body with Keyhole",
      "Shockproof & Waterproof",
      "High Reliability"
    ],
    "desc": "Premium all-metal 64GB thumb drive with 3-year official warranty."
  },
  {
    "id": 27,
    "name": "Fingers Duo-Recharge Wireless Keyboard & Mouse Combo",
    "category": "Keyboards",
    "brand": "Fingers",
    "price": 1200,
    "mrp": 1899,
    "image": "assets/products/prod_27_fingers_duo_recharge_combo.jpg",
    "badge": "Rechargeable",
    "specs": [
      "Built-in Rechargeable Batteries",
      "2.4GHz Wireless up to 10m",
      "Soft-Touch Membrane Keys",
      "Power Saving Auto-Sleep"
    ],
    "desc": "Never buy AA batteries again \u2014 both keyboard and mouse are fully rechargeable via USB."
  },
  {
    "id": 28,
    "name": "Zebion G2400 Wireless Keyboard & Mouse Combo",
    "category": "Keyboards",
    "brand": "Zebion",
    "price": 850,
    "mrp": 1399,
    "image": "assets/products/prod_28_zebion_g2400_wireless_combo.jpg",
    "badge": "Ergonomic Grip",
    "specs": [
      "Multimedia Shortcut Keys",
      "Contoured Wireless Mouse",
      "Spill-Resistant Keyboard",
      "Single Nano USB Dongle"
    ],
    "desc": "Smooth wireless typing and contoured gaming-style mouse combo for daily computing."
  },
  {
    "id": 29,
    "name": "Fingers StellarCombo Dual-Tone Wireless Keyboard & Mouse",
    "category": "Keyboards",
    "brand": "Fingers",
    "price": 1100,
    "mrp": 1699,
    "image": "assets/products/prod_29_fingers_stellarcombo_wireless.jpg",
    "badge": "Dual Tone",
    "specs": [
      "Dual Tone Glossy & Matte Keys",
      "10 Million Keystroke Life",
      "12 Quick Soft-Touch Media Keys",
      "High Precision Optical Mouse"
    ],
    "desc": "Gorgeous dual-tone aesthetic keyboard with ultra-durable switches."
  },
  {
    "id": 30,
    "name": "Fingers WonderClicks K9 Wired USB Keyboard",
    "category": "Keyboards",
    "brand": "Fingers",
    "price": 450,
    "mrp": 699,
    "image": "assets/products/prod_30_fingers_wonderclick_k9_keyboard.jpg",
    "badge": "Soft Touch",
    "specs": [
      "Sealed Membrane Soft Keys",
      "12 Instant Media Controls",
      "Rupee \u20b9 Symbol Key",
      "Spill Resistant Design"
    ],
    "desc": "Comfortable silent typing experience with sealed membrane technology."
  },
  {
    "id": 31,
    "name": "Dell KB216 Multimedia Wired USB Keyboard",
    "category": "Keyboards",
    "brand": "Dell",
    "price": 570,
    "mrp": 999,
    "image": "assets/products/prod_31_dell_kb216_wired_keyboard.jpg",
    "badge": "Dell Original",
    "specs": [
      "Original Dell Quality",
      "Chiclet Low-Profile Keys",
      "Dedicated Volume Controls",
      "1 Year Dell India Warranty"
    ],
    "desc": "The gold standard of office keyboards. Slim, durable, and whisper-quiet."
  },
  {
    "id": 32,
    "name": "PUNTA Console UX Wired USB Keyboard (P-KB301)",
    "category": "Keyboards",
    "brand": "Punta",
    "price": 280,
    "mrp": 450,
    "image": "assets/products/prod_32_punta_console_ux_keyboard.jpg",
    "badge": "Best Budget",
    "specs": [
      "Full Layout 104 Keys",
      "Tactile Silent Keys",
      "Rupee Symbol Support",
      "Heavy-Duty Cable"
    ],
    "desc": "Ultra-affordable, reliable daily USB keyboard for home and shop billing setups."
  },
  {
    "id": 33,
    "name": "Logitech C270 HD Video Calling Webcam (OEM)",
    "category": "Cameras",
    "brand": "Logitech",
    "price": 2500,
    "mrp": 3195,
    "image": "assets/products/prod_33_webcam_hd_c270_logitech.jpg",
    "badge": "HD 720p",
    "specs": [
      "Widescreen HD 720p 30fps",
      "RightLight 2 Technology",
      "Universal Monitor Clip",
      "Integrated Mic"
    ],
    "desc": "Clear, smooth video calling in widescreen format for conference and streaming."
  },
  {
    "id": 101,
    "name": "Logitech M90 Full-Size Optical USB Mouse",
    "category": "Mice",
    "brand": "Logitech",
    "price": 350,
    "mrp": 495,
    "image": "assets/products/prod_101_mouse_logitech_m90.jpg",
    "badge": "Logitech Original",
    "specs": [
      "1000 DPI Optical Tracking",
      "Ambidextrous Comfort",
      "Zero-Lag Wired USB",
      "Works with Chromebook"
    ],
    "desc": "Durable full-size optical mouse built for all-day comfort."
  },
  {
    "id": 102,
    "name": "HP M090 2.4GHz Ergonomic Wireless Mouse",
    "category": "Mice",
    "brand": "HP",
    "price": 650,
    "mrp": 999,
    "image": "assets/products/prod_102_mouse_hp_m090_wireless.jpg",
    "badge": "HP 3-Yr Warranty",
    "specs": [
      "800/1000 DPI Switchable",
      "2.4GHz Wireless Connection",
      "4 Button Usability",
      "HP 3-Year Limited Warranty"
    ],
    "desc": "Genuine HP wireless mouse with precision optical tracking and 3-year warranty."
  },
  {
    "id": 103,
    "name": "HP M080 Optical Wired USB Mouse",
    "category": "Mice",
    "brand": "HP",
    "price": 450,
    "mrp": 699,
    "image": "assets/products/prod_103_mouse_hp_m080_wired.jpg",
    "badge": "HP 3-Yr Warranty",
    "specs": [
      "1500 DPI High Precision",
      "3 Button with Scroll Wheel",
      "Ergonomic Sculpted Grip",
      "HP 3-Year Warranty"
    ],
    "desc": "High precision 1500 DPI wired mouse for smooth and accurate cursor control."
  },
  {
    "id": 104,
    "name": "Techie Spark RGB Wired Optical Gaming Mouse",
    "category": "Mice",
    "brand": "Techie",
    "price": 490,
    "mrp": 799,
    "image": "assets/products/prod_104_mouse_techie_spark_rgb.jpg",
    "badge": "RGB Lighting",
    "specs": [
      "1200 DPI Optical Engine",
      "Multi-Color RGB LEDs",
      "1.2m Braided Cable",
      "Ergonomic Contour"
    ],
    "desc": "Stylish gaming mouse with pulsating RGB illumination and ergonomic shape."
  },
  {
    "id": 105,
    "name": "Intex Glide 1000 DPI Optical Wired Mouse",
    "category": "Mice",
    "brand": "Intex",
    "price": 250,
    "mrp": 399,
    "image": "assets/products/prod_105_mouse_intex_glide.jpg",
    "badge": "Budget Pick",
    "specs": [
      "1000 DPI Optical Sensor",
      "Smooth Scroll Wheel",
      "Ultra Lightweight (75g)",
      "Plug and Play USB"
    ],
    "desc": "Ultra-lightweight optical mouse with smooth scrolling for everyday desktop use."
  },
  {
    "id": 106,
    "name": "Live Tech Cruze 1600 DPI 2.4GHz Wireless Mouse",
    "category": "Mice",
    "brand": "Live Tech",
    "price": 550,
    "mrp": 899,
    "image": "assets/products/prod_106_mouse_livetech_cruze.jpg",
    "badge": "1600 DPI",
    "specs": [
      "1600 DPI Optical Engine",
      "10m Wireless Range",
      "Smart Power Saving Mode",
      "Nano USB Receiver"
    ],
    "desc": "High resolution 1600 DPI wireless mouse with intelligent power-saving sleep."
  },
  {
    "id": 107,
    "name": "Zebronics Comfort 10 High Precision Wired Mouse",
    "category": "Mice",
    "brand": "Zebronics",
    "price": 220,
    "mrp": 349,
    "image": "assets/products/prod_107_mouse_zebronics_comfort.jpg",
    "badge": "Everyday Value",
    "specs": [
      "1200 DPI Sensor",
      "Comfortable Grip",
      "3 Million Clicks Life",
      "ISO 9001 Certified"
    ],
    "desc": "Durable 1200 DPI optical wired mouse with 3 million click lifespan."
  },
  {
    "id": 108,
    "name": "Zebion Connect-3 Cordless Wireless Mouse",
    "category": "Mice",
    "brand": "Zebion",
    "price": 480,
    "mrp": 799,
    "image": "assets/products/prod_108_mouse_zebion_connect3.jpg",
    "badge": "Cordless",
    "specs": [
      "2.4GHz Cordless Freedom",
      "High Precision Sensor",
      "Low Battery Consumption",
      "Ambidextrous Design"
    ],
    "desc": "Comfortable cordless mouse with quick responsiveness and long battery life."
  }
];
