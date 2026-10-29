import heroTruckImage from '../assets/images/hero_apex_semi_truck_1792014064872.jpg';
import dealershipTruckImage from '../assets/images/truck_fleet_dealership_1792014065820.jpg';

export interface TruckListing {
  id: string;
  vin: string;
  stockNumber: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  mileage: number;
  engine: string;
  horsepower: number;
  transmission: string;
  sleeper: string;
  condition: 'Pre-Owned Certified' | 'Fleet Maintained' | 'Work Ready';
  price: number | 'Request Price';
  axleRatio: string;
  wheelbase: string;
  suspension: string;
  apu: string;
  brakes: string;
  tires: string;
  fuelCapacity: string;
  color: string;
  image: string;
  features: string[];
  inspectionPointsPassed: number;
}

export interface TireProduct {
  id: string;
  brand: string;
  model: string;
  category: 'Steer Tires' | 'Drive Tires' | 'Trailer Tires' | 'All-Position Tires' | 'All-Season Commercial Tires' | 'Highway and Long-Haul Tires' | 'Heavy-Duty Truck Tires';
  size: string;
  plyRating: string;
  loadRange: string;
  treadDepth: string;
  smartWay: boolean;
  pricePerUnit: number;
  inStock: boolean;
  warranty: string;
  description: string;
  bestFor: string;
}

