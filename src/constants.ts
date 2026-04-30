// src/constants/products.ts

import Wood from "@/public/Home/images/Wood.png";
import Coffee from "@/public/Home/images/Coffee.png";
import Cocoa from "@/public/Home/images/Cocoa.png";
import Soy from "@/public/Home/images/Soy.png";
import PalmOil from "@/public/Home/images/PalmOIl.png";
import Rubber from "@/public/Home/images/Rubber.png";
import Cattle from "@/public/Home/images/Cattle.png";


export const productsCovered = [
  { name: "Wood", image: Wood },
  { name: "Coffee", image: Coffee },
  { name: "Cocoa", image: Cocoa },
  { name: "Soy", image: Soy },
  { name: "Palm Oil", image: PalmOil },
  { name: "Rubber", image: Rubber },
  { name: "Cattle", image: Cattle },
];


//what we do 

import {
  DueDiligenceSupport,
  RiskAssessment,
  SupplierDataCollection,
  InternalProcedures,
  SupplyChain,
  EUDRAudit,
} from "@/public/Home/images/svgs";



export const whatWeDoCards = [
  {
    title: "Due Diligence Support",
    description:
      "Expert guidance to help your business meet every EUDR due diligence requirement.",
    logo: DueDiligenceSupport,
    bgImage: "/Home/images/Due Diligence Support.jpg",
  },
  {
    title: "Risk Assessment",
    description:
      "Identify sourcing risks and implement mitigation strategies across operations.",
    logo: RiskAssessment,
    bgImage: "/Home/images/Risk Assessment.jpg",
  },
  {
    title: "Supplier Data Collection",
    description:
      "Gather supplier declarations, traceability data, and compliance evidence.",
    logo: SupplierDataCollection,
    bgImage: "/Home/images/Supplier Data Collection.jpg",
  },
  {
    title: "Internal Procedures",
    description:
      "Build internal compliance workflows, policies, and reporting systems.",
    logo: InternalProcedures,
    bgImage: "/Home/images/Internal Procedures.jpg",
  },
  {
    title: "Supply Chain",
    description:
      "Improve visibility across your supply chain with transparent data processes.",
    logo: SupplyChain,
    bgImage: "/Home/images/Supply Chain.jpg",
  },
  {
    title: "EUDR Audit",
    description:
      "Readiness audits and gap analysis to prepare for regulatory checks.",
    logo: EUDRAudit,
    bgImage: "/Home/images/EUDr-audit.jpg",
  },
];


// whoWeHelp

import {
  Exporters,
  Importers,
  Traders,
  Distributors,
  Manufacturers,
  WoodFurniture,
} from "@/public/Home/images/svgs";

export const whoWeHelpCards = [
  { title: "Exporters", logo: Exporters },
  { title: "Importers", logo: Importers },
  { title: "Traders", logo: Traders },
  { title: "Distributors", logo: Distributors },
  { title: "Manufacturers", logo: Manufacturers },
  { title: "Wood Furniture", logo: WoodFurniture },
];




// how it works data


import { DataCollection,Implementation,Documentation,InitialAssessment,RiskEvaluation,SupplyChainAnalysis } from "@/public/Home/images/svgs";

export const howItWorksData = [
  {
    title: "Initial Assessment",
    desc: "Conduct an initial assessment to evaluate your current compliance status, identify gaps, understand regulatory requirements, and build a clear roadmap to achieve full compliance efficiently and confidently.",
    icon: InitialAssessment,
  },
  {
    title: "Data Collection",
    desc: "Gathering all necessary structureCollect and organize supplier data, GPS coordinates, and product documentation to ensure accurate traceability, streamline compliance processes, and maintain transparency across your entire supply chain with confidence. Collect and store all required information.",
    icon: DataCollection,
  },
  {
    title: "Supply Chain Analysis",
    desc: "Map and analyze your complete supply chain to identify deforestation risks, ensure compliance with regulations, improve transparency, and implement sustainable practices that protect forests and strengthen responsible sourcing strategies.",
    icon: SupplyChainAnalysis,
  },
  {
    title: "Risk Evaluation",
    desc: "Evaluate and prioritize risks effectively using our proven assessment framework, enabling informed decision-making, improved compliance, and strategic mitigation planning to safeguard your operations and ensure long-term sustainability and resilience.",
    icon: RiskEvaluation,
  },
  {
    title: "Implementation",
    desc: "Implement structured procedures, standardized templates, and efficient internal compliance workflows to streamline operations, ensure regulatory adherence, improve consistency, and enable your team to manage compliance processes effectively and confidently.",
    icon: Implementation,
  },
  {
    title: "Documentation",
    desc: "Create complete compliance documentation, including policies and declarations, to ensure regulatory adherence, maintain transparency, support audits, and establish a well-structured system for managing and updating compliance requirements efficiently.",
    icon: Documentation,
  },
];

