import got from 'got'
import { AlQuran, AlQuranSchema } from '../types/index.js'

export async function alquran (): Promise<AlQuran[]> {
  const data: AlQuran[] = await got(
    'https://raw.githubusercontent.com/DK3MK/quran-api/master/data/quran.json'
  ).json()
  return data.map(item => AlQuranSchema.parse(item))
}