export const TRUCK_INVENTORY: TruckListing[] = [
  {
    id: 'trk-01',
    vin: '3AKJGLD69PSXXXX01',
    stockNumber: 'APX-7821',
    year: 2024,
    make: 'Freightliner',
    model: 'Cascadia 126',
    trim: 'AeroX High-Roof Sleeper',
    mileage: 184500,
    engine: 'Detroit DD15 Gen 5',
    horsepower: 505,
    transmission: 'Detroit DT12 Overdrive Automated',
    sleeper: '72" Raised Roof Double Bunk',
    condition: 'Pre-Owned Certified',
    price: 128900,
    axleRatio: '2.41',
    wheelbase: '228"',
    suspension: 'Airliner 40k Air Ride',
    apu: 'Thermo King TriPac Evolution',
    brakes: 'Bendix ADB22X All-Wheel Disc',
    tires: 'Virgin Michelin X Line Energy (90%+)',
    fuelCapacity: '250 Gal Dual Aluminum',
    color: 'Obsidian Metallic Gray',
    image: heroTruckImage,
    features: [
      'Detroit Assurance 5.0 Collision Mitigation',
      'Lane Departure Warning & Active Brake Assist',
      'Factory Espar Bunk Heater',
      'Alcoa Dura-Bright Aluminum Wheels',
      'Premium Heated Driver & Passenger Seats',
      'Refrigerator & Microwave Prep Package'
    ],
    inspectionPointsPassed: 182
  },
  {
    id: 'trk-02',
    vin: '1XP5D49X5RDXXXX02',
    stockNumber: 'APX-7834',
    year: 2024,
    make: 'Peterbilt',
    model: '579',
    trim: 'UltraLoft Premium Sleeper',
    mileage: 142200,
    engine: 'PACCAR MX-13 EPA 2024',
    horsepower: 455,
    transmission: 'Eaton Endurant 12-Speed Automated',
    sleeper: '80" Integral UltraLoft Sleeper',
    condition: 'Pre-Owned Certified',
    price: 139500,
    axleRatio: '2.64',
    wheelbase: '236"',
    suspension: 'Peterbilt Low Air Leaf',
    apu: 'Carrier ComfortPro APU',
    brakes: 'Bendix Wingman Fusion Disc',
    tires: 'Bridgestone Ecopia Steer & Drive (85%)',
    fuelCapacity: '260 Gal Dual Aluminum Tanks',
    color: 'Deep Sapphire Pearl',
    image: dealershipTruckImage,
    features: [
      '15-inch Digital Instrument Cluster',
      'Peterbilt SmartLINQ Diagnostics',
      'LED Projector Headlights with Signature Accents',
      'Fold-out Workstation & Upper Bunk',
      'Full Aerodynamic Fairings Package',
      'Leather High-Back Suspension Seating'
    ],
    inspectionPointsPassed: 185
  },
  {
    id: 'trk-03',
    vin: '1NKDX49X2PJXXXX03',
    stockNumber: 'APX-7848',
    year: 2023,
    make: 'Kenworth',
    model: 'T680',
    trim: 'Next Generation 76" Sleeper',
    mileage: 215400,
    engine: 'Cummins X15 Efficiency Series',
    horsepower: 485,
    transmission: 'Eaton Endurant 12-Speed Auto',
    sleeper: '76" High-Roof Aerodyne Sleeper',
    condition: 'Fleet Maintained',
    price: 114800,
    axleRatio: '2.47',
    wheelbase: '232"',
    suspension: 'Kenworth AG400L 4-Bag Air Ride',
    apu: 'Thermo King Battery Electric APU',
    brakes: 'Air Disc Front & Rear Drum',
    tires: 'Goodyear Endurance LHS (80%)',
    fuelCapacity: '240 Gal Split Tanks',
    color: 'Apex Radiant Crimson',
    image: heroTruckImage,
    features: [
      'Digital Vision Electronic Mirrors Kit Ready',
      'Kenworth TruckTech+ Remote Diagnostics',
      'Predictive Cruise Control with GPS Terrain Mapping',
      'Aerodynamic Chassis Skirts with Ground Effects',
      'Dual 120V Inverter & Shore Power Outlet',
      'Kenworth Diamond VIT Interior Package'
    ],
    inspectionPointsPassed: 178
  },
  {
    id: 'trk-04',
    vin: '4V4NC9EH7PNXXXX04',
    stockNumber: 'APX-7852',
    year: 2024,
    make: 'Volvo',
    model: 'VNL 860',
    trim: 'Globetrotter Flagship Sleeper',
    mileage: 129000,
    engine: 'Volvo D13 Turbo Compound (TC)',
    horsepower: 455,
    transmission: 'Volvo I-Shift 12-Speed Overdrive',
    sleeper: '77" High-Roof Globetrotter Suite',
    condition: 'Pre-Owned Certified',
    price: 144500,
    axleRatio: '2.31',
    wheelbase: '234"',
    suspension: 'Volvo Air Ride 40,000 lbs',
    apu: 'Integrated Parking Cooler & Heater',
    brakes: 'Volvo Enhanced Cruise Disc Brakes',
    tires: 'Michelin X Line Energy 295/75R22.5',
    fuelCapacity: '250 Gal Aluminum Dual',
    color: 'Titanium Frost Silver',
    image: heroTruckImage,
    features: [
      'Volvo Dynamic Steering (VDS) System',
      'Volvo Active Driver Assist (VADA) 2.0',
      'Infotainment 7-inch Touchscreen Navigation',
      'Reclining Lower Bunk with Orthopedic Mattress',
      'Factory Built-in Refrigerator with Freezer',
      'Position Perfect 3-Way Steering Column'
    ],
    inspectionPointsPassed: 190
  },
  {
    id: 'trk-05',
    vin: '1M2AX18C4NMXXXX05',
    stockNumber: 'APX-7860',
    year: 2022,
    make: 'Mack',
    model: 'Anthem',
    trim: '70" Stand-Up Sleeper',
    mileage: 268000,
    engine: 'Mack MP8 13-Liter Heavy Duty',
    horsepower: 445,
    transmission: 'Mack mDRIVE 12-Speed Automated',
    sleeper: '70" Stand-Up Aerodynamic Sleeper',
    condition: 'Work Ready',
    price: 98500,
    axleRatio: '2.64',
    wheelbase: '226"',
    suspension: 'Mack Maxlite 40EZ Air Suspension',
    apu: 'Rigmaster Standby APU',
    brakes: 'Meritor Q-Plus Heavy Duty Cam-Brakes',
    tires: 'Continental Conti EcoPlus (75%)',
    fuelCapacity: '230 Gal Dual Tanks',
    color: 'Graphite Black Matte Accents',
    image: dealershipTruckImage,
    features: [
      'Mack ClearTech One Exhaust Aftertreatment',
      'Mack GuardDog Connect 24/7 Monitoring',
      'Bendix Wingman Fusion Radar System',
      'Flat-Bottom Race-Inspired Steering Wheel',
      'Premium Sound System with Subwoofer',
      'Stainless Steel Sun Visor with LED Marker Lights'
    ],
    inspectionPointsPassed: 174
  },
  {
    id: 'trk-06',
    vin: '3HSDMAPR7PNXXXX06',
    stockNumber: 'APX-7875',
    year: 2023,
    make: 'International',
    model: 'LT625',
    trim: 'Sky-Rise Sleeper 73"',
    mileage: 198000,
    engine: 'Cummins X15 Productivity Series',
    horsepower: 450,
    transmission: 'Eaton Endurant 12-Speed',
    sleeper: '73" Sky-Rise Double Bunk',
    condition: 'Fleet Maintained',
    price: 'Request Price',
    axleRatio: '2.53',
    wheelbase: '228"',
    suspension: 'International Air Ride Suspension',
    apu: 'Carrier ComfortPro APU Diesel',
    brakes: 'Bendix Air Disc Brakes',
    tires: 'Firestone FS591 Commercial Steer & Drive',
    fuelCapacity: '240 Gal Dual Tanks',
    color: 'Onyx Black High Gloss',
    image: dealershipTruckImage,
    features: [
      'International OnCommand Connection Telematics',
      'Ergonomic Driver-Centric Cockpit Console',
      'Bendix Wingman Fusion Safety System',
      'Keyless Entry & Push-Button Start Ready',
      'Optimized HVAC Thermal Insulation Package',
      'All-Aluminum Polished Wheels'
    ],
    inspectionPointsPassed: 180
  }
];

