export interface Package {
  name: string
  version: string
  displayName: string
  description: string
  unity: string
  documentationUrl?: string
  changelogUrl?: string
  licensesUrl?: string
  license?: string
  keywords?: string[]
  author?: PackageAuthor | string
  vpmDependencies?: {
    [Key: string]: string
  }
  legacyFolders?: {
    [Key: string]: string
  }
  legacyFiles?: {
    [Key: string]: string
  }
  legacyPackages?: {
    [Key: string]: string
  }
}
export interface PackageAuthor {
  name?: string
  email?: string
  url?: string
}
