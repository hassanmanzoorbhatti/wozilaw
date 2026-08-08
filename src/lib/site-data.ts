export const FIRM = {
 name:'Wozi Law Firm', legalName:'Wozi Law Firm',
 description:'London-headquartered bilingual law firm specialising in cross-border disputes and transactions.',
 address:['London','United Kingdom'], office:'London, United Kingdom', officeTel:'', mobile:'', mobileTel:'', email:'', sra:'Authorised and regulated by the SRA', companyNumber:''
} as const;
export const NAV_LINKS=[
 {label:'Home',to:'/'},{label:'Expertise',to:'/coming-soon'},{label:'About',to:'/coming-soon'},{label:'Our People',to:'/coming-soon'},{label:'Insights',to:'/coming-soon'},{label:'Contact',to:'/coming-soon'}
] as const;
export const NETWORK_LOCATIONS=['Cross-Border Disputes','Cross-Border Transactions','Bilingual Advisory','English Law','Chinese Context','International Counsel'] as const;
export const STATS=[{number:'SRA',label:'Regulated Practice'},{number:'London',label:'Headquartered in the UK'},{number:'EN / 中文',label:'Bilingual Counsel'},{number:'Global',label:'Cross-Border Expertise'}] as const;
export const HERO_STATS=STATS;
