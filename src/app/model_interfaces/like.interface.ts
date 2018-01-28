import {IPost} from './IPost.interface';
import {IUser} from './IUser.interface';

export interface Like {
  id?: number;
  value?: number;
  post?: number;
  user?: number;
}
