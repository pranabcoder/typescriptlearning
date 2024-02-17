/*
Example of Functional overloading
*/

type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    departingFrom: string;
    destination: string;
  };
  
  type Reserve = {
    (
      departureDate: Date,
      returnDate: Date,
      departingFrom: string,
      destination: string,
    ): Reservation | never;
    (
      departureDate: Date,
      departingFrom: string,
      destination: string,
    ): Reservation | never;
  };
  
  const reserve: Reserve = (
      departureDate: Date,
      returnDateOrDepartingFrom: Date | string,
      departingFromOrDestination: string,
      destination?: string,
  ) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
      // Book a round trip
      return {
        departureDate: departureDate,
        returnDate: returnDateOrDepartingFrom,
        departingFrom: departingFromOrDestination,
        destination: destination,
      };
    } else if (typeof returnDateOrDepartingFrom === 'string') {
      // Book a one way trip
      return {
        departureDate: departureDate,
        departingFrom: returnDateOrDepartingFrom,
        destination: departingFromOrDestination,
      };
    } else {
      throw new Error('Invalid overload');
    }
  };
  
  console.log(reserve(new Date(), new Date(), 'Mumbai', 'Delhi'));
  console.log(reserve(new Date(), 'Mumbai', 'Delhi'));
  
  