export const TIRE_INVENTORY: TireProduct[] = [
  {
    id: 'tire-01',
    brand: 'Bridgestone',
    model: 'Ecopia R268',
    category: 'Steer Tires',
    size: '295/75R22.5',
    plyRating: '16PR',
    loadRange: 'H',
    treadDepth: '18/32"',
    smartWay: true,
    pricePerUnit: 549,
    inStock: true,
    warranty: '7-Year / 2-Retread Casing Warranty',
    description: 'Fuel-efficient commercial steer tire designed for regional and long-haul highway operations with irregular wear resistance.',
    bestFor: 'Long-Haul Highway & Regional Steer Position'
  },
  {
    id: 'tire-02',
    brand: 'Michelin',
    model: 'X Line Energy Z',
    category: 'All-Position Tires',
    size: '11R22.5',
    plyRating: '16PR',
    loadRange: 'H',
    treadDepth: '19/32"',
    smartWay: true,
    pricePerUnit: 619,
    inStock: true,
    warranty: '7-Year Unlimited Casing Warranty',
    description: 'Michelin dual-compound tread technology delivers ultra-low rolling resistance and exceptional steer longevity on high-mileage runs.',
    bestFor: 'Interstate Long-Haul & Linehaul Fleets'
  },
  {
    id: 'tire-03',
    brand: 'Goodyear',
    model: 'Fuel Max RTD',
    category: 'Drive Tires',
    size: '295/75R22.5',
    plyRating: '16PR',
    loadRange: 'H',
    treadDepth: '26/32"',
    smartWay: true,
    pricePerUnit: 585,
    inStock: true,
    warranty: 'Goodyear Heavy Duty Casing Assurance',
    description: 'High-traction regional and linehaul drive tire engineered with 3PMSF severe snow qualification for all-season confidence.',
    bestFor: 'Tandem Drive Axles in All-Weather Conditions'
  },
  {
    id: 'tire-04',
    brand: 'Continental',
    model: 'Conti EcoPlus HS3',
    category: 'Steer Tires',
    size: '11R24.5',
    plyRating: '16PR',
    loadRange: 'H',
    treadDepth: '19/32"',
    smartWay: true,
    pricePerUnit: 570,
    inStock: true,
    warranty: 'Continental ContiLifeCycle Guarantee',
    description: 'Maximum fuel efficiency steer tire featuring visual alignment indicators (VAI) and micro-siping for wet traction.',
    bestFor: 'Fuel-Conscious Long-Haul Sleeper Tractors'
  },
  {
    id: 'tire-05',
    brand: 'Firestone',
    model: 'FS591',
    category: 'Highway and Long-Haul Tires',
    size: '295/75R22.5',
    plyRating: '14PR',
    loadRange: 'G',
    treadDepth: '18/32"',
    smartWay: true,
    pricePerUnit: 495,
    inStock: true,
    warranty: 'Firestone Heavy Duty Limited Warranty',
    description: 'Proven commercial steer tire offering durable long-haul performance, continuous shoulder ribs, and stress relief siping.',
    bestFor: 'Regional Fleet Operations & Owner Operators'
  },
  {
    id: 'tire-06',
    brand: 'Michelin',
    model: 'X Multi Energy D',
    category: 'Drive Tires',
    size: '11R22.5',
    plyRating: '16PR',
    loadRange: 'H',
    treadDepth: '28/32"',
    smartWay: true,
    pricePerUnit: 635,
    inStock: true,
    warranty: '7-Year Premium Michelin Guarantee',
    description: 'Regenion regenerating tread grooves maintain wet braking grip throughout the lifecycle on demanding freight lines.',
    bestFor: 'High-Torque Single & Tandem Drive Axles'
  },
  {
    id: 'tire-07',
    brand: 'Goodyear',
    model: 'Endurance LHT',
    category: 'Trailer Tires',
    size: '295/75R22.5',
    plyRating: '14PR',
    loadRange: 'G',
    treadDepth: '13/32"',
    smartWay: true,
    pricePerUnit: 465,
    inStock: true,
    warranty: 'Goodyear Fleet Advantage Coverage',
    description: 'Low rolling resistance trailer tire with scuff-resistant sidewalls built to withstand tight dock maneuvering.',
    bestFor: '53ft Dry Van & Refrigerated Fleets'
  },
  {
    id: 'tire-08',
    brand: 'Bridgestone',
    model: 'M870 All-Season',
    category: 'Heavy-Duty Truck Tires',
    size: '11R22.5',
    plyRating: '16PR',
    loadRange: 'H',
    treadDepth: '22/32"',
    smartWay: false,
    pricePerUnit: 595,
    inStock: true,
    warranty: 'Bridgestone Rugged Casing Warranty',
    description: 'Heavy-duty cut and chip resistant compound for mixed-service vocational trucks, heavy dump applications, and construction.',
    bestFor: 'Severe Duty, Vocational & Heavy Haul'
  }
];

