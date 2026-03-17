import { ref } from 'vue'

export default function useGallery() {
  const photos = ref([
    { src: '/photos/photoGallery01.jpg', alt: 'Foto Mariel 1' },
    { src: '/photos/photoGallery02.jpg', alt: 'Foto Mariel 2' },
    { src: '/photos/photoGallery03.jpg', alt: 'Foto Mariel 3' },
    { src: '/photos/photoGallery04.jpg', alt: 'Foto Mariel 4' },
    { src: '/photos/photoGallery05.jpg', alt: 'Foto Mariel 5' },
    { src: '/photos/photoGallery06.jpg', alt: 'Foto Mariel 6' },
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
    photos,
    openDialog,
    closeDialog
  }
}
