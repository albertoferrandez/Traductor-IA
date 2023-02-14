interface ILanguage {
  flag: string;
  language: string;
  tooltip: string;
}

export const languages: ILanguage[] = [
    { flag: "/images/spain.svg", language: "Spanish", tooltip: "ESPAÑOL" },
    { flag: "/images/port.svg", language: "Portuguese", tooltip: "PORTUGUÉS" },
    { flag: "/images/uk.svg", language: "English", tooltip: "INGLÉS" },
    { flag: "/images/france.svg", language: "French", tooltip: "FRANCÉS" },
    { flag: "/images/japan.svg", language: "Japanese", tooltip: "JAPONÉS" },
    { flag: "/images/germany.svg", language: "German", tooltip: "ALEMÁN" },
    { flag: "/images/arab.svg", language: "Arab", tooltip: "ÁRABE" },
    { flag: "/images/china.svg", language: "Chinese", tooltip: "CHINO" },
    { flag: "/images/india.svg", language: "Hindi", tooltip: "HINDI" },
    { flag: "/images/rusia.svg", language: "Russian", tooltip: "RUSO" },
  ];