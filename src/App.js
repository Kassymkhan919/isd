import logo from './logo.svg';
import './App.css';



function App() {
  // var width = document.getElementById('Width').value;
  // var height = document.getElementById('Height').value;
  function calculateArea() {
    var width = document.getElementById("Width").value;
    var height = document.getElementById("Height").value;
    return width * height;
  }

  function threeColumns(){
    return(
  
    
   <td>
   <tr>
     <th></th>
     <th>Width</th>
     <th>Height</th> 
     <th>Area</th>
   </tr>
   <tr>
     <td>
       
     </td>
     <td>
       <input type="text" id="Width" name="Width"/>
     </td>
     <td>
     <input type="text" id="Height" name="Height"/>
     </td>
     <td>
     <input type="text" id="Area" name="Area"/>
     </td>
   </tr>
   <tr>
     <td>Bypass</td>
     <td>
       <input type="text" id="Width" name="Width"/>
     </td>
     <td>
       <input type="text" id="Width" name="Width"/>
     </td>
     <td>
       <input type="text" id="Width" name="Width"/>
     </td>
   </tr>
   <tr>
     <td>Balcony</td>
     <td>
       <input type="text" id="Width" name="Width"/>
     </td>
     <td>
       <input type="text" id="Width" name="Width"/>
     </td>
     <td>
       <input type="text" id="Width" name="Width"/>
     </td>
   </tr>
   <tr>
   <tr>
     <td>Total Per Floor</td>
     
   </tr>
     {/* <td>
     <button onClick={() => alert(calculateArea())} ></button>
     </td> */}
     
     {/* <td>Jackson</td>
     <td>94</td>
   </tr>
   <tr>
     <td>John</td>
     <td>Doe</td>
     <td>80</td> */}
   </tr>
   </td>
    );
  };

  function singleTable(title) {
    return (
      <table>
  <th>{title}</th>
  <tr>
        {/* <table> */}
            <td>
            <div>{threeColumns()}</div>
            </td>

          {/* </table> */}

       
    </tr>
</table>
    );
  }

  return (
    <div className="App">
      <table >
        
          <tr>
            <th>Vision Glass Panel</th>
            <th>Bypass Spandrel Glass</th>
            <th>Vent</th>
          </tr>

        <tr>
        {/* <table> */}
            <td>
            <div>{threeColumns()}</div>
            </td>

          {/* </table> */}

          <td>
            <div>{threeColumns()}</div>
            </td>
        </tr>
        
   
          
          
  
</table>

<table>
  <th>
    Vent
  </th>
  <th>Bypass Spandrel Glass</th>
  {/* <tr>
    <td>
      <div>{threeColumns()}</div>
      </td>
  </tr> */}

  <tr>
        {/* <table> */}
            <td>
            <div>{threeColumns()}</div>
            </td>

          {/* </table> */}

          <td>
            <div>{threeColumns()}</div>
            </td>
        </tr>

</table>



 <div>{singleTable("Spandrel Glass Full")}</div>
 <div>{singleTable("Metal Panel")}</div>
 <div>{singleTable("Louvre")}</div>
    </div>
  );
}

export default App;
