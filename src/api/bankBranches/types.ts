type IResponseData = BankBranch[];

interface BankBranch {
  bankId: string;
  availableCurrency: string;

  postalAddress: {
    buildingNumber: string;
    streetName: string;
    description: string | null;

    geolocation: {
      latitude: number;
      longitude: number;
    };
  };
}

export type { IResponseData };
