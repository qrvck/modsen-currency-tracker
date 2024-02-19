type IResponseData = IBankBranch[];

interface IBankBranch {
  bankId: string;
  availableCurrency: string;

  postalAddress: {
    buildingNumber: string;
    streetName: string;
    townName: string;

    geolocation: {
      latitude: number;
      longitude: number;
    };
  };
}

export type { IBankBranch, IResponseData };
