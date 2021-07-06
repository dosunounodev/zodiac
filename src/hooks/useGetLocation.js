import { useLocation } from 'react-router-dom'

export const useGetLocation = () => {
  const location = useLocation()

  switch (location.pathname.toLowerCase()) {
    case '/':
      return 'Bienvenidx'
    case '/zodiacapp':
      return 'Bienvenidx'
    case '/gender':
      return 'Tu Género'
    case '/dataform':
      return 'Tus Datos'
    case '/horoscope':
        return 'Tu Horóscopo'
    default:
      return 'NotFound'
  }
}