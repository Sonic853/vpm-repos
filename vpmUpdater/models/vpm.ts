import { Package, PackageAuthor } from "./package.ts";

export interface VPM {
  name: string
  id: string
  author: string
  authorInfo: PackageAuthor
  url: string
  description?: string
  infoLink?: VPMInfoLink
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
export interface VPMInfoLink {
  text: string
  url: string
}