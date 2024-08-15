import { Package } from "./package.ts";

export interface VPM {
  name: string
  id: string
  author: string
  url: string
  packages: {
    [Key: string]: {
      versions: {
        [Key: string]: VPMPackage
      }
    }
  }
}
export interface VPMPackage extends Package {
  url: string
  zipSHA256?: string
  /**
   * like VPM.url wtf
   */
  repo?: string
}