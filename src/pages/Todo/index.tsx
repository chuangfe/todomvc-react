import { Observer } from 'mobx-react'

import useDidMount from '@src/hooks/useDidMount'
import TodoStore from '@src/stores/todo'


import styles from './styles.module.css'

const TodoPage = () => {
  console.log('# TodoPage.render')

  useDidMount(
    () => {
      console.log('[TodoPage] useDidMount')
    }
  )

  return (
    <div className={styles.page}>
      {/* <Observer>
        { () => TodoStore.root && (<Item data={TodoStore.root} />) }
      </Observer> */}
    </div>
  )
}

export default TodoPage