//risk is real data

import {
  RIskIsREalIcon1,
  RIskIsREalIcon2,
  RIskIsREalIcon3,
  RiskIsRealWhite1,
  RiskIsRealWhite2,
  RiskIsRealWhite3,
} from "@/public/Home/images/svgs";

export const riskIsRealData = [
  {
    title: "Products may be banned from the EU",
    desc: "If you can’t prove they are deforestation-free.",
    icon: RIskIsREalIcon1,
    hoverIcon: RiskIsRealWhite1,
  },
  {
    title: "Fines up to 4% of your annual EU turnover",
    desc: "Plus confiscation of products and public penalties.",
    icon: RIskIsREalIcon2,
    hoverIcon: RiskIsRealWhite2,
  },
  {
    title: "Shipments can be blocked at the border",
    desc: "Delays, costs, and damaged business relationships.",
    icon: RIskIsREalIcon3,
    hoverIcon: RiskIsRealWhite3,
  },
];




// ===============================
// FAQ data
// ===============================

export const faqData = [
  {
    question: "What is EUDR?",
    answer:
      "EUDR is the EU Deforestation Regulation aimed at reducing deforestation risks linked to imported goods.",
  },
  {
    question: "Who needs EUDR compliance?",
    answer:
      "Any company importing, exporting, or trading regulated commodities within the EU market may require compliance.",
  },
  {
    question: "Which industries are affected by EUDR?",
    answer:
      "Industries dealing with cocoa, coffee, rubber, cattle, soy, palm oil, timber, and derived products are impacted.",
  },
  {
    question: "What documents are required for compliance?",
    answer:
      "Businesses may need supplier declarations, traceability records, geolocation data, and risk assessments.",
  },
  {
    question: "How long does the compliance process take?",
    answer:
      "Depending on your supply chain complexity, implementation may take anywhere from a few days to several weeks.",
  },
  {
    question: "What happens if a company is non-compliant?",
    answer:
      "Non-compliance can lead to penalties, shipment delays, product restrictions, and reputational damage.",
  },
  {
    question: "Can small businesses also be affected?",
    answer:
      "Yes, SMEs involved in regulated product supply chains may also need to meet EUDR obligations.",
  },
  {
    question: "Do I need supplier traceability data?",
    answer:
      "Yes, traceability is a core requirement to prove products are not linked to deforested land.",
  },
  {
    question: "How can your company help?",
    answer:
      "We provide assessments, documentation support, supplier mapping, and full implementation guidance.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us for an initial consultation and we’ll guide you through the next steps.",
  },
];


//ABout Page 
import {
  globalIcon,
  InforceableIcon,
  TreeIcon,
} from "@/public/About/images/svgs";

 export const features = [
    {
      icon: globalIcon,
      text: "Applies globally any country of origin",
    },
    {
      icon: InforceableIcon,
      text: "Enforceable from 2024 for large companies",
    },
    {
      icon: TreeIcon,
      text: "Focuses on forests cleared after 31 Dec 2020",
    },
  ];

   export const stats = [
    {
      title: "420m",
      desc: "Hectares of forest were lost globally in recent decades, making urgent action essential.",
    },
    {
      title: "10%",
      desc: "Of global deforestation is linked to EU consumption of regulated commodities.",
    },
    {
      title: "7",
      desc: "Key commodity sectors regulated under EUDR.",
    },
  ];



  import {
  Target,
  Eye,
} from "@/public/About/images/svgs";
const TargetIcon = Target;
const VisionIcon = Eye;

export { TargetIcon, VisionIcon };

export const sustainabilityCards = [
  {
    icon: TargetIcon,
    title: "Our Mission",
    desc: "Ensure businesses achieve full EUDR compliance with efficient, scalable systems that protect both their operations and the environment.",
  },
  {
    icon: VisionIcon,
    title: "Our Vision",
    desc: "To become the most trusted global partner for building sustainable, transparent, and deforestation-free supply chains.",
  },
];

import Plant1 from "@/public/About/images/plant1.jpg";
import Plant2 from "@/public/About/images/plant2.jpg";
import Plant3 from "@/public/About/images/plant3.jpg";
import Plant4 from "@/public/About/images/plant4.jpg";
import Plant5 from "@/public/About/images/plant5.jpg";


