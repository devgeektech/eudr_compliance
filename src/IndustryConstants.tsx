"use client";

import {Fulltraceabilityrequired,Highriskclassification,SupplierVerification,
MarketPlacementResponsibility,DocumentationChecks,GlobalSupplyChainRisk,
AgriculturalSourcingRisks,GeolocationTrackingPreciseGPS,DeforestationMonitoringOngoing,
SupplyChainResponsibility,DataCollectionTraceability,UpstreamCompliance,
ComplexSupplyChains,RawMaterialCompliance,DocumentationDueDiligence,
} from "@/public/Industry/images/svgs";
import type { ReactNode, ComponentType } from "react";

type FeatureItem = {
  icon: ComponentType<{ className?: string }>;
  text: ReactNode;
};

type IndustryFeatureSection = {
  id: number;
  pageName: string;
  title: string;
  description: string;
  background: "dark" | "charcoal";
  imagePosition: "left" | "right";
  image: string;
  iconBoxBg: string;
  features: FeatureItem[];
};

export const industryFeatureSections: IndustryFeatureSection[] = [
  {
    id: 1,
    pageName: "Industry Details",
    title: "Wood & Furniture Industry",
    description:
      "Businesses sourcing timber, wood panels, and furniture products must prove legal origin, maintain traceability, and meet EUDR due diligence obligations.",
    background: "charcoal",
    imagePosition: "right",
    image: "/Industry/images/WoodFurnitureIndustry.jpg",
    iconBoxBg: "bg-transparent",
    features: [
      {
        icon: Fulltraceabilityrequired,
        text: (
          <>
            <strong>Full Traceability Required:</strong> Track raw wood
            materials from forest source to finished goods.
          </>
        ),
      },
      {
        icon: Highriskclassification,
        text: (
          <>
            <strong>High Risk Classification:</strong> Extra scrutiny may
            apply depending on sourcing country and region.
          </>
        ),
      },
      {
        icon: SupplierVerification,
        text: (
          <>
            <strong>Supplier Verification:</strong> Validate supplier
            legality, harvest data, and compliance records.
          </>
        ),
      },
    ],
  },

  {
    id: 2,
    pageName: "Industry Details",
    title: "Import & Export Companies",
    description:
      "Importers and exporters placing regulated goods into the EU market need strong documentation controls and supply chain visibility.",
    background: "dark",
    imagePosition: "left",
    image: "/Industry/images/ImportExportCompanies.jpg",
    iconBoxBg: "bg-transparent",
    features: [
      {
        icon: MarketPlacementResponsibility,
        text: (
          <>
            <strong>Market Placement Responsibility:</strong> Responsible
            for compliant goods entering applicable markets.
          </>
        ),
      },
      {
        icon: DocumentationChecks,
        text: (
          <>
            <strong>Documentation Checks:</strong> Maintain declarations,
            shipment records, and supplier evidence.
          </>
        ),
      },
      {
        icon: GlobalSupplyChainRisk,
        text: (
          <>
            <strong>Global Supply Chain Risk:</strong> Assess risk across
            multiple countries and supplier networks.
          </>
        ),
      },
    ],
  },

  {
    id: 3,
    pageName: "Industry Details",
    title: "Coffee & Cocoa Industry",
    description:
      "Agricultural commodities face heightened traceability requirements with emphasis on farm origin, geolocation, and deforestation status.",
    background: "charcoal",
    imagePosition: "right",
    image: "/Industry/images/CoffeeCocoaIndustry.jpg",
    iconBoxBg: "bg-transparent",
    features: [
      {
        icon: AgriculturalSourcingRisks,
        text: (
          <>
            <strong>Agricultural Sourcing Risks:</strong> Monitor sourcing
            from sensitive and high-risk growing regions.
          </>
        ),
      },
      {
        icon: GeolocationTrackingPreciseGPS,
        text: (
          <>
            <strong>Precise GPS Tracking:</strong> Capture farm plot
            coordinates for regulatory verification.
          </>
        ),
      },
      {
        icon: DeforestationMonitoringOngoing,
        text: (
          <>
            <strong>Ongoing Monitoring:</strong> Continuously monitor
            deforestation exposure and land changes.
          </>
        ),
      },
    ],
  },

  {
    id: 4,
    pageName: "Industry Details",
    title: "Traders",
    description:
      "Trading businesses need clear upstream visibility and documented transfers across every step of the commercial chain.",
    background: "dark",
    imagePosition: "left",
    image: "/Industry/images/Traders.png",
    iconBoxBg: "bg-transparent",
    features: [
      {
        icon: SupplyChainResponsibility,
        text: (
          <>
            <strong>Supply Chain Responsibility:</strong> Ensure sourcing
            records remain intact through transactions.
          </>
        ),
      },
      {
        icon: DataCollectionTraceability,
        text: (
          <>
            <strong>Data Collection:</strong> Gather supplier evidence,
            invoices, and traceability inputs.
          </>
        ),
      },
      {
        icon: UpstreamCompliance,
        text: (
          <>
            <strong>Upstream Compliance:</strong> Confirm prior operators
            fulfilled required obligations.
          </>
        ),
      },
    ],
  },

  {
    id: 5,
    pageName: "Industry Details",
    title: "Manufacturers",
    description:
      "Manufacturers combining raw materials from multiple sources need structured compliance systems and evidence management.",
    background: "charcoal",
    imagePosition: "right",
    image: "/Industry/images/Manufacturers.jpg",
    iconBoxBg: "bg-transparent",
    features: [
      {
        icon: ComplexSupplyChains,
        text: (
          <>
            <strong>Complex Supply Chains:</strong> Manage multiple inputs,
            suppliers, and production stages.
          </>
        ),
      },
      {
        icon: RawMaterialCompliance,
        text: (
          <>
            <strong>Raw Material Compliance:</strong> Verify all incoming
            materials meet sourcing obligations.
          </>
        ),
      },
      {
        icon: DocumentationDueDiligence,
        text: (
          <>
            <strong>Due Diligence Records:</strong> Maintain accessible
            records for audits and declarations.
          </>
        ),
      },
    ],
  },
];


