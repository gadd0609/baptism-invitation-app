export default function useInfoComponent() {
  
  const phoneNumber = '3125937414' 
  const defaultMessage = 'Hola, vengo desde tu invitación. Confirmo asistencia con (cantidad de personas) personas.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`
  
  return {
    whatsappUrl
  }
}