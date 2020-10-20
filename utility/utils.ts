import _ from 'lodash'
import s3Client from '../services/s3'
import fs from 'fs'

export default {
  get (variable, path, defaultValue: any = false): any {
    return _.result(variable, path, defaultValue) || defaultValue
  },

  getTokenWithoutBearer (token = ''): string {
    return token.split(' ')[1]
  },

  uploadToStorage (fileName: string, imagePath: string, bucket: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const params = {
        localFile: imagePath,
        s3Params: {
          Bucket: bucket,
          Key: fileName,
          CacheControl: 'max-age=31536000',
          ACL: 'public-read'
        }
      }

      const uploader = s3Client.uploadFile(params)

      uploader.on('error', function (err) {
        reject(err)
      })

      uploader.on('end', function () {
        resolve()
      })
    })
  },

  removeImageFromDisk (localPath: string): void {
    try {
      // file removed
      fs.unlinkSync(localPath)
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
