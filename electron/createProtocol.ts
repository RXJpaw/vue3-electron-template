import { protocol } from 'electron'
import * as path from 'path'
import { readFile } from 'fs'
import { URL } from 'url'

export default (scheme: string, customProtocol?: Electron.Protocol): string => {
    (customProtocol || protocol).registerBufferProtocol(
        scheme,
        (request, respond) => {
            const pathName = decodeURI(new URL(request.url).pathname)
            const asarPath = path.resolve(__dirname, '..')

            readFile(path.join(asarPath, pathName), (_, data) => {
                const extension = path.extname(pathName).toLowerCase()
                let mimeType = ''

                if (extension === '.js') {
                    mimeType = 'text/javascript'
                } else if (extension === '.html') {
                    mimeType = 'text/html'
                } else if (extension === '.css') {
                    mimeType = 'text/css'
                } else if (extension === '.svg' || extension === '.svgz') {
                    mimeType = 'image/svg+xml'
                } else if (extension === '.json') {
                    mimeType = 'application/json'
                } else if (extension === '.wasm') {
                    mimeType = 'application/wasm'
                }

                respond({ mimeType, data })
            })
        }
    )

    return scheme
}