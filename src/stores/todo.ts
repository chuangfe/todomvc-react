import { action, makeObservable, observable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class TodoStore {
  constructor() {
    makeObservable(this)

    // makePersistable(this, {
    //   name: 'TodoStore',
    //   properties: [
    //     {
    //       key: 'root',
    //       serialize: (r) => r ? r.serialize() : null,
    //       deserialize: (r) => r ? factory(r) as Group : null
    //     }
    //   ],
    //   storage: localStorage
    // })
  }

  // @observable root: Group | null = null

  // @action setRoot = (root: Group | null) => {
  //   this.root = root
  // }
}

const store = new TodoStore()
export default store
