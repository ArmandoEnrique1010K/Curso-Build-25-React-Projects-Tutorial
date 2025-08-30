import { dummyApiResponse } from "../data/dummyApiResponse";

export function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
      if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 2000);
      else reject("Some error occured! Please try again");
    });
  }
  