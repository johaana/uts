
/**
 * @fileOverview Utsavs Global Holiday Intelligence — Reference Metadata.
 * 
 * PHASE 4: Operational data has moved to the Temporal Engine.
 * This file now exclusively contains shared labels and metadata.
 */

// ---------- TYPES ----------

export type DateStatus = "confirmed" | "estimated" | "live";
export type ConfidenceTier = "high" | "medium" | "provisional" | "estimated" | "listed" | "reference";
export type EventType = "public" | "religious" | "cultural" | "holiday" | "harvest" | "seasonal" | "solar" | "policy" | "institutional" | "business" | "travel" | "operational" | "regional";

// ---------- SHARED METADATA ----------

export const COUNTRY_LABELS: Record<string, string> = {
  IN:"India", JP:"Japan", SG:"Singapore", ID:"Indonesia", CN:"China", KR:"South Korea",
  TH:"Thailand", MY:"Malaysia", PH:"Philippines", PK:"Pakistan", AU:"Australia", NZ:"New Zealand",
  US:"United States", CA:"Canada", MX:"Mexico", BR:"Brazil",
  GB:"United Kingdom", DE:"Germany", FR:"France", IT:"Italy", ES:"Spain", NL:"Netherlands", CH:"Switzerland",
  AE:"United Arab Emirates", SA:"Saudi Arabia", TR:"Turkey", EG:"Egypt", NG:"Nigeria", KE:"Kenya", ZA:"South Africa",
  VN:"Vietnam", BD:"Bangladesh", LK:"Sri Lanka", NP:"Nepal", TW:"Taiwan",
  PL:"Poland", SE:"Sweden", PT:"Portugal", IE:"Ireland", AT:"Austria", GR:"Greece",
  AR:"Argentina", CO:"Colombia", CL:"Chile",
  MA:"Morocco", GH:"Ghana",
  FI:"Finland", DK:"Denmark", NO:"Norway", BE:"Belgium", CZ:"Czech Republic", HU:"Hungary", RO:"Romania", RU:"Russia", UA:"Ukraine",
  QA:"Qatar", JO:"Jordan", TZ:"Tanzania",
  PE:"Peru", EC:"Ecuador", UY:"Uruguay",
  KH:"Cambodia", MM:"Myanmar", LA:"Laos", MN:"Mongolia", KZ:"Kazakhstan", BN:"Brunei", FJ:"Fiji",
  IS:"Iceland", LU:"Luxembourg", SK:"Slovakia", SI:"Slovenia", HR:"Croatia", RS:"Serbia", BG:"Bulgaria",
  LT:"Lithuania", LV:"Latvia", EE:"Estonia", MT:"Malta", CY:"Cyprus",
  LB:"Lebanon", IQ:"Iraq", OM:"Oman", BH:"Bahrain", KW:"Kuwait",
  DZ:"Algeria", TN:"Tunisia", SN:"Senegal", CI:"Côte d'Ivoire", CM:"Cameroon", ZM:"Zambia", ZW:"Zimbabwe", RW:"Rwanda", BW:"Botswana", NA:"Namibia", MU:"Mauritius", SC:"Seychelles",
  VE:"Venezuela", BO:"Bolivia", PA:"Panama", CR:"Costa Rica", DO:"Dominican Republic", JM:"Jamaica",
};

export const TYPE_LABELS: Record<string, string> = {
  public:"Public holiday", 
  religious:"Religious observance", 
  cultural:"Cultural event",
  policy: "Policy guidance",
  institutional: "Institutional timing",
  business: "Business context",
  travel: "Travel advisory"
};
