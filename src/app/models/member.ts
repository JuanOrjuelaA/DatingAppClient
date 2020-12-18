import { Photo } from './photo';

export interface Member {
    id: number;
    userName: string;
    photUrl: string;
    dateOfBirth: string;
    knownAs: string;
    created: string;
    lastActive: string;
    gender: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    age: number;
    photos: Photo[];
  }
