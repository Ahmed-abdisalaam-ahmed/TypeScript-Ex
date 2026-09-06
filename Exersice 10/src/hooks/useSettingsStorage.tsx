import { useEffect, useState } from "react"

function useSettingsStorage(key : string , initialValue: {language : string, notifications: boolean} ) : [{language: string, notifications : boolean} , (value : {language: string , notifications: boolean}) => void] {

  const [value, setValue] = useState(() => {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
  })

  useEffect(()=> {
    localStorage.setItem(key, JSON.stringify(value))
  },[key, value])

  return [value , setValue]

}

export default useSettingsStorage

