export const config = {
  hero: {
    bgImage: "assets/images/frontPageBackground.jpeg"
  },
  logo: "assets/images/logo.png",
  groom: {
    name: "वेदांत",
    fullName: "चि. वेदांत",

    relation: "यांचा सुपुत्र",

    // Parents
    fatherName: "श्री. मधुकर मुरलीधर बोंबले",
    motherName: "सौ. कमल बोंबले",

    // Grandparents (from patrika line)
    grandparents: "सौ. सविता व श्री. सुधीर मधुकर बोंबले यांचे नातू",

    address: "रा. हिवरगाव आंबे, ता. अकोले, जि. अहमदनगर",

    family: "समस्त बोंबले पाटील परिवार",

    photo: "assets/images/groom.jpeg"
  },

  bride: {
    name: "निकिता",
    fullName: "चि. सौ. का. निकिता",

    relation: "यांची कन्या",

    // 👇 Parents (correct)
    fatherName: "श्री. शांताराम विठोबा नेहे",
    motherName: "सौ. कमल नेहे",

    // 👇 Grandparents (THIS is what you asked)
    grandparents: "के. लहानाबाई व के. विठोबा नाना नेहे यांची नात",

    address: "रा. सावरगाव तळ, ता. संगमनेर, जि. अहमदनगर",

    family: "समस्त नेहे पाटील परिवार",

    photo: "assets/images/bride.jpeg"


  },
  // Dynamic Gallery Config
  gallery: [
    {
      id: "prewedding",
      title_en: "Pre-Wedding",
      title_mr: "प्री-वेडिंग",
      folder: "assets/images/prewedding",
      prefix: "preweddings (",
      suffix: ")",
      count: 28, // Number of photos
      extension: ".jpeg"
    },
    {
      id: "engagement",
      title_en: "Engagement",
      title_mr: "साखरपुडा",
      folder: "assets/images/engagement",
      prefix: "engagement (",
      suffix: ")",
      count: 6, // Updated count for newly added photos
      extension: ".jpeg"
    }
  ],
  wedding: {
    date: "2026-05-03",
    tithi: "वैशाख शुक्ल पक्ष, मृगशीर्ष नक्षत्र",
    time: "12:30 PM",
    venue: "सिंधु लॉन्स, देवदरी",
    address: "ता. संगमनेर, जि. अहमदनगर",
    mapLink: "https://maps.google.com/?q=Sindhu+Lawns+Devdari+Sangamner"
  },
  engagement: {
    date: "2026-05-02",
    time: "6:00 PM",
    venue: "विवाहस्थळी",
    address: "सिंधु लॉन्स, देवदरी, ता. संगमनेर, जि. अहमदनगर"
  },
  languages: {
    default: "mr",
    supported: ["en", "mr"]
  },
  contact: {
    email: "contact@wedding.com",
    phone: "+91 9876543210"
  },
  family: {
    invitingFamiliesGroom: [
      "सौ. कमल व श्री. मधुकर मुरलीधर बोंबले",
      "सौ. कौशल्य व श्री. वसंत मुरलीधर बोंबले",
      "सौ. सविता व श्री. सुधीर मधुकर बोंबले",
      "सौ. सुरेखा व श्री. संजय मधुकर बोंबले",
      "सौ. आशा व श्री. गोविंद विठोबा बोंबले",
      "सौ. विनीता व श्री. शिवाजी राजाराम बोंबले",
      "सौ. शारदा व श्री. रमेश बोंबले",
      "सौ. वैशाली व श्री. रामनाथ बोंबले"
    ],
    invitingFamiliesBride: [
      "सौ. मनीषा व श्री. सुनील वसंत बोंबले",
      "सौ. शर्मिला व श्री. निवृत्ती वसंत बोंबले",
      "सौ. हिरा व श्री. ज्ञानेश्वर सातपुते",
      "सौ. रोहिणी व श्री. रामानंद गोविंदराव पाटील",
      "सौ. शुभांगी व श्री. सतीश बाजीराव पाटील",
      "सौ. सुजाता व श्री. भगवान माधव बोंबले"
    ],
    mamas: [
      "श्री. दत्तात्रय तुकाराम शिरसाट",
      "श्री. राजाराम तुकाराम शिरसाट",
      "श्री. चंद्रभान तुकाराम शिरसाट",
      "श्री. माणिक तुकाराम शिरसाट",
      "श्री. दत्तात्रय सखाराम काटे",
      "श्री. सचिन सुधाकर पारसरे"
    ],
    atyaMama: [
      "सौ. उज्ज्वला व श्री. बाबाजी पांडुरंग वर्वे",
      "सौ. संध्या व श्री. शरद विश्वनाथ वर्वे"
    ],
    kaka: [
      "श्री. निवृत्ती संतोष पाटोळे",
      "श्री. निळकंठ वसंत पाटोळे"
    ],
    coordinators: [
      "डॉ. अरुण साबळकर",
      "डॉ. अभिजीत बोंबले",
      "श्री. सत्यदेव बाबाजी वर्वे",
      "श्री. हर्षवर्धन शरद वर्वे"
    ],
    welcomeTeam: [
      "चि. ओम सुधीर बोंबले",
      "कु. साक्षी सुनील बोंबले",
      "कु. ईशा संजय बोंबले",
      "कु. अक्षता सुनील बोंबले",
      "कु. सोहिनी संजय बोंबले",
      "कु. अन्वया निवृत्ती बोंबले"
    ],
    familyName: "समस्त बोंबले व नेहे पाटील परिवार"
  }
};