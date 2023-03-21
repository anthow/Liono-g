import React from 'react'
import CookieConsent from 'react-cookie-consent'
import Cookies from 'js-cookie'

const Cookie = () => {
  const handleAccept = () => {
    console.log('Cookies acceptés')
  }

  const handleDecline = () => {
    console.log('Cookies refusés')
    Cookies.remove('myCookieName')
    if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/cookies/refused', null)
        // Envoyez une requête au serveur pour signaler le refus de cookies en utilisant la méthode navigator.sendBeacon()
      } else {
        // Si le navigateur ne prend pas en charge la méthode sendBeacon(), vous pouvez utiliser la méthode fetch() pour envoyer une requête
        fetch('/api/cookies/refused', { method: 'POST' })
      }
    // Ajoutez le code pour supprimer les cookies existants et bloquer la collecte des données
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="J'accepte"
      declineButtonText="Je refuse"
      cookieName="myCookieName"
      expires={150}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      Ce site utilise des cookies pour améliorer votre expérience utilisateur.
    </CookieConsent>
  )
}

export default Cookie