import GeolocationData from "@/public/About/images/svgs/GeolocationData.svg";
import DocumentationAbout from "@/public/About/images/svgs/Documentation.svg";
import RiskAssesment from "@/public/About/images/svgs/RiskAssesment.svg";
import DueDiligence from "@/public/About/images/svgs/DueDiligence.svg";
import Traceability from "@/public/About/images/svgs/Traceability.svg";

export const companiesMustDoCards = [
  {
    image: Plant3,
    icon: Traceability,
    title: "Traceability",
    desc: "Maintain transparent records proving the origin of goods and land-use compliance standards.",
  },
   {
    image: Plant2,
    icon: RiskAssesment,
    title: "Risk Assessment",
    desc: "Evaluate sourcing regions, suppliers, and commodities for compliance and environmental exposure.",
  },
  
  {
    image: Plant1,
    icon: DueDiligence,
    title: "Due Diligence",
    desc: "Establish robust due diligence systems to identify and prevent deforestation risks in supply chains.",
  },
 
  {
    image: Plant4,
    icon: DocumentationAbout,
    title: "Documentation",
    desc: "Prepare accurate reports, declarations, and supporting evidence for regulatory authorities.",
  },
  {
    image: Plant5,
    icon: GeolocationData,
    title: "Geolocation Data",
    desc: "Provide precise geolocation coordinates to verify land origin and regulatory compliance.",
  },
];



import {LedgerDueDiligence, LedgerTraceability, LedgerGeoLocation} from "@/public/About/images/svgs";

export const ledgerCards = [
  {
    id: 1,
    title:
      `Due diligence is the process companies must follow to ensure their products are
deforestation-free and legally produced. It is not just a one-time check it is an
ongoing system of information gathering, risk assessment, and risk mitigation.`,
name: "Due Diligence",
    icon: LedgerDueDiligence,
    bg: "/About/images/plant1.jpg",
    points: [
      "Collect documented evidence from suppliers",
      "Assess the risk level based on country and region",
      "Take concrete steps to reduce or eliminate identified risks",
      "Keep records for at least 5 years",
      "File a due diligence statement before placing goods on the market",
    ],
  },
  {
    id: 2,
    title:
      `Traceability means being able to trace a product all the way back to the specific plot of land where it was produced. This allows authorities and companies to verify that the product did not come from recently deforested or degraded land.`,
      name: "Traceability",
    icon: LedgerTraceability,
    bg: "/About/images/plant2.jpg",
    points: [
      "Link every batch of product to its farm or origin plot",
      "Document each step in the supply chain",
      "Use farm-level data, not just country-of-origin",
      "Enable verification by EU competent authorities",
      "Cover the entire upstream supply chain, not just direct suppliers",
    ],
  },
  {
    id: 3,
    title:
      `Geolocation is the requirement to provide precise geographic coordinates of every plot of land where the commodity was produced. This data is cross-referenced with satellite imagery and deforestation maps to confirm compliance.`,
    name: "Geolocation",
    icon: LedgerGeoLocation,
    bg: "/About/images/plant3.jpg",
    points: [
      "Provide GPS coordinates (latitude and longitude) for each plot",
      "Cover all plots larger than 4 hectares as polygons",
      "Smaller plots may be represented as a single point",
      "Data must be accurate enough to identify the land parcel",
      "Authorities use this to verify against forest cover change data",
    ],
  },
];

// ==============================
// risk of non compliance data
// ==============================


import {ConfiscationofGoodIcon, HeavyFinancialPenaltiesIcon, EnhancedRegulatoryScrutinyIcon, MarketAccessBanned, ReputationalDamageIcon} from "@/public/About/images/svgs";

export const risksOfNonCompliance = [
  {
    id: 1,
    icon: ConfiscationofGoodIcon,
    title: "Confiscation of Goods",
    severity: "High",
    description:
      "Products that fail to meet EUDR requirements may be seized, removed from sale, or blocked from entering the market.",
  },
  {
    id: 2,
    icon: HeavyFinancialPenaltiesIcon,
    title: "Heavy Financial Penalties",
    severity: "Critical",
    description:
      "Authorities can impose substantial fines and monetary penalties for breaches or false declarations.",
  },
  {
    id: 3,
    icon: EnhancedRegulatoryScrutinyIcon,
    title: "Enhanced Regulatory Scrutiny",
    severity: "High",
    description:
      "Non-compliant businesses may face repeated audits, investigations, and stricter regulatory oversight.",
  },
  {
    id: 4,
    icon: MarketAccessBanned,
    title: "Market Access Banned",
    severity: "Critical",
    description:
      "Failure to comply can result in temporary or permanent restrictions from selling into regulated markets.",
  },
  {
    id: 5,
    icon: ReputationalDamageIcon,
    title: "Reputational Damage",
    severity: "Significant",
    description:
      "Public non-compliance can damage brand trust, investor confidence, and customer relationships.",
  },
];




