import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: IUser[], searchText: string): IUser[] {
    if(!users || !searchText)
      return users
    
    const searchString = searchText.toLowerCase() 
    return users.filter((user)=>{
      return (
        user.name.toLowerCase().includes(searchString) ||
        user.company.designation.toLowerCase().includes(searchString) ||
        user.company.name.toLowerCase().includes(searchString)
      )
    })
  }
}
