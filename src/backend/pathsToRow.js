import { readFileSync } from 'fs'

export default paths => {
    return new Promise((resolve, reject) => {
        try {
            const rows = paths
                .map(path => readFileSync(path).toString('utf-8'))
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                .split('\n')
            resolve(rows)
        } catch(e) {
            reject(e)
        }
    })
}