// ==============================
// implementation timeline data
// ==============================

export const implementationTimeline = [
  {
    id: 1,
    number: "1",
    date: "June 2023",
    title: "Regulation Entered Force",
    description:
      "The formal adoption of the text by the European Parliament.",
  },
  {
    id: 2,
    number: "2",
    date: "Early 2024",
    title: "Preparation Phase",
    description:
      "Companies begin auditing supply chains and mapping farm locations.",
  },
  {
    id: 3,
    number: "3",
    date: "Late 2024",
    title: "Full Enforcement",
    description:
      "Large enterprises must comply with all due diligence requirements.",
  },
  {
    id: 4,
    number: "4",
    date: "June 2025",
    title: "SME Enforcement",
    description:
      "Compliance requirements extend to small and medium enterprises.",
  },
];



// ==========================================
// Data for FeatureSplitSection
// ==========================================

import {ActionPlan,IdentifyApplicability,GapAnalysis,
InternalWorkflows,ProceduresSetup,TemplatesTools,
SupplierDataCollection as SupplierDataCollectionServices,GpsGeolocationData,DataOrganization,
RiskMatrix,ScoringSystem,RiskEvaluation as RiskEvaluationServices,
Policies,Checklists,Declarations,
ComplianceChecks,RegulatoryUpdates,MonthlySupport,
} from "@/public/Services/images/svgs";

export const aboutFeatureSections = [
  {
    id: 1,
    title: "EUDR Audit",
    description:
      "Assess your current supply chain processes, sourcing practices, and internal controls to understand your readiness for EUDR compliance.",
    background: "charcoal",
    imagePosition: "right",
    image: "/Services/images/EUDRAuditBG.jpg",
    features: [
      {
        icon: IdentifyApplicability,
        title: "Identify Applicability",
        text: "Operational readiness review and compliance gap analysis.",
      },
      {
        icon: GapAnalysis,
        title: "Gap Analysis",
        text: "Supplier mapping and traceability capability checks.",
      },
      {
        icon: ActionPlan,
        title: "Action Plan",
        text: "Action plan to strengthen compliance readiness.",
      },
    ],
  },

  {
    id: 2,
    title: "Implementation",
    description:
      "Build a practical roadmap to implement EUDR controls across procurement, operations, and supplier engagement workflows.",
    background: "dark",
    imagePosition: "left",
    image: "/Services/images/ImplementationBG.jpg",
    features: [
      {
        icon: InternalWorkflows,
        title: "Internal Workflows",
        text: "Structured rollout strategy for internal teams.",
      },
      {
        icon: ProceduresSetup,
        title: "Procedures Setup",
        text: "Process integration with sourcing operations.",
      },
      {
        icon: TemplatesTools,
        title: "Templates & Tools",
        text: "Milestones and accountability framework.",
      },
    ],
  },

  {
    id: 3,
    title: "Supplier and Traceability Setup",
    description:
      "Enable full supplier traceability by capturing farm origin data, sourcing records, and chain-of-custody evidence.",
    background: "charcoal",
    imagePosition: "right",
    image: "/Services/images/SupplierTraceabilitySetup.jpg",
    features: [
      {
        icon: SupplierDataCollectionServices,
        title: "Supplier Data Collection",
        text: "Supplier onboarding for data collection.",
      },
      {
        icon: GpsGeolocationData,
        title: "GPS Geolocation Data",
        text: "Farm geolocation and origin verification.",
      },
      {
        icon: DataOrganization,
        title: "Data Organization",
        text: "Centralized supplier evidence management.",
      },
    ],
  },

  {
    id: 4,
    title: "Risk Assesment",
    description:
      "Identify sourcing risks related to deforestation exposure, documentation gaps, and regulatory non-conformance.",
    background: "dark",
    imagePosition: "left",
    image: "/Services/images/RiskAssessmentBG.jpg",
    features: [
      {
        icon: RiskMatrix,
        title: "Risk Matrix",
        text: "Country and supplier risk profiling.",
      },
      {
        icon: ScoringSystem,
        title: "Scoring System",
        text: "Red flag detection and escalation controls.",
      },
      {
        icon: RiskEvaluationServices,
        title: "Risk Evaluation",
        text: "Mitigation planning with measurable outcomes.",
      },
    ],
  },

  {
    id: 5,
    title: "Documentation",
    description:
      "Prepare and organize declarations, supplier evidence, audit trails, and internal compliance records for regulatory review.",
    background: "charcoal",
    imagePosition: "right",
    image: "/Services/images/DocumentationBG.jpg",
    features: [
      {
        icon: Policies,
        title: "Policies",
        text: "Document repository for compliance records.",
      },
      {
        icon: Checklists,
        title: "Checklists",
        text: "Version control and approval workflows.",
      },
      {
        icon: Declarations,
        title: "Declarations",
        text: "Fast retrieval for audits and inspections.",
      },
    ],
  },

  {
    id: 6,
    title: "Ongoing Support",
    description:
      "Receive continuous advisory support as regulations evolve and your supplier network changes over time.",
    background: "dark",
    imagePosition: "left",
    image: "/Services/images/OngoingSupportBG.jpg",
    features: [
      {
        icon: ComplianceChecks,
        title: "Compliance Checks",
        text: "Ongoing monitoring and compliance updates.",
      },
      {
        icon: RegulatoryUpdates,
        title: "Regulatory Updates",
        text: "Supplier change management assistance.",
      },
      {
        icon: MonthlySupport,
        title: "Monthly Support",
        text: "Expert guidance for future requirements.",
      },
    ],
  },
] as const;



