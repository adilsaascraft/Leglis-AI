// 📁 /data/cases.ts

export type CaseStudy = {
  id: string;
  title: string;
  court: string;
  year: string;
  category: string;
  summary: string;
  judgement: string;
  outcome: string;
  importance: "high" | "medium" | "low";
};

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "State vs Mohan Kumar",
    court: "Supreme Court of India",
    year: "2022",
    category: "Criminal",
    summary:
      "A complex multi-state financial fraud involving forged government procurement documents, shell companies, and illegal diversion of public funds across multiple banking channels over several years.",
    judgement:
      "The Supreme Court upheld conviction based on extensive forensic accounting reports, digital evidence trails, and corroborated witness testimonies from multiple states.",
    outcome: "7 years rigorous imprisonment with fine",
    importance: "high",
  },

  {
    id: "2",
    title: "ABC Pvt Ltd vs XYZ Corp",
    court: "Delhi High Court",
    year: "2021",
    category: "Corporate",
    summary:
      "A contractual dispute arising from delayed delivery of enterprise software services and alleged breach of SLA commitments between two major IT firms.",
    judgement:
      "Court found partial breach of contract and ordered compensation after evaluating service logs and contractual obligations.",
    outcome: "₹50,00,000 compensation",
    importance: "medium",
  },

  {
    id: "3",
    title: "Ravi Sharma vs State",
    court: "High Court of Karnataka",
    year: "2020",
    category: "Criminal",
    summary:
      "Bail application filed in an alleged fraud case where prosecution evidence was circumstantial and lacked direct financial linkage.",
    judgement:
      "Bail granted considering weak prima facie evidence and prolonged pre-trial custody.",
    outcome: "Bail Granted",
    importance: "low",
  },

  {
    id: "4",
    title: "Meera Iyer vs Union of India",
    court: "Supreme Court of India",
    year: "2023",
    category: "Constitutional",
    summary:
      "Challenge to digital privacy norms and surveillance provisions under newly implemented data governance framework affecting citizen metadata collection.",
    judgement:
      "Court emphasized proportionality doctrine and strengthened citizen privacy safeguards under constitutional rights.",
    outcome: "Partially struck down provisions",
    importance: "high",
  },

  {
    id: "5",
    title: "State Bank vs Arvind Traders",
    court: "Madras High Court",
    year: "2019",
    category: "Banking",
    summary:
      "Loan default case involving non-repayment of MSME credit facility due to alleged business disruption and cash flow issues.",
    judgement:
      "Court ruled in favor of the bank and ordered asset recovery proceedings.",
    outcome: "Recovery order issued",
    importance: "medium",
  },

  {
    id: "6",
    title: "Neha Kapoor vs City Municipal Corporation",
    court: "Delhi High Court",
    year: "2022",
    category: "Civil",
    summary:
      "Dispute regarding illegal demolition of residential property without proper notice under municipal regulations.",
    judgement:
      "Court held municipal authority liable for procedural violation.",
    outcome: "Compensation awarded",
    importance: "high",
  },

  {
    id: "7",
    title: "IT Dept vs Global Exports Ltd",
    court: "Income Tax Appellate Tribunal",
    year: "2021",
    category: "Taxation",
    summary:
      "Dispute over alleged tax evasion through offshore accounts and incorrect reporting of export revenues.",
    judgement:
      "Partial penalty upheld after reconciliation of financial statements.",
    outcome: "Penalty reduced",
    importance: "medium",
  },

  {
    id: "8",
    title: "Suresh Babu vs State",
    court: "District Court",
    year: "2018",
    category: "Criminal",
    summary:
      "Minor theft case involving circumstantial CCTV footage and witness inconsistencies.",
    judgement:
      "Accused acquitted due to lack of conclusive evidence.",
    outcome: "Acquitted",
    importance: "low",
  },

  {
    id: "9",
    title: "TechNova vs Alpha Systems",
    court: "Bombay High Court",
    year: "2023",
    category: "IPR",
    summary:
      "Intellectual property dispute over software code similarity and alleged patent infringement in AI-based automation tools.",
    judgement:
      "Court issued interim injunction restricting product deployment pending final trial.",
    outcome: "Interim injunction granted",
    importance: "high",
  },

  {
    id: "10",
    title: "Priya Menon vs State Education Board",
    court: "Kerala High Court",
    year: "2020",
    category: "Education",
    summary:
      "Challenge against unfair evaluation in competitive examination and alleged grading inconsistencies affecting merit ranking.",
    judgement:
      "Re-evaluation ordered with independent committee review.",
    outcome: "Re-evaluation granted",
    importance: "low",
  },
];