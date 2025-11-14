import React, { useState } from 'react'
import LanguageContext from './LanguageContext'
import LanguageChnage from './LanguageChnage'

function App() {
  const [language,setLanguage] = useState("English");
  function switchLanguage(){
    language === "spanish"? setLanguage("english"): setLanguage("spanish");}
  return (
    <div>
      <button onClick={switchLanguage}>swith to {language === "English"? "spanish": "English"}</button>
      <LanguageContext.Provider value={language}>
        <LanguageChnage/>

      </LanguageContext.Provider>
      
    </div>
  )
}

export default App