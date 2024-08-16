export interface Package {
  id: string
  name: string
  version: string
  displayName: string
  description: string
  unity: string
  homepage?: string
  documentationUrl?: string
  changelogUrl?: string
  licensesUrl?: string
  license?: string
  keywords?: string[]
  author?: PackageAuthor | string
  hideInEditor?: boolean
  vrchatVersion?: string
  unityRelease?: string
  samples?: PackageSample[]
  localPath?: string
  dependencies?: {
    [Key: string]: string
  }
  gitDependencies?: {
    [Key: string]: string
  }
  vpmDependencies?: {
    [Key: string]: string
  }
  headers?: {
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
export interface PackageSample {
  displayName?: string
  description?: string
  path?: string
}
