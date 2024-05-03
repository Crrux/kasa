import './test.css'
import Collapsible from '../../components/Collapsible/Collapsible'

function Test() {
  return (
    <div>
      <Collapsible
        titre={'titre test'}
        text={['non', 'oui', '1', '2']}
      ></Collapsible>
    </div>
  )
}

export default Test
