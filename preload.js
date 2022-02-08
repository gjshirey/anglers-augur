// preload.js
const { ipcRenderer, contextBridge} = require('electron')

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('minimize-btn').addEventListener('click', () => {
    ipcRenderer.invoke('minimize')
  })
  document.getElementById('close-btn').addEventListener('click', () => {
    ipcRenderer.invoke('close')
  })
  document.getElementById('reload-btn').addEventListener('click', () => {
    ipcRenderer.invoke('reload')
  })
  if(document.getElementById('loc').innerText == 'undefined'){
    ipcRenderer.invoke('reload')
  }
})
