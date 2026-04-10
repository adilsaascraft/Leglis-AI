// /data/news.ts

export type NewsItem = {
  id: string;
  title: string;
  desc: string;
  date: string;
  category: string;
  image: string;
  trending?: boolean;
  importance?: "high" | "medium" | "low";
};

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Supreme Court Rules on Privacy Rights",
    desc:
      "Landmark judgment affirming privacy as a fundamental right under Article 21 of the Indian Constitution.",
    date: "April 22, 2024",
    category: "Supreme Court",
    image: "/n1.jpg",
    trending: true,
    importance: "high",
  },

  {
    id: "2",
    title: "High Court Overturns Conviction",
    desc: "Conviction overturned due to lack of sufficient admissible evidence.",
    date: "April 18, 2024",
    category: "High Court",
    image: "/n2.jpg",
    importance: "medium",
  },

  {
    id: "3",
    title: "Legal Reforms Announced",
    desc:
      "The government has proposed major reforms in criminal law, including simplification of procedures and faster trial mechanisms.",
    date: "April 15, 2024",
    category: "Legal Update",
    image: "/n3.png",
    importance: "low",
  },

  {
    id: "4",
    title: "Cyber Law Strengthened",
    desc:
      "Government introduces stricter cybercrime regulations targeting data breaches, identity theft, and online financial fraud.",
    date: "April 10, 2024",
    category: "IT Law",
    image: "/n2.jpg",
    importance: "medium",
  },

  {
    id: "5",
    title: "New Bail Guidelines Issued",
    desc:
      "Supreme Court establishes uniform bail guidelines across all states to reduce judicial inconsistency and ensure faster justice delivery.",
    date: "April 5, 2024",
    category: "Criminal Law",
    image: "/n3.png",
    importance: "high",
  },

  {
    id: "6",
    title: "Consumer Law Update",
    desc: "New rules introduced for faster resolution of consumer complaints.",
    date: "April 1, 2024",
    category: "Consumer Law",
    image: "/n1.jpg",
    importance: "low",
  },

  // 🔥 SHORT NEWS (UI edge case testing)

  {
    id: "7",
    title: "Court Issues Stay Order",
    desc: "Stay granted.",
    date: "March 28, 2024",
    category: "High Court",
    image: "/n2.jpg",
    importance: "low",
  },

  {
    id: "8",
    title: "New FIR Guidelines Released",
    desc: "FIR filing process simplified nationwide.",
    date: "March 25, 2024",
    category: "Police Reform",
    image: "/n3.png",
    importance: "medium",
  },

  {
    id: "9",
    title: "Arbitration Case Concluded",
    desc: "Case resolved via arbitration.",
    date: "March 20, 2024",
    category: "Corporate Law",
    image: "/n1.jpg",
    importance: "low",
  },

  // 🔥 LONG NEWS (bento stress + overflow testing)

  {
    id: "10",
    title: "Historic Judgment on Digital Privacy and Surveillance Laws",
    desc:
      "In a landmark ruling, the Supreme Court of India examined the constitutional validity of mass surveillance mechanisms implemented under various national security frameworks. The court emphasized the importance of proportionality, necessity, and legality while handling citizen data. It further observed that unchecked surveillance may violate fundamental rights under Articles 14, 19, and 21. The judgment is expected to reshape India’s digital governance framework and enforce stricter oversight on intelligence gathering agencies.",
    date: "March 18, 2024",
    category: "Supreme Court",
    image: "/n2.jpg",
    trending: true,
    importance: "high",
  },

  {
    id: "11",
    title: "Major Corporate Law Dispute Between Tech Giants Reaches Final Hearing",
    desc:
      "A long-running intellectual property dispute between two leading multinational technology companies has reached its final hearing stage. The case involves allegations of proprietary algorithm misuse, breach of non-disclosure agreements, and unauthorized replication of AI-based predictive systems. The court examined technical expert reports, source code comparisons, and contractual obligations spanning multiple jurisdictions. The verdict is expected to set a precedent for future AI-related IP disputes in India.",
    date: "March 15, 2024",
    category: "Corporate Law",
    image: "/n3.png",
    importance: "high",
  },

  {
    id: "12",
    title: "New Environmental Compliance Rules Introduced for Industrial Units",
    desc:
      "The Ministry of Environment has introduced updated compliance regulations requiring industrial units to adopt stricter emission control systems, periodic environmental audits, and real-time pollution monitoring mechanisms. These rules aim to reduce air and water pollution levels in highly industrialized zones. Companies failing to comply may face heavy penalties, operational restrictions, or license suspension depending on severity of violations.",
    date: "March 10, 2024",
    category: "Environmental Law",
    image: "/n1.jpg",
    importance: "medium",
  },
];