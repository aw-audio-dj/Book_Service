function makeTextSQLsaveLight(text)
{
  
    let text_ = text;
    try 
    {
        if( text && text != null && typeof text === "string" && text.length > 0 )
        {
            text_ = text.replace(/("|')/g, "`").replace(/(``)/g, "`")+"";
        }
    } 
    catch (error) {
        console.log(error); 
    }
    finally
    {
        return text_;
    }
}


module.exports = {
    makeTextSQLsaveLight
};
  
  