export interface FoundersInterface {
  foundersCollection: {
    items: FoundersDesc[];
  };
}

export interface FoundersDesc {
  name: string;
  position: string;
  description: string;
  profilePicture: {
    url: string;
  };
}

export interface AboutProps {
  founders: FoundersDesc[];
  aboutData: AboutPageQueryInterface["aboutPageInfoCollection"]["items"];
}

export interface AboutPageQueryInterface {
  aboutPageInfoCollection: {
    items: {
      aboutDescription: string;
      descriptionImg: {
        url: string;
      };
      backgroundImg: {
        url: string;
      };
      faqsCollection: {
        items: faqs[];
      };
    }[];
  };
}

export interface faqs {
  question: string;
  answer: string;
}