import {
  EUDRaudit,
  RiskAssesment as RiskAssesmentServices,
  Documentation as DocumentationServices,
  OngoingSupport,
  SupplierTraceability,
  Implementation as ImplementationServices,
} from "@/public/Services/images/svgs";

export const whatWeOfferCards = [
  {
    icon: EUDRaudit,
    title: "EUDR Audit",
    description:
      "Comprehensive audits to evaluate your current operations, identify compliance gaps, and prepare your business for EUDR readiness.",
  },
  {
    icon: RiskAssesmentServices,
    title: "Risk Assesment",
    description:
      "Detailed risk analysis across sourcing, suppliers, and operational workflows to reduce exposure and strengthen compliance.",
  },
  {
    icon: DocumentationServices,
    title: "Documentation",
    description:
      "Structured documentation support for policies, due diligence reports, declarations, and all required compliance records.",
  },
  {
    icon: OngoingSupport,
    title: "Ongoing Support",
    description:
      "Continuous advisory and monitoring support to keep your business aligned with changing regulations and market needs.",
  },
  {
    icon: SupplierTraceability,
    title: "Supplier Traceability",
    description:
      "Build transparent supplier chains with traceability systems that improve accountability and sourcing confidence.",
  },
  {
    icon: ImplementationServices,
    title: "Implementation",
    description:
      "Hands-on implementation guidance for processes, tools, and systems needed to achieve efficient EUDR compliance.",
  },
];



//EXPLORE BY INDUSTRY

import {
  WoodFurniture as WoodFurnitureIndustry,
  ImportExport,
  CoffeeCocoa,
  Traders as TradersIndustry,
  Manufacturers as ManufacturersIndustry,
} from "@/public/Industry/images/svgs";

export const exploreByIndustryCards = [
  {
    id: 1,
    icon: WoodFurnitureIndustry,
    title: "Wood & Furniture",
    text: "Timber sourcing & Traceability",
  },
  {
    id: 2,
    icon: ImportExport,
    title: "Import & Export",
    text: "Cross-border Compliance",
  },
  {
    id: 3,
    icon: CoffeeCocoa,
    title: "Coffee & Cocoa",
    text: "Agricultural Supply Chains",
  },
  {
    id: 4,
    icon: TradersIndustry,
    title: "Traders",
    text: "Supply Chain Responsibility",
  },
  {
    id: 5,
    icon: ManufacturersIndustry,
    title: "Manufacturers",
    text: "Production & Due Diligence",
  },
] as const;

// Contact page cards data


import ResponseIcon from "@/public/Contact/images/svgs/ResponseIcon.svg";
import ExpertConsultationIcon from "@/public/Contact/images/svgs/ExpertConsultationIcon.svg";
import ConfidentialDiscussion from "@/public/Contact/images/svgs/ConfidentialDiscussion.svg";

export const whyChooseUsData = [
  {
    id: 1,
    icon: ResponseIcon,
    title: "Response with in 24 hours",
    description:
      "We prioritize every inquiry and guarantee a response within one business day.",
  },
  {
    id: 2,
    icon: ExpertConsultationIcon,
    title: "Expert Consultation",
    description:
      "Our team consists of certified EUDR compliance specialists with deep industry knowledge.",
  },
  {
    id: 3,
    icon: ConfidentialDiscussion,
    title: "Confidential Discussion",
    description:
      "All consultations are strictly confidential. Your business information is safe with us.",
  },
];

