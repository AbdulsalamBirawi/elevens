export type contactUsInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};
export type apartmentProps = {
  id?: number;
  title?: string;
  desc?: string;
  price?: string;
  bedRooms?: string;
  baths?: string;
  space?: string;
  publishedAt?: string;
  rented?: boolean;
  category?: string;
};
export type media = { name: string; filePath: string }[] | undefined;

export type apartment = {
  media: media;
  apartments: apartmentProps | undefined;
};
export type apartments = apartment[];

export type Singleapartment = {
  apartment: apartment & {
    amenitie: { id: number; title: string }[];
  };
  media: media;
};
