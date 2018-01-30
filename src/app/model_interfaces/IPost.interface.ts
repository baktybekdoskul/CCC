import {Like} from './like.interface';
import {IUser} from './IUser.interface';

export interface IPost {
  id?: number;
  title?: string;
  content?: string;
  user?: IUser;
  likes?: Like[];
  comments?: Comment[];
  name?: string;
  surname?: string;
  createdAt?: Date;
  rating?: number;
  imgurl?: string;
  active?: boolean;
}
