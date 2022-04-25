export interface IAd {
  pictures: string[];
  subscribers: string[];
  posts: any [];
  _id: string;
  brand: string;
  model: string;
  price: number;
  currency:string;
  moreInfo:string;
  manifactureDate:Date,
  engineType:string,
  transmission:string,
  category:string,
  mileage:string,
  color:string,
  userId: {
    ads: string[],
    posts: string[],
    _id: string;
    telephone: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number
  },
  created_at: string;
  updatedAt: string;
  __v: number
  
}
