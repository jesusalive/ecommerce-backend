import s3 from 's3'

const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_ACCESS_KEY,
    region: 'sa-east-1'
  }
})

export default client
