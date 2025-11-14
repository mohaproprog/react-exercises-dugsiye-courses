import React, { useContext } from 'react'
import LanguageContext from './LanguageContext';


function LanguageChnage() {
    const language = useContext(LanguageContext);
    

  return (
    <div>
        {language === "English"? "Hello Welcome to my website": "Hola, ¿cómo estás? Espero que estés teniendo un buen día"}
    


    </div>
  )
}

export default LanguageChnage