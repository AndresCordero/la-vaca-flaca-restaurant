import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '/logo-vacaflaca.jpg'

const WhatsAppComponent = () => {
    return (
        <div>
                    <FloatingWhatsApp 
                    phoneNumber='50688020529' 
                    accountName={'Vaca Flaca'} 
                    statusMessage={'Typically replies within 10 minutes'} 
                    chatMessage={'Hola, bienvenido/a 🤝 Como podemos ayudarte?'} 
                    darkMode={true}
                    avatar={logo}
                    />
        </div>
    )
}

export default WhatsAppComponent