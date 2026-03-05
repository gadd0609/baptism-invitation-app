export default function useInfoComponent() {
  const phoneNumber = '3121051182' 
  const defaultMessage = 'Hola, vengo desde tu invitación. Confirmo asistencia con 2 personas.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`
  
  return {
    whatsappUrl
  }
}