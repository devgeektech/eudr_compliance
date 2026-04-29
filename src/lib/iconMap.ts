import type { ComponentType } from "react";

// Home SVGs
import {
  DueDiligenceSupport,
  RiskAssessment as HomeRiskAssessment,
  SupplierDataCollection as HomeSupplierDataCollection,
  InternalProcedures,
  SupplyChain,
  EUDRAudit as HomeEUDRAudit,
  DataCollection,
  Implementation as HomeImplementation,
  Documentation as HomeDocumentation,
  InitialAssessment,
  RiskEvaluation as HomeRiskEvaluation,
  SupplyChainAnalysis,
} from "@/public/Home/images/svgs";

// About SVGs
import {
  globalIcon,
  InforceableIcon,
  TreeIcon,
  Eye,
  Target,
  GeolocationData,
  Documentation as AboutDocumentation,
  RiskAssesment as AboutRiskAssesment,
  DueDiligence,
  Traceability,
} from "@/public/About/images/svgs";

// Services SVGs
import {
  ActionPlan,
  IdentifyApplicability,
  GapAnalysis,
  InternalWorkflows,
  ProceduresSetup,
  TemplatesTools,
  SupplierDataCollection as ServicesSupplierDataCollection,
  GpsGeolocationData,
  DataOrganization,
  RiskMatrix,
  ScoringSystem,
  RiskEvaluation as ServicesRiskEvaluation,
  Policies,
  Checklists,
  Declarations,
  ComplianceChecks,
  RegulatoryUpdates,
  MonthlySupport,
  EUDRaudit,
  RiskAssesment as ServicesRiskAssesment,
  Documentation as ServicesDocumentation,
  OngoingSupport,
  SupplierTraceability,
  Implementation as ServicesImplementation,
} from "@/public/Services/images/svgs";


//industry svgs
import {Fulltraceabilityrequired,Highriskclassification,SupplierVerification,
MarketPlacementResponsibility,DocumentationChecks,GlobalSupplyChainRisk,AgriculturalSourcingRisks,GeolocationTrackingPreciseGPS,DeforestationMonitoringOngoing,SupplyChainResponsibility,DataCollectionTraceability,
UpstreamCompliance,ComplexSupplyChains,RawMaterialCompliance,DocumentationDueDiligence
} from "@/public/Industry/images/svgs";

import {
  WoodFurniture as WoodFurnitureIndustry,
  ImportExport,
  CoffeeCocoa,
  Traders as TradersIndustry,
  Manufacturers as ManufacturersIndustry,
} from "@/public/Industry/images/svgs";

//faq -- why choose us
import {
  ComprehensiveGuides,
  ExpertConsultation,
  TrustedBy,
} from "@/public/Faq/images/svgs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIconComponent = ComponentType<any>;


const iconMap: Record<string, AnyIconComponent> = {
  // ── Home – What We Do ──────────────────────────────────────────────────────
  DueDiligenceSupport,
  HomeRiskAssessment,
  HomeSupplierDataCollection,
  InternalProcedures,
  SupplyChain,
  HomeEUDRAudit,

  // ── Home – How It Works ────────────────────────────────────────────────────
  InitialAssessment,
  DataCollection,
  SupplyChainAnalysis,
  HomeRiskEvaluation,
  HomeImplementation,
  HomeDocumentation,

  // ── About – WhatIsEUDR features ───────────────────────────────────────────
  globalIcon,
  InforceableIcon,
  TreeIcon,

  // ── About – Sustainability cards ──────────────────────────────────────────
  TargetIcon: Target,
  VisionIcon: Eye,

  // ── About – Companies Must Do ─────────────────────────────────────────────
  TraceabilityCMD: Traceability,
  RiskAssesmentCMD: AboutRiskAssesment,
  DueDiligenceCMD: DueDiligence,
  DocumentationCMD: AboutDocumentation,
  GeolocationDataCMD: GeolocationData,

  // ── Services – What We Offer ──────────────────────────────────────────────
  EUDRaudit,
  ServicesRiskAssesment,
  ServicesDocumentation,
  OngoingSupport,
  SupplierTraceability,
  ServicesImplementation,

  // ── Services – Section features ───────────────────────────────────────────
  ActionPlan,
  IdentifyApplicability,
  GapAnalysis,
  InternalWorkflows,
  ProceduresSetup,
  TemplatesTools,
  ServicesSupplierDataCollection,
  GpsGeolocationData,
  DataOrganization,
  RiskMatrix,
  ScoringSystem,
  ServicesRiskEvaluation,
  Policies,
  Checklists,
  Declarations,
  ComplianceChecks,
  RegulatoryUpdates,
  MonthlySupport,

    // ── Industry Explore Cards ─────────────────────────────
  woodFurniture: WoodFurnitureIndustry,
  importExport: ImportExport,
  coffeeCocoa: CoffeeCocoa,
  traders: TradersIndustry,
  manufacturers: ManufacturersIndustry,

  //industry section features 
Fulltraceabilityrequired,
Highriskclassification,
SupplierVerification,
MarketPlacementResponsibility,
DocumentationChecks,
GlobalSupplyChainRisk,
AgriculturalSourcingRisks,
GeolocationTrackingPreciseGPS,
DeforestationMonitoringOngoing,
SupplyChainResponsibility,
DataCollectionTraceability,
UpstreamCompliance,
ComplexSupplyChains,
RawMaterialCompliance,
DocumentationDueDiligence,


//faq -- why choose us 
ComprehensiveGuides,
ExpertConsultation,
TrustedBy,
};

export function getIconComponent(key: string): AnyIconComponent {
  return iconMap[key] ?? (() => null);
}

export default iconMap;
