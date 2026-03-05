import { ref } from 'vue'

export default function useFiances() {
  const photos = ref([
    { src: '/photos/asset.png', alt: 'Foto Mariel 1' },
    { src: '/photos/asset.png', alt: 'Foto Mariel 2' },
    { src: '/photos/asset.png', alt: 'Foto Mariel 3' },
    { src: '/photos/asset.png', alt: 'Foto Mariel 4' },
    { src: '/photos/asset.png', alt: 'Foto Mariel 5' },
    { src: '/photos/asset.png', alt: 'Foto Mariel 6' },
  ])

  const showDialog = ref(false)
  const selectedPhoto = ref({})

  function openDialog(photo) {
    selectedPhoto.value = photo
    showDialog.value = true
  }
  function closeDialog() {
    showDialog.value = false
    selectedPhoto.value = {}
  }

  return {
    photos,
    showDialog,
    selectedPhoto,
    openDialog,
    closeDialog
  }
}