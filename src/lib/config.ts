// A2P 10DLC Compliant Business Configuration
// Single source of truth for all business information

export const config = {
  companyName: "TirRiain Properties LLC",
  businessType: "LLC",
  industry: "Real Estate",

  address: {
    street: "45849 Ambara Ct.",
    city: "Temecula",
    state: "CA",
    zip: "92592",
    country: "USA",
  },

  contact: {
    name: "Loghan Ryan",
    phone: "+1 (951) 265-9513",
    phoneRaw: "+19512659513",
    email: "loghan@tirriainproperties.com",
  },

  domain: "tirriainproperties.com",
  smsBrand: "TirRiain Properties",
  useCase: "property updates, real estate inquiries, and appointment reminders",
  messageFrequency:
    "Message frequency varies based on your interactions and property updates",

  legal: {
    state: "California",
    lastUpdated: "January 2026",
  },
};

// Helper functions
export const formatAddress = () => {
  const { street, city, state, zip } = config.address;
  return `${street}, ${city}, ${state} ${zip}`;
};

export const formatFullAddress = () => {
  const { street, city, state, zip, country } = config.address;
  return `${street}, ${city}, ${state} ${zip}, ${country}`;
};

export const getHelpText = () => {
  return `Text HELP to ${config.contact.phone} for support`;
};

export const getStopText = () => {
  return `Text STOP to ${config.contact.phone} to opt out`;
};

export const getOptInLanguage = () => {
  return `I consent to receive SMS messages from ${config.companyName} related to ${config.useCase}. ${config.messageFrequency}. Message & data rates may apply. Reply STOP to unsubscribe, HELP for help.`;
};

export const getFullConsentText = () => {
  return `By providing your mobile phone number and checking the consent box, you expressly consent to receive SMS from ${
    config.companyName
  } for ${config.useCase}. ${
    config.messageFrequency
  }. Message & data rates may apply. Carriers are not liable for delayed or undelivered messages. ${getStopText()}. ${getHelpText()}. You will receive confirmation when you opt out.`;
};
