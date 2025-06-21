
const App = () => {
  const outerBox={
    backgroundColor:"red",
    padding:'16px',
    borderRadius:'4px',
   display:"inline-block",
    textAlign:'center'


  }

  const middleBox={
    backgroundColor:"yellow",
    padding:"16px",
    borderRadius:'10px'

  }


  const innerBox={
   backgroundColor:"blue",
   padding:"l16px",
   borderRadius:'4px',
   textAlign:'center',

  }
  return (
    <>
    <div style={outerBox}>
      <div style={middleBox}>
        <div style={innerBox}>
          Cybrom Technology
        </div>
      </div>
    </div>
    </>
  )
}

export default App