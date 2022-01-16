function Birthday() {
    let Year = new Date().getFullYear() - 12
    
    return(
    <div> 
          <input type="date"
          className="birthday"
          
          min="1960-01-01"
          max={`${Year}-01-01`}
          />
    </div>
    )
}
export default Birthday;