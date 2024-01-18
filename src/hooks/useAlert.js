import { useState } from 'react'

const useAlert = () => {

    const [alert,setAlert] = useState({show: false, text: '', type: 'danger' })

    const showAlert = ({text, type = 'danger'}) => setAlert({
        
    })
  return (
    <div>useAlert</div>
  )
}

export default useAlert