export class MiningProviderRouter {

  getProvider(country: string): string {

    switch (country.toLowerCase()) {

      case "south africa":
        return "DMRE";

      case "drc":
      case "democratic republic of congo":
        return "CAMI";

      case "sierra leone":
        return "National Minerals Agency";

      case "uganda":
        return "Directorate of Geological Survey and Mines";

      case "zambia":
        return "Ministry of Mines";

      case "botswana":
        return "Department of Mines";

      case "namibia":
        return "Ministry of Mines and Energy";

      case "ghana":
        return "Minerals Commission";

      case "tanzania":
        return "Mining Commission";

      case "senegal":
        return "Ministry of Mines and Geology";

      default:
        return "Government Mining Authority";

    }

  }

}

export const miningProviderRouter =
  new MiningProviderRouter();