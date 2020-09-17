import * as path from 'path'
import { STATIC_BASEURL } from '../../config';

export interface AudioSourceFile {
  id: string
  uri: string
}

export class AudioSourceProvider {

  async fetchIndex(){
    const response = await fetch(STATIC_BASEURL, {
      headers: [
        ['Accept', 'application/json']
      ]
    })
    const audioFiles:string[] = await response.json()
    return audioFiles.map((filename):AudioSourceFile => ({
      uri: `${STATIC_BASEURL}/${filename}`,
      id: path.basename(filename, path.extname(filename))
    }))
  }

}