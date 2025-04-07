import isMobile from 'ismobilejs'
import { makeObservable, observable } from 'mobx'

class AppStore {
  constructor() {
    makeObservable(this)
  }

  @observable isMobile: boolean = isMobile(window.navigator).any
}

const store = new AppStore()
export default store
