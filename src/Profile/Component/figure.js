import {Figure} from 'react-bootstrap'
import IHEB from "../../Profile/iheb.jpg"
function App() {

  return (
<div>
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="pic"
    src={IHEB}
  />
</Figure>
</div>
);
}

export default App;