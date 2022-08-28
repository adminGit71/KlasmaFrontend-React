export interface IPropsOfSectionTitle {
  title: string;
  description?: string;
}

export interface IInvestDataItem {
  title: string;
  goal: number;
  raised: number;
  thumbnail: string;
}

export interface IPropsOfInvestCard {
  key?: number;
  dataItem: IInvestDataItem;
}

export interface ISxProps {
  sx?: any;
}

export interface IGrowData {
  title: string;
  description: string;
  image: string;
}

export interface IRentData {
  name: string;
  icon: string;
}

export interface ILearnMoreData {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
}

export interface ITeammateData {
  name: string;
  position: string;
  avatar: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  [key: string]: any;
}

export interface IAlertMessage {
  severity: string;
  message: string;
}

export interface ISigninData {
  email: string;
  password: string;
}

export interface IFile {
  path: string;
  size: string | number;
  [key: string]: any;
}
