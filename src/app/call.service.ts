import { Call } from './call.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CallService {
  calls: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.calls = angularFire.database.list('calls');
  }

  getCalls(){
    return this.calls;
    
  }


}