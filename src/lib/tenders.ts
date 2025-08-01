
export interface Tender {
  id: string;
  title: string;
  customer: string;
  url: string;
  source: string;
  priceTotal: number;
  industry: string;
  startDate: string;
  endDate: string;
  city: string;
  oblast: string;
  unp: string;
  orgName?: string;
  orgAddress?: string;
  orgUnp?: string;
  orgNameSecond?: string;
  orgAddressSecond?: string;
  orgUnpSecond?: string;
  orgContactName?: string;
  orgContactPhone?: string;
  orgContactEmail?: string;
  orgContactNameSecond?: string;
  orgContactPhoneSecond?: string;
  orgContactEmailSecond?: string;
  dateFeed?: string | null;
  status?: string | null; // This status is from the root object, not lot status
  groups: TenderGroup[];
  characteristics: TenderCharacteristic[];
  documents: TenderDocument[];
  lots: TenderLot[];
}

export interface TenderGroup {
  id: number;
  auction_number: string;
  title: string;
}

export interface TenderCharacteristic {
  id: number;
  auction_number: string;
  group_id: number;
  name: string;
  value: string;
}

export interface TenderDocument {
  id: number;
  name: string;
  url: string;
  local_path: string;
}

export interface TenderLot {
  lotNumber: string;
  subject: string;
  quantity: string;
  cost: string;
  status: string;
  rangeTime?: string;
  speakTime?: string;
  deliveryPlace?: string;
  fullAddress?: string;
  paymentTerm?: string;
  termDelivery?: string;
  sourceOfFinancing?: string;
  calculationMethod?: string;
  okrb?: string;
}

// Function to clean and format phone numbers to E.164
const formatPhoneNumber = (phone: string | undefined): string | undefined => {
  if (!phone) return undefined;
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('8')) {
    return '+375' + digits.substring(1);
  }
  return '+' + digits;
};

// Function to clean and parse price
const parsePrice = (price: string | number | undefined): number | undefined => {
  if (typeof price === 'number') return price;
  if (!price) return undefined;
  return parseFloat(price.replace(/[^\d.]/g, ''));
};

const cleanTenderData = (data: any): Tender => {
  const characteristicsMap = new Map<string, string>();
  data.characteristics?.forEach((char: TenderCharacteristic) => {
    characteristicsMap.set(char.name, char.value);
  });

  const getCharacteristic = (name: string) => characteristicsMap.get(name);

  return {
    id: data.id,
    title: data.title,
    customer: data.customer,
    url: data.url,
    source: data.source,
    priceTotal: parsePrice(data.priceTotal) || 0,
    industry: data.industry,
    startDate: data.startDate,
    endDate: data.endDate,
    city: data.city?.trim() || '',
    oblast: data.oblast?.trim() || '',
    unp: data.unp,
    orgName: data.orgName || '',
    orgAddress: data.orgAddress || '',
    orgUnp: data.orgUnp || '',
    orgNameSecond: data.orgNameSecond || '',
    orgAddressSecond: data.orgAddressSecond || '',
    orgUnpSecond: data.orgUnpSecond || '',
    orgContactName: data.orgContactName || '',
    orgContactPhone: formatPhoneNumber(data.orgContactPhone),
    orgContactEmail: data.orgContactEmail || '',
    orgContactNameSecond: data.orgContactNameSecond || '',
    orgContactPhoneSecond: formatPhoneNumber(data.orgContactPhoneSecond),
    orgContactEmailSecond: data.orgContactEmailSecond || '',
    dateFeed: data.dateFeed,
    status: data.status || getCharacteristic('Вид процедуры закупки'), // Use characteristic for status if root is null
    groups: data.groups || [],
    characteristics: data.characteristics || [],
    documents: data.documents || [],
    lots: data.lots ? data.lots.map((lot: any) => ({
      lotNumber: lot.lotNumber,
      subject: lot.subject,
      quantity: lot.quantity,
      cost: lot.cost,
      status: lot.status,
      rangeTime: lot.rangeTime,
      speakTime: lot.speakTime,
      deliveryPlace: lot.deliveryPlace,
      fullAddress: lot.fullAddress,
      paymentTerm: lot.paymentTerm,
      termDelivery: lot.termDelivery,
      sourceOfFinancing: lot.sourceOfFinancing,
      calculationMethod: lot.calculationMethod,
      okrb: lot.okrb,
    })) : [],
  };
};

export const fetchTenders = async (): Promise<Tender[]> => {
  const tenders: Tender[] = [];
  try {
    const auc0002687163 = await import('../../public/json/auc0002687163.json');
    tenders.push(cleanTenderData(auc0002687163.default));
  } catch (error) {
    console.error('Error loading auc0002687163.json:', error);
  }
  try {
    const auc0002646742 = await import('../../public/json/auc0002646742.json');
    tenders.push(cleanTenderData(auc0002646742.default));
  } catch (error) {
    console.error('Error loading auc0002646742.json:', error);
  }
  return tenders;
};
