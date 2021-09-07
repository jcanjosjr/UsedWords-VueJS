import { ipcMain } from 'electron';

const pathsToRows = require('./pathsToRow').default
const prepareData = require('./prepareData').default
const groupWords = require('./groupWords').default

ipcMain.on('process-subtitles', (event, paths) => {

    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => event.reply('process-subtitles', groupedWords))
})