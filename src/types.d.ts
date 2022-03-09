interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  store: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IAuthUser {
  name: string;
  email: string;
  id: string;
  role: string;
  status: string;
  token: string;
}