export const ROADSIDE_SERVICES = [
  {
    id: 'srv-01',
    title: 'Truck Tire Repair & Replacement',
    description: 'On-site mobile tire dismount, repair, or full tire replacement with matching commercial fleet spec steer, drive, or trailer units.',
    dispatchSpeed: 'Average 35–45 min dispatch',
    tag: 'Rapid Response'
  },
  {
    id: 'srv-02',
    title: 'Flat Tire Assistance',
    description: 'Rapid blowout and flat tire response on interstate shoulders, rest stops, distribution facilities, or weigh stations.',
    dispatchSpeed: 'Available 24/7 on primary corridors',
    tag: 'Critical Priority'
  },
  {
    id: 'srv-03',
    title: 'Emergency Roadside Support',
    description: 'Immediate coordination for air line leaks, gladhand replacements, electrical failures, brake lockups, and critical safety stops.',
    dispatchSpeed: 'Triage in under 5 minutes',
    tag: 'Safety First'
  },
  {
    id: 'srv-04',
    title: 'Truck Breakdown Assistance',
    description: 'Mechanical diagnostics for no-start scenarios, fuel filter waxing, cooling system leaks, alternator issues, and battery jump-starts.',
    dispatchSpeed: 'Mobile tech equipped with ECM scanners',
    tag: 'Diagnostics'
  },
  {
    id: 'srv-05',
    title: 'Tire-Related Roadside Service',
    description: 'Wheel seal inspections, lug nut torque verification, rim damage assessments, and commercial valve stem replacements.',
    dispatchSpeed: 'Complete on-site wheel service',
    tag: 'Comprehensive'
  },
  {
    id: 'srv-06',
    title: 'Service Provider Coordination',
    description: 'Direct routing to vetted heavy-duty towing operators, commercial repair bays, and safe secure staging areas when towing is required.',
    dispatchSpeed: 'Nationwide partner network access',
    tag: 'Full Logistics'
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Straightforward Truck Buying and Selling',
    description: 'Transparent mechanical disclosures, complete ECM data pull history, and fair market-backed valuations without dealer markup games.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Commercial Truck Tire Solutions',
    description: 'Extensive inventory of Tier-1 and SmartWay-verified steer, drive, and trailer tires stocked for single trucks and large enterprise carriers.',
    icon: 'Disc'
  },
  {
    title: 'Responsive Roadside Support',
    description: 'Dedicated commercial dispatchers who understand freight timetables, DOT safety requirements, and the urgency of preventing cargo delays.',
    icon: 'Wrench'
  },
  {
    title: 'Customer-Focused Service',
    description: 'Direct communication with commercial equipment specialists who treat your bottom line and uptime as our highest metric of success.',
    icon: 'Users'
  },
  {
    title: 'Practical Solutions for Trucking Businesses',
    description: 'Flexible commercial purchase terms, certified inspection checklists, and maintenance-ready inventory tailored for owner-operators and fleets.',
    icon: 'Briefcase'
  },
  {
    title: 'One Place for Multiple Trucking Needs',
    description: 'Eliminate fragmented vendor management. Acquire trucks, upgrade tires, liquidate trade-ins, and secure roadside backup under one trusted roof.',
    icon: 'Building2'
  }
];
