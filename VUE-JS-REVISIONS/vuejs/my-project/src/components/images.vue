<template>
  <div id="file-upload">
    <input type="file" @change="onFileChange" />
    <button @click="onUploadFile" id="upload-button"
    :disabled="!this.selectedFile.size">Upload file</button>
  <div>
    <h5>{{message}}</h5>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      selectedFile: '',
      message: ''
    }
  },
  methods: {
    onFileChange (e) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
      const selectedFile = e.target.files[0] // accessing file
      this.selectedFile = selectedFile
      if (!allowedTypes.includes(selectedFile.type)) {
        this.message = ' Only images are allowed !!'
      }
      if (selectedFile.size > 500000) {
        this.message = ' Too large, max size allowed is 500KB'
      }
    },
    onUploadFile () {
      const formData = new FormData()
      formData.append('file', this.selectedFile) // appending file

      // sending file to the backend
      axios
        .post('http://localhost:5000/upload', formData)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>

#file-upload {
  box-shadow: 2px 2px 9px 2px #ccc;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  width: 60%;
  margin: 0 auto;
}

input {
  font-size: 0.9rem;
}

input,
div,
button {
  margin-top: 2rem;
}

#upload-button {
  width: 7rem;
  padding: 0.5rem;
  background-color: #278be9;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 1rem;
}

#upload-button:disabled {
  background-color: #b3bcc4;
  cursor: no-drop;
}
</style>
