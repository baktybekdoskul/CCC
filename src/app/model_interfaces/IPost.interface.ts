import {Like} from './like.interface';

export interface IPost{
  id?: number;
  title?: string;
  content?: string;
  authorId?: string;
  like?: Like;
  comments?: Comment[];
}
