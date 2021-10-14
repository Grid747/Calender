const ProgressBar = ({completed, bgcolor}) => {
    const containerStyles = {
      height: 20,
      width: "80%",
      backgroundColor: "gray",
      borderRadius: 50,
      marginTop: 15,
      marginLeft: 20
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'center'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'black',
      fontWeight: 'bold',
    }       
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  