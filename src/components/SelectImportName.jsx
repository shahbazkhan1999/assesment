import BreakContainer from '../components/UIComponents/BreakContainer'
import '../App.scss'

export default function SelectImportName(){
    return(
        <>
    <div style={{marginBottom:'15px'}}>
    <select name="name" id="name" required>
      <option>Select Import Name:</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>
  <BreakContainer/>
        </>
    )